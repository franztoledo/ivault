"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const sampleProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    estado: "Excelente",
    color: "indigo",
    colorDescription: "Dark Purple",
    almacenamiento: "256 Gb",
    price: 3000,
    discountPrice: 2900,
    stock: 1,
    image: ["/iPhoneMor.png", "/iPhoneMor2.png"],
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    estado: "Excelente",
    color: "black",
    colorDescription: "Black",
    almacenamiento: "256 Gb",
    price: 3000,
    discountPrice: 2900,
    stock: 1,
    image: ["/iPhoneNeg.png", "/iPhoneNeg2.png"],
  },
  {
    id: 3,
    name: "iPhone 14 Pro",
    estado: "Muy Bueno",
    color: "White",
    colorDescription: "Silver",
    almacenamiento: "256 Gb",
    price: 2800,
    discountPrice: 2700,
    stock: 1,
    image: ["/iPhonePla.png", "/iPhonePla2.png"],
  },
];

// Agrupar productos por estado
const groupedProducts = sampleProducts.reduce((acc, product) => {
  if (!acc[product.estado]) acc[product.estado] = [];
  acc[product.estado].push(product);
  return acc;
}, {});

export default function ProductGrid() {
  const [selectedProductGroup, setSelectedProductGroup] = useState(null);

  const handleViewProduct = (productGroup) => setSelectedProductGroup(productGroup);
  const handleCloseModal = () => setSelectedProductGroup(null);

  return (
    <>
      <section
        id="catalogo"
        className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center"
      >
        {Object.entries(groupedProducts).map(([estado, products]) => (
          <ProductCard
            key={estado}
            estado={estado}
            products={products}
            onView={() => handleViewProduct(products)}
          />
        ))}
      </section>

      {selectedProductGroup && (
        <ProductModal products={selectedProductGroup} onClose={handleCloseModal} />
      )}
    </>
  );
}