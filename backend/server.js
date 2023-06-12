const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Serve the frontend HTML file and static assets
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle the API requests
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/api/send-message', function(req, res) {
  const webhookUrl = 'https://iitkgpacin.webhook.office.com/webhookb2/ed767f85-948d-49f8-b7de-204726312eb2@71dbb522-5704-4537-9f25-6ad2dcd4278d/IncomingWebhook/1a3869380fc84c68b8113ae865386960/eefad0c8-d8ef-4628-8844-9122eb58a435'

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: 'A user clicked the button on your website!',
    }),
  })
    .then(function(response) {
      if (response.ok) {
        res.sendStatus(200);
      } else {
        res.sendStatus(500);
      }
    })
    .catch(function(error) {
      console.error('An error occurred while sending the message:', error);
      res.sendStatus(500);
    });
});

const port = 3000;
app.listen(port, function() {
  console.log(`Server is running on http://localhost:${port}`);
});
