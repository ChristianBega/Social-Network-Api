// require in router
const router = require("express").Router();

// destructuring userConnection controllers
//, updateUser
const { getUsers, getSingleUser, createUser, deleteUser } = require("../../controllers/userController");

// Creating routes using controllers

// http://localhost:3001/api/users - GET or POST
router.route("/").get(getUsers).post(createUser);

// http://localhost:3001/api/users/:_id - GET or PUT or DELETE by _id
// .put(updateUser)
router.route("/:_id").get(getSingleUser).delete(deleteUser);

// http://localhost:3001/api/users/:userId/friends/:friendId

// Export router
module.exports = router;
