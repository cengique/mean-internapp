const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Header',
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods',
    "GET, POST, PATCH, DELETE, OPTIONS")
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
      message: "Post added successfully!"
    });
})

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'w2a309fdsal3as',
      title: 'First server-side post',
      content: 'This is coming from server'
    },
    { id: 'slaa39dksal3wf',
      title: 'Second server-side post',
      content: 'This is coming from server'
    },
  ]
  res.status(200).json({
    message: 'Posts sent successfully',
    posts: posts
  })
})

module.exports = app;
