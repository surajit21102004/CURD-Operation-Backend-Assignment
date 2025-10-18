// middleware/auth.js
module.exports = function auth(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization header' });
  }

  if (token !== 'Bearer mysecrettoken') {
    return res.status(401).json({ error: 'Invalid token' });
  }

  next(); // Allow request to continue
};
