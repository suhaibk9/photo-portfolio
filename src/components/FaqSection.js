import React, { Component } from "react";
const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            dolorum.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            dolorum.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Payement</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FaqSection;