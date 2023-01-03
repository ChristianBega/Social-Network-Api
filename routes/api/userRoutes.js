// require in router
const router = require("express").Router();

// destructuring userConnection controllers
//, updateUser
// updateUser,
//   deleteUser,

const { getUsers, getSingleUser, createUser, deleteUser, addFriend, removeFriend } = require("../../controllers/userController");

// Creating routes using controllers

// http://localhost:3001/api/users - GET or POST
router.route("/").get(getUsers).post(createUser);

// http://localhost:3001/api/users/:_id - GET or PUT or DELETE by _id
// .put(updateUser)
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// http://localhost:3001/api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").put(addFriend).delete(removeFriend);
// Export router
module.exports = router;
