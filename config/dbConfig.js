const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB Connected successfully");
});

connection.on("err", (err) => {
  console, log(err);
});

module.exports = mongoose;
