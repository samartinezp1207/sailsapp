const users = require('../services/user');

module.exports = {
  getUsers: function(req, res) {
      return res.json({ users: users.getAll() });
  }
};
