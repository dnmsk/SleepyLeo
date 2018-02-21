export const mockDetails = jest.fn();
export const mockGetToken = jest.fn();

let user = {
  details: mockDetails
};
Object.defineProperty(user, 'token', {
  get: jest.fn(() => {
    return new Promise((accept, reject) => {
      return accept(mockGetToken());
    })
  }),
  set: jest.fn()
});
export default user;
