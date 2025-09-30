import React from "react";

export default function ProductCard({ product, addToCart }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
            <div className="h-40 w-40 bg-gray-200 flex items-center justify-center mb-4 rounded">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                />
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-blue-600 font-bold mb-4">${product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Add to Cart
            </button>
        </div>
    );
}
