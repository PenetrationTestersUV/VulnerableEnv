var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var cors = require('cors');

app.use(express.static('client'));
app.use(cors());

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'reach2552',
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
    response.send('Welcome back, ' + '!');
    //response.sendFile(path.join(__dirname + '/client/index.html'));
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
        var query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
// check if user exists
        connection.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`, function(error, results, fields) {
            if(error){
                console.log(error);
                response.send( {message:'Error 404 - Not found'});
                response.end();
            } else{
                if (results.length > 0) {
                    //request.session.loggedin = true;
                    //request.session.username = username;
                    user_session = true;
                    response.send({logged: user_session});
                } else {
                    response.send({message: query});
                }
                response.end();
            }
        });
    } else {
        response.send( {message: 'Please enter Username and Password!'});
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