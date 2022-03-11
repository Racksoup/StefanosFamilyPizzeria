const express = require('express');
const router = express.Router();

const api_key = 'key-d4ae630b30908413db007f2dc7c292cc';
const domain = 'sandboxa5b0407e49eb45a295d2f2779cc9d03f.mailgun.org';
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

router.post('/', async (req, res) => {
  const { senderName, subject, message, email } = req.body;
  var data = {
    from: `${senderName} ${email}`,
    to: 'connor.rack@yahoo.com',
    subject,
    text: message,
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    }
    console.log(body);
  });
});

module.exports = router;
