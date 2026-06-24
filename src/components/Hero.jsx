import React from 'react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-[#050505] to-[#050505] -z-10"></div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
        Micro-Automatización.<br />
        <span className="bg-gradient-to-r from-cyan-400 via-white to-lime-400 bg-clip-text text-transparent">
          Resultados Inmediatos.
        </span>
      </h1>
      
      <p className="max-w-2xl text-base sm:text-lg text-gray-400 font-light leading-relaxed mb-10">
        Creamos flujos automatizados para negocios locales: formularios que se guardan solos, bots de citas y sistemas que trabajan mientras duermes.
      </p>
      
      <button 
        onClick={onOpenModal} 
        className="px-8 py-4 font-bold text-black bg-gradient-to-r from-cyan-400 to-lime-400 rounded-xl hover:scale-105 transition-transform cursor-pointer shadow-[0_0_40px_rgba(0,242,255,0.25)]"
      >
        Solicitar Automatización
      </button>
    </section>
  );
}
