const express = require("express");
const Carts = require("../Models/Carts");
const router = express.Router();

const cartController = require("../Controller/cartControllers");
// const verifyToken = require("../middleware/verifyToken");

router.get("/", cartController.getCartByEmail);
router.post("/", cartController.addToCart);
router.delete("/:id", cartController.deleteCart);
router.put("/:id", cartController.updateCart);
router.get("/:id", cartController.getSingleCart);

module.exports = router;
