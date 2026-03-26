const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// GET /api/user/:uid
router.get('/:uid', userController.fetchUser);

module.exports = router;