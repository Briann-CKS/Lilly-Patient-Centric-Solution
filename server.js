require('dotenv').config();
const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const User = require('./models/user')
const mongoose = require ("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
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

app.get('/chatbot', function (req, res) {
    res.sendFile(__dirname + "/html/chatbot.html");
})

app.post('/signup', function (req, res) {
    const Email = req.body.email;
    const FullName = req.body.name;
    const Username = req.body.username;
    const Password = req.body.password;

    console.log(Email);
    console.log(FullName);
    console.log(Username);
    console.log(Password);
    res.redirect("/chatbot");

});

app.post('/login', function (req, res) {
    const Email = req.body.email;
    const FullName = req.body.name;
    const Username = req.body.username;
    const Password = req.body.password;

    console.log(Email);
    console.log(FullName);
    console.log(Username);
    console.log(Password);
    res.redirect("/chatbot");
});

app.listen(PORT, () => console.log('Server started'));
