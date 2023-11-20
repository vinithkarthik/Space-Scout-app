const Space = require('../models/Space');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLID } = require('graphql');

const SpaceType = new GraphQLObjectType({
  name: 'Space',
  fields: () => ({
    id: { type: GraphQLID },
    spaceName: { type: GraphQLString },
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
        return Space.find();
      }
    }
  }
});

//Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSpaces: {
      type: SpaceType,
      args: {
        spaceName: { type: GraphQLString },
        availableFrom: { type: GraphQLString },
        rate: { type: GraphQLString },
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString },
        thumbnailImage: { type: GraphQLString }
      },
      resolve(parent, args) {
          const space = new Space({
            spaceName: args.spaceName,
            availableFrom: args.availableFrom,
            rate: args.rate,
            latitude: args.latitude,
            longitude: args.longitude,
            thumbnailImage: args.thumbnailImage
          });
          return space.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})