// require in router
const router = require("express").Router();

// destructure controllers and use the ones needed
const {
  //getUsers
  //getSingleUser
  //createUser
  //updateUser
  //deleteUserById
} = require("../../controllers/userConnection");

// Create routes needed using controllers
router.route("/").get(getUsers).post(createUser);

// Export router
module.exports = router;


