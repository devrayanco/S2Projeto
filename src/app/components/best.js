import React from 'react';
import "../globals.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Best() {
  return (
    <section className=" mx-auto  py-10 ">
        <div className='best-descktop px-40'>
            <div className="grid grid-cols-2 gap-4 justify-center max-w-400  ">
                <a href="https://www.google.com/"><img src="/img/middle-1.jpg" alt="Imagem 1" className="rounded-lg" /></a>
                <a href="https://www.google.com/"><img src="/img/middle-2.jpg" alt="Imagem 2" className="rounded-lg" /></a>
                <a href="https://www.google.com/"><img src="/img/middle-3.jpg" alt="Imagem 3" className="rounded-lg" /></a>
                <a href="https://www.google.com/"><img src="/img/middle-4.jpg" alt="Imagem 4" className="rounded-lg" /></a>
            </div>
        </div>
        <div className='best-mobile '>
        <Slider>
            <div className=' hidden md:block'> 
                    <a href="https://www.google.com/"><img src="/img/middle-1.jpg" alt="Imagem 1" className="rounded-lg" /></a>
                    <a href="https://www.google.com/"><img src="/img/middle-2.jpg" alt="Imagem 2" className="rounded-lg" /></a>
                    <a href="https://www.google.com/"><img src="/img/middle-3.jpg" alt="Imagem 3" className="rounded-lg" /></a>
                    <a href="https://www.google.com/"><img src="/img/middle-4.jpg" alt="Imagem 4" className="rounded-lg" /></a>
            </div>
        </Slider>

        </div>
    </section>
  );
}


