import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ModalForm from './components/ModalForm';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-dark-bg text-white bg-grid-pattern bg-grid-fade selection:bg-neon-cyan/30 selection:text-white">
      {/* Background Animated Gradient Sphere (Visual Polish) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-lime-green/5 blur-[150px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header onOpenModal={openModal} />

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero onOpenModal={openModal} />

          {/* Services Section */}
          <Services onOpenModal={openModal} />

          {/* Extra section for SaaS-like content: Why Us / Methodology */}
          <section id="about" className="w-full py-20 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-green uppercase tracking-widest">
                  Metodología Proactiva
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  Liberamos el potencial humano eliminando la fricción operativa.
                </h2>
                <p className="text-gray-400 font-light leading-relaxed">
                  Las tareas de mover datos entre hojas de cálculo, responder las mismas dudas a clientes potenciales y sincronizar sistemas consumen el 40% del tiempo de tus empleados.
                </p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Nuestros sistemas eliminan estas ineficiencias de raíz, operando de manera constante en la nube sin requerir supervisión.
                </p>
                <div className="pt-4">
                  <button
                    onClick={openModal}
                    className="px-6 py-3 font-semibold text-sm rounded-lg bg-white text-black hover:bg-neon-cyan hover:text-black transition-all cursor-pointer"
                  >
                    Diagnosticar Mi Negocio
                  </button>
                </div>
              </div>

              {/* Graphical Visual Box (Grid layout details) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl glassmorphism text-left space-y-2 border border-white/5">
                  <span className="text-2xl font-bold text-neon-cyan">01</span>
                  <h4 className="text-sm font-semibold text-white">Cero Mantenimiento</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Soporte activo e infraestructura en la nube lista para producción sin dolores de cabeza.
                  </p>
                </div>
                <div className="p-6 rounded-2xl glassmorphism text-left space-y-2 border border-white/5">
                  <span className="text-2xl font-bold text-lime-green">02</span>
                  <h4 className="text-sm font-semibold text-white">100% Personalizado</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    No usamos plantillas rígidas. Diseñamos soluciones a la medida de tus procesos actuales.
                  </p>
                </div>
                <div className="p-6 rounded-2xl glassmorphism text-left space-y-2 border border-white/5">
                  <span className="text-2xl font-bold text-white">03</span>
                  <h4 className="text-sm font-semibold text-white">Sin Ataduras</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Código modular documentado que le pertenece a tu empresa de forma permanente.
                  </p>
                </div>
                <div className="p-6 rounded-2xl glassmorphism text-left space-y-2 border border-white/5">
                  <span className="text-2xl font-bold text-neon-cyan">04</span>
                  <h4 className="text-sm font-semibold text-white">Escalabilidad</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Nuestros flujos n8n crecen con tu negocio sin disparar los costos de suscripción.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer onOpenModal={openModal} />

        {/* Modal Form */}
        <ModalForm isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default App;
