// require in router
const router = require("express").Router();

// destructuring userConnection controllers
//  updateUser, deleteUser
const { getUsers, getSingleUser, createUser } = require("../../controllers/userController");

// Creating routes using controllers

// http://localhost:3001/api/users - GET or POST
router.route("/").get(getUsers).post(createUser);

// http://localhost:3001/api/users/:_id - GET or PUT or DELETE by _id
// .put(updateUser).delete(deleteUser);
router.route("/:_id").get(getSingleUser);

// http://localhost:3001/api/users/:_id/thoughts/:_id

// Export router
module.exports = router;
