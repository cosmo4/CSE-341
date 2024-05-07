const express = require('express');
const router = express.Router();

const baseController = require('../controllers/baseController');

// GET /feed/posts
router.get('/', baseController.getData);


module.exports = router;



