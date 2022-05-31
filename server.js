const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static(`${__dirname}`));

app.get("/", (req, res) => {
  // console.log(req);
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("game", (type) => {
    // console.log(type);
    io.emit("game", type);
  });
  io.on("connection", (socket) => {
    socket.on("xogame", (type) => {
      io.emit("xogame", type);
      console.log(type);
    });
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/game", (req, res) => {
  res.sendFile(__dirname + "/t.html");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
