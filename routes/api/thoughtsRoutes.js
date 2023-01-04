// require in router
const router = require("express").Router();

// destructure controllers and use the ones needed
// updateThought,
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtsController");

// Create routes needed using controllers

// http://localhost:3001/api/thoughts - GET or POST
router.route("/").get(getThought).post(createThought);

// http://localhost:3001/api/thoughts/:thoughtId - GET or PUT or DELETE by _id
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// http://localhost:3001/api/thoughts/:thoughtId/reactions/
router.route("/:thoughtId/reactions/:reactionId").post(createReaction);

// http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
