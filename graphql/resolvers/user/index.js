const { UserTC } = require('../../composers');

module.exports = () => {
    
    UserTC.addResolver(require('./loginWithEmail'));
}