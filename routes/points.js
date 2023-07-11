const express = require("express");
const router = express.Router();
const { getPoints } = require("../controllers/pointsController");

router.route("/").get(getPoints);

module.exports = router;