const { ApolloServer, gql } = require('apollo-server');

const Connection = require('./connection/index');

const resolvers = require('./resolvers/index');
const schema = require('./schemas/index');

const { output, outputln } = require('./utils/output');

const typeDefs = gql(`
    ${schema.Query}
    ${schema.Mutation}
`);


const Start = async () => {
    
    const db = await Connection();

    const defs = {
        typeDefs,
        resolvers: resolvers(schema.Mutation !== ''),
        context: ({req}) => ( { db } ),
    };
    
    const server = new ApolloServer(defs);

    const infos = await server.listen({port: 3000, host: 'localhost'});
    output(`server is started at port ${infos.port}`, "cyan");
    output(`the server is acessible on: ${infos.url}`, 'green');
};

try {
    Start();
}
catch (err) {
    throw err;
}