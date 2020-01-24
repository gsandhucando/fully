import React from "react";
import contentData from "../data/contentData";
import FullyFav from "./FullyFav";
import BlueConent from "./BlueContent";
import Review from "./Review";

const Content = () => {
  let contentDisplay = () => {
    return contentData.map((data, i) => {
      console.log(data);
      return (
        <div key={i} style={{width: '100%'}}>
          <div className="content-statement">
            <p style={data.id > 1 ? { display: "none" } : null}>
            Everything you need to love your work more
            </p>
          </div>
          <div
            className={
              data.id % 2 === 0 ? "content-statement1" : "content-statement2"
            }
          >
            <ul>
              <li className="li-statement">
                <div className='text-container'>
                  <h1>{data.statement}</h1>
                  <p>{data.statementP}</p>
                  <button>{data.btn}</button>
                </div>
                <picture>
                  <img className="img1" src={data.img1} alt={data.alt} />
                  <img className="img2" src={data.img2} alt={data.alt} />
                </picture>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  };
  console.log(contentData);
  return (
    <div className="content-container">
      {contentDisplay()}
      <FullyFav />
      <BlueConent />
      <Review />
    </div>
  );
};

export default Content;
