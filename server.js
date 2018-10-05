const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

let listenPort = process.env.PORT || 3000;

const signup = require('./controllers/signup');
const login = require('./controllers/login');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: true
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('Database home page') })
app.post('/login', login.handleLogin(db, bcrypt))
app.post('/signup', (req, res) => { signup.handleSignup(req, res, db, bcrypt) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(listenPort, ()=> {
  console.log(`app is running on port ${listenPort}`);
})
