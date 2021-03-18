import React, { Component } from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact me for amazing coding and editing skills. I'm a professional.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="With Camera" />
      </Image>
    </About>
  );
};
//Styled Componets
const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 80vg;
    object-fit: cover;
  }
`;
const Hide=styled.div`overflow:hidden`;

export default AboutSection;
