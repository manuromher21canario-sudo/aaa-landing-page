import React, { useRef, useEffect, useState } from 'react';
import { sendLeadToN8N } from '../utils/api';

export default function ModalForm({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    problem: '',
    budget: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSimulated, setIsSimulated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      setStatus('idle');
      setErrors({});
      dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = 'El formato del correo no es válido';
    }
    if (!formData.company.trim()) tempErrors.company = 'La empresa es obligatoria';
    if (!formData.problem.trim() || formData.problem.trim().length < 15) {
      tempErrors.problem = 'Describe tu problema (mín. 15 caracteres)';
    }
    if (!formData.budget) tempErrors.budget = 'Selecciona un rango de presupuesto';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    const result = await sendLeadToN8N(formData);
    
    if (result.success) {
      setStatus('success');
      setIsSimulated(!!result.simulated);
      setStatusMessage(result.message);
      setFormData({ name: '', email: '', company: '', problem: '', budget: '' });
    } else {
      setStatus('error');
      setStatusMessage(result.message);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <dialog ref={dialogRef} className="p-0 border border-white/10 rounded-2xl bg-[#0f0f11] text-white max-w-lg w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop:backdrop-blur-md overflow-hidden outline-none mx-auto my-auto">
      <div className="relative p-6 sm:p-8">
        <button onClick={() => dialogRef.current?.close()} className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-6 space-y-6">
            <h3 className="text-2xl font-bold">¡Solicitud Recibida!</h3>
            <p className="text-sm text-gray-400">Hemos recibido tus datos con éxito.</p>
            <button onClick={() => dialogRef.current?.close()} className="w-full py-3 font-bold text-black rounded-lg bg-gradient-to-r from-neon-cyan to-lime-green cursor-pointer">Cerrar</button>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white">Calificar Auditoría</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre Completo" className="w-full bg-[#16161a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white" />
              {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
              
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" className="w-full bg-[#16161a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white" />
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
              
              <input name="company" value={formData.company} onChange={handleChange} placeholder="Empresa" className="w-full bg-[#16161a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white" />
              
              <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#16161a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white">
                <option value="">Selecciona presupuesto...</option>
                <option value="< 1,000 USD">Menos de $1,000 USD</option>
                <option value="1,000 - 3,000 USD">$1,000 - $3,000 USD</option>
              </select>
              
              <textarea name="problem" value={formData.problem} onChange={handleChange} placeholder="Describe tu problema..." className="w-full bg-[#16161a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white resize-none" />
              
              <div className="flex gap-4 pt-3">
                <button type="button" onClick={() => dialogRef.current?.close()} className="flex-1 py-3 border border-white/10 rounded-lg text-sm text-gray-400 cursor-pointer">Cancelar</button>
                <button type="submit" disabled={status === 'submitting'} className="flex-2 py-3 px-6 font-bold text-black rounded-lg bg-gradient-to-r from-neon-cyan to-lime-green text-sm cursor-pointer">
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Diagnóstico'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </dialog>
  );
}
