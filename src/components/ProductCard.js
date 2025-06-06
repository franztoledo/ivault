"use client";

export default function ProductCard({ estado, products, onView }) {
  const colors = products.map((product) => product.color);
  const mainImage = products[0].image[0]; // Usar la primera imagen del primer producto del grupo
  const modelName = products[0].name; // Usar el nombre del primer producto del grupo
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0); // Sumar el stock de todos los productos
  const isOutOfStock = totalStock === 0; // Determinar si está agotado

  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col items-center space-y-4 relative hover:shadow-lg transition-shadow">
      {/* Imagen del producto */}
      <img
        src={mainImage}
        alt={`Imagen de iPhone en estado ${estado}`}
        className="w-32 h-32 object-contain mb-4"
      />

      {/* Información del producto */}
      <h3 className="font-bold text-lg text-gray-900">{modelName}</h3>

      {/* Estado con etiqueta */}
      <p className="text-sm text-gray-500">
        Estado:{" "}
        <span
          className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${
            estado === "Excelente"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {estado}
        </span>
      </p>

      {/* Etiqueta de agotado */}
      {isOutOfStock && (
        <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-red-600 text-white">
          Agotado
        </span>
      )}

      {/* Cantidad disponible */}
      {!isOutOfStock && (
        <p className="text-sm font-bold text-gray-800">
          Cantidad disponible: {totalStock}
        </p>
      )}

      {/* Colores disponibles */}
      <div className="flex space-x-2 mt-2">
        {colors.map((color, index) => (
          <span
            key={index}
            className="w-6 h-6 rounded-full border-2"
            style={{
              backgroundColor: color.toLowerCase(),
              borderColor:
                color.toLowerCase() === "white"
                  ? "#ccc"
                  : color.toLowerCase(),
            }}
          />
        ))}
      </div>

      {/* Botón para ver más */}
      <button
        onClick={onView}
        className="border rounded-full px-6 py-2 transition border-gray-300 hover:bg-gray-100 mt-4 text-gray-700 font-medium"
      >
        Ver más
      </button>
    </div>
  );
}