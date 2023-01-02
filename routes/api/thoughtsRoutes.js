// require in router
const router = require("express").Router();

// destructure controllers and use the ones needed
// updateThought,
const { getThought, getSingleThought, createThought, deleteThought } = require("../../controllers/thoughtsController");

// Create routes needed using controllers

// http://localhost:3001/api/thoughts - GET or POST
router.route("/").get(getThought).post(createThought);

// http://localhost:3001/api/thoughts/:_id - GET or PUT or DELETE by _id
// .put(updateThought)
router.route("/:_id").get(getSingleThought).delete(deleteThought);

// http://localhost:3001/api/thoughts/:thoughtId/reactions
// Export router
module.exports = router;
