const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const tradeRoutes = require('./routes/trade');
const cargoRoutes = require('./routes/cargo');
const inventoryRoutes = require('./routes/inventory');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Middleware
app.use(express.json());
app.use('/api/trades', tradeRoutes);
app.use('/api/cargo', cargoRoutes);
app.use('/api/inventory', inventoryRoutes);

// WebSocket for real-time updates
io.on('connection', (socket) => {
  console.log('New WebSocket connection');
  socket.on('trade-update', (data) => {
    io.emit('trade-update', data); // Broadcast trade update
  });
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/intergalactic-trade', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
