/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/newsletterTemplate.js');

    /*
    const feed = new Feed({
      title: "Ulises Avila's Blog",
      description: "This is my personal feed!",
      id: "https://ulisesavila.com/",
      link: "https://ulisesavila.com/",
      language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
      image: "http://ulisesavila.com/image.png",
      favicon: "http://ulisesavila.com/favicon.ico",
      copyright: "All rights reserved Ulises Avila",
      updated: new Date(),
      // optional, default = 'Feed for Node.js'
      feedLinks: {
        json: "https://ulisesavila.com/json.json",
        atom: "https://ulisesavila.com/atom.xml",
      },
      author: {
        name: "Ulises Avila",
        email: "ulisesavila04@gmail.com",
        link: "https://ulisesavila.com/",
      },
    })*/
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

        //console.log("le posts", JSON.stringify(posts[0]))
        //throw new Error("here")
        /*
        posts = posts.filter(({ node }) => {
          return (
            isBefore(new Date(node.frontmatter.date), new Date()) ||
            isEqual(new Date(node.frontmatter.date), new Date())
          );
        });*/
        //console.log('something', JSON.stringify(newsletters));
        newsletters.forEach((node) => {
          //console.log('le node', JSON.stringify(node));
          let newName = node.name.toLowerCase();
          newName = newName.replace(/ /g, '_');
          const path = `/newsletter/${newName}`;

          /*
          feed.addItem({
            title: node.frontmatter.title,
            id: `https://ulisesavila.com/${
              node.frontmatter.tag + '/' + node.frontmatter.path
            }`,
            link: `https://ulisesavila.com/${
              node.frontmatter.tag + '/' + node.frontmatter.path
            }`,
            date: new Date(node.frontmatter.date),
            content: node.html,
            author: [
              {
                name: 'Ulises Avila',
                email: 'ulisesavila04@gmail.com',
                link: 'https://ulisesavila.com',
              },
            ],
          });
*/
          createPage({
            path,
            component: postTemplate,
            context: node,
          });
        });
        // The tag pages
        /*
        const tagPage = path.resolve('src/templates/TagPage/index.js');
        tags.forEach((tag) => {
          console.log('I reach here');
          createPage({
            path: `/${tag.url}`,
            component: tagPage,
            context: {
              tagInfo: tag,
              tag: tag.url,
            },
          });
        });

        fs.writeFile('public/atom.xml', feed.atom1(), function (err) {
          if (err) return console.log(err);
          console.log('Hello World > helloworld.txt');
        });
        fs.writeFile('public/feed.xml', feed.rss2(), function (err) {
          if (err) return console.log(err);
          console.log('Hello World > helloworld.txt');
        });
        */
      })
    );
  });
};
