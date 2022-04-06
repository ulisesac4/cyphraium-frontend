import React from 'react';
import SubscribeForm from '../components/SubscribeForm';
import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            This is Cyphraium, your hub for Web3 news.
            <br />
          </h1>
          <SubscribeForm />
          <p>
            You can subscribe to our weekly newsletter with the above form, or
            you can go to the <Link>Newsletter</Link> page to read online our
            own issues or get to know our ATOM and RSS feeds.
          </p>
        </header>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
