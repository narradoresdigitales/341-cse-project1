const express = require('express');
const router = express.Router();

const contactControllers = require('../controllers/contacts');

router.get('/', contactControllers.getAll);

router.get('/:id', contactControllers.getSingle);

module.exports = router;