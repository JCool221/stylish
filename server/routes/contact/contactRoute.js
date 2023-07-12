const express = require('express');
const router = express.Router();
const { sendEmail } = require('../../controllers/emailController')

router.post('/', (req, res) => {
  const { email, body } = req.body;

  console.log(email)
  console.log(body)

  sendEmail(email, body)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    });


})

module.exports = router