const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
// const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
console.log(process.env.ACCESS_TOKEN_SECRET);

// MIDDLEWARE(STEP-1)

app.use(cors());
app.use(express.json());

// xitijgudekar0077
// WbycolM45qnvyTJq

//MONGO DB CONFIGURATION(STEP-2)

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@bite-me-cluster.flmpmxy.mongodb.net/Foodie?retryWrites=true&w=majority`
	)
	.then(console.log("You successfully connected to MongoDB!"))
	.catch((error) => console.log("Error connecting to MongoDB", error));

//JWT Authentication

app.post("/jwt", async (req, res) => {
	const user = req.body;
	const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "1hr",
	});
	res.send(token);
});

//VERIFY JWT TOKEN
//IMPORT ROUTES HERE

const menuRoutes = require("./API/Routes/menuRoutes");
const cartRoutes = require("./API/Routes/cartRoutes");
const userRoutes = require("./API/Routes/userRoutes");
app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`App listening on PORT ${port}`);
});
