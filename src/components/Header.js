import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

const cart = <FontAwesomeIcon icon={faShoppingCart} />;
const search = <FontAwesomeIcon icon={faSearch} />;

const Header = () => {
  let [deskMenuOpen, setDeskMenuOpen] = useState(false);
  let [chairMenuOpen, setChairMenuOpen] = useState(false);
  let [accMenuOpen, setAccChairMenuOpen] = useState(false);

  const mouseEnterDesk = () => {
    setDeskMenuOpen(true);
  };
  const mouseEnterChair = () => {
    setChairMenuOpen(true);
  };
  const mouseEnterAcc = () => {
    setAccChairMenuOpen(true);
  };

  const mouseLeaveDesk = () => {
    setDeskMenuOpen(false);
  };
  const mouseLeaveChair = () => {
    setChairMenuOpen(false);
  };
  const mouseLeaveAcc = () => {
    setAccChairMenuOpen(false);
  };

  return (
    <div className="header-container" onChange={console.log(window.innerHeight)}>
      <div className="header-top">
        <div className="header-left">
          <a href="#-">Commercial Sales</a>
          <a href="#-">Fully Kids</a>
        </div>
        <div className="header-right">
          <a href="#-">888-508-3725</a>
          <a href="#-">Help</a>
          <a href="#-">Log in</a>
          <a href="#-">{cart}</a>
        </div>
      </div>
      <div className="header-bottom" >
        <div className="header-logo">
          <a href="#-">fully</a>
        </div>
        <div className="header-middle">
          <div className="standing-container">
            <ul
              onMouseEnter={mouseEnterDesk}
              onMouseLeave={mouseLeaveDesk}
              className="standing"
            >
              {" "}
              Standing Desks
              {deskMenuOpen ? (
                <div className="list-standing">
                  <span
                    style={{ borderTop: "4px solid gold", width: 60, display: "flex"}}
                  ></span>
                  <li>
                    <img
                      src="/images/content/fully-javis-alloy-bamboo-standing-desk.png"
                      alt="desk"
                    />
                    Jarvis Adjustable Desks
                  </li>
                  <li>
                    {" "}
                    <img
                      src="/images/content/fully-cooper-bamboo-standing-desk-convertor.png"
                      alt="desk convertor"
                    />
                    Desk Converters
                  </li>
                  <li>
                    {" "}
                    <img
                      src="/images/content/fully-javis-l-shape-maple-laminate-standing-desk.png"
                      alt="desk"
                    />
                    L-Shaped
                  </li>
                </div>
              ) : null}
            </ul>
          </div>
          <div className="chairs-container">
            <ul
              onMouseEnter={mouseEnterChair}
              onMouseLeave={mouseLeaveChair}
              className="chairs"
            >
              Chairs
              {chairMenuOpen ? (
                <div className="list-chairs">
                  <span
                    style={{ borderTop: "4px solid gold", width: 60, display: "flex" }}
                  ></span>
                  <li>
                    {" "}
                    <img
                      src="/images/content/fully-active-seating-chair-capisco-saddle.png"
                      alt="chair"
                    />{" "}
                    For Standing Desks
                  </li>
                  <li>
                    {" "}
                    <img
                      src="/images/content/fully-active-seating-chair-capisco-puls-saddle.png"
                      alt="desk convertor"
                    />
                    For Traditional Desks
                  </li>
                </div>
              ) : null}
            </ul>
          </div>
          <div className="accessories-container">
            <ul
              onMouseEnter={mouseEnterAcc}
              onMouseLeave={mouseLeaveAcc}
              className="accessories"
            >
              Accessories
              {accMenuOpen ? (
                <div className="list-accessories">
                  <span
                    style={{ borderTop: "4px solid gold", width: 60, display: "flex" }}
                  ></span>
                  <li>
                    <img
                      src="/images/content/fully-topo-anti-fatigue-standing-desk-mat-car.png"
                      alt="mat"
                    />
                    Jarvis Accessories
                  </li>
                  {/* <li>Standing Mats & Balance Boards</li> */}
                </div>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="header-search">
          <a href="#-">{search}</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
