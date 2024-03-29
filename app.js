const express = require('express');
// const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
const sessionsRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

sessionsRouter.route('/')
    .get((req, res ) => {
        res.render('sessions', {
            sessions: [
                {title: 'Session 1', description: 'this is session 1'},
                {title: 'Session 2', description: 'this is session 2'},
                {title: 'Session 3', description: 'this is session 3'},
                {title: 'Session 4', description: 'this is session 4'},
             ],
        })
    })

app.use('/sessions', sessionsRouter)
app.get('/',(req, res) => {
    res.render('index', {title: 'Globalmantics', data: ['a', 'b' ,'c']})
})

app.listen(PORT,() => {
    debug(`docked on port ${PORT}`)
});