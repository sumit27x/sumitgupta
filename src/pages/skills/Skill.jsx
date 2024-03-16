import React from "react";
import "./Skill.css";
import "./../../App.css";
import Data from "../../data/Data";

function Skill() {
  return (
    <>
    <div className="skill">
      <div className=" container">
          <h4 className="section-subtitle">What I Know</h4>
          <h1 className="section-title">Skills</h1>
          <div className="skill-content ">
            {Data.skill.map((item) => (
              <div className="skill-box" key={item.id} item={item}>
                <img src={item.icon} alt="icon" className="skill-icon"/>
                <div className="skill-description">
                    <h3>{item.name}</h3>
                    </div>
              </div>
            ))}
          </div>
      </div>
      </div>
    </>
  );
}

export default Skill;
