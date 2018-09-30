const fs = require('fs');

const extregex = /.js$/;

const resolvers = { querys: {}, mutations: {} };

const pathQuerys = fs.readdirSync('./resolvers/Querys');
const pathMutations = fs.readdirSync('./resolvers/Mutations');

pathQuerys.map(each => {
    if (extregex.test(each)) {
        resolvers.querys[each.replace(extregex, '')] = require(`./Querys/${each}`);
    }
})

pathMutations.map(each => {
    if (extregex.test(each)) {
        resolvers.mutations[each.replace(extregex)] = require(`./Mutations/${each}`);
    }    
})

module.exports = resolvers;