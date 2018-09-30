const { ApolloServer, gql } = require('apollo-server');


const resolvers = require('./resolvers/index');
const schema = require('./schemas/index');

const typeDefs = gql(`
    ${schema.Query}
    ${schema.Mutation}
`);

const server = new ApolloServer( { typeDefs, resolvers: resolvers(schema.Mutation !== '') } );

server.listen({port: 3000}).then(req => {
    console.log('Server is started on port 3000')
});