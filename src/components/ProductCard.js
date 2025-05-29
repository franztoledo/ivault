"use client";

export default function ProductCard({ product, onView }) {
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm flex flex-col items-center space-y-4 relative">
      {isOutOfStock && (
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
          Agotado
        </div>
      )}

      <img src={product.image} alt={product.name} className="w-40 h-auto object-contain" />
      <h3 className="font-semibold text-lg">{product.name}</h3>

      {hasDiscount ? (
        <div className="flex space-x-2 items-center">
          <span className="line-through text-gray-400">S/. {product.price}</span>
          <span className="text-red-600 font-bold">S/. {product.discountPrice}</span>
        </div>
      ) : (
        <p className="text-gray-700 font-medium">S/. {product.price}</p>
      )}

      <button
        onClick={() => onView(product)}
        disabled={isOutOfStock}
        className={`border rounded-full px-6 py-2 transition
          ${isOutOfStock
            ? "border-gray-400 text-gray-400 cursor-not-allowed"
            : "border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-200"
          }`}
      >
        Ver más
      </button>
    </div>
  );
}