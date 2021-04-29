import React from 'react';
import HomeArt from './../../Assets/Home.svg';
import './Home.css';

import {
  SiInstagram,
  SiTwitter,
  SiGithub,
  SiReddit,
  SiLinkedin,
} from 'react-icons/si';

import { Bounce } from 'react-reveal';

const instagram = 'https://www.instagram.com/chiranthan.y/';
const twitter = 'https://twitter.com/itsyca_';
const github = 'https://github.com/Chiranthan-y';
const reddit = 'https://www.reddit.com/user/yca-dev';
const linkedin = 'https://www.linkedin.com/in/chiranthan-y-7144271b6/';

const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col '>
          <Bounce left>
            <div className='container-fluid'>
              <h1> Hi, I'm Chiranthan</h1>
              <p>
                A passionate Full Stack Software Developer having an experience
                of designing and building Web and Mobile applications with
                JavaScript / Reactjs / Nodejs and some other cool libraries and
                frameworks.
              </p>
            </div>

            <div className='container-fluid home__icons'>
              <a
                href={instagram}
                className='home__iconButton'
                target='_blank'
                rel='noreferrer'>
                <SiInstagram size={30} color={'#E1306C'} />
              </a>
              <a
                href={github}
                className='home__iconButton'
                target='_blank'
                rel='noreferrer'>
                <SiGithub size={30} color={'#333'} />
              </a>
              <a
                href={twitter}
                className='home__iconButton'
                target='_blank'
                rel='noreferrer'>
                <SiTwitter size={30} color={'#1DA1F2'} />
              </a>

              <a
                href={reddit}
                className='home__iconButton'
                target='_blank'
                rel='noreferrer'>
                <SiReddit size={30} color={'#FF4500'} />
              </a>
              <a
                href={linkedin}
                className='home__iconButton'
                target='_blank'
                rel='noreferrer'>
                <SiLinkedin size={30} color={'#2867B2'} />
              </a>
            </div>
          </Bounce>
        </div>

        <div className='col'>
          <Bounce right>
            <img src={HomeArt} className='img-fluid home-image' alt='...' />
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default Home;
