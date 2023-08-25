const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/api/calculate", (req, res) => {
  const { flightCost, accommodationCost, foodCost, entertainmentCost } = req.body;
  const totalCost = flightCost + accommodationCost + foodCost + entertainmentCost;
  res.json({ totalCost });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
