import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const NewsletterTemplate = ({ pageContext }) => {
  console.log('in context', pageContext);
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
