<<<<<<< HEAD
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// const cwd = process.cwd();

const PORT = 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// const activity = cwd.includes("01-Activities") ? cwd.split("/01-Activities/")[1] : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
=======
// Require in express
// Require in config/connection
// Require in routes

// cwd - process.cwd???

//PORT
//app = express ()
>>>>>>> 23fcc3453a13ffedd63324ba9d9b5f80e267692c
