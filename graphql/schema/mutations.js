const {
    UserTC
} = require('../composers');

module.exports = {

    loginUser: UserTC.getResolver('loginWithEmail'),

}