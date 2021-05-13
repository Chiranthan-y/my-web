import React from 'react';
import HomeArt from './../../Assets/Home.svg';
import './Home.css';

import { Bounce } from 'react-reveal';
import data from './../../Data/index.json';

const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col '>
          <Bounce left>
            <div className='container-fluid'>
              <h1>{data.Home.title}</h1>
              <p>{data.Home.subtitle}</p>
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
