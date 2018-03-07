// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
// Set the port to 3001
const PORT = 3001;
var http = require("http")



var app = express()

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(PORT)

console.log("http server listening on %d", PORT)

// var wss = new WebSocketServer({ server: server })
// console.log("websocket server created")



// Create a new express server
// const server = express()
//   // Make the express server serve static assets (html, javascript, css) from the /public folder
//   .use(express.static('public'))
//   .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({ server });
const clientLog = {};
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  console.log(wss.clients);
  const colors = ['#ffff66', '#66ff66', '#ff99bb', '#99ccff']
  const random = Math.floor(Math.random() * 4);
  const userColor = colors[random];
  let username = 'Anonymous';
  ws.on('message', (message) => {
    const newMsg = JSON.parse(message);
    newMsg.id = uuidv4();
    newMsg.color = userColor;
    if(newMsg.name) {
      username = newMsg.name;
    }
    switch(newMsg.type) {
      case 'postMessage': newMsg.type = 'incomingMessage';
      break;
      case 'postNotification': newMsg.type = 'incomingNotification';
      break;
      case 'logInNotification': 
        newMsg.type = 'incomingLogIn';
        newMsg.userCount = wss.clients.size;
      break;
      case 'logOutNotification': 
        newMsg.type = 'incomingLogOut';
        newMsg.userCount = wss.clients.size;
      break;
      // default: throw new Error('Unrecognized message type.');
    }
    wss.broadcast(newMsg);
  })
  
  //broadcast to all
  wss.broadcast = function broadcast(newMsg) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify(newMsg));
      }
    });
  };

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    const msg = { name: username, type: 'incomingLogOut', userCount: wss.clients.size, id: uuidv4() };
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });

  });

});