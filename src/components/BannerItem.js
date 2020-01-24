import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const up = <FontAwesomeIcon icon={faChevronUp} />;
// const search = <FontAwesomeIcon icon={faSearch} />;

const BannerItem = ({height,width,src,alt,discription,title}) => {

  let [bannerHover, setBannerHover] = useState(false)

  const mouseEnterItem = () => {
    console.log('banner open')
    setBannerHover(true);
  };
  const mouseLeaveItem = () => {
    console.log('banner closed')
    setBannerHover(false);
  };

  return (
    <>
      <div className='banner-item'
      onMouseEnter={mouseEnterItem}
      onMouseLeave={mouseLeaveItem}
      >
        <p style={bannerHover ? {opacity: '1', paddingBottom: '12px'} : {opacity: '0', paddingBottom: '12px'}}>{discription}</p>
        <img style={{height: height, width: width}} src={src} alt={alt}/>
        <p>{title}</p>
        { discription ?
          <p style={bannerHover ? {color: '#ffd62b'} : null}>{up}</p>
          : null
        }
      </div>
    </>
  );
};

export default BannerItem;
