Chatty App
=====================

A dynamic lightweight chatbox web app made with ReactJS.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <localhost:3000/>.
4. Install dependencies for the WebSocket server by navigating to the chatty_server directory and using the same `npm install` command, then use `node server.js` within that directory to start the WebSocket server.
5. Go to <localhost:3000/> in your browser to start chatting!

## Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [websockets](https://github.com/websockets/ws)

## Screenshots

Initial homepage
(https://github.com/subclinical/chatty-app/blob/master/docs/first-look.png?raw=true)

Username change and send messages
(https://github.com/subclinical/chatty-app/blob/master/docs/name-change-message.png?raw=true)

Multi-client connections
(https://github.com/subclinical/chatty-app/blob/master/docs/two-clients.png?raw=true)

Image URL rendering and coloured username assignment
(https://github.com/subclinical/chatty-app/blob/master/docs/image-render.png?raw=true)