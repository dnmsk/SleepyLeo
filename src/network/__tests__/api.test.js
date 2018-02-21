import Config from '../config';
import api from '../api';
import user, { mockGetToken } from '../../utils/user';

jest.mock('../../utils/user');

const target = 'http://test.ru';
const apiResponse = { data: '12345' };
let headers;

beforeEach(() => {
  mockGetToken.mockClear();

  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  global.fetch = jest.fn().mockImplementation(() => {
    const response = {
      json: jest.fn().mockImplementation(() => {
        return apiResponse;
      })
    };
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  });
});

describe('authorized user with requestData', () => {
  let requestData = { test: 'call' };
  let token = 'test_token';
  let verb = 'PUT';

  mockGetToken
    .mockReturnValueOnce(token);

  it('test', async () => {
    let result = await api(target, requestData, verb);

    headers['Authorization'] = 'Bearer ' + token;

    const params = {
      method: verb,
      body: JSON.stringify(requestData),
      headers
    };

    expect.assertions(2);
    expect(global.fetch).toBeCalledWith(Config.Endpoint + target, params);
    expect(result).toEqual(apiResponse);
  });

});

describe('unauthorized user', () => {
  let verb = 'DELETE';

  it('test', async () => {
    let result = await api(target, undefined, verb);

    const params = {
      method: verb,
      headers
    };

    expect.assertions(2);
    expect(global.fetch).toBeCalledWith(Config.Endpoint + target, params);
    expect(result).toEqual(apiResponse);
  });
});
