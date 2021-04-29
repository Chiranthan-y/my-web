import React from 'react';
import Headroom from 'react-headroom';
import './Header.css';
const logoText = '<Chiranthan />';

const Header = () => {
  return (
    <Headroom>
      <div className='header'>
        <div className=''>
          <a href='/' className='header__logo'>
            {logoText}
          </a>
        </div>
        <ul className='header__items'>
          <li>
            <a href='#skills' className='header__list'>
              Skills
            </a>
          </li>
          <li>
            <a href='#proficiency' className='header__list'>
              Proficiency
            </a>
          </li>
          <li>
            <a href='#contact' className='header__list'>
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </Headroom>
  );
};

export default Header;
