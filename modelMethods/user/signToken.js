// const keystone = require('keystone');
const jwt = require('jsonwebtoken');

module.exports = function signToken(){
    const user = this;

    const token = jwt.sign({
        id: user._id,
        // pv: keystone.pvCryptr.encrypt(user.passwordVersion)
    }, process.env.JWT_SECRET);

    return token;
}