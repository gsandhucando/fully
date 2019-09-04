import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

const cart = <FontAwesomeIcon icon={faShoppingCart} />;
const search = <FontAwesomeIcon icon={faSearch} />;

const Header = () => {
  return (
    <div className="header-container">
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
      <div className="header-bottom">
        <div className="header-logo">
          <a href="#-">fully</a>
        </div>
        <div className="header-middle">
          <div className="standing-container">
            <ul className="standing">
              {" "}
              Standing Desks
              {/* <li>Jarvis Adjustable Desks</li>
          <li>Desk Converters</li> */}
            </ul>
          </div>
          <div className="chairs-container">
            <ul className="chairs">
              {" "}
              Chairs
              {/* <li>For Standing Desks</li>
          <li>For Traditional Desks</li> */}
            </ul>
          </div>
          <div className="accessories-container">
            <ul className="accessories">
              {" "}
              Accessories
              {/* <li>Jarvis Accessories</li>
          <li>Standing Mats & Balance Boards</li> */}
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
