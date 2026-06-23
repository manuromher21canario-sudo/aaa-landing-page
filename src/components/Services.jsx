import React from 'react';

export default function Services({ onOpenModal }) {
  const servicesList = [
    {
      title: 'Automatización con n8n',
      tag: 'Eficiencia Absoluta',
      description: 'Conectamos tus herramientas favoritas y creamos flujos de trabajo autónomos sin depender de Zapier o costes ocultos.',
      bullets: [
        'Sincronización bidireccional de CRMs (HubSpot, Salesforce, Pipedrive)',
        'Alertas automatizadas y reportes de métricas en Slack/Teams',
        'Procesamiento inteligente de datos (APIs, Webhooks, Parseo de PDFs)'
      ],
      icon: (
        <svg className="w-8 h-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 18h6M15 9V6M15 15h0" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l6-3M6 15l6-3M18 9l-6 6" />
        </svg>
      ),
      glowClass: 'group-hover:border-neon-cyan/40 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]'
    },
    {
      title: 'Bots de Gestión (WhatsApp/Telegram)',
      tag: 'Atención & CRM 24/7',
      description: 'Asistentes virtuales interactivos que responden preguntas, agendan reuniones y cualifican leads automáticamente.',
      bullets: [
        'Integración oficial con WhatsApp Cloud API y Telegram Bot API',
        'Conexión en tiempo real con Google Sheets, Notion o tu base de datos',
        'Derivación inteligente a agentes humanos bajo condiciones críticas'
      ],
      icon: (
        <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742h.01m5.624 0h.01m-6.427 4.285A9 9 0 1121.2 12a9 9 0 01-13.308 3.027M9 15h6M9.75 18.25h4.5" />
        </svg>
      ),
      glowClass: 'group-hover:border-lime-green/40 group-hover:shadow-[0_0_30px_rgba(191,255,0,0.1)]'
    },
    {
      title: 'Web Dev de Alto Impacto',
      tag: 'Conversión Acelerada',
      description: 'Landing pages y aplicaciones web optimizadas para el rendimiento SEO y tasas de conversión de Silicon Valley.',
      bullets: [
        'Desarrollo ultrarrápido con React y Tailwind CSS',
        'Optimización Core Web Vitals para tiempos de carga menores a 1 segundo',
        'Analíticas avanzadas y embudos de conversión integrados'
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      glowClass: 'group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]'
    }
  ];

  return (
    <section id="services" className="w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative">
      {/* Visual background divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Nuestras Especialidades</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Sistemas que Trabajan por Ti</h3>
          <p className="text-gray-400 font-light text-sm md:text-base">
            No vendemos horas de trabajo. Construimos activos digitales autónomos que optimizan tus flujos comerciales y operativos.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between p-8 rounded-2xl bg-[#0d0d0d]/80 border border-white/5 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1.5 ${service.glowClass}`}
            >
              <div className="space-y-6">
                {/* Icon & Tag */}
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                    {service.tag}
                  </span>
                </div>

                {/* Service Details */}
                <div className="space-y-3 text-left">
                  <h4 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-200">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 pt-4 text-left border-t border-white/5">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-400 leading-relaxed font-light">
                      <span className="text-lime-green pt-0.5">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA inside */}
              <div className="pt-8 text-left">
                <button
                  onClick={onOpenModal}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-neon-cyan transition-colors duration-200 cursor-pointer"
                >
                  Me interesa esta solución
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
