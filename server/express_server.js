
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
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

app.post('/api/product', (req, res)=>{
    var POST_DATA = req.body;
    const search = `%${POST_DATA.search}%`;
    connection.query('SELECT name FROM wh_items WHERE name LIKE ?', [search], (err, re) => {
      if (err) {
        console.log(err);
      }
      res.json(re);
    });
});

app.post('/api/login', (req, res)=>{
    var POST_DATA = req.body;
    const email = POST_DATA.email;
    const password = POST_DATA.password;

    console.log("login attempt with: "+email+", "+password);

    //creating new token
    const gentoken = uuidv4();
    var c = connection.query('UPDATE user_data SET auth_token = ? WHERE password = ? AND email = ?', [gentoken, password, email], (err, re) => {
      if (err) {
        console.log(err);
      }
      console.log(c.sql);
      if(re.changedRows == 0){
        res.json([
          'bad'
        ]);
      }else{
        res.json([
          gentoken
        ]);
      }
    });
});

//testing two queries
app.get('/api/items', (req, res)=>{
    connection.query('SELECT * FROM wh_items', (err, re)=>{
      if(err) throw err;
      //running second thing
      let linkp = re.map(item=>{
        return new Promise((res, rej)=>{
          let item_id = item.idwh_items;
          connection.query(`SELECT link.* FROM item_links link JOIN wh_items items ON link.idwh_item = items.idwh_items WHERE items.idwh_items = ?`, [item_id], (err, re)=>{
            if(err) rej(err);
            item.links = re;
            res(item);
          });
        });
      });
      //wait, then send
      Promise.all(linkp).then(linked_items => res.json(linked_items) ).catch(err=>{throw err});
    });
});

app.post('/api/signup', (req, res)=>{
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
