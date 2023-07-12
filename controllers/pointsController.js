const Point = require("../models/Point");

// @desc    Get points from coordinates
// @route   GET /api/points
// @access  Public

exports.getPoints = async (req, res, next) => {
    try {
        const points = await Point.find({});
        // const points = await this.getPoints(req.points);
        console.log("get points endpoint");

        return res.status(200).json({
            success: true,
            data: points
        })
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({ success: false, error: "Server Error"});
    }
}

// @desc    Add point
// @route   POST /api/points
// @access  Public

exports.addPoint = async (req, res, next) => {
    try {
      const point = await Point.create(req.body);
  
      return res.status(201).json({ success: true, data: point });
    } catch (error) {
      if (error.name === "ValidationError") {
        const messages = Object.values(error.errors).map((val) => val.message);
        res.status(400).json({ success: false, error: messages });
      } else {
        return res.status(500).json({ success: false, error: error.message });
      }
    }
  };