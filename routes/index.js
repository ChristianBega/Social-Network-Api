//require in router

//set prefixes for /api routes
//create route...

//export routes

const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send("Wrong route!");
});

module.exports = router;
