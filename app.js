//  === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===
//  === === === === === === === === === === === === === === ===  EXPRESS === === === === === === === === === === === === === === === ===
//  === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===
const express = require('express');

// Invoke express
const app = express();

// Register view engine(for dynamic content - checkout #7 for more info)
// There are a few packages we can choose to handle our view content but we'll be using ejs for this tutorial.
app.set('view engine', 'ejs');
// If your folder or filename is not view, then use app.set('views', 'location of the folder/file')

// Listen for requests
app.listen(3000);

// Syntax
// app.get(url we want to listen to, a (request, response) function that we can use to communicate with its contents)

app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Mario finds stars',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'How to defeat bowser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ];
  // Using ejs to handle view. Previous configuration and notes can be found in previous commits
  res.render('index', { title: 'Home', blogs }); // because they're the same name, we can shorten it to only one word but keeping it for clarity
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Redirect removed. Check previous commit for it

// Create blog page
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' });
});

// Express is gonna go through the routes starting from the top and it'll stop once it finds a matching path.
// app.use() basically means if none of the routes match, then send it to this route.
// .use() should be at the bottom all routes

// 404 Page
app.use((req, res) => {
  // Need to explicitly tell Express that this is a 404 file(using the status option)
  res.status(404).render('404', { title: '404' });
});
