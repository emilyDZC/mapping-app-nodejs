const express = require("express");
const router = express.Router();
const { getPoints, addPoint, getPoint } = require("../controllers/pointsController");

router.route("/").get(getPoints).post(addPoint);

router.route("/single").get(getPoint);

module.exports = router;