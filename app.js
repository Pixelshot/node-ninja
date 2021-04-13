//  === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===
//  === === === === === === === === === === === === === === ===  EXPRESS === === === === === === === === === === === === === === === ===
//  === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===
const express = require('express');

// Register view engine(for dynamic content - checkout #7 for more info)
// There are a few packages we can choose to handle our view content but we'll be using ejs for this tutorial.
app.set('view engine', 'ejs');
// If your folder or filename is not view, then use app.set('views', 'location of the folder/file')

// Invoke express
const app = express();

// Listen for requests
app.listen(3000);

// Syntax
// app.get(url we want to listen to, a (request, response) function that we can use to communicate with its contents)

app.get('/', (req, res) => {
  // Express automatically works out Content-Type Header & Status Code for us
  // res.send('<p>Hello via Express</p>');
  // Express looks into absolute root path of the computer(~), we need to configure it to look into relative path instead using root option. See #6(routing & html pages if confused)
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

// Redirects
app.get('/about-us', (req, res) => {
  res.redirect('about');
});

// Express is gonna go through the routes starting from the top and it'll stop once it finds a matching path.
// app.use() basically means if none of the routes match, then send it to this route.
// .use() should be at the bottom all routes

// 404 Page
app.use((req, res) => {
  // Need to explicitly tell Express that this is a 404 file(using the status option)
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
