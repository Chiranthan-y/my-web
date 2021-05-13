import React from 'react';
import ContactArt from '../../Assets/ContactArt.svg';
import './Contact.css';
import { SiTwitter, SiGithub, SiReddit, SiLinkedin } from 'react-icons/si';

import data from './../../Data/index.json';

const twitter = 'https://twitter.com/itsyca_';
const github = 'https://github.com/Chiranthan-y';
const reddit = 'https://www.reddit.com/user/yca-dev';
const linkedin = 'https://www.linkedin.com/in/chiranthan-y-7144271b6/';

const Contact = () => {
  return (
    <div className='container-fluid contact' id='contact'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col d-none d-lg-block d-xl-block'>
          <img src={ContactArt} alt='img' className='img skills-image' />
        </div>
        <div className='col'>
          <div className='container-fluid'>
            <h1>{data.Contact.heading}</h1>
            <p>{data.Contact.title}</p>
            <div className='contact__tagContainer'>
              <a
                href={`mailto:${data.Contact.email}`}
                className='contact__tags'>
                {data.Contact.email}
              </a>
            </div>
            <div className='container-fluid contact__icons'>
              <a href={github} target='_blank' rel='noreferrer'>
                <SiGithub size={30} color={'#333'} />
              </a>
              <a href={twitter} target='_blank' rel='noreferrer'>
                <SiTwitter size={30} color={'#1DA1F2'} />
              </a>

              <a href={reddit} target='_blank' rel='noreferrer'>
                <SiReddit size={30} color={'#FF4500'} />
              </a>
              <a href={linkedin} target='_blank' rel='noreferrer'>
                <SiLinkedin size={30} color={'#2867B2'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
