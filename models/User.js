//require in mongoose

// create new userSchema with the values :
// 1. username - string, unique, required, trimmed
// 2. email - string, required, unique, match a valid email
// 3. thoughts - array of _id values referencing Thought model
// 4. friends - array of _id values references the User model
// 5. toJSON - getters true, id false

// Schema settings -
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
