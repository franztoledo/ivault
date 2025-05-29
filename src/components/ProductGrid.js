"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const sampleProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    color: "Morado",
    almacenamiento: "256 Gb",
    price: 2800,
    discountPrice: 2700,
    stock: 1,
    image: "/iPhoneMor.png",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    color: "Plateado",
    almacenamiento: "256 Gb",
    price: 3000,
    discountPrice: 2900,
    stock: 0,
    image: "/iPhonePla.png",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max",
    color: "Negro",
    almacenamiento: "256 Gb",
    price: 3300,
    discountPrice: null,
    stock: 1,
    image: "/iPhoneNeg.png",
  },
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (product) => setSelectedProduct(product);
  const handleCloseModal = () => setSelectedProduct(null);

  return (
    <>
      <section
        id="catalogo"
        className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center"
      >
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={handleViewProduct}
          />
        ))}
      </section>

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </>
  );
}