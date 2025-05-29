"use client";

import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import TrustBadges from "../components/TrustBadges";
import ProductGrid from "../components/ProductGrid";
import SobreNosotros from './sobre-nosotros/page'; 

export default function Home() {
  const catalogRef = useRef(null);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection onScrollToCatalog={scrollToCatalog} />
      <TrustBadges />
      <div ref={catalogRef}>
        <ProductGrid />
      </div>
      <SobreNosotros />
    </>
  );
}