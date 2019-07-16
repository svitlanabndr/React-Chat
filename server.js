const express = require('express');
const app = express();
const port = 5000;
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const initialMessages = require('./messages.json');

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/chat', (req, res) => {
    res.send(initialMessages);
});

app.post('/login', (req, res) => {
    const userFromReq = req.body;
    // const userInDB = users.find(user => user.login === userFromReq.login);
    // if (userInDB && userInDB.password === userFromReq.password) {
    //     const token = jwt.sign(userFromReq, 'secret');
    //     res.status(200).json({ auth: true, token });
    // } else {
    //     res.status(401).json({ auth: false });
    // }
});