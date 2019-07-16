const express = require('express');
const app = express();
const port = 5000;
const initialMessages = require('./messages.json')

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send(initialMessages);
});