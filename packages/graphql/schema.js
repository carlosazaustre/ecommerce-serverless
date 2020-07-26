const { gql } = require('apollo-server');

const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String!
    price: Float!
    photo: String!
    slug: String!
  }

  type Query {
    item(slug: String!): Item!
    items: [Item!]
  }

  type Mutation {
    addItem(
      name: String!,
      description: String!,
      price: Float!,
      photo: String!
      slug: String!
    ): Item!
  }
`;

module.exports = typeDefs;
