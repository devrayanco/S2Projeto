"use client";
import React, { useEffect, useState } from 'react';
import fetchData from "../services/fetch";
import Slider from 'react-slick';
import "../globals.css";








export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const productsRequest = fetchData()
        productsRequest.then((res) => {
            console.log(res)
            setProducts(res)
        })

    });

    const formatCurrency = (value) => {
      return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
    
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
        <section className='products px-40'>
          <Slider {...settings}>
  
          {products.map((data) => (
            <div key={data.productId}>
              <div className='px-4'>
                <a href={data.link}><img src={data.items[0].images[0].imageUrl} alt={`Product ${data.productId}`} /></a>
                <p>{data.productName}</p>
                <p>{formatCurrency(data.items[0].sellers[0].commertialOffer.Price)}</p>
              </div>
            </div>
          ))}
          </Slider>        
      </section>
      )
    }


