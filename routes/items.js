// routes/items.js
const express = require('express');
const router = express.Router();

// In-memory data
let items = [
  { id: 1, name: 'Apple', price: 1.2 },
  { id: 2, name: 'Banana', price: 0.8 },
];

// Helper to get next id
const nextId = () => (items.length ? Math.max(...items.map(i => i.id)) + 1 : 1);

// GET /api/items
router.get('/', (req, res) => {
  res.set('X-Custom-Header', 'HelloWorld');
  res.status(200).json(items);
});

// GET /api/items/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ error: 'Item not found' });

  res.status(200).json(item);
});

// POST /api/items
router.post('/', (req, res) => {
  const { name, price } = req.body;

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name must be a non-empty string' });
  }
  if (typeof price !== 'number') {
    return res.status(400).json({ error: 'Price must be a number' });
  }

  const newItem = { id: nextId(), name: name.trim(), price };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /api/items/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name, price } = req.body;
  if (name !== undefined) {
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Name must be a non-empty string' });
    }
    item.name = name.trim();
  }
  if (price !== undefined) {
    if (typeof price !== 'number') {
      return res.status(400).json({ error: 'Price must be a number' });
    }
    item.price = price;
  }

  res.status(200).json(item);
});

// DELETE /api/items/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(index, 1);

  res.status(200).json({ message: "Item deleted successfully" });
 
});

module.exports = router;
