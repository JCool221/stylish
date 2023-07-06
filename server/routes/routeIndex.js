const express = require('express');
const router = express.Router();
const contactRouter = require('./contact/contactRoute');

router.use('/contact', contactRouter);

module.exports = router;