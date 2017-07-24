const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

const server = http.createServer(app);
server.listen(8080, () => {
  console.log('server is running on 8080');
});
