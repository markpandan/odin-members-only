const express = require("express");
const router = express.Router();

const controller = require("../controllers/PostPageController");
router.get("/", controller.postPageGet);
router.post("/", controller.postPagePost);

module.exports = router;
