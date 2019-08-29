// Write a function that gets the reddit page information
// Do set interval on it in the index

const rp = require('request-promise');
const cheerio = require('cheerio');


module.exports.updateCheck = (req, res) => {
  const url = ('http://google.com')
  rp(url)
   .then((response) => {
       res.send(response);
   })
}



// const { accountSid, authToken }= require('../config.js');
// const client = require('twilio')(accountSid, authToken);
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Runasdfasdf in fourteen parsecs?',
//      from: '+17084983783',
//      to: '+16302979430'
//    })
//   .then(message => console.log(message.sid));