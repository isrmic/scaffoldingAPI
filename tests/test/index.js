//get arg to resolver
const args = Array.prototype.slice.call(process.argv, 2);

const query = args[0] || null;

const { graphql, buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');

//load resolvers and schema
const _resolvers = require('../../resolvers/index');
const _schema = require('../../schemas/index');

//prepare schemas
// const schema = buildSchema(`
//     ${_schema.Query}
//     ${_schema.Mutation}
// `);
    
const typeDefs = `
    ${_schema.Query}
    ${_schema.Mutation}
`;

//generate resolvers
const resolvers = _resolvers(_schema.Mutation !== '');

//create a schema
const n_schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// console.log(root, resolvers);

//async function to get result of resolver and use de operator "await"
const test = async () => {
    
    const response = await graphql(n_schema, query || ' { example { field1 field2, field3 } } ');

    //output data returned
    console.info('Result: \r\n\r\n', response.data);

};

test();