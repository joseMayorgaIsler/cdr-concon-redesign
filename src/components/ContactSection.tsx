import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, Facebook, Instagram, Twitter  } from 'lucide-react';

// --- CONSTANTE CRÍTICA: URL del API Gateway ---
// Asegúrate de definir VITE_CONTACT_API_URL en tu archivo .env
const API_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL;
// ------------------------------------------------


// Definición de tipos para TypeScript
type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Estado para manejar la respuesta del servidor (éxito o fallo)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null); 

  const validate = (): boolean => {
    let isValid = true;
    const newErrors: Errors = { name: '', email: '', message: '' };

    // Validación de Nombre
    if (!formState.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
      isValid = false;
    } else if (formState.name.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
      isValid = false;
    }

    // Validación de Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido.';
      isValid = false;
    }

    // Validación de Mensaje
    if (!formState.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
      isValid = false;
    } else if (formState.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id as keyof FormState]: value }));
    
    // Limpiar error al escribir
    if (errors[id as keyof Errors]) {
      setErrors(prev => ({ ...prev, [id as keyof Errors]: '' }));
    }
  };

  // FUNCIÓN PARA ENVIAR DATOS AL API GATEWAY
  const sendEmail = async (data: FormState) => {
    if (!API_ENDPOINT) {
        console.error("API_ENDPOINT no está definida. Verifica tus variables de entorno.");
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
    }
    
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Enviamos los datos del formulario directamente
        body: JSON.stringify(data), 
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' }); // Limpiar formulario
      } else {
        // La API devolvió un código de error (ej: 400 o 500)
        setSubmitStatus('error');
        console.error('API Error:', response.status, await response.json());
      }
    } catch (error) {
      // Error de red (el servidor no responde)
      setSubmitStatus('error');
      console.error('Network Error:', error);
    } finally {
      setIsSubmitting(false);
      // Opcional: limpiar el estado del mensaje después de un tiempo
      setTimeout(() => setSubmitStatus(null), 7000); 
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null); // Resetear estado antes de un nuevo intento
    
    if (validate()) {
      setIsSubmitting(true);
      sendEmail(formState); // Llamar a la función real de envío
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cdr-blue mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-cdr-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card - Sin cambios */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
            
            <div className="space-y-6 flex-grow">
              {/* Dirección */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cdr-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Avenida Borgoño S/N, 2510000 Concón, Valparaíso</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-cdr-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+56265020333</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-cdr-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">contacto@cdrconcon.cl</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-cdr-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Horario de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes: 09:00 - 17:00</p>
                </div>
              </div>
            </div>
            {/* Social Media Block in Contact Info */}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Redes Sociales</h4>
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/cdrconcon/?locale=es_LA" className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-cdr-blue hover:bg-cdr-blue hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/cdrconcon/?hl=es" className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-cdr-blue hover:bg-cdr-blue hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/CDRConcon" className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-cdr-blue hover:bg-cdr-blue hover:text-white transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

            {/* Google Maps Embed */}
            <div className="mt-8 h-80 w-full bg-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-200">
               <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Club+Deportivo+Refineria+Concon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Ubicación CDR Concón"
                className="w-full h-full"
               ></iframe>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Escríbenos</h3>
            <p className="text-gray-600 mb-8">
              ¿Tienes dudas sobre las ramas o arriendos? Envíanos un mensaje.
            </p>
            
            {/* --- ÁREA DE MENSAJES DE ESTADO DE ENVÍO --- */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                <Send className="w-5 h-5 mr-2" />
                ¡Mensaje enviado con éxito! Nos comunicaremos con usted a la brevedad.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.
              </div>
            )}
            {/* ------------------------------------------- */}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-cdr-blue focus:border-transparent'
                    }`}
                    placeholder="Juan Pérez"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-cdr-blue focus:border-transparent'
                    }`}
                    placeholder="juan@ejemplo.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                    {errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-cdr-blue focus:border-transparent'
                    }`}
                    placeholder="Me gustaría cotizar el salón principal..."
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                    {errors.message && (
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !!submitStatus}
                className={`w-full text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center shadow-lg transform active:scale-95 ${
                  isSubmitting || !!submitStatus ? 'bg-gray-400 cursor-not-allowed' : 'bg-cdr-red hover:bg-red-700'
                }`}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;