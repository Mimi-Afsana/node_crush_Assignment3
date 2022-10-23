const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_JOB}:${process.env.DB_PASS}@cluster0.r4gv1sp.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("Database connection is successful"))
    .catch((error) => console.log(error));
};
module.exports = dbConnect;
