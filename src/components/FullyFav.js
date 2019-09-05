import React from 'react';
import shoppingContentData from '../data/shoppingContentData';

const FullyFav = () => {

  let shoppingData = shoppingContentData.map((item, i) => {
    return (
      <div key={item.id}>
      <div className="fully-fav-item-container">
        <div className="fully-fav-item">
          <img src={item.img} alt={item.alt} />
          <h3>{item.title}</h3>
          <p className='item-disc'>{item.detail}</p>
          <p className='item-stars'>{item.stars}</p>
          <p className='item-price'>{item.price}</p>
        </div>
      </div>
      </div>
    )
  })

  return(
    <div className="fully-fav-container">
            <h1>Fully Favorites</h1>
            <div className="fully-fav-container-top">
      {shoppingData}
            </div>
    </div>
  )
}

export default FullyFav;