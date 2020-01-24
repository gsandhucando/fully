import React, {useState} from "react";

const BannerItem = ({height,width,src,alt,discription}) => {

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
        <p style={bannerHover ? {opacity: '1'} : {opacity: '0'}}>{discription}</p>
        <img style={{height: height, width: width}} src={src} alt={alt}/>
      </div>
    </>
  );
};

export default BannerItem;
