import React from 'react';
import Helmet from 'react-helmet';

const SubscribeForm = () => {
  const styleForm = `#mc_embed_signup{background:#f6f6f6; clear:left; font:14px Helvetica,Arial,sans-serif;}`;
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
      </Helmet>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {styleForm}
        {/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://cyphraium.us14.list-manage.com/subscribe/post?u=598ede021177e8ee34accc465&amp;id=8e6b9b3093"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <p style={{ color: '#a6a6a6' }}>
              This is a newsletter about Web3 news
            </p>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div hidden="true">
              <input type="hidden" name="tags" value="7158071" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>{' '}
            {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_598ede021177e8ee34accc465_8e6b9b3093"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="primary"
                    />
                  </li>
                </ul>
                <p className="brandingLogo">
                  <a
                    href="http://eepurl.com/hY21Kf"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                  </a>
                </p>
              </div>
            </div>
            <p style={{ color: '#a6a6a6' }}>
              It features news, tutorials and new projects. If you are an
              enthusiast about Web3 I am sure you will find important
              information here.
            </p>
          </div>
        </form>
      </div>

      {/*<!--End mc_embed_signup-->*/}
    </>
  );
};

export default SubscribeForm;
