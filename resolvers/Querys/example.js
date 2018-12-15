const example = () => async (root, args, context) => {
    
    //data returned when resolver for "example" is called
    const data = [
        {
            field1: 'this is any string',
            field2: 7, //any integer
        },
        {
            field1: 'this is any string',
            field2: 14, //any integer
        }
    ];
    
    return data;

};

module.exports = example;