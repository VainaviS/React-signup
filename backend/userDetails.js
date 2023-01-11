const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema(
  {
    port: String,
    addr: String, //{ type: String, unique: true }
    topic: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserScehma);