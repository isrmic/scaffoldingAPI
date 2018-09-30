const User = () => ({
    async descript (args, args2) {
        
        const params = args2.replace.split('|');

        return 'this is a descript'.replace(params[0], params[1].replace(/{(.*?)}/, (x, y) => args[y]));
    }
});

module.exports = User;