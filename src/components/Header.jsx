import React from 'react';

export default function Header({ onOpenModal }) {
  return (
    <header className="sticky top-0 z-40 w-full glassmorphism border-b border-white/5 backdrop-blur-md px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <span className="font-extrabold text-xl tracking-widest bg-gradient-to-r from-neon-cyan to-lime-green bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-90">
          NEXUS<span className="text-white/80">_AUTO</span>
        </span>
        <span className="h-2 w-2 rounded-full bg-lime-green animate-pulse" />
      </a>

      {/* Navigation - Hidden on Mobile */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#services" className="hover:text-neon-cyan transition-colors duration-200">
          Servicios
        </a>
        <a href="#about" className="hover:text-neon-cyan transition-colors duration-200">
          Por qué nosotros
        </a>
        <a href="#process" className="hover:text-neon-cyan transition-colors duration-200">
          Proceso
        </a>
      </nav>

      {/* Header CTA Button */}
      <div>
        <button
          onClick={onOpenModal}
          className="relative px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-transparent border border-neon-cyan text-neon-cyan overflow-hidden transition-all duration-300 hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] active:scale-95 cursor-pointer"
        >
          Calificar Agencia
        </button>
      </div>
    </header>
  );
}
