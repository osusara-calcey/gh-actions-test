const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// GET endpoint to retrieve data
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 }
  ];
  res.status(200).json(items);
});

// GET endpoint with parameter
app.get('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const item = { id: parseInt(id), name: `Item ${id}`, value: parseInt(id) * 100 };
  res.status(200).json(item);
});

// POST endpoint to create data
app.post('/api/items', (req, res) => {
  const { name, value } = req.body;
  if (!name || value === undefined) {
    return res.status(400).json({ error: 'Missing required fields: name, value' });
  }
  const newItem = { id: Math.floor(Math.random() * 10000), name, value };
  res.status(201).json(newItem);
});

// PUT endpoint to update data
app.put('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, value } = req.body;
  const updatedItem = { id: parseInt(id), name: name || `Item ${id}`, value: value || 0 };
  res.status(200).json(updatedItem);
});

// DELETE endpoint
app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Item ${id} deleted successfully` });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
