const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const dbConnect = require("./Utils/dbConnect");

const port = process.env.PORT || 8000;

dotenv.config();

app.use(cors());
app.use(express.json());

// database connection
dbConnect();

app.get("/", (req, res) => {
  res.send("Job portal is running");
});

app.listen(port, () => {
  console.log(`server is running on PORT ${port}`);
});
