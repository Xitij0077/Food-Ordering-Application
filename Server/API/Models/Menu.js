const mongoose = require("mongoose");
const { Schema } = mongoose;

//CREATE SCHEMA OBJECT FOR MENU ITEMS

const menuSchema = new Schema({
	name: { type: String, trim: true, required: true, minLength: 3 },
	recipe: String,
	image: String,
	category: String,
	price: Number,
});

//CREATE MODEL
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
