// require in mongoose
// set up connection to db
// export connection
const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialNetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
