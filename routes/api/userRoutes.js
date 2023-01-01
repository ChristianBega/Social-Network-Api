// require in router
const router = require("express").Router();

// destructuring userConnection controllers
const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require("../../controllers/userConnection");

// Creating routes using controllers

// http://localhost:3001/api/users - GET or POST
router.route("/").get(getUsers).post(createUser);

// http://localhost:3001/api/users/:_id - GET or PUT or DELETE by _id
router.route("/:_id").get(getSingleUser).put(updateUser).delete(deleteUser);

// http://localhost:3001/api/users/:_id/thoughts/:_id

// Export router
module.exports = router;
