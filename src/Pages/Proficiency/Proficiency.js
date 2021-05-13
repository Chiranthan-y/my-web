import React from 'react';
import Nerd from './../../Assets/nerd-animate.svg';
import ProgressBar from './../../Components/ProgressBar/ProgressBar';
import './Proficiency.css';
import data from './../../Data/index.json';
const Proficiency = () => {
  return (
    <div className='container-fluid proficiency' id='proficiency'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col proficiency__right'>
          <div className='container-fluid'>
            <h1>{data.Proficiency.heading}</h1>

            {data.Proficiency.skills.map((res) => {
              return (
                <div className='proficiency__progressBar'>
                  <h3>{res.name}</h3>
                  <ProgressBar completed={res.percent} />
                </div>
              );
            })}
          </div>
        </div>

        <div className='col '>
          <img src={Nerd} alt='img' className='img-fluid proficiency-image' />
        </div>
      </div>
    </div>
  );
};

export default Proficiency;
