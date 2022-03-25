const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'health'
});
 
// conn.connect();

// Get all tests
router.get('/tests', (req, res) => {
  let { username } = req.query;
  let sql = "SELECT * FROM covid";

  if (typeof username == 'string' && username != "") {
    sql += ` WHERE username='${username}'`; 
  }

  try {
    conn.query(sql, (error, results, fields) => {
      if (error) throw error;

      res.json(results);
    });
  } catch (error) {
    res.json({ error: 'sql_error' });  
    console.log(fields);
  }
});

// Add tests
router.post('/tests', (req, res) => {
  let { username, age, dateTime, type } = req.body;
  let data = { username, age, date: dateTime, type };
  let sql = "INSERT INTO covid SET ?";

  try {
    conn.query(sql, data, (error, results, fields) => {
      if (error) {
        res.json({ error: 'sql_error', message: error });
        return; 
      };

      res.json({ error: 'none' });
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete test
router.delete('/tests/:id', (req, res) => {
  if (req.params.id === undefined) { res.json({ error: 'no_parameter' }); return; }
  let pid = req.params.id;
  let sql = "DELETE FROM covid WHERE id=?";

  try {
    conn.query(sql, [pid], (error, results, fields) => {
      if (error) {
        res.json({ error: 'sql_error', message: error });
        return; 
      };

      res.json({ error: 'none' });
    });
  } catch (error) {
    console.log(error);
  }
});

// Get all users
router.get('/users', (req, res) => {
  conn.query("SELECT * FROM users", (error, results, fields) => {
    if (error) throw error;
    if (results.length === 0) { res.json({ error: 'no_users_found' }); return };

    let data = results.map(({ id, username, email }) => {
      return {
        id,
        username,
        email
      }
    });

    res.json({ error: 'none', results: data });
  });
});


// User login
router.post('/login', (req, res) => {
  if (req.body.password === undefined || req.body.username === undefined) { res.json({ error: 'empty_fields' }); return; } 

  console.log("Request body", req.body);

  conn.query('SELECT * FROM users WHERE username = ?', [req.body.username], function (error, results, fields) {
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

router.get('/create', (req, res) => {
  let sql = "INSERT INTO users SET ?";

  bcrypt.hash("admin", 10)
    .then(hash => {
      conn.query(sql, { username: 'Sebko Synak', email: 'sebko@gmail.com', password: hash }, (error, results, fields) => {
        if (error) throw error;

        res.json({ error: 'none' })
      });
    }).catch(err => { res.json({ error: err }); });
});

module.exports = router;