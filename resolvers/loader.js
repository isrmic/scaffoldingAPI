const fs = require('fs');

const extregex = /.js$/;

const pathResolvers = {
    fields: { folder: 'Fields', result: fs.readdirSync('./resolvers/Fields').filter(each => extregex.test(each)) },
    querys: { folder: 'Querys', result: fs.readdirSync('./resolvers/Querys').filter(each => extregex.test(each)) },
    mutations: { folder: 'Mutations', result: fs.readdirSync('./resolvers/Mutations').filter(each => extregex.test(each)) }
};

const resolvers = { querys: {}, mutations: {}, fields: {} };

for (let key in pathResolvers) {
    
    pathResolvers[key].result.map(each => {
        resolvers[key][each.replace(extregex, '')] = require(`./${pathResolvers[key].folder}/${each}`);
    })
}

module.exports = resolvers;