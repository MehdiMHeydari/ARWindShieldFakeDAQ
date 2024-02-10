const WebSocket = require('ws');

// Ensure the server is already running before starting the client
const ws = new WebSocket('ws://localhost:8082');

ws.on('open', function open() {
  console.log('Connected to server');
  setInterval(() => {
    const message = JSON.stringify({ x: 'Hello', y: 'World' });
    ws.send(message);
    console.log('Sent:', message);
  }, 5000);
});

ws.on('error', function error(err) {
  console.error('WebSocket Error:', err);
});
