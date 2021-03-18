import React, { Component } from "react";
import home1 from '../img/home1.png';
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact me for amazing coding and editing skills. I'm a professional.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
            <img src={home1} alt="With Camera"/>
      </div>
    </div>
  );
};
export default AboutSection;
