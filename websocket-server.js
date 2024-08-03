const WebSocket = require('ws');
const port = 3001;

const wss = new WebSocket.Server({ port });

wss.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', message => {
        console.log('Received message:', message);

        ws.send(`Received your key: ${message}. Connection established.`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', error => {
        console.error('WebSocket Error:', error);
    });
});

console.log(`WebSocket server is running on ws://localhost:${port}`);

