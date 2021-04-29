import React from 'react';
import Nerd from './../../Assets/nerd-animate.svg';
import ProgressBar from './../../Components/ProgressBar/ProgressBar';
import './Proficiency.css';

const Proficiency = () => {
  return (
    <div className='container-fluid proficiency' id='proficiency'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col proficiency__right'>
          <div className='container-fluid'>
            <h1>Proficiency</h1>
            <div className='proficiency__progressBar'>
              <h3>FrontEnd / Design</h3>
              <ProgressBar completed={80} />
            </div>

            <div className='proficiency__progressBar'>
              <h3>BackendEnd</h3>
              <ProgressBar completed={70} />
            </div>

            <div className='proficiency__progressBar'>
              <h3>Programming</h3>
              <ProgressBar completed={75} />
            </div>
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
