const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { getPoints, addPoint, getPoint } = require("../controllers/pointsController");

// Validation middleware
const validateQueryParams = [
    body("lat")
        .notEmpty().withMessage("The 'lat' field is required")
        .isFloat().withMessage("The 'lat' field is invalid. Please enter a coordinate in a valid format eg. 53.312.").bail(),
    body("long")
        .notEmpty().withMessage("The 'long' field is required")
        .isFloat().withMessage("The 'long' field is invalid. Please enter a coordinate in a valid format eg. 1.147").bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
];

router.route("/").get(getPoints).post(addPoint);

router.route("/single").post(validateQueryParams, getPoint);

module.exports = router;