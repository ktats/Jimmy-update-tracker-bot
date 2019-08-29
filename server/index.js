const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 80;
const rp = require('request-promise');
const cheerio = require('cheerio');
app.use(morgan('dev'));
const { updateCheck } = require('./updateCheck.js');


app.get('/', (req, res) => {
    res.send('eyyyyo');
});

// setInterval(() => console.log(2+2), 1000);

//twillio number (708) 498-3783

app.get('/update', updateCheck);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})