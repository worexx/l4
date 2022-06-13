const http = require('http');
const fs = require('fs');
const process = require('process');

const staticFile = './static/index.html'
const image = './images/logo.gif'
const PORT = process.env.PORT || 9000

const server = http.createServer();
const fileStream = fs.createReadStream(staticFile, 'utf8');

fileStream.on('data', (chunk) => {
  console.log(chunk);
  console.log('\n\n\n');
  process.stdout.write(chunk);
  console.log('\n\n\n');
});

fileStream.pipe(process.stdout);

server.on('request', (req, res) => {
  const fileStream = fs.createReadStream(image);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/gif');
  fileStream.pipe(res);
});

server.listen(PORT);