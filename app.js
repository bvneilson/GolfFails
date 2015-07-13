'use strict';

module.exports = function () {
  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var videos = [];

  // C:\blablatnaoeh\ntaoeunstahoeu
  // /Users/bob/Documents
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/api', bodyParser.json({
    inflate: true
  , limit: 1024 * 1024
  , reviver: null
  , strict: true
  }));

  app.use('/', function (request, response, next) {
    console.log(request.method, request.url);
    next();
  });

  app.use('/secret', function (request, response) {
    response.send('You FOUND ME!!!! bwahahahaha');
  });

  app.get('/api/echo/:msg?', function (request, response) {
    response.send(request.params.msg || 'The cake is a lie!');
  });

  app.get('/api/video', function (request, response) {
    response.send(videos);
  });

  app.get('/api/video', function (request, response) {
    response.send(messages);
  });

  app.post('/api/video', function (request, response) {
    var vid = request.body;
    videos.push(vid);
    response.send({ success: true });
  });

  app.use('/api', function (request, response) {
    response.end('api error');
  });

  return app;
};