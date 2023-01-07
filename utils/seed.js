// Require in connection
const connection = require("../config/connection");
// require in models and destructure models
const { User, Thought } = require("../models");
const { userData, thoughtData } = require("./data");

// Start the seeding runtime  timer
console.time("seeding");
// connection.on - will check for error each time a connection is attempted?
connection.on("error", (err) => err);
connection.once("open", async () => {
  console.log("connected");
  // Drop any users
  await User.deleteMany({});
  await Thought.deleteMany({});
  // await Reaction.deleteMany({});
  await User.collection.insertMany(userData);
  await Thought.collection.insertMany(thoughtData);
  process.exit(0);
});

//connection.on - https://mongoosejs.com/docs/connections.html
//connection.once -
// on vs once - when you use 'once' it signifies that the event will be called only once i.e the first time the event occurred like here in this case the first time when the connection is opened ,it will not occur once per request but rather once when the mongoose connection is made with the db while the 'on' signifies the event will be called every time that it occurred
