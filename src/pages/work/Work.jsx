import React from "react";
import "./../../App.css";
import "./Work.css";
import Data from "../../data/Data";

function Work() {
  return (
    <div className="work">
      <div className="container">
        <h4 className="section-subtitle ">What I Have Done So Far</h4>
        <h1 className="section-title ">Work Experience</h1>

        <div className="work-content">
          {Data.experience.map((item) => (
            <div className="work-info" key={item.id} item={item}>
              <p className="work-date">{item.date}</p>
              <h1 className="work-position">{item.position}</h1>
              <div className="work-logo">
                <img src={item.image} alt="company" width="40px" />
                <h2 className="work-company">{item.company}</h2>
              </div>

              <ul className="work-item">
                <li className="work-point">{item.point1}</li>
                <li className="work-point">{item.point2}</li>
                <li className="work-point">{item.point3}</li>
                <li className="work-point">{item.point4}</li>
                <li className="work-point">{item.point5}</li>
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Work;
