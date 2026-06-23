import React from 'react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 md:px-12 py-20 overflow-hidden">
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-neon-cyan/25 blur-[80px] md:blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-lime-green/20 blur-[80px] md:blur-[120px] animate-pulse-slow pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center">
        {/* Elite Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism border border-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300">
          <span className="h-2 w-2 rounded-full bg-neon-cyan animate-ping" />
          <span>Agencia de Automatización Inteligente (AAA)</span>
        </div>

        {/* Impact Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
          Automatiza tu Operación.<br />
          <span className="bg-gradient-to-r from-neon-cyan via-white to-lime-green bg-clip-text text-transparent text-glow-cyan">
            Escala sin Límites.
          </span>
        </h1>

        {/* Value Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          Diseñamos flujos con <strong className="text-white font-medium">n8n</strong>, bots interactivos de gestión y web apps ultra-rápidas para eliminar tareas repetitivas y multiplicar la rentabilidad de tu negocio.
        </p>

        {/* CTA Button and trust indicators */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <button
            onClick={onOpenModal}
            className="group relative px-8 py-4 font-bold text-black rounded-xl bg-gradient-to-r from-neon-cyan to-lime-green overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span className="flex items-center gap-2">
              Auditar Mi Negocio
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          
          <a
            href="#services"
            className="px-8 py-4 font-semibold text-gray-300 hover:text-white transition-colors duration-200"
          >
            Ver Servicios &darr;
          </a>
        </div>

        {/* Simple Trust Section / Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-12 pt-16 w-full border-t border-white/5">
          <div className="text-center space-y-1">
            <p className="text-2xl md:text-3xl font-extrabold text-neon-cyan">+30h</p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500">Ahorradas Semanales</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-2xl md:text-3xl font-extrabold text-white">100%</p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500">Sistemas Autónomos</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-2xl md:text-3xl font-extrabold text-lime-green">Zero</p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500">Errores Humanos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
