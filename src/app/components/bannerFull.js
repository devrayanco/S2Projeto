import Image from "next/image";
import React from 'react';
import "../globals.css";


export default function BannerFull() {
  return (
    <section>
      <Image className="hidden md:block B-descktop" src="/img/Banner-Full-Desktop.jpg" alt="Banner Desktop" width={1920} height={300} />
      <Image className="md:hidden w-full B-mobile" src="/img/Banner-Full-Mobile.jpg" alt="Banner Mobile" width={767} height={480} />
    
    </section>
  );
}


