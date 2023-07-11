require('dotenv').config();
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const User = require('./models/user')
// const mongoose = require ("mongoose");

// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))
app.use(express.json())
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/html/signup.html");
});

app.get('/signup', function (req, res) {
    res.sendFile(__dirname + "/html/signup.html");
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/html/login.html");
});

app.post('/signup', function (req, res) {
    // const email = req.body.email;
    // const name = req.body.name;
    // const username = req.body.username;
    // const password = req.body.password;

    // console.log("Testing");
    res.sendFile(__dirname + "/html/chatbot.html");

});

app.listen(PORT, () => console.log('Server started'));
