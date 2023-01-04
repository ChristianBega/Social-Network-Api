// require in router
const router = require("express").Router();

const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require("../../controllers/userController");

// Creating routes using controllers

// http://localhost:3001/api/users - GET or POST
router.route("/").get(getUsers).post(createUser);

// http://localhost:3001/api/users/:_id - GET or PUT or DELETE by _id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// http://localhost:3001/api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").put(addFriend).delete(removeFriend);
// Export router
module.exports = router;
