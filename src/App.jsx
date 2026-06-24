import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import ModalForm from './components/ModalForm';

export default function App() {
  // Este estado controla si el modal está abierto o cerrado en toda la web
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-neon-cyan selection:text-black">
      {/* Pasamos la función de abrir el modal a los componentes que tienen botones */}
      <Navbar onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Services onOpenModal={handleOpenModal} />
      <Methodology onOpenModal={handleOpenModal} />
      <Footer />

      {/* El modal se renderiza UNA SOLA VEZ aquí */}
      <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
