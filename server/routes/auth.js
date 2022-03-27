const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'health'
// });

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// User
router.get('/user', (req, res) => {
  let sql = "INSERT INTO users SET ?";

  bcrypt.hash("admin", 10)
    .then(hash => {
      conn.query(sql, { username: 'admin', email: 'super@user.com', password: hash }, (error, results, fields) => {
        if (error) throw error;

        res.json({ error: 'none' })
      });
    }).catch(err => { res.json({ error: err }); });
});

// Login Admin
router.post('/admins/login', (req, res) => {
  if (req.body.password === undefined || req.body.username === undefined) { res.json({ error: 'empty_fields' }); return; } 

  console.log("Request body", req.body);

  conn.query('SELECT * FROM admins WHERE username = ?', [req.body.username], function (error, results, fields) {
    if (error) throw error;
    if (results.length === 0) { res.json({ error: 'no_user_found' }); return };
    if (!results[0].password) { res.json({ error: 'no_user_password' }); return };

    console.log("Database length", results.length);
    console.log("Database", results);

    bcrypt.compare(req.body.password, results[0].password, (err, same) => {
      if (err) throw err;
      if (!same) { res.json({ error: 'passwords_dont_match' }); return; }

      res.json({ error: 'none', results });
    });
  });
});

// Create Admin 
router.get('/admins/create', (req, res) => {
  let sql = "INSERT INTO admins SET ?";

  bcrypt.hash("admin", 10)
    .then(hash => {
      conn.query(sql, { username: 'admin', password: hash, created: String(Date.now()) }, (error, results, fields) => {
        if (error) throw error;

        res.json({ error: 'none' })
      });
    }).catch(err => { res.json({ error: err }); });
});

module.exports = router;