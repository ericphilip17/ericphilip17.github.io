var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();

// var server = http.createServer('index.html', (req, res) => {
//   console.log(`URL Requested: ${req.url}`);
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   fs.createReadStream('index.html', 'utf8').pipe(res)
// })
//

// app.get('/home', (req, res) => {
//   // res.writeHead(200, {'Content-Type': 'text/html'})
//   // fs.createReadStream('index.html', 'utf8').pipe(res)
//   // //res.end('File found')
//   res.sendFile(__dirname + '/index.html');
// })

app.set('view engine', 'ejs')
app.get('/profile/:name', (req, res) => {
  let data = {name: 'Eric Philip', course: 'ECE', regNumber: 'ENE-212-0084/2017', year: 'Third'}
  res.render('profile', {person: req.params.name, data: data});
  //RENDER:: Accepts a ejs file, then embeds in it an object.
});



























app.listen(3000);
