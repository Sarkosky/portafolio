// DonationModal.jsx
import React from "react";

export default function DonationModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const items = {
    cafe: { emoji: "☕", label: "Un café", price: 3 },
    beer: { emoji: "🍺", label: "Una cerveza", price: 5 },
    weed: { emoji: "🍃", label: "Un porro simbólico", price: 4 },
  };

  const item = items[type];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[999]">

      <div className="bg-[#111] w-[90%] max-w-[350px] p-8 rounded-2xl shadow-2xl text-white  shadow-white/20">

        <h2 className="text-2xl font-bold text-center mb-6">
          {item.emoji} {item.label}
        </h2>

        <p className="text-center mb-6 opacity-80">
          Gracias por tu apoyo 🙌  
          <br/>Monto: <span className="font-semibold">${item.price}</span>
        </p>

        {/* Aquí luego conectarás PayPal o MercadoPago */}
        <button className="w-full bg-white text-black py-3 rounded-xl font-bold mb-4 hover:bg-gray-300 transition-all">
          Proceder al pago
        </button>

        <button
          onClick={onClose}
          className="w-full py-2 mt-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
        >
          Cerrar
        </button>

      </div>

    </div>
  );
}
