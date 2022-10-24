const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const dbConnect = require("./Utils/dbConnect");

const userRoute = require("./routes/user.route");
const jobRoute = require("./routes/job.route");
const hiringManagerRoute = require("./routes/hiringManager.route");

const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

// routes
app.use("/user", userRoute);
app.use("/api", jobRoute);
app.use("/api", hiringManagerRoute);

// database connection
dbConnect();

app.get("/", (req, res) => {
  res.send("Job portal is running");
});

app.listen(port, () => {
  console.log(`server is running on PORT ${port}`);
});
