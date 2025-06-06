"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProductModal({ products, onClose }) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleColorChange = (color) => {
    const product = products.find((p) => p.color === color);
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProduct.image.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProduct.image.length) % selectedProduct.image.length
    );
  };

  const handleBuyNow = () => {
    const message = `Hola, estoy interesado en el iPhone ${selectedProduct.name} (${selectedProduct.estado}) de color ${selectedProduct.color}.`;
    const whatsappUrl = `https://wa.me/51935565755?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!selectedProduct) return null;

  const isOutOfStock = selectedProduct.stock === 0;
  const hasDiscount = selectedProduct.discountPrice && selectedProduct.discountPrice < selectedProduct.price;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-lg animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center text-gray-600 text-3xl font-bold rounded-full bg-white shadow-md z-50"
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        {/* Imagen del producto */}
        <div className="relative z-10">
          <img
            src={selectedProduct.image[currentImageIndex]}
            alt={selectedProduct.name}
            className="w-64 h-64 object-contain mx-auto mb-6 rounded-lg"
          />
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-80 transition"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-80 transition"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Información del producto */}
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">{selectedProduct.name}</h2>
        <p className="mb-2 text-gray-600 text-center text-lg">
          <span className="font-semibold">Estado:</span> {selectedProduct.estado}
        </p>
        <p className="mb-4 text-gray-600 text-center text-lg">
          <span className="font-semibold">Almacenamiento:</span> {selectedProduct.almacenamiento}
        </p>

        {/* Precio */}
        {hasDiscount ? (
          <div className="mb-6 text-center">
            <span className="line-through text-gray-400 mr-3 text-lg">S/. {selectedProduct.price}</span>
            <span className="text-red-600 font-bold text-xl">S/. {selectedProduct.discountPrice}</span>
          </div>
        ) : (
          <p className="mb-6 text-xl font-bold text-center text-gray-800">S/. {selectedProduct.price}</p>
        )}

        {/* Selección de colores */}
        <div className="flex justify-center space-x-4 mb-6">
          {products.map((product) => (
            <button
              key={product.color}
              onClick={() => handleColorChange(product.color)}
              className={`w-8 h-8 rounded-full border-2 transition-transform transform ${
                product.color === selectedProduct.color
                  ? "border-black scale-110"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: product.color.toLowerCase() }}
            />
          ))}
        </div>

        {/* Botón de compra */}
        <button
          disabled={isOutOfStock}
          onClick={handleBuyNow}
          className={`w-full py-3 rounded-md text-white ${
            isOutOfStock
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-white hover:text-black border-2 border-black"
          } transition`}
        >
          {isOutOfStock ? "Agotado" : "Comprar ahora"}
        </button>
      </div>
    </div>
  );
}