import React, { useRef, useState } from 'react';
import { sendLeadToN8N } from '../utils/api';

export default function ModalForm({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', problem: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const result = await sendLeadToN8N(formData);
    setStatus(result.success ? 'success' : 'error');
  };

  return (
    <dialog ref={dialogRef} className="p-8 rounded-2xl bg-[#0f0f11] text-white max-w-md w-full">
      <h3 className="text-2xl font-bold mb-4">Solicitar Automatización</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Nombre" className="w-full bg-[#16161a] p-3 rounded-lg" />
        <input name="email" onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email" className="w-full bg-[#16161a] p-3 rounded-lg" />
        <select name="service" onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-[#16161a] p-3 rounded-lg">
          <option value="">Selecciona servicio...</option>
          <option value="Formulario">Formulario Inteligente</option>
          <option value="Citas">Agendador de Citas</option>
          <option value="Bot">Bot de Gestión IA</option>
        </select>
        <textarea name="problem" onChange={e => setFormData({...formData, problem: e.target.value})} placeholder="Cuéntame brevemente qué necesitas..." className="w-full bg-[#16161a] p-3 rounded-lg resize-none" />
        <button type="submit" className="w-full py-3 bg-neon-cyan text-black font-bold rounded-lg cursor-pointer">
          {status === 'submitting' ? 'Enviando...' : 'Pedir Presupuesto'}
        </button>
      </form>
    </dialog>
  );
}
