// @desc    Get points from coordinates
// @route   GET /api/points
// @access  Public

exports.getPoints = async (req, res, next) => {
    try {
        // const points = await this.getPoints(req.points);
        console.log("get points endpoint");

        return res.status(200).json({
            success: true
            // data: data
        })
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({ success: false, error: "Server Error"});
    }
}