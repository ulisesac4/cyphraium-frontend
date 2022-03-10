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
          <h1>Generic Page</h1>
          <span className="image main">
            <img src={pic1} alt="" />
          </span>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor
            sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,
            fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
            Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
            Curabitur sapien risus, commodo eget turpis at, elementum convallis
            elit. Pellentesque enim turpis, hendrerit tristique.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel venenatis
            mauris vehicula hendrerit.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
            risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p>
          <h4>Issues</h4>
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
