import React, { useState } from 'react';
import { sendLeadToN8N } from '../utils/api';

export default function ModalForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', problem: '' });
  const [status, setStatus] = useState('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const result = await sendLeadToN8N(formData);
    
    if (result.success) {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', service: '', problem: '' });
        onClose();
      }, 2000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0f0f11] border border-white/10 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white cursor-pointer">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-black text-white mb-2">Solicitar Automatización</h3>
        <p className="text-sm text-gray-400 mb-6">Completa tus datos para enviarte una propuesta ajustada.</p>
        
        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-lime-400 text-5xl mb-4">✓</div>
            <h4 className="text-white font-bold">¡Solicitud recibida!</h4>
            <p className="text-gray-400 text-sm mt-1">Revisaremos tu caso de inmediato.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              required
              type="text"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})} 
              placeholder="Tu Nombre o Empresa" 
              className="w-full bg-[#16161a] border border-white/5 text-white p-3 rounded-lg focus:outline-none focus:border-cyan-400" 
            />
            <input 
              required
              type="email"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})} 
              placeholder="Correo Electrónico de Contacto" 
              className="w-full bg-[#16161a] border border-white/5 text-white p-3 rounded-lg focus:outline-none focus:border-cyan-400" 
            />
            <select 
              required
              value={formData.service}
              onChange={e => setFormData({...formData, service: e.target.value})} 
              className="w-full bg-[#16161a] border border-white/5 text-gray-300 p-3 rounded-lg focus:outline-none focus:border-cyan-400"
            >
              <option value="" disabled>¿Qué sistema te interesa?</option>
              <option value="Formulario">Formulario Inteligente</option>
              <option value="Citas">Agendador de Citas 24/7</option>
              <option value="Bot">Bot de Gestión con IA</option>
            </select>
            <textarea 
              required
              value={formData.problem}
              onChange={e => setFormData({...formData, problem: e.target.value})} 
              placeholder="Cuéntanos brevemente qué necesitas solucionar..." 
              className="w-full bg-[#16161a] border border-white/5 text-white p-3 rounded-lg resize-none h-24 focus:outline-none focus:border-cyan-400" 
            />
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-lg cursor-pointer transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Procesando...' : 'Pedir Presupuesto'}
            </button>
            
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center mt-2">Error de red. Revisa tu conexión.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
