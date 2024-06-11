const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const port = 5000;
const url =
  "mongodb://mongoadmin:mongoadmin@localhost:27017/auth_data?authSource=admin";
const router = require("./Router/userRoutes");
const bodyparser = require("body-parser");
const cors = require("cors");

mongoose
  .connect(url)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("somethin went wrong " + err));
server.listen(port, () => {
  console.log(`Server is runnign on port ${port}`);
});

app.get("/dummy", (req, res) => {
  res.send("hello world");
  console.log("hello world");
});

app.use(bodyparser.json());
app.use(cors());
app.use("/api", router);
