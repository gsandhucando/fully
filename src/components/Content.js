import React from "react";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-statement">
      <p>
        Fully has the best desks, chairs, and other tools to keep you moving,
        engaged, and loving how you feel at work.
      </p>
      </div>
      <div className="content-statement2">
        <ul>
          <li className="li-statement"><h1>Desks to keep you moving</h1>
          <p>The best collection of adjustable height desks, including our stable, sustainable, and customizable Jarvis.</p>
          <button>Shop Desks</button>
          </li>
          <li>
            <picture>
            <img className="img1" src="/images/statement/statement2img1.png" alt="people around desk"/>
          <img className="img2" src="/images/statement/statement2img2.png" alt="people around desk" />
          </picture>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
