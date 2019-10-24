const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 2000;
app.use(morgan('dev'));
const { updateCheck } = require('./updateCheck.js');


app.get('/test', (req, res) => {
    res.send('Looks like the server is in fact running! This time on Jim');
});

//twillio number (708) 498-3783

// setInterval(updateCheck, 600000);

setInterval(updateCheck, 1000);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})