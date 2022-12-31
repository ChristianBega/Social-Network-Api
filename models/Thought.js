//require in mongoose
const { Schema, model } = require("mongoose");
const reaction = require("./Reaction");

// create new thoughtSchema with the values :
const thoughtSchema = new schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //getter method ??
      get: (time) => formatDate(time),
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// 1. thoughtText - string, required, must be between 1-280 chars
// 2. createdAt - date, set default value to current timestamp, getter method to format timestamp on query
// 3. username (user that created the thought) - string, required

// Schema settings -
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
