/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const fs = require('fs');
const newsletterFeed = require('./misc/createNewsletterFeed');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const newsletterTemplate = path.resolve(
      'src/templates/newsletterTemplate.js'
    );

    resolve(
      graphql(
        `
          query AllNewsletters {
            allNewsletterNewsletters {
              nodes {
                data {
                  htmlContent
                  id
                  name
                  publish_date
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }

        let newsletters = result.data.allNewsletterNewsletters.nodes[0].data;

        newsletters.forEach((node) => {
          //console.log('le node', JSON.stringify(node));
          let newName = node.name.toLowerCase();
          newName = newName.replace(/ /g, '_');
          const path = `/newsletter/${newName}`;

          newsletterFeed.addItem({
            title: newName,
            id: `https://cyphraium.com/${'newsletter/' + newName}`,
            link: `https://cyphraium.com/${'newsletter/' + newName}`,
            date: new Date(node.publish_date),
            content: node.htmlContent,
            author: [
              {
                name: 'Ulises Avila',
                email: 'ulisesavila04@gmail.com',
                link: 'https://cyphraium.com',
              },
            ],
          });

          createPage({
            path,
            component: newsletterTemplate,
            context: node,
          });
        });

        fs.writeFile(
          'public/newsletter-atom.xml',
          newsletterFeed.atom1(),
          function (err) {
            if (err) return console.log(err);
            console.log('Hello World > helloworld.txt');
          }
        );
        fs.writeFile(
          'public/newsletter-feed.xml',
          newsletterFeed.rss2(),
          function (err) {
            if (err) return console.log(err);
            console.log('Hello World > helloworld.txt');
          }
        );
      })
    );
  });
};
