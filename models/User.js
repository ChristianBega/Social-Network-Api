//require in mongoose
const { Schema, model } = require("mongoose");

// create new userSchema with the values :
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      require: true,
      trimmed: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      // validate : ?
      // match : ?
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtual: true,
      // getters: true,
    },
    id: false,
  }
);

// Schema settings -
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// .set(function (count) {
//   this.set(count);
// });

const User = model("user", userSchema);
module.exports = User;
// Matching validation - https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
