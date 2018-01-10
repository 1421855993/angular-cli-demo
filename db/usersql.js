var UserSQL = {
  insert:'INSERT INTO User(name) VALUES(?)',
  queryAll:'SELECT * FROM User LIMIT ?,?',
  count:'select count(1) as count from user',
  getUserById:'SELECT * FROM User WHERE uid = ? ',
};
module.exports = UserSQL;
