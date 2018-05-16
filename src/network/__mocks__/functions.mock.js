export const findUser = function(users, credentials) {
  return users.find(function(element, index, arry) {
    return element.Email == credentials.Email && element.Password == credentials.Password;
  });
};
