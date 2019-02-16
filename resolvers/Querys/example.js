const example = () => async (root, args, context, info) => {
    const data = [
        {
            field1: 'this is a field1',
            field2: 'this is a field2',
        },
        {
            field1: 'this is a field1 of object 2',
            field2: 'this is a field2 of object 2',
        }
    ];

    return data;
};

module.exports = example;