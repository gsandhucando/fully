import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import '../scss/item-display.scss';

// import Header from './components/Header';


function ItemDisplay() {
  let match = useRouteMatch();
useEffect(() => {
  console.log(match.url, ' props ')
}, [])
  return (
    <div className="item-display-container">
      <div className="item-display-left">
        {/* <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider> */}
      </div>
      <div className="item-display-right">
        <div>
          <p>title</p>
          <p>price</p>
          <p>stars</p>
        </div>
        <div>
          <p>ajnnskjfnsdkjfnsdkjfnsfkjnkjnkjnfkjsnfkjsnfkjsdnfskjfnskfnskjfnskfjnsfknsfksdnfskjfnskjfnskfnsdkfn</p>
        </div>
        <div>
          btn btn btn btn
        </div>
      </div>
      <div>
        <p>Color: </p>
        <div>color skems</div>
      </div>
    </div>
  );
}

export default ItemDisplay;
