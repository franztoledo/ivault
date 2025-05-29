"use client";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const isOutOfStock = product.stock === 0;
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl font-bold"
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        <img src={product.image} alt={product.name} className="w-full object-contain mb-6 rounded-lg" />

        <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
        <p className="mb-4 text-gray-600">Color: {product.color}</p>
        <p className="mb-6 text-gray-600">Almacenamiento: {product.almacenamiento}</p>

        {hasDiscount ? (
          <div className="mb-6">
            <span className="line-through text-gray-400 mr-3">S/. {product.price}</span>
            <span className="text-red-600 font-bold text-xl">S/. {product.discountPrice}</span>
          </div>
        ) : (
          <p className="mb-6 text-xl font-bold">S/. {product.price}</p>
        )}

        <button
          disabled={isOutOfStock}
          onClick={() => alert('Comprar no implementado')}
          className={`w-full py-3 rounded-md text-white ${
            isOutOfStock ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } transition`}
        >
          {isOutOfStock ? 'Agotado' : 'Comprar ahora'}
        </button>
      </div>
    </div>
  );
}