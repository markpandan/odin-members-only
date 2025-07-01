const express = require("express");
const router = express.Router();

const util = require("../lib/authUtils");

const controller = require("../controllers/AdminController");
router.get("/", util.isAdmin, controller.adminGet);
router.post("/", util.isAdmin, controller.adminPost);

module.exports = router;
