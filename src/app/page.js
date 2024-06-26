"use client";
import "./globals.css";
import React from 'react';
import BannerFull from "./components/bannerFull";
import Best from "./components/best";
import About from "./components/about";
import Products from "./components/products";

export default function Home() {
  
  return (
    <main>
      <BannerFull />
      <Best />
      <Products />
      <About/>
    </main>
  );
}
