const users = () => async (root, args, context) => {
    
    return [
        { userid: 1, username: 'user1'},
        { userid: 2, username: 'user2'}
    ]
}

module.exports = users;