const express = require("express");
const router = express.Router();
const axios = require("axios");
const { subwayStation } = require("./subwayStation");
require("dotenv").config();

router.get("/:station", async (req, res, next) => {
  try {
    const { station = "장승배기" } = req.params;
    const apiKey = process.env.SUBWAY_KEY;
    const url = `http://swopenAPI.seoul.go.kr/api/subway/${apiKey}/json/realtimeStationArrival/0/5/${station}`;

    const response = await axios.get(url);
    const data = response.data;

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred");
  }
});

router.get("/station/:line", async (req, res, next) => {
  try {
    const { line } = req.params;
    // const jsonData = JSON.stringify(subwayStation);
    const result = subwayStation.filter((el) => el.호선이름 == `${line}호선`);
    console.log(result);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred");
  }
});

module.exports = router;
