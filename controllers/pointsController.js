const Point = require("../models/Point");

// @desc    Get points from coordinates
// @route   GET /api/points
// @access  Public

exports.getPoints = async (req, res, next) => {
    try {
        // const points = await Point.find({});
      //   const points = await Point.findOne({ geometry: 
      //       { $geoWithin: { $geometry: { type: "Polygon", 
      //         coordinates: [
      //           [
      //             [ -69.92467200399993, 12.519232489000045 ],
      //             [ -69.92467200399992, 12.519232489000044 ],
      //             [ -69.92467200399991, 12.519232489000043 ],
      //             [ -69.92467200399993, 12.519232489000045 ]
      //           ]
      //         ]
      //       } 
      //     } 
      //   } 
      // })
        // const points = await this.getPoints(req.points);
        // const points = await Point.find({
        //   location: {
        //     $geoWithin: {
        //       $centerSphere: [
        //         [ -69.92467200399993, 12.519232489000045 ],
        //         5 / 3963.2
        //       ]
        //     }
        //   }
        // })
        // const points = await Point.aggregate([
        //   {
        //     $geoNear: {
        //         near: { type: "Point", coordinates: [ -69.92467200399993, 12.519232489000045 ] },
        //         distanceField: "dist.calculated",
        //         maxDistance: 200,
        //         // query: { category: "Parks" },
        //         includeLocs: "dist.location",
        //         spherical: true
        //     }
        //   }
        // ])

        const points = await Point.find({});

        res.header("Access-Control-Allow-Origin", "*");
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
        // { "type": "Feature", "properties": { "ADMIN": "Aruba", "ISO_A3": "ABW" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -69.996937628999916, 12.577582098000036 ], [ -69.936390753999945, 12.531724351000051 ], [ -69.924672003999945, 12.519232489000046 ], [ -69.915760870999918, 12.497015692000076 ], [ -69.880197719999842, 12.453558661000045 ], [ -69.876820441999939, 12.427394924000097 ], [ -69.888091600999928, 12.417669989000046 ], [ -69.908802863999938, 12.417792059000107 ], [ -69.930531378999888, 12.425970770000035 ], [ -69.945139126999919, 12.44037506700009 ], [ -69.924672003999945, 12.44037506700009 ], [ -69.924672003999945, 12.447211005000014 ], [ -69.958566860999923, 12.463202216000099 ], [ -70.027658657999922, 12.522935289000088 ], [ -70.048085089999887, 12.531154690000079 ], [ -70.058094855999883, 12.537176825000088 ], [ -70.062408006999874, 12.546820380000057 ], [ -70.060373501999948, 12.556952216000113 ], [ -70.051096157999893, 12.574042059000064 ], [ -70.048736131999931, 12.583726304000024 ], [ -70.052642381999931, 12.600002346000053 ], [ -70.059641079999921, 12.614243882000054 ], [ -70.061105923999975, 12.625392971000068 ], [ -70.048736131999931, 12.632147528000104 ], [ -70.00715084499987, 12.5855166690001 ], [ -69.996937628999916, 12.577582098000036 ] ] ] } },
      const point = await Point.create(req.body.geometry);
  
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