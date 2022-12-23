//require in mongoose

// create new thoughtSchema with the values :
// 1. thoughtText - string, required, must be between 1-280 chars
// 2. createdAt - date, set default value to current timestamp, getter method to format timestamp on query
// 3. username (user that created the thought) - string, required

// Schema settings -
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
