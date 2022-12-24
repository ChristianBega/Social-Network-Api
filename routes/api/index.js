//require in router
//require in user & thoughts routes

//set prefixes for /api/user & /api/thoughts
//create route...

//export routes
const router = require("express").Router();
const thoughtRoutes = require("./thoughtsRoutes");
const userRoutes = require("./userRoutes");

router.use("/thought", thoughtRoutes);
router.use("/user", userRoutes);

module.exports = router;
