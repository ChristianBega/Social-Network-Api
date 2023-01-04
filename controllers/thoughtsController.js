const { Thought, User } = require("../models");

module.exports = {
  getThought(req, res) {
    Thought.find()
      .select("-__v")
      // .populate("")
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
        User.findOneAndUpdate({ userName: req.body.userName }, { $push: { thoughts: thought._id } }).then((user) => {
          res.json(thought);
        });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
    // Post route notes ::
    //To create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
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
  createReaction(req, res) {},
  deleteReaction(req, res) {},
};

// https://github.com/Makispear/Social-Network-API/blob/main/controllers/thought-controller.js
