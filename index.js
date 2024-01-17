const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/eventroutes");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(cors());

const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Calender",
});

app.use(bodyParser.json());

app.use("/events", eventRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running on port 3000 😎"));

