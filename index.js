
const morgan = require('morgan');
const bodyParser = require('bodyParser');


const express = require('express');
const app = express();


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


//start server

app.listen('3000', () => {
	console.log('server on port', 3000);
});
