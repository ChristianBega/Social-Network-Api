const { Thought, User } = require("../models");

module.exports = {
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params._id })
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought with that ID" }) : res.json(thought)))
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Post route notes ::
  //To create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

  // createThought(req, res) {
  //   Thought.create(req.body)
  //     .then((thought) => res.status(201).json(thought))
  //     .catch((err) => {
  //       res.status(400).json({ message: err.message });
  //     });
  // },

  // updateThought(req, res) {
  //   Thought.findOneAndUpdate({}); // pass in
  // },
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params._id })
      .then((thought) =>
        !thought ? res.status(404).json({ message: "No Thought found with that ID" }) : Thought.deleteMany({ _id: { $in: thought.thoughts } })
      )
      .then(() => res.json({ message: "Thought deleted" }))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
};
