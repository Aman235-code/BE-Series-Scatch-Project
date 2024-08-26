const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey working owneers");
});

module.exports = router;
