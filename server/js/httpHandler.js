const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueueArray = require('./messageQueue.js')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  console.log("in message Queue: ", messageQueue);
  res.writeHead(200, headers);
  // var directions = ['left', 'right', 'up', 'down']
  // var randomDirection = directions[Math.floor(Math.random() * directions.length)]
  if(req.method === 'GET'){
    SwimTeam.move(messageQueue);
    res.end(messageQueue);
  } else {
    res.end()
  }
  next(); // invoke next() at the end of a request to help with testing!
};
