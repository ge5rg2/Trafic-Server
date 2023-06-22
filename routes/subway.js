const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/:station", async (req, res, next) => {
  try {
    const { station = "장승배기" } = req.params;
    const apiKey = process.env.OPEN_API;
    const url = `http://swopenAPI.seoul.go.kr/api/subway/${apiKey}/json/realtimeStationArrival/0/5/${station}`;

    const response = await axios.get(url);
    const data = response.data;

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred");
  }
});

module.exports = router;
