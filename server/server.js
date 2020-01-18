const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");
const api = require("./routes/api");
const db =
  "mongodb+srv://mansan:mansan@cluster0-xubta.mongodb.net/simple-forum?retryWrites=true&w=majority";
const path = require("path");
mongoose.connect(db, err => {
  if (err) {
    //Test to connection

    console.log("no connexion");
  } else {
    console.log("Succes XXXXXX");
  }
});
const Message = require("./models/message-model");
app.use(cors());

let messageVariable;
let nameVariable;
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message", message => {
    messageVariable = message;
    console.log("Message Received: " + message);
    io.emit("new-message", { type: "new-message", text: message });
  });
  socket.on("new-name", name => {
    nameVariable = name;
    console.log("Message Received: " + name);
    io.emit("new-name", { type: "new-name", text: name });
    (async () => {
      try {
        let userMessage = await new Message({
          name: nameVariable,
          message: messageVariable
        }).save();
      } finally {
        console.log("test success");
      }
    })().catch(err => console.error(err));
  });
});
/* app.get("/", function(req, res) {
  Message.find({}, (err, message) => {
    console.log(message);
    /// r.json(message);
  });
}); */

//
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.use(api);
http.listen(process.env.PORT || 8080, function() {
  console.log("listening on 8080");
});
/* app.get("/", function(req, res) {
  Message.find({}, (err, message) => {
    console.log(message);
    /// r.json(message);
  });
}); */
