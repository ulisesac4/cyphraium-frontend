import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

import { format } from 'date-fns';

import SubscribeForm from '../../components/SubscribeForm';

const SponsorPage = () => {
  return (
    <Layout>
      <div id="main">
        <div className="inner">
          <h1>
            Sponsor Cyphraium's Newsletter and put your brand or service in
            front of hundreds of people
          </h1>
          <h3>Why should I sponsor Cyphraium's Newsletter?</h3>
          <p>
            Sponsoring Cyphraium will let the crew work on better content and
            finding better ideas for this newsletter.
          </p>
          <p>
            With your help Cyphraium will also be able to bring you functions
            that are only ideas at the launch of this site.
          </p>
          <h3>What do you get by doing a sponsorship? </h3>
          <p>You will get the following:</p>
          <ul>
            <li>
              Put your product, service or jobs featured in the newsletter
            </li>
            <li>
              A permanent backlink in the web version in the agreed issues
            </li>
          </ul>
          <p>
            Backlinks will never leave this site, as they are an important part
            of this site, and a part of the content of the newsletter. Removing
            them after the relationship has been fulfilled would fell like
            striping the site of its content.
          </p>
          <h2>Sponsor rates</h2>
          <p>
            This fees puts your sponsored content for 2 weeks. There are 2 types
            of content. Products and Services, and Job Postings.
          </p>
          <p>
            There are only 2 Product and Services advertising slots per
            newsletter, and 5 Job Postings per newsletter.
          </p>
          <p>
            They are accomodated in two separate parts at the end of the
            newsletter. First comes <code>Products and Services</code> and after
            that <code>Job Postings</code>.
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Products and Services</td>
                  <td>70 usd</td>
                </tr>
                <tr>
                  <td>Job Postings</td>
                  <td>50 usd</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Sponsorship elements are served as they come. And there is no
            special ordering on them.
          </p>
          <p>
            In the following you can see how the advertisements look like in the
            newsletter:
          </p>
          <h4> Example for a product/service </h4>
          <p>A Product and Service look like this:</p>
          <blockquote>
            <strong>Datadog - Application monitoring done right</strong>
            <p>
              With Datadog, you can see all your data in one place. See Amazon
              stats on your servers, as well as detailed numbers of your
              PostgreSQL, Elasticsearch, Node & other applications. Sign up for
              a free 14- day trial.
            </p>
          </blockquote>
          <p>
            A Product and Service format is straight forward, but keep in mind
            the next things:
          </p>
          <ul>
            <li>Title: No more than 60 characters</li>
            <li>
              Paragraph: 300 characters. The better you can explain your service
              like a tweet the better
            </li>

            <li>
              URL: The url will be in the title of your posting, you can use any
              link you need, you can even put params on it
            </li>
          </ul>
          <p>
            I unfortunately cannot do Copy, so I will not be able to suggest
            better wording in your posting
          </p>
          <h4> Example for a job posting </h4>
          <p>A Job Posting looks like this:</p>
          <blockquote>
            <strong>Marketing Advisor in Cyphraium</strong>
            <p>
              You will guide the execution and planning of kpis of Cyphraium.
              Python experience is a plus.
            </p>
            <p>
              <strong>Location</strong>: Remote
            </p>
          </blockquote>
          <p>
            I strongly suggest to separate the main body and the location like
            in the example, but keep in mind that you are free to choose the
            main content and the way it is shown with some limitations and
            rules:
          </p>
          <ul>
            <li>
              Title: No more than 60 characters, they are in normal
              capitalization only, example “Job Title at Company Name”
            </li>
            <li>
              Paragraph: 300 characters. The better you can explain your job
              like a tweet the better
            </li>
            <li>Location</li>
            <li>
              URL: The url will be in the title of your posting, you can use any
              link you need, you can even put params on it
            </li>
          </ul>
          <h2>I want to sponsor you, How do I reach you?</h2>
          <p>
            Shoot us a message to{' '}
            <Link to="info@cyphraium.com">info@cyphraium.com</Link>. We will
            give you our possible slots in the next weeks. Then, once we have
            agreed, I would need from you:
            <ol>
              <li>Advertisement's title</li>
              <li>The link where it points to</li>
              <li>The body of the paragraph</li>
            </ol>
          </p>
          <h2>Billing details</h2>
          <p>
            The invoice will be sent from Cyphraium's owner,{' '}
            <Link to="https://ulisesavila.com/about-me/">Ulises Avila</Link>.
            Payment can be done with any method supported by Stripe.
          </p>
          <p>
            After payment has been confirmed Cyphraium's owner will contact you
            back with the agreed content and dates of your sponsorship.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SponsorPage;
