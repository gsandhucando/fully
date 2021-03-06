import React, { useState, useEffect } from "react";
import {useRouteMatch, Link} from 'react-router-dom'
import HeaderListItem from "./HeaderListItem"
import data from '../data/shoppingContentData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const cart = <FontAwesomeIcon icon={faShoppingCart} />;
const search = <FontAwesomeIcon icon={faSearch} />;
const cross = <FontAwesomeIcon icon={faTimes} />;

const Header = () => {
  let [deskMenuOpen, setDeskMenuOpen] = useState(false);
  let [chairMenuOpen, setChairMenuOpen] = useState(false);
  let [accMenuOpen, setAccChairMenuOpen] = useState(false);
  let [desk, setDesk] = useState(null)
  let [chair, setChair] = useState(null)
  let [other, setOther] = useState(null)
  let [searchClicked, setSearchClicked] = useState(false)

  let handleSearchClick = () => {
    console.log(searchClicked)
    setSearchClicked(!searchClicked)
  }

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

  let match = useRouteMatch();

  useEffect(() => {
    console.log(match.url, ' props ')
    let deskItems = data.map((item) => {
      if (item.alt === 'desk') {
        return <HeaderListItem key={item.title} src={item.img} alt={item.alt} title={item.title} />
      }
    })
    let chairItems = data.map((item) => {
      if (item.alt.includes('chair')) {
        return <HeaderListItem key={item.title} src={item.img} alt={item.alt} title={item.title} />
      }
    })
    let OtherItems = data.map((item) => {
      if (item.alt !== 'desk' && !item.alt.includes('chair')) {
        return <HeaderListItem key={item.title} src={item.img} alt={item.alt} title={item.title} />
      }
    })
    setDesk(deskItems)
    setChair(chairItems)
    setOther(OtherItems)
  }, [])

  return (
    <div className="header-container" >
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
      <div className="header-bottom" style={!searchClicked && match.url !== '/' ? {background: '#F0F7FC'} : null}>
        <div className="header-logo">
        <Link to="/"><a href="#-">fully</a></Link>
        </div>
        { searchClicked ?
        <>
          <div className="header-middle">
          <input className='header-input' placeholder="Search for products, articles and videos..." autoFocus />
          </div>
          <div className="header-search" onClick={handleSearchClick}>
            <a href="#-">{cross}</a>
          </div>
          </>
          :
          <>
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
                  {desk}
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
                  {chair}
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
                  {other}
                  {/* <li>Standing Mats & Balance Boards</li> */}
                </div>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="header-search" onClick={handleSearchClick}>
          <a href="#-">{search}</a>
        </div>
        </>
        }
      </div>
    </div>
  );
};

export default Header;
