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
  {
    userName: "Sam",
    email: "Sam@gmail.com",
    thoughts: ["string of text 1", "string of text 2"],
    friends: ["Julian", "Chris", "John"],
  },
  {
    userName: "Julian",
    email: "Julian@gmail.com",
    thoughts: ["string of text 1", "string of text 2"],
    friends: ["Chris", "Sam", "Friend 3"],
  },
  {
    userName: "Sarah",
    email: "Sarah@gmail.com",
    thoughts: ["string of text 1", "string of text 2"],
    friends: ["John", "Sam", "Julian", "Chris"],
  },
];
// thought {} - thoughtText, createdAt, userName (creator of thought)
// thought > Reaction {} - reactionId, reactionBody, userName, createdAt
const thoughtData = [
  {
    thoughtText: "Just a random thought about nothing.",
    //creator of thought
    userName: "Chris",
    reactions: [
      {
        reactionBody: "Wow that was very insightful information about nothing.",
        userName: "john",
      },
    ],
  },
  {
    thoughtText: "Wow just another random thought about nothing.",
    //creator of thought
    userName: "John",
    reactions: [
      {
        reactionBody: "Wow that was very insightful information about nothing.",
        userName: "Chris",
      },
    ],
  },
  {
    thoughtText: "Would you look at that, just another random thought about nothing.",
    //creator of thought
    userName: "Sam",
    reactions: [
      {
        reactionBody: "That is a very interesting view you have on nothing",
        userName: "Julian",
      },
    ],
  },
  {
    thoughtText: "Wow!!!!! Look at that, just another random thought about nothing.",
    //creator of thought
    userName: "Julian",
    reactions: [
      {
        reactionBody: "I can defiantly agree with you thought about nothing.",
        userName: "Sam",
      },
    ],
  },
  {
    thoughtText: "I've got nothing more to say about nothing",
    //creator of thought
    userName: "Julian",
    reactions: [
      {
        reactionBody: "Yeah me either, nothing is just nothing.",
        userName: "John",
      },
      {
        reactionBody: "Yep I'm all out of nothing",
        userName: "Sam",
      },
      {
        reactionBody: "Finally someone says it, theres nothing more to say about nothing.",
        userName: "Julian",
      },
      {
        reactionBody: "I might have one more thing to say about nothing....... nothing :D",
        userName: "Chris",
      },
    ],
  },
];

// export out data
// userData, thoughtData, ReactionData

module.exports = { userData, thoughtData };
