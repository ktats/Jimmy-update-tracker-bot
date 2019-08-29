const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 80;
const rp = require('request-promise');
const cheerio = require('cheerio');
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('eyyyyo');
});

// setInterval(() => console.log(2+2), 1000);

function bot() {

}
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})