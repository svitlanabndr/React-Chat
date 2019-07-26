let messages = require('../messages.json');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send(messages);
});

router.post('/', (req, res) => {
    messages.push(req.body);
    res.send(messages);
});

router.get('/:id', (req, res) => {
    res.send(messages.find(message => message.id === req.params.id));
});

router.post('/:id', (req, res) => {
    const newText = req.body.value;
    messages = messages.map(message => {
        if (message.id === req.params.id) message.message = newText;
        return message;
    });
    res.status(200).json({ updated: true });
});

router.delete('/:id', (req, res) => {
    messages = messages.filter(message => message.id !== req.params.id);
    res.status(200).json({ deleted: true });
});

router.post('/like/:id', (req, res) => {
    messages = messages.map(message => {
        if (message.id === req.params.id) message.is_liked = !message.is_liked;
        return message;
    });
    res.status(200).json({ liked: true });
});

module.exports = router;
