let users = require('../users.json');
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
    res.status(200).json(users)
});

router.get('/:id', (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    res.status(200).json(user);
});

router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(200).json({ created: true });
});


router.put('/:id', (req, res) => {
    users.forEach(user => {
        if(user.id === req.params.id)
            Object.assign(user, req.body);
    });
    res.status(200).json({ updated: true });
});

router.delete('/:id', (req, res) => {
    users = users.filter(user => user.id !== req.params.id);
    res.status(200).json({ deleted: true });
});

module.exports = router;
