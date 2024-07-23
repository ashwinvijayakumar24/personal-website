const express = require('express');
const router = express.Router();
const schemas = require('../models/schema');

router.get('/api/blogs', async (req, res) => {
    const blogs = await schemas.Blogs.find()
    if(blogs) {
        res.send(blogs)
    }
})


module.exports = router;
