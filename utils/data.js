// Create variables to store data as objects
// userInfo {} - userName, email, thoughts, friends, virtual : friendCount
const userData = [
  {
    userName: "Chris",
    email: "Chris@gmail.com",
    thoughts: ["string of text 1", "string of text 2"],
    friends: ["John", "Friend 2", "Friend 3"],
  },
  {
    userName: "John",
    email: "John@gmail.com",
    thoughts: ["string of text 1", "string of text 2"],
    friends: ["Chris", "Friend 2", "Friend 3"],
  },
];
// thought {} - thoughtText, createdAt, userName (creator of thought)
// Reaction {} - reactionId, reactionBody, userName, createdAt

// export out data
// userData, thoughtData, ReactionData

module.exports = { userData };
