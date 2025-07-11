const express = require("express");
const router = express.Router();

const controller = require("../controllers/HomeController");
router.get("/", controller.homeGet);
router.post("/", controller.homePost);

module.exports = router;
