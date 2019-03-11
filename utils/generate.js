const fs = require('fs');
const { join } = require('path');

const { output } = require('outputjsc');

//load default content of resolver
const defaultcontent = fs.readFileSync(join(__dirname, 'defaultcontent'), 'utf8');

//define args
const args = Array.prototype.slice.call(process.argv, 2);

let type = args[0];

if (type === null || type === undefined) {
    output
      .bgred(' ERROR ').white(':').spc().red(`Type não foi definido`)
      .ln()
      .bgwhite(` TRY RUN IT `, 'cyan').spc().white(':')
      .cyan(`"generate <query||mutation> <name_resolver> <true||false>(with_args)"`)
      .ln()
      .bgwhite(' EXAMPLE ', 'cyan').white(':').spc().cyan('"generate query getusers true"');
    process.exit(0);
}

type = type.toUpperCase();
type = type === "QUERY" ? 'Querys' : type === 'MUTATION' ? 'Mutations' : null;

const namefile = args[1];

const generatefilecontent = defaultcontent.replace(/{nameresolver}/g, args[1]).replace("{params}", args[2] && args[2] === "false" ? '' : 'root, args, context, info');

const pathfile = join(__dirname, '..', 'resolvers', type, `${namefile}.js`);

fs.writeFile(pathfile, generatefilecontent, (err) => {

    if(err)
        throw err;
    // console.log('%c arquivo gerado com sucesso!', 'color:#f12');
    output
      .bggreen(' SUCCESS ')
      .white(': ')
      .green('arquivo criado com sucesso!!')
      .ln()
      .white('caminho : ')
      .cyan(`${pathfile}`);
});

