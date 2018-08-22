const privateUserFields = ['password', 'passwordVersion'];

module.exports = {
    UserTCOptions: {
        fields: {
            remove: [...privateUserFields]
        },
        resolvers: {
            updateById: {
                record: {
                    removeFields: [...privateUserFields]
                }
            }
        }
    }
}