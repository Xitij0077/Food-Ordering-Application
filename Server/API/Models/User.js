const mongoose = require("mongoose");
const { Schema } = mongoose;

//CREATE SCHEMA OBJECT FOR MENU ITEMS

const userSchema = new Schema({
	name: String,
	email: { type: String, trim: true, minlength: 3 },
	photoURL: String,
	role: { type: String, emum: ["user", "admin"], default: "user" },
});

//CREATE MODEL
const User = mongoose.model("User", userSchema);
module.exports = User;
