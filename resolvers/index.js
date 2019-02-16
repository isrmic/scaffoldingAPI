const loadResolvers = require('./loader.js');

const generateResolverSchema  = (obj) => {
    
    const newSchema = {};

    for (let key in obj) {
        newSchema[key] = obj[key]();
    }
    return newSchema;
}

const getResolvers = (condiction) => {

    const resolvers = { ...generateResolverSchema(loadResolvers.fields)};
    
    resolvers.Query = { ...generateResolverSchema(loadResolvers.querys) };
    
    condiction && (resolvers.Mutation = { ...generateResolverSchema(loadResolvers.mutations) })

    return resolvers;
}

module.exports = getResolvers;