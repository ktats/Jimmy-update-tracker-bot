// Write a function that gets the reddit page information
// Do set interval on it in the index

const rp = require('request-promise');
const cheerio = require('cheerio');

const { accountSid, authToken }= require('../config.js');
const client = require('twilio')(accountSid, authToken);

var sampleText = 'Go Be';

module.exports.updateCheck = (req, res) => {
  const url = ('http://reddit.com/u/fizzthewiz/posts');
  rp(url)
   .then((html) => {
       const $ = cheerio.load(html);
       const posts = $('._eYtD2XCVieq6emjKBH3m').text();
       if (posts.slice(10,15) === sampleText) {
           console.log(posts.slice(10,15));
           return true;
       } else {
           console.log('there was a change! expect a text soon');
           sampleText = posts.slice(10,15);
        client.messages
        .create({
           body: `New post from Jim, here it is: ${posts.slice(10, 200)}`,
           from: '+17084983783',
           to: '+16302979430'
         })
        .then(message => console.log(message.sid));
       }
   });
}