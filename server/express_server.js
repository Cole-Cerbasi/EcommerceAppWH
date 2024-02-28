
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

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

app.listen(port, ()=>{
  console.log("express server running on localhost:"+port);
});
