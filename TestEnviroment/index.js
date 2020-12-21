var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(express.static('client'));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'auth'
});

var user_session = false;

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/home', function(request, response) {
    if(user_session == true){
        response.sendFile(path.join(__dirname + '/client/home/home.html'));
    } else {
        response.redirect("/")
    }
});

// for action
app.post('/login', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    console.log(username, password);
    if (username && password) {
// check if user exists
        connection.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`, function(error, results, fields) {
            if(error){
                console.log(error);
                response.send('Error 404 - Not found');
                response.end();
            } else{
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.username = username;
                    user_session = true;
                    response.redirect('/home');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }           
                response.end();
            }   
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.get('/dashboard', function(request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

app.listen(3001);