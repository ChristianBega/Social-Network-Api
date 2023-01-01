// const { User, Thought } = require("../models");
const { User, Thought } = require("../models");

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
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => (!user ? res.status(404).json({ message: "No User found with that ID" }) : Thought.deleteMany({ _id: { $in: user.thoughts } })))
      .then(() => res.json({ message: "User and Thoughts deleted" }))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
};
