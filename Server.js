// server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.get("/weather", async (req, res) => {
  try {
    const response = await axios.get(
      "https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22"
    );
    res.json(response.data.list);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
