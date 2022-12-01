const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");
const multer = require("multer");

//routes call
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");

//middleware
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//file Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

//routes
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

const port = process.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
