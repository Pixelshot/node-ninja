const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   // === === === === === === === === === === 3 steps to communicate with the browser === === === === === === === === === ===

//   // 1. Set header content type. Tell the browser what kind of content we're sending from the server

//   // 2. Enter our content
//   //  - For this example we're using res.write() to send a simple text to the browser
//   // res.write('<p>Hello from server<p>');
//   // res.write('<p>Hello again from server<p>');
//   // Obviously this is not the best way to do things. Best way to do it is have the html files written elsewhere and import it here

//   // 3. End the response and send it the the browser with res.end() - always remember to end the response

//   res.setHeader('Content-Type', 'text/html');
//   fs.readFile('./views/index.html', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // only use res.write() when we're sending multiple data. Otherwise just submit it straight into res.end()
//       res.end(data);
//     }
//   });
// });

// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===
// === === === === === === === === === === === === === === === === === ===  BASIC ROUTING === === === === === === === === === === === === === === === ===
// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello, this function should only be able to run once');
  });

  greet();
  greet();

  res.setHeader('Content-Type', 'text/html');

  let path = './views/';

  // Using switch to handle routing
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-yew':
      res.statusCode = 301; // 300 status means redirect
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening request on port 3000');
});
