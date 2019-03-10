const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue');


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

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  if (req.method === 'GET') {
    // SwimTeam.move
    if (req.url === '/') {
      res.writeHead(200, headers);
      var command = messageQueue.dequeue();
      if (command) {
        res.end(command);
      } else {
        res.end();
      }
    }

    // background image
    if (req.url === '/background.jpg') {
      fs.readFile(module.exports.backgroundImageFile, (err, fileData) => {
        if (err) {
          res.writeHead(404, headers);
        } else {
          res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': fileData.length
          });
          res.write(fileData, 'binary');
        }
        res.end();
        next();
      })

    }
  }

  if (req.method === 'POST') {
    console.log(req.query)
    res.writeHead(200, headers);
    res.end('POST');
  }



};

