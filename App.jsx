import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Homes";
import Checkout from "./pages/Checkout";


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="bg-gray-50 min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
