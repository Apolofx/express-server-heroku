const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors({ origin: true }));
app.use(express.json());
app.get("/:city", (req, res) => {
  // const city = req.params.city.split("%20").join(" ");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.API_KEY}`;
  return axios
    .get(url)
    .then((response) => res.status(200).send(response.data.weather))
    .catch((error) => res.status(500).send(error));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
