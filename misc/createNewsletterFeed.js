const Feed = require('feed').Feed;

const feed = new Feed({
  title: "Cyphraium's Web3 newsletter",
  description: 'This is my personal feed!',
  id: 'https://cyphraium.com/',
  link: 'https://cyphraium.com/',
  language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: 'http://cyphraium.com/image.png',
  favicon: 'http://cyphraium.com/favicon.ico',
  copyright: 'All rights reserved Cyphraium & UlisesAC4',
  updated: new Date(),
  // optional, default = 'Feed for Node.js'
  feedLinks: {
    //json: 'https://cyphraium.com/json.json',
    atom: 'https://cyphraium.com/newsletter-atom.xml',
  },
  author: {
    name: 'Ulises Avila',
    email: 'ulisesavila04@gmail.com',
    link: 'https://ulisesavila.com/',
  },
});

module.exports = feed;
