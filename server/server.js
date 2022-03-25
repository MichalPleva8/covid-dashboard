const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');

const apiRoutes = require('./routes/api.js');
const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, "../", "client", "build")));
	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html"));
	});
}

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));