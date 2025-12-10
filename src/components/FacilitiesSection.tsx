
import React, { useState } from 'react';
import { FACILITIES } from '../constants';
import { Facility } from '../types';
import { Check, CalendarDays, Users, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const FacilityCard: React.FC<{ facility: Facility }> = ({ facility }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === facility.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? facility.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-cdr-blue/30 transition-colors shadow-sm hover:shadow-xl flex flex-col group">
      {/* Carousel Logic */}
      <div className="h-56 overflow-hidden relative">
        {facility.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${facility.title} - Imagen ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Carousel Controls */}
        {facility.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
              {facility.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full shadow-sm transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/60 w-1.5'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-cdr-blue">{facility.title}</h3>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Users className="w-4 h-4 mr-2" />
          Capacidad: {facility.capacity}
        </div>
        <p className="text-gray-600 mb-6 flex-grow">
          {facility.description}
        </p>
        <div className="space-y-2 mb-8">
          {facility.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              {feature}
            </div>
          ))}
        </div>
         <a 
          href="https://reservasonline.cdrconcon.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-auto bg-white border-2 border-cdr-blue text-cdr-blue hover:bg-cdr-blue hover:text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center group-hover:bg-cdr-blue group-hover:text-white"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Ir a Reservas
        </a>
      </div>
    </div>
  );
};

const FacilitiesSection: React.FC = () => {
  return (
    <section id="dependencias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cdr-blue mb-4">Dependencias y Arriendos</h2>
          <div className="w-24 h-1 bg-cdr-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Disfruta de nuestros espacios diseñados para la celebración y el esparcimiento. 
            <span className="font-bold text-cdr-blue block mt-1">Exclusivo para arriendo de socios.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {FACILITIES.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
