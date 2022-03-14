import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';
import { format } from 'date-fns';

const NewsletterPage = ({ data }) => {
  const newsletters = data.allNewsletterNewsletters.nodes[0].data;
  console.log(newsletters);
  return (
    <Layout>
      <div id="main">
        <div className="inner">
          <h1>Newsletter</h1>
          <span className="image main">
            <img src={pic1} alt="" />
          </span>

          <h2>Issues</h2>
          <ol>
            {newsletters.map((newsletter) => {
              return (
                <li key={newsletter.id}>
                  <Link
                    to={
                      '/newsletter/' +
                      newsletter.name.toLowerCase().replace(/ /g, '_')
                    }
                  >
                    <strong>{newsletter.name}</strong>
                    <span>
                      {' '}
                      -{' '}
                      <i>
                        published at,{' '}
                        {format(
                          new Date(newsletter.publish_date),
                          'dd MMMM yyyy'
                        )}
                      </i>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export const newsletterPageQuery = graphql`
  query {
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
`;

export default NewsletterPage;
