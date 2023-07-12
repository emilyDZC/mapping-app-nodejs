const express = require("express");
const router = express.Router();
const { getPoints, addPoint } = require("../controllers/pointsController");

router.route("/").get(getPoints).post(addPoint);

module.exports = router;