import React from 'react';
import './ProgresBar.css';

const ProgressBar = ({ completed }) => {
  return (
    <div className='progressBar'>
      <div
        style={{
          height: '100%',
          width: `${completed}%`,
          backgroundColor: '#536DFE',
          borderRadius: 'inherit',
          textAlign: 'right',
        }}>
        <span
          style={{
            padding: 5,
            color: 'black',
            fontWeight: 'bold',
          }}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
