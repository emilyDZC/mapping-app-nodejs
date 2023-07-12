const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Point", PointSchema);