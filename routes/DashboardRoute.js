const express = require("express");
const router = express.Router();

const controller = require("../controllers/DashboardController");
router.get("/", controller.dashboardGet);
router.post("/", controller.dashboardPost);

module.exports = router;
