import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">MiniShop 🛒</Link>
                <nav className="space-x-6">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/checkout" className="hover:text-blue-500">Checkout</Link>
                </nav>
            </div>
        </header>
    );
}
