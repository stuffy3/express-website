const express = require('express');
// const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/',(req, res) => {
    res.send('Hello')
})

app.listen(3000,() => {
    debug(`docked on port 3000`)
});