import React from "react";

const BlueConent = () => {
  return (
    <div className="blue-container">
      <div className="blue-top">
        <div className="blue-left">
          <h1>Create your perfect home office</h1>
          <p>
            From adjustable-height desks to active chairs, standing mats,
            monitor arms, and lighting, we have everything you need to create an
            engaging workspace.
          </p>
          <a href="#-">Build your home office</a>
        </div>
        <div className="blue-right">
          <img src="/images/content/blue1.png" alt="guy at desk" />
        </div>
      </div>
      <div className="blue-bottom">
        <div className="blue-left2">
          <h1>Shopping for your team</h1>
          <p>
            Whether you're an office of 5 or 5000, our project managers can help
            you create energizing spaces that your team will love.
          </p>
          <a href="#-">Commercial Sales</a>
        </div>
        <div className="blue-right2">
          <img
            className="blue3"
            src="/images/content/blue3.png"
            alt="lady at desk"
          />
          <img
            className="blue4"
            src="/images/content/blue2.png"
            alt="people around desk"
          />
        </div>
      </div>
    </div>
  );
};

export default BlueConent;
