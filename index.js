const { ApolloServer, gql } = require('apollo-server');

const Connection = require('./connection/index');

const resolvers = require('./resolvers/index');
const schema = require('./schemas/index');

const typeDefs = gql(`
    ${schema.Query}
    ${schema.Mutation}
`);

const Start = async () => {

    const db = await Connection();

    const server = new ApolloServer(
        {
            typeDefs,
            resolvers: resolvers(schema.Mutation !== ''),
            context: ({req}) => ( { db } ) 
        }
    );        

    server.listen({port: 3000}).then(() => {
        console.log('Server is started on port 3000')
    });
}

Start();