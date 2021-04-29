const { ApolloServer } = require("apollo-server-express");

const express = require('express');
const app = express();

const { typedefs } = require('./schema/typedefs');
const { resolvers } = require('./schema/resolvers');

const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
    console.log("Server running on port 8000");
});