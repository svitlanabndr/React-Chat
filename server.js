const express = require('express');
const app = express();
const port = 5000;
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
let users = require('./users.json');
const chatRouter = require('./routers/chatRouter');
const usersRouter = require('./routers/usersRouter');
const loginRouter = require('./routers/loginRouter');

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const verified = jwt.verify(req.body.jwt, 'secret');
    if (!verified) res.status(401).json({ auth: false });
    const user = users.find(user => user.login === verified.login);
    user.login === 'admin' && user.password === 'admin' ?
        res.status(200).json({ auth: true, admin: user }) :
        res.status(200).json({ auth: true, user });    
});

app.use('/chat', chatRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
