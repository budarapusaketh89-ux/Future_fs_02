import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

const products = [
    { id: 1, name: "Wireless Headphones", price: 49.99, image: "https://m.media-amazon.com/images/I/71Yl4L6JVML._UF1000,1000_QL80_.jpg" },
    { id: 2, name: "Smart Watch", price: 89.99, image: "https://m.media-amazon.com/images/I/61pIzNaNRWL._UF1000,1000_QL80_.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 39.99, image: "https://cdn.moglix.com/p/ETDC0l8QWI1e7-xxlarge.jpg" },
    { id: 4, name: "Gaming Mouse", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2CPkxCBikLjRBvoSQnnUV-o5ZdU29DGKBA&s" },
];

export default function Home() {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setIsCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 relative">
            <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                isOpen={isCartOpen}
                toggleCart={toggleCart}
            />
            <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            {cartItems.length > 0 && (
                <button
                    onClick={toggleCart}
                    className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    View Cart ({cartItems.length})
                </button>
            )}
        </div>
    );
}
