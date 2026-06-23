import config from '../config';

export async function sendLeadToN8N(formData) {
  const url = config.N8N_WEBHOOK_URL;
  
  if (!url || url.includes('YOUR_N8N_WEBHOOK_URL_HERE')) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, message: 'Simulación activa.', simulated: true };
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Error al enviar a n8n');

    return { success: true, message: 'Enviado correctamente' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
