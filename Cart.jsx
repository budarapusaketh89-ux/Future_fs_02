import React from "react";

export default function Cart({ cartItems, removeFromCart, isOpen, toggleCart }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
                } z-50`}
        >
            <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-xl font-bold">Shopping Cart</h2>
                <button onClick={toggleCart} className="text-gray-600 hover:text-gray-900">
                    ✕
                </button>
            </div>
            <div className="p-4 flex flex-col gap-4">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 ml-2"
                            >
                                ✕
                            </button>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="p-4 border-t">
                    <p className="font-bold">
                        Total: ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                    </p>
                </div>
            )}
        </div>
    );
}
