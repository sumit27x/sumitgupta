import React from 'react';
import "./Home.css";

import { Instagram ,FaceBook,Github, Linkedin, PDF, Twitter } from '../../assets/index';

function Social() {
  return (
    <div className="home_social">
    <a  href="https://www.linkedin.com/in/sumitgupta27x"  className="home_social-icon" target="_black">
        <img src={Linkedin} alt="" className='home_icon'/>
    </a>

    <a href="https://github.com/sumit27x" className="home_social-icon" target="_black">
    <img src={Github} alt=""  className='home_icon'/>
    </a>

    <a href="https://instagram.com/_gangster.x" className="home_social-icon" target="_black">
    <img src={Instagram} alt=""  className='home_icon'/>
    </a>
</div>
  )
}

export default Social