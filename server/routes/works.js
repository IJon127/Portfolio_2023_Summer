const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const works = JSON.parse(fs.readFileSync(`${__dirname}/../data/works.json`));

// 3) ROUTE HANDLERS =====================================
function getWorks(req, res) {
  res.status(200).json({
    status: "success",
    result: works.length,
    data: {
      works,
    },
  });
}

function getWorkByName(req, res) {
  const work = works.find((el) => el.name === req.params.name);

  if (!work) {
    return res
      .status(404)
      .send("<h1>404...sorry I don't have this project</h1>");
  }
  res.status(200).json({
    status: "success",
    data: {
      work,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getWorks);
router.get("/:name", getWorkByName);

// 5) EXPORT ROUTER ======================================
module.exports = router;
