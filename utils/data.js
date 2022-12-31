// Create variables to store data as objects
// userInfo {} - userName, email, thoughts, friends, virtual : friendCount
const userData = [
  {
    userName: "Chris",
    email: "Chris@gmail.com",
    thoughts: ["strings of text 1", "strings of text 2"],
  },
];
// thought {} - thoughtText, createdAt, userName (creator of thought)
// Reaction {} - reactionId, reactionBody, userName, createdAt

// export out data
// userData, thoughtData, ReactionData

module.exports = { userData };
