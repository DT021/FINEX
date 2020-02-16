const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

//for user auth
const session = require('express-session');
const passport = require('./passport');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());

//session setup to save session info
app.use(
    session({
        secret: 'super-secret-secret',
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false,
        saveUninitialized: false
    })
)

//passport
app.use(passport.initialize());
app.use(passport.session());


app.use(require('./Routers/router'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));