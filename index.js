const WebSocket = require('ws');

// Ensure the server is already running before starting the client
const ws = new WebSocket('ws://localhost:3000');

let value = 0; // Initialize the counter outside of the setInterval

ws.on('open', function open() {
  console.log('Connected to server');
  setInterval(() => {
    const message = JSON.stringify({ x: 'Hello', y: 'World', counter: value });
    ws.send(message);
    console.log('Sent:', message);
    value++; // Increment the counter after sending the message
  }, 1000);
});


ws.on('error', function error(err) {
  console.error('WebSocket Error:', err);
});
