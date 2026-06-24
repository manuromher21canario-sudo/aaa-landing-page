import React from 'react';

export default function Services({ onOpenModal }) {
  const servicesList = [
    {
      title: 'Formularios Inteligentes',
      tag: 'Captación Automática',
      description: 'Formularios web que clasifican y guardan los datos de tus leads automáticamente en tu hoja de cálculo o CRM.',
      bullets: [
        'Registro automático en Google Sheets',
        'Filtro de leads mediante Inteligencia Artificial',
        'Notificación instantánea en Telegram'
      ],
      icon: (
        <svg className="w-8 h-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      glowClass: 'group-hover:border-neon-cyan/40 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]'
    },
    {
      title: 'Agendador de Citas 24/7',
      tag: 'Agenda Automatizada',
      description: 'Olvídate de los emails para cuadrar horas. Tus clientes reservan en tu calendario y el sistema confirma todo solo.',
      bullets: [
        'Integración con Google Calendar',
        'Confirmación automática al cliente',
        'Recordatorios antes de la cita'
      ],
      icon: (
        <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      glowClass: 'group-hover:border-lime-green/40 group-hover:shadow-[0_0_30px_rgba(191,255,0,0.1)]'
    },
    {
      title: 'Bots de Gestión IA',
      tag: 'Atención Inteligente',
      description: 'Asistentes virtuales que responden dudas frecuentes y notifican problemas graves sin que muevas un dedo.',
      bullets: [
        'Respuestas automáticas basadas en IA',
        'Clasificación de incidencias urgentes',
        'Conexión directa a Telegram o WhatsApp'
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      glowClass: 'group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]'
    }
  ];

  return (
    <section id="services" className="w-full py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-neon-cyan font-bold uppercase tracking-widest">Nuestros Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Sistemas que trabajan por ti</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className={`p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 transition-all ${service.glowClass}`}>
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.bullets.map((b, i) => <li key={i} className="text-xs text-gray-500">• {b}</li>)}
              </ul>
              <button onClick={onOpenModal} className="text-sm font-bold text-neon-cyan cursor-pointer">Solicitar esta solución →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
