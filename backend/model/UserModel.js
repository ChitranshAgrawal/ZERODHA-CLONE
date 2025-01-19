const { model } = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const UserModel = new model("user", UserSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		name: Joi.string().required().label("Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password")
// 	});
// 	return schema.validate(data);
// };

module.exports = { UserModel };


