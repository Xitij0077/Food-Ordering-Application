const express = require("express");
const Menu = require("../Models/Menu");

const router = express.Router();
const menuController = require("../Controller/menuControllers");

//GET ALL MENU
router.get("/", menuController.getAllMenuItems);
module.exports = router;
