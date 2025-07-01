const express = require("express");
const router = express.Router();

const controller = require("../controllers/PostPageController");
router.get("/:id", controller.postPageGet);
// router.post("/:id", controller.postPagePost);

router.post("/delete", controller.postPageDelete);

module.exports = router;
