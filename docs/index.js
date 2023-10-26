const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT);


app.use(morgan('dev'));

// globalVariables

// routes

//public

// staringServer

app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});