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

// http://localhost:3001/api/thoughts/:thoughtId - GET or PUT or DELETE by thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// http://localhost:3001/api/thoughts/:thoughtId/reactions/ - POST by thoughtId
router.route("/:thoughtId/reactions/").post(createReaction);

// http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId - DELETE by thoughtId & reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
