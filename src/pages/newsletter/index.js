import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

import { format } from 'date-fns';

import SubscribeForm from '../../components/SubscribeForm';

const NewsletterPage = ({ data }) => {
  const newsletters = data.allNewsletterNewsletters.nodes[0].data;
  console.log(newsletters);

  return (
    <Layout>
      <div id="main">
        <div className="inner">
          <h1>Cyphraium's Weekly Newsletter</h1>
          <span className="image main">
            <SubscribeForm />
          </span>

          <h2>The cron.weekly archives</h2>
          <p>
            These are all the issues that have ever been sent in the newsletter.
            If you prefer to read these online, you can subscribe to the{' '}
            <Link to="/newsletter-atom.xml">Atom</Link> or{' '}
            <Link to="/newsletter-feed.xml">RSS</Link> feed instead of the
            e-mail newsletter.
          </p>

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
