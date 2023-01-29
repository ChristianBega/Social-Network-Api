const { Thought, User } = require("../models");

module.exports = {
  getThought(req, res) {
    Thought.find()
      .select("-__v")
      .populate("reactions")
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .populate("reactions")
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought with that ID" }) : res.json(thought)))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        User.findOneAndUpdate({ userName: req.body.userName }, { $push: { thoughts: thought._id } }).then((thought) => {
          res.json(thought);
        });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: "There is no thought with this id!" });
        }
        res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thought found with that ID" })
          : User.findOneAndUpdate({ username: user.username }, { $pull: { thoughts: user._id } })
      )
      .then(() => res.json({ message: "Thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  createReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: req.body } })
      .then((thought) => {
        if (!thought) {
          return res.status(400).json({ message: "No thought with this id" });
        }
        res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { _id: req.params.reactionId } } })
      .then((thought) => {
        if (!thought) {
          return res.status(400).json({ message: "No thought with this id" });
        }
        res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
