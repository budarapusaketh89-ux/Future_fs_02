import React, { useState } from "react";

export default function Checkout() {
    const [formData, setFormData] = useState({ name: "", email: "", address: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Order placed successfully! Thank you, ${formData.name}`);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded mt-6">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="john@example.com"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="123 Street, City"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
}
