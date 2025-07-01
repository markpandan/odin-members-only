const express = require("express");
const router = express.Router();

const util = require("../lib/authUtils");

const controller = require("../controllers/DashboardController");
router.get("/", util.isAuth, controller.dashboardGet);
router.post("/", util.isAuth, controller.dashboardPost);

module.exports = router;
