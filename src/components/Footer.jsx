import React from 'react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-widest bg-gradient-to-r from-neon-cyan to-lime-green bg-clip-text text-transparent">
              NEXUS_AUTO
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-lime-green animate-pulse" />
          </div>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed font-light">
            Elevamos la eficiencia de tu negocio a través de integraciones inteligentes y flujos de trabajo autónomos sin fricción.
          </p>
        </div>

        {/* Middle Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Navegación</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#services" className="hover:text-lime-green transition-colors duration-200">
                Servicios de Automatización
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-lime-green transition-colors duration-200">
                Nuestra Metodología
              </a>
            </li>
            <li>
              <button 
                onClick={onOpenModal} 
                className="hover:text-lime-green transition-colors duration-200 text-left cursor-pointer"
              >
                Formulario de Calificación
              </button>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Contacto</h4>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            ¿Listo para delegar las tareas repetitivas? Háblanos sobre tus cuellos de botella.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:hola@nexusauto.agency" 
              className="text-sm font-medium text-neon-cyan hover:text-white transition-colors duration-200 underline underline-offset-4"
            >
              hola@nexusauto.agency
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} NEXUS_AUTO. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors duration-200">Términos de Servicio</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
