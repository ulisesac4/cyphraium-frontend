const Feed = require('feed').Feed;

const feed = new Feed({
  title: "Ulises Avila's Blog",
  description: 'This is my personal feed!',
  id: 'https://ulisesavila.com/',
  link: 'https://ulisesavila.com/',
  language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: 'http://ulisesavila.com/image.png',
  favicon: 'http://ulisesavila.com/favicon.ico',
  copyright: 'All rights reserved Ulises Avila',
  updated: new Date(),
  // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: 'https://ulisesavila.com/json.json',
    atom: 'https://ulisesavila.com/atom.xml',
  },
  author: {
    name: 'Ulises Avila',
    email: 'ulisesavila04@gmail.com',
    link: 'https://ulisesavila.com/',
  },
});

module.exports = feed;
