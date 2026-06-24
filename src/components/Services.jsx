import React from 'react';

export default function Services({ onOpenModal }) {
  const servicesList = [
    {
      title: 'Formularios Inteligentes',
      description: 'Formularios web que clasifican y guardan los datos de tus leads automáticamente en tu hoja de cálculo o CRM.',
      bullets: ['Registro en Google Sheets', 'Filtro inicial inteligente', 'Aviso instantáneo en Telegram'],
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Agendador de Citas 24/7',
      description: 'Olvídate de los chats para cuadrar horas. Tus clientes reservan en tu calendario y el sistema confirma todo solo.',
      bullets: ['Integración Google Calendar', 'Confirmación automática', 'Recordatorios para evitar faltas'],
      icon: (
        <svg className="w-8 h-8 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Bots de Gestión IA',
      description: 'Asistentes virtuales que responden dudas frecuentes y notifican problemas graves sin que muevas un dedo.',
      bullets: ['Respuestas automatizadas', 'Filtrado de incidencias', 'Conexión directa a Telegram'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="w-full py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Nuestros Servicios</h2>
          <h3 className="text-4xl font-extrabold text-white">Sistemas que trabajan por ti</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-cyan-400/30 transition-all group">
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> {b}
                  </li>
                ))}
              </ul>
              <button onClick={onOpenModal} className="text-sm font-bold text-cyan-400 cursor-pointer group-hover:underline">
                Solicitar esta solución →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
