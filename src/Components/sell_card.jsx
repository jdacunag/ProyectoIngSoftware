import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
      <img
        className="w-1/3 h-auto object-cover"
        src="https://via.placeholder.com/300x200" // URL de la imagen del producto
        alt="Product"
      />
      <div className="w-2/3 p-4">
        <h2 className="text-gray-900 text-2xl font-bold">Nombre del Producto</h2>
        <p className="text-gray-600 text-sm mt-1">Descripción del producto</p>
        <div className="mt-2">
          <span className="text-2xl text-gray-700">$99.99</span>
          <span className="text-sm text-gray-600 ml-1">Envío Gratis</span>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



