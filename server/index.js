// the depencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// initalizing App
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// requiring posts.js from api folder
const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Handle profuction
if(process.env.NODE_ENV === 'production') {
  //static folder
  app.use(express.static(__dirname + '/public'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// intializing port with Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
