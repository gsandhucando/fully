import React from "react";
// import i from '../../public/images/banner/'

const Banner = () => {
  return (
    <div className="product-banner">
      <div className='img-container'>
      <img style={{height: 'auto', width: '175px'}} src='../../images/banner/img-hero-capisco-03-banner.png' alt='blue chair'/>
      <img style={{height: 'auto', width: '165px'}} src='../../images/banner/img-hero-jump-banner.png' alt='woman jumping'/>
      <img style={{height: 'auto', width: '100px'}} src='../../images/banner/img-hero-stool-banner.png' alt='white chair'/>
      <img style={{height: 'auto', width: '165px'}} src='../../images/banner/img-hero-desk-banner.png' alt='desk'/>
      <img style={{height: '145px', width: '150px'}} src='../../images/banner/img-hero-tictoc-banner.png' alt='chair'/>
      <img style={{height: 'auto', width: '165px'}} src='../../images/banner/banner-nachi-fully-balans-03-banner.png' alt='guy on a red chair'/>
      </div>
      {/* <a className="chair1" href="chair1">chair</a>
      <a className="chair2" href="chair2" />
      <a className="chair3" href="chair3" />
      <a className="chair4" href="chair4" />
      <a className="chair5" href="chair5" />
      <a className="chair6" href="chair6" />
      <a className="chair7" href="chair7" /> */}
    </div>
  );
};

export default Banner;
