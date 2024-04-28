"use client";
import React from 'react';
import Slider from 'react-slick';
import Products from './products';
import "../globals.css";
 


function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  };

  return (
      <div className="slider-container">  
          <Slider {...settings}>
              <div className="carousel-1">
                  <Products />
              </div>
          </Slider>
      </div>
  );
};

export default Carousel;
