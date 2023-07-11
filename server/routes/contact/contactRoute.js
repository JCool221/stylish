  const express = require('express');
  const router = express.Router();

  router.post('/', (req, res) => {
    const {email, body} = req.body;

    console.log(email)
    console.log(body)

    res.send('recieved')  
  })

  module.exports = router