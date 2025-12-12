import React from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[999] 
        flex items-center justify-center 
        bg-black/60 backdrop-blur-md
      "
    >
      <div
        className="w-[90%] max-w-[320px]
          h-[50%]
           backdrop-blur-xl
          border border-white/10 
          rounded-2xl
          p-8 
          text-white          
          transform transition-all duration-300
        "
        style={{ animation: "shadowPulse 3.5s ease-in-out infinite" }}
      >
         <style>
            {`
            @keyframes shadowPulse {
                0% {
                box-shadow: 0 0 5px rgba(255,255,255,0.1);
                }
                50% {
                box-shadow: 0 0 50px rgba(255,255,255,0.2);
                }
                100% {
                box-shadow: 0 0 5px rgba(255,255,255,0.1);
                }
            }
            `}
        </style>
        {/* FOTO */}
        <div className="flex justify-center mb-6">
          <img
            src="././public/designer.png"
            alt="Foto de perfil"
            className="w-[90%] object-cover rounded-xl border border-white/20 shadow-lg"
          />
        </div>

        {/* TEXTO */}
        <div className="text-center  mb-5">
          <h2 className="text-xl font-semibold">Santiago Vélez</h2>
          <p className="text-white/70 text-sm">Full Stack Dev</p>

          <p className="mt-2 text-yellow-300">
            <a href="mailto:sivelez96@gmail.com" className="font-bold">sivelez96@gmail.com</a>
            {/* <span className="font-light">sivelez96@gmail.com</span> */}
          </p>
        </div>

        {/* BOTÓN CERRAR */}
        <div className="flex justify-center w-full ">
          <button
            onClick={onClose}
            className=" w-full
              px-6 py-2 rounded-xl 
              bg-white/10 hover:bg-white/20 
              text-white transition hover:cursor-pointer
              hover:transform  duration-300 hover:scale-90
            "
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
