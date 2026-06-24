import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ModalForm from './components/ModalForm';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleEmptyLink = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans antialiased selection:bg-cyan-400 selection:text-black">
      
      {/* --- BARRA DE NAVEGACIÓN (NAVBAR) --- */}
      <header className="fixed top-0 w-full bg-[#050505]/90 backdrop-blur-md z-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter">
            NEXUS<span className="text-cyan-400">_AUTO_</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Servicios</a>
            <a href="#methodology" className="hover:text-white transition-colors">Por qué nosotros</a>
          </nav>
          <button 
            onClick={handleOpenModal}
            className="px-6 py-2 border border-cyan-400 text-cyan-400 text-sm font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all cursor-pointer"
          >
            CALIFICAR AGENCIA
          </button>
        </div>
      </header>

      {/* --- SECCIONES PRINCIPALES --- */}
      <main className="pt-20">
        <Hero onOpenModal={handleOpenModal} />
        <Services onOpenModal={handleOpenModal} />

        {/* --- METODOLOGÍA PROACTIVA --- */}
        <section id="methodology" className="w-full py-24 px-6 border-t border-white/5 bg-[#080808]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Metodología Proactiva</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Liberamos el potencial humano eliminando la fricción operativa.
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Las tareas de mover datos entre hojas de cálculo, responder las mismas dudas a clientes potenciales y sincronizar sistemas consumen el 40% del tiempo de tu negocio.
              </p>
              <button 
                onClick={handleOpenModal}
                className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                Diagnosticar Mi Negocio
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-5xl font-black text-cyan-400 mb-2">01</h4>
                <h5 className="font-bold text-white mb-2">Cero Mantenimiento</h5>
                <p className="text-sm text-gray-500">Sistemas autónomos en la nube sin requerir supervisión constante.</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-lime-400 mb-2">02</h4>
                <h5 className="font-bold text-white mb-2">100% Personalizado</h5>
                <p className="text-sm text-gray-500">Creamos el código exacto adaptado a tus herramientas actuales.</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-white/20 mb-2">03</h4>
                <h5 className="font-bold text-white mb-2">Sin Ataduras</h5>
                <p className="text-sm text-gray-500">Tú eres el dueño de las automatizaciones y las conexiones.</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-white/20 mb-2">04</h4>
                <h5 className="font-bold text-white mb-2">Resultados Rápidos</h5>
                <p className="text-sm text-gray-500">Estructuras ágiles listas para funcionar en tiempo récord.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- PIE DE PÁGINA (FOOTER) --- */}
      <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#020202]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-black tracking-tighter mb-4">
              NEXUS<span className="text-cyan-400">_AUTO_</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Elevamos la eficiencia de tu negocio a través de integraciones inteligentes y flujos autónomos.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#services" className="hover:text-cyan-400">Servicios</a></li>
              <li><a href="#methodology" className="hover:text-cyan-400">Nuestra Metodología</a></li>
              <li><a href="/" onClick={handleEmptyLink} className="hover:text-cyan-400 cursor-pointer">Términos de Uso</a></li>
              <li><a href="/" onClick={handleEmptyLink} className="hover:text-cyan-400 cursor-pointer">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contacto de Trabajo</h4>
            <p className="text-sm text-gray-500 mb-2">¿Quieres automatizar un proceso?</p>
            {/* Aquí pones tu correo de trabajo definitivo */}
            <a href="mailto:tu-correo-profesional@dominio.com" className="text-cyan-400 font-bold hover:underline">
              tu-correo-profesional@dominio.com
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center border-t border-white/5 pt-8">
          <p className="text-xs text-gray-600">© 2026 NEXUS_AUTO_. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* MODAL ÚNICO */}
      <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
