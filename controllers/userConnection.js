const User = require("../models/User");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) => (!user ? res.status(404).json({ message: "No user with that ID" }) : res.json(user)))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.status(201).json(user))
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate({}); // pass in
  },
  deleteUser(req, res) {
    User.findOneAndRemove({}); //pass in id req.params.userId
  },
};
