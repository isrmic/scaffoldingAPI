//get arg to resolver
const args = Array.prototype.slice.call(process.argv, 2);

const query = args[0] || null;

const { graphql, buildSchema } = require('graphql');

//load resolvers and schema
const _resolvers = require('../../resolvers/index');
const _schema = require('../../schemas/index');

//prepare schemas
const schema = buildSchema(`
    ${_schema.Query}
    ${_schema.Mutation}
`);

//definition of resolvers
const root = {
    ..._resolvers(_schema.Mutation !== '').Query
};

//async function to get result of resolver and use de operator "await"
const test = async () => {
    
    const response = await graphql(schema, query || ' { example { field1 field2 } } ', root);

    //output data returned
    console.log(response.data.example);

};


test();