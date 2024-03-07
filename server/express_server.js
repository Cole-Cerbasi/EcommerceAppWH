
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

const coroption = {
  origin: ['http://localhost:4200'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
  optionsSuccessStatus: 204,
};


app.use(cors(coroption));
const port = 3000;

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'items'
});
connection.connect();

app.get('/api/items', (req, res)=>{
    connection.query('SELECT * FROM wh_items', (err, re)=>{
      if(err){
        throw err;
      }
      res.json(re);
    });
});

app.post('/api/signup', (req, res)=>{
    console.log("api hit");
    console.log(req);
    var POST_DATA = req.body;
    const email = connection.escape(POST_DATA.email);
    const password = connection.escape(POST_DATA.password);
    const promo = connection.escape(POST_DATA.allow_promo);
    connection.query(`INSERT INTO user_data (email, password, accept_promo) VALUES (${email}, ${password}, ${promo});`, (err, re)=>{
      if(err){
        throw err;
      }
      res.json(["completed."]);
    });
});

app.listen(port, ()=>{
  console.log("express server running on localhost:"+port);
});
