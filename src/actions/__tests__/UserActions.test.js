import { DEFAULT, USER_LOGIN, USER_REGISTER, USER_LOGOUT } from '~/const/actions';

jest.mock('../../network/index');

import * as actions from '../UserActions';

describe('logoutUser', () => {
  it('success', async () => {
    expect.assertions(1);
    expect(await actions.logoutUser()).toEqual({
      payload: {},
      type: USER_LOGOUT
    });
  });
});

describe('loginUser', () => {
  set('email', () => 'test_4@test.ru');
  set('password', () => 'test_4');
  set('subj', () => async () =>
    actions.loginUser({
      Email: email,
      Password: password
    })
  )

  it('success', async () => {
    expect.assertions(1);
    expect(await subj()).toEqual({
      payload: {
        id: 4,
        Email: email,
        Password: password,
        ChildBirthday: '2017-06-06',
        token: 'AAAAAA',
        name: email
      },
      type: USER_LOGIN
    });
  });
  describe('wrong credentials', () => {
    set('email', () => 'test_123@test.ru');

    it('', async () => {
      expect.assertions(1);
      expect(await subj()).toEqual({
        payload: {
          message: 'Could not create token'
        },
        type: DEFAULT
      });
    });
  });
});

describe('registerUser', () => {
  set('email', () => 'new_test_4@test.ru');
  set('password', () => 'test_4');
  set('ChildBirthday', () => 'ChildBirthday');

  set('subj', () => async () =>
    actions.registerUser({
      Email: email,
      Password: password,
      ChildBirthday: ChildBirthday
    })
  );

  it('success', async () => {
    expect.assertions(1);
    expect(await subj()).toEqual({
      payload: {
        id: -1,
        Email: email,
        Password: password,
        ChildBirthday: ChildBirthday,
        token: 'CCCCCC',
        name: email
      },
      type: USER_REGISTER
    });
  });

  describe('wrong', () => {
    set('email', () => 'test_4@test.ru');

    it('', async () => {
      expect.assertions(1);
      expect(await subj()).toEqual({
        payload: {
          message: 'Registration failed'
        },
        type: DEFAULT
      });
    });
  });
})
