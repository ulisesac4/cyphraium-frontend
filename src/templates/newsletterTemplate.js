import React from 'react';

import Layout from '../components/Layout';

const NewsletterTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <div id="main">
        <div className="inner">
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
