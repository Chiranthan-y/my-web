import React from 'react';
import SkillsArt from './../../Assets/Skills.svg';
import './Skills.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodeDotJs,
  SiMongodb,
  SiJava,
  SiTypescript,
  SiFirebase,
  SiAmazonaws,
  SiReact,
  SiNpm,
} from 'react-icons/si';

import data from './../../Data/index.json';

const Skills = () => {
  return (
    <div className='container-fluid skills' id='skills'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col d-none d-lg-block d-xl-block'>
          <img src={SkillsArt} alt='img' className='img skills-image' />
        </div>
        <div className='col'>
          <div className='container-fluid'>
            <h1>{data.Skills.heading}</h1>
            <p>{data.Skills.title}</p>
            <div className='container-fluid skills__icon d-flex flex-wrap justify-content-around'>
              <h6>
                <SiHtml5 size={40} /> HTML5
              </h6>
              <h6>
                <SiCss3 size={40} /> CSS
              </h6>
              <h6>
                <SiJavascript size={40} /> Javascript
              </h6>
              <h6>
                <SiTypescript size={40} /> Typescript
              </h6>
              <h6>
                <SiJava size={40} /> Java
              </h6>
              <h6>
                <SiNodeDotJs size={40} /> Node.js
              </h6>
              <h6>
                <SiMongodb size={40} /> MongoDB
              </h6>
              <h6>
                <SiReact size={40} /> React.js
              </h6>
              <h6>
                <SiNpm size={40} /> npm
              </h6>
              <h6>
                <SiFirebase size={40} /> Firebase
              </h6>
              <h6>
                <SiAmazonaws size={40} /> aws
              </h6>
            </div>
            {data.Skills.subtitle.map((text) => {
              return <p>{text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
