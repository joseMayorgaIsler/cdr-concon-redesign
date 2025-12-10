
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EVENTS } from '../constants';
import { Calendar, ChevronLeft, ChevronRight, PlayCircle, Image as ImageIcon, X } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS.find(e => e.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset video state when event changes
  useEffect(() => {
    setIsPlaying(false);
  }, [id]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      switch (e.key) {
        case 'Escape':
          setLightboxIndex(null);
          break;
        case 'ArrowLeft':
          setLightboxIndex(prev => (prev === 0 || prev === null ? (event?.gallery?.length || 1) - 1 : prev - 1));
          break;
        case 'ArrowRight':
          setLightboxIndex(prev => (prev === (event?.gallery?.length || 1) - 1 ? 0 : (prev || 0) + 1));
          break;
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, event]);

  if (!event) {
    return (
      <div className="min-h-screen pt-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Evento no encontrado</h2>
        <Link to="/eventos" className="text-cdr-red hover:underline">
          Volver a la lista de eventos
        </Link>
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!event.gallery) return;
    setLightboxIndex(prev => (prev === 0 || prev === null ? event.gallery.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!event.gallery) return;
    setLightboxIndex(prev => (prev === event.gallery.length - 1 ? 0 : (prev || 0) + 1));
  };

  // Helper to append autoplay to URL
  const getVideoUrlWithAutoplay = (url: string) => {
    if (url.includes('?')) {
      return `${url}&autoplay=1`;
    }
    return `${url}?autoplay=1`;
  };

  return (
    <article className="pt-0 pb-20 bg-gray-50">
      {/* Hero Header with Main Image */}
      <div className="relative h-[60vh] w-full bg-gray-900">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-7xl mx-auto">
          <Link to="/eventos" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Volver a Eventos
          </Link>
          <div className="flex items-center text-cdr-red font-bold mb-3 text-lg">
             <Calendar className="w-5 h-5 mr-2" />
             {event.date}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        
        {/* Description Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-cdr-blue mb-6 border-b pb-4">Detalles del Evento</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="whitespace-pre-line leading-relaxed">
              {event.fullDescription}
            </p>
          </div>
        </div>

        {/* Video Section (Conditional) */}
        {event.videoUrl && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <PlayCircle className="w-8 h-8 text-cdr-red mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Video Resumen</h3>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black relative group">
              {!isPlaying ? (
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-full h-full relative block focus:outline-none"
                  aria-label="Reproducir video"
                >
                  <img 
                    src={event.imageUrl} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/50">
                       <PlayCircle className="w-16 h-16 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Haz clic para reproducir
                  </div>
                </button>
              ) : (
                <iframe 
                  className="w-full h-full"
                  src={getVideoUrlWithAutoplay(event.videoUrl)} 
                  title={event.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        )}

        {/* Photo Gallery (Conditional) */}
        {event.gallery && event.gallery.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <ImageIcon className="w-8 h-8 text-cdr-red mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Galería de Fotos</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.gallery.map((photo, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer bg-gray-100"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img 
                    src={photo} 
                    alt={`Galería ${event.title} ${index + 1}`} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm">
                          <ImageIcon className="w-6 h-6 text-white" />
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && event.gallery && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm animate-fade-in"
            onClick={() => setLightboxIndex(null)}
        >
            <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors z-50 rounded-full hover:bg-white/10"
                onClick={() => setLightboxIndex(null)}
                aria-label="Cerrar"
            >
                <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button 
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all z-50"
                onClick={handlePrev}
                aria-label="Anterior"
            >
                <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <img 
                src={event.gallery[lightboxIndex]} 
                alt={`Vista ampliada ${lightboxIndex + 1}`} 
                className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />

            <button 
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all z-50"
                onClick={handleNext}
                aria-label="Siguiente"
            >
                <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 bg-black/60 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-md">
                {lightboxIndex + 1} / {event.gallery.length}
            </div>
        </div>
      )}
    </article>
  );
};

export default EventDetail;
