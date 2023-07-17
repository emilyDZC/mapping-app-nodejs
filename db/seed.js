// NB. For initial setup only. 
// This file was run in the node server with node db/seed.js in order to populate the database with geospatial data.

const Point = require("../models/Point");
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

// Bring in geojson file
const geoFile = JSON.parse(require('fs').readFileSync("assets/loxia_scotica_final.geojson", 'utf8'))

// Create a new Point for each geodata point in the array
let points = geoFile.features.map(country => {
    return country = new Point({
        type: country.geometry.type,
        coordinates: country.geometry.coordinates
    })
});

// Connect mongoose
mongoose.connect(uri.toString())
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(() => {
        console.log("connected to db in development environment");
    });

// Map through the points and save them to the db
points.map(async (point, i) => {
    console.log({point})
    await point.save()
})