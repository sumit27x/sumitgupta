import React from 'react';
import "./Home.css";
import Resume from "./../../assets/SumitGupta_Resume.pdf";
import { PDF } from '../../assets';

function Data() {
  return (
    <div className="home_data">
            <h1 className="home_title">Sumit Gupta</h1>
            <h2 className="home_subtitle">Frontend Developer</h2>
            <p className="home_description">
            Crafting captivating digital experiences through pixel-perfect code and innovative design,
             I transform visions into immersive realities. Let's elevate user engagement together.    
            </p>
            <button style={{padding:"5px 10px"}} >
               <a href={Resume} download=""  style={{display:"flex",alignItems:"center"}}>
                <h3 style={{color:"#000000",fontWeight:"700"}}> Dowload CV</h3>
                <img src={PDF} alt='pdf' width="40px"/>
               </a>
            </button>
        </div>
  )
}

export default Data