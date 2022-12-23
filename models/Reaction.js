//require in mongoose

// create new reactionSchema with the values :
// 1. reactionId - mongoose's ObjectId data type
// 2. default value is set to new ObjectId
// 3. reactionBody - string, required, 280 char max
// 4. username - string, required
// 5. createdAt - date, set default value to current timestamp, use getter method to format timestamp on query

// Schema settings -
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
