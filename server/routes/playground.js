const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const playground = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/playground.json`)
);

// 3) ROUTE HANDLERS =====================================
function getPlayground(req, res) {
  res.status(200).json({
    status: "success",
    result: playground.length,
    data: {
      playground,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getPlayground);

// 5) EXPORT ROUTER ======================================
module.exports = router;
