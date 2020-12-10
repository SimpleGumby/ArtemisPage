import React from 'react';
import '../styles/footer.css';
import twitter from '../images/logo-twitter.svg';
import itag from '../images/itag.svg';

const Footer = () => {
  return (
    <div className='footerwrapper'>
      <section>
        <a href='https://github.com/oslabs-beta/projectArtemis/blob/main/README.md'>
          <img src={itag} alt='docs icon' className='icon'></img>
        </a>
      </section>
      <section>
        <a href='https://twitter.com/Artemis_Proj'>
          <img src={twitter} alt='twitter icon' className='icon'></img>
        </a>
      </section>
      <section>
        <a
          class='github-button'
          href='https://github.com/oslabs-beta/projectArtemis'
          data-icon='octicon-star'
          data-size='large'
          data-show-count='true'
          aria-label='Star oslabs-beta/projectArtemis on GitHub'>
          Star
        </a>
      </section>
    </div>
  );
};

export default Footer;
