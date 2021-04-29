import React from 'react';
import ContactArt from '../../Assets/ContactArt.svg';
import './Contact.css';

const Contact = () => {
  return (
    <div className='container-fluid contact' id='contact'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col d-none d-lg-block d-xl-block'>
          <img src={ContactArt} alt='img' className='img skills-image' />
        </div>
        <div className='col'>
          <div className='container-fluid'>
            <h1>Contact Me!</h1>
            <p>
              Discuss a project or just want to say hi? My Inbox is open for
              all.
            </p>
            <div className='contact__tagContainer'>
              <a href='mailto:chiranthan.y@yahoo.com' className='contact__tags'>
                chiranthan.y@yahoo.com
              </a>
              <a href='tel:+918903502305' className='contact__tags'>
                (890)350 2305
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
