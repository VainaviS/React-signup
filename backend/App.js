const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

var nodemailer = require("nodemailer");

const mongoUrl = "mongodb+srv://vainavi:vainaviP@cluster0.zljglwn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { port, addr, topic} = req.body;
    await User.create({
      port,
      addr,
      topic
    });
    res.send({ status: "ok" });
});

app.listen(5000, () => {
  console.log("Server Started");
});
