const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
// console.log(process.env.DB_USERNAME);

// MIDDLEWARE(STEP-1)

app.use(cors());
app.use(express.json());

// xitijgudekar0077
// WbycolM45qnvyTJq

//MONGO DB CONFIGURATION(STEP-2)

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@bite-me-cluster.flmpmxy.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: "1",
		strict: true,
		deprecationErrors: true,
	},
	tls: true,
});

async function run() {
	try {
		await client.connect();

		//DATBASE AND COLLECTIONS

		const menuCollections = client
			.db("Bite-me-collection")
			.collection("menuItems");
		const cartCollections = client
			.db("Bite-me-collection")
			.collection("cartItems");

		// ALL MENU ITEMS OPERATIONS
		app.get("/menu", async (req, res) => {
			const result = await menuCollections.find().toArray();
			res.send(result);
		});

		//-------ALL CARTS OPERATION------------

		// POSTING CART TO DB
		app.post("/carts", async (req, res) => {
			const cartItem = req.body;
			const result = await cartCollections.insertOne(cartItem);
			res.send(result);
		});

		// GET CARTS USING EMAIL

		app.get("/carts", async (req, res) => {
			const email = req.query.email;
			const filter = { email: email };
			const result = await cartCollections.find(filter).toArray();
			res.send(result);
		});
		await client.db("admin").command({ ping: 1 });
		console.log("You successfully connected to MongoDB!");
	} finally {
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`App listening on PORT ${port}`);
});
