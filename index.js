import http from 'http';
import express from 'express';
// Set up app using express
const app = express();

const server = http.createServer(app);
server.listen(3000);
server.on('listening', () => {
  console.log('Server listening on port 3000');
});

app.get('*', (req, res) => {
  res.end('Hello Express!');
});
