// server.js
const express = require('express');
const auth = require('./middleware/auth');
const itemsRouter = require('./routes/items');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Authentication middleware for all /api routes
app.use('/api', auth);

// Routes
app.use('/api/items', itemsRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to Simple API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
