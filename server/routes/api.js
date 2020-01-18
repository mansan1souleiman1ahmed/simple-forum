const express = require("express");
const router = express.Router();
const Message = require("../models/message-model");
router.get("/api", (req, res) => {
  Message.find({}, (err, message) => {
    // console.log(message);
    res.json(message);
  });
});
module.exports = router;
