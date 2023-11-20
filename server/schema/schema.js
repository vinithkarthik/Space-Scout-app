const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLID } = require('graphql');

const SpaceType = new GraphQLObjectType({
  name: 'Space',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    availableFrom: { type: GraphQLString },
    rate: { type: GraphQLString },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString },
    thumbnailImage: { type: GraphQLString }
  })
});

// query to get space information
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    spaces: {
      type: new GraphQLList(SpaceType),
      resolve(parent, args) {
        //return the space data from DB
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})