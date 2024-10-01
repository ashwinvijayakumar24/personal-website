const express = require('express');
const router = express.Router();
const schemas = require('../models/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Existing route to get all blogs
router.get('/api/blogs', async (req, res) => {
    const blogs = await schemas.Blogs.find()
    if(blogs) {
        res.send(blogs)
    }
});

// New route to create a blog
router.post('/api/blogs', authenticateToken, async (req, res) => {
    try {
        const newBlog = new schemas.Blogs(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// New route to update a blog
router.put('/api/blogs/:id', authenticateToken, async (req, res) => {
    try {
        const updatedBlog = await schemas.Blogs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// New route for admin login
router.post('/api/login', async (req, res) => {
    const adminUser = {
        username: process.env.ADMIN_USERNAME,
        passwordHash: process.env.ADMIN_PASSWORD_HASH
    };

    const { username, password } = req.body;

    if (username === adminUser.username && await bcrypt.compare(password, adminUser.passwordHash)) {
        const token = jwt.sign({ username: adminUser.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;