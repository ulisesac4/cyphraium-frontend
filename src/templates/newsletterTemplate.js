import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';

import Layout from '../components/Layout';

const NewsletterTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <div id="main">
        <div className="inner">
          <p>
            <i>
              Published in <Link to="/newsletter">Newsletter</Link> at{' '}
              {format(new Date(pageContext.publish_date), 'dd MMMM yyyy')}
            </i>
          </p>

          <h1>{pageContext.name}</h1>
        </div>
        <div
          className="inner"
          dangerouslySetInnerHTML={{ __html: pageContext.htmlContent }}
        ></div>
      </div>
    </Layout>
  );
};

export default NewsletterTemplate;
