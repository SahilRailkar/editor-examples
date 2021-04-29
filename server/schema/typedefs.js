const { gql } = require('apollo-server-express');

const typedefs = gql`
    type Hub {
        id: ID!
        description: String!
    }

    # type Attributes {
    #     level: Int
    #     language: String
    # }

    # type Marks {
    #     type: String
    # }

    # type Description {
    #     type: String!
    #     attr: Attributes
    #     content: [Description]
    #     marks: Marks
    #     text: String
    # }

    # Queries
    type Query {
        getHub: Hub!
        getAllHubs: [Hub!]
    }

    # Mutations
    type Mutation {
        updateHub(description: String!): Hub!
    }
`;

module.exports = { typedefs };