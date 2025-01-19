const jwt = require("jsonwebtoken");
const {Schema} = require('mongoose');


const UserSchema = new Schema({
	name: {
        type: String,
        required: true
    },
	email: {
        type: String,
        required: true
    },
	password: {
        type: String,
        required: true
    },
});

// UserSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "7d",
// 	});
// 	return token;
// };

module.exports = { UserSchema };


