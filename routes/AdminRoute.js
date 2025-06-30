const express = require("express");
const router = express.Router();

const controller = require("../controllers/AdminController");
router.get("/", controller.adminGet);
router.post("/", controller.adminPost);

module.exports = router;
