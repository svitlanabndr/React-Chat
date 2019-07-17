const express = require('express');
const app = express();
const port = 5000;
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const messages = require('./messages.json');
let users = require('./users.json');

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/chat', (req, res) => {
    res.send(messages);
});

app.post('/login', (req, res) => {
    const userFromReq = req.body;
    const userInDB = users.find(user => user.login === userFromReq.login);
    if (userInDB && userInDB.password === userFromReq.password) {
        const token = jwt.sign(userFromReq, 'secret');
        res.status(200).json({ auth: true, token });
    } else {
        res.status(401).json({ auth: false });
    }
});

app.get('/user', (req, res) => {
    res.status(200).json(users)
});

app.get('/user/:id', (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    res.status(200).json(user);
});

app.post('/user', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(200).json({ created: true });
});


app.put('/user/:id', (req, res) => {
    users.forEach(user => {
        if(user.id === req.params.id)
            Object.assign(user, req.body);
    });
    res.status(200).json({ updated: true });
});

app.delete('/user/:id', (req, res) => {
    users = users.filter(user => user.id !== req.params.id);
    res.status(200).json({ deleted: true });
});