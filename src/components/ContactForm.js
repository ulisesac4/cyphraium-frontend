import { Link } from 'gatsby';
import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h2>Get in touch</h2>
      {/*<form method="post" action="#">
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Message" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send" className="primary" />
          </li>
        </ul>
      </form> */}
      <p>
        Hi! This is Cyphraium's Team. If you need to drop a Hi! you can always
        send us a <Link to="mailto:info@cyphraium.com">mail</Link>.
      </p>
      <p>
        You can also check how to{' '}
        <Link to="/newsletter/sponsor">sponsor our newsletter</Link>.
      </p>
    </section>
  );
}
