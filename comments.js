// Create web server
// Import express module
const express = require('express');
// Create express application
const app = express();
// Import body-parser module
const bodyParser = require('body-parser');
// Use body-parser middleware
app.use(bodyParser.json());
// Create comments array
const comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  // Send comments array as JSON response
  res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  // Add new comment to comments array
  comments.push(req.body);
  // Send new comment as JSON response
  res.json(req.body);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});