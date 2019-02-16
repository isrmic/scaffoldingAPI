const fs = require('fs');

const Query = fs.readFileSync('./schemas/Query.gql', 'utf8');
const Mutation = fs.readFileSync('./schemas/Mutation.gql', 'utf8');

module.exports = { Query, Mutation };