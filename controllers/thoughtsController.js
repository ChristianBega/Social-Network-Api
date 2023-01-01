// Require in thoughts model

// module export out route controllers
// 1. GET all thoughts from db
// 2. GET a single thought from db by ID
// 2. POST (create) thoughts to db
// 3. PUT (update) thoughts from db by ID
// 4. DELETE (remove) thoughts from db by ID

const Thought = require("../models/thought");

module.exports = {
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.ID }); //pass in {id : req.params.thoughtId}, {}}
    //.then
    //.catch
  },
  createThought(req, res) {
    Thought.create(req.body);
    //.then
    //.catch
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate({}); // pass in
  },
  deleteThought(req, res) {
    Thought.findOneAndRemove({}); //pass in id req.params.userId
  },
};
