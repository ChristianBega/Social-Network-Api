
const User = require("../models/User");

module.exports = {
  getUsers(req, res) {
    User.find();
    //.then
    //.catch
  },
  getSingleUser(req, res) {
    User.findOne({}); //pass in {id : req.params.userId}, {}}
    //.then
    //.catch
  },
  createUser(req, res) {
    User.create(req.body);
    //.then
    //.catch
  },
  updateUser(req, res) {
    User.findOneAndUpdate({}); // pass in 

  },
  deleteUser(req, res) {
    User.findOneAndRemove({}); //pass in id req.params.userId
  },
};
