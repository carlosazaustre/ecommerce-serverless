const { gql } = require('apollo-server-express');

exports.schema = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;
