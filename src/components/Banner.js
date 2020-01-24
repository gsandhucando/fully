import React from "react";
import BannerItem from './BannerItem'

const Banner = () => {

  let data = [
    {
      height: 'auto',
      width: '175px',
      src: '../../images/banner/img-hero-capisco-03-banner.png',
      alt: 'blue chair',
      discription: 'Our company founder',
      title: 'Capisco'
    },
    {
      height: 'auto',
      width: '165px',
      src: '../../images/banner/img-hero-jump-banner.png',
      alt: 'woman jumping',
      // discription: 'Our company founder'
    },
    {
      height: 'auto',
      width: '100px',
      src: '../../images/banner/img-hero-stool-banner.png',
      alt: 'white chair',
      discription: 'Easy leaning for active working',
      title: 'Luna'
    },
    {
      height: 'auto',
      width: '165px',
      src: '../../images/banner/img-hero-desk-banner.png',
      alt: 'desk',
      discription: 'Best standing desk on (and for) the planet',
      title: 'Jarvis'
    },
    {
      height: '145px',
      width: '150px',
      src: '../../images/banner/img-hero-tictoc-banner.png',
      alt: 'chair',
      discription: 'Evolution of the everyday chair',
      title: 'Tic Toc'
    },
    {
      height: 'auto',
      width: '165px',
      src: '../../images/banner/banner-nachi-fully-balans-03-banner.png',
      alt: 'guy on a red chair',
      discription: 'Lean back and strech',
      title: 'Fully Balans'
    },
  ]

  function itemsOnBanner(){
    return data.map((item, i) => {
      return (<BannerItem key={i} height={item.height} width={item.width} src={item.src} alt={item.alt} discription={item.discription} title={item.title} />)
    })
  }

  return (
    <div className="product-banner">
      <div className='img-container'>
        {itemsOnBanner()}
      </div>
    </div>
  );
};

export default Banner;
