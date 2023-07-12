const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    default: "Polygon"
  },
  coordinates: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Point", PointSchema);