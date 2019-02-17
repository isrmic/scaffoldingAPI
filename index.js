const fs = require('fs');

const { ApolloServer, gql } = require('apollo-server');

//config of server
const config = require('./config');

const Connection = require('./connection/index');

const resolvers = require('./resolvers/index');
const schema = require('./schemas/index');

const { output, outputln } = require('./utils/output');

const typeDefs = gql(`
    ${schema.Query}
    ${schema.Mutation}
`);

const Start = async () => {    
    
    //define the environment - default is development
    const env = process.env.NODE_ENV = config.NODE_ENV || 'development';
    
    const db = await Connection(/* params of conexion*/);

    const defs = {
        typeDefs,
        resolvers: resolvers(schema.Mutation !== ''),
        playground: config[env].serveroptions.playground,
        context: ({req}) => ( { db } ),
    };

    const server = new ApolloServer(defs);

    server.listen({port: config[env].serveroptions.port || 3000, host: config[env].serveroptions.host || 'localhost'})
    .then(infos => {
        output(`server is started at port ${infos.port}`, "cyan");
        output(`the server is acessible on: ${infos.url}`, 'green');
    })
    .catch(err => {
        throw err;
    });
    
};

//start the server
Start();