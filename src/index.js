const { ApolloServer, gql } = require("apollo-server");
import User from "./api/user/user.model";
const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
  }
  type Mutation {
    addUser(firstName: String, lastName: String): User
  }

  type Query {
    users: [User]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Mutation: {
    addUser(_, args) {
      const user = new User(args);
      user.save(null, asd => {
        console.log(asd);
      });
      return user;
    }
  },
  Query: {
    users() {
      return User.find();
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
