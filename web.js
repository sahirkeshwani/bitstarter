#!/usr/bin/env node
var express = require("express");
var app = express();

var fs = require('fs');

var data = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(data.toString('utf-8'));
});

