const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = () => { }) => {
  // 
  // if (req.method === 'GET') {
  //   //issue a random command back to client
  //   
  // }
  // // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // // res.writeHead(200, headers);
  // // res.end('jonathan and teresa are great');
  // res.writeHead(200, headers);
  // res.end(`${randomMoves[randomIndex]}`);
  var randomMoves = ['left', 'right', 'up', 'down']
  var randomIndex = Math.floor(Math.random() * 4);

  var randomMove = randomMoves[randomIndex]
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.end(randomMove);
  }



};

