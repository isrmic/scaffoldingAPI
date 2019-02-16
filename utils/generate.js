const fs = require('fs');
const { join } = require('path');

const { output, outputln } = require('./output');

//load default content of resolver
const defaultcontent = fs.readFileSync(join(__dirname, 'defaultcontent'), 'utf8');

//define args
const args = Array.prototype.slice.call(process.argv, 2);

let type = args[0].toUpperCase();

type = type === "QUERY" ? 'Querys' : type === 'MUTATION' ? 'Mutations' : null;

if (type === null) {
    outputln(`Tipo "${args[0]}" não definido`, 'red');
    output(`try run it: `, 'yellow');
    outputln(`"generate <query||mutation> <name_resolver> <true||false>(with_args)"`, 'cyan');
    output(` example: "generate query getusers true"`, 'yellow');
    process.exit(0);
}

const namefile = args[1];

const generatefilecontent = defaultcontent.replace(/{nameresolver}/g, args[1]).replace("{params}", args[2] && args[2] === "false" ? '' : 'root, args, context, info');

const pathfile = join(__dirname, '..', 'resolvers', type, `${namefile}.js`);

fs.writeFile(pathfile, generatefilecontent, (err) => {

    if(err)
        throw err;
    // console.log('%c arquivo gerado com sucesso!', 'color:#f12');
    output('arquivo criado com sucesso!!', 'green');
    output(`caminho: ${pathfile}`, 'cyan')
});

