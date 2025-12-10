
import React from 'react';
import { EVENTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsSection: React.FC = () => {
  return (
    <section id="eventos" className="py-20 bg-cdr-blue text-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cdr-red/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Próximos Eventos</h2>
          <div className="w-24 h-1 bg-cdr-red"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col hover:bg-white/15 transition-all border border-white/10 shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-cdr-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                   EVENTO
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-cdr-red font-bold mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-6 flex-grow">
                  {event.description}
                </p>
                
                <Link 
                  to={`/eventos/${event.id}`}
                  className="inline-flex items-center text-white font-bold hover:text-cdr-red transition-colors mt-auto border-t border-white/20 pt-4"
                >
                  Ver detalles y galería <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
