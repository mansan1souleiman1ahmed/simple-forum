//Store the module mongoose inside a mongooes const
const mongoose = require("mongoose");

//With mongoose constante create a new Schema for user data in mongodb
const Schema = mongoose.Schema;

const MessageModel = new Schema({
  name: String,
  message: String
});
module.exports = mongoose.model("message", MessageModel, "messages");
