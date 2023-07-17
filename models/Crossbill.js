const mongoose = require("mongoose");

const CrossbillSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    default: "Feature"
  },
  properties: {
    type: Object
  },
  geometry: {
    type: {
      type: String, 
    },
    coordinates: {
      type: Array,
    }
  },
});

CrossbillSchema.index({ geometry: "2dsphere" });

module.exports = mongoose.model("Crossbill", CrossbillSchema);