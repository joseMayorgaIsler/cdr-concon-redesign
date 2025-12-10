
import React, { useState } from 'react';
import { BRANCHES } from '../constants';
import { Branch } from '../types';
import { Lock, Clock, User, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

// Separate component for internal carousel state
const BranchCard: React.FC<{ branch: Branch }> = ({ branch }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === branch.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? branch.images.length - 1 : prev - 1));
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Carousel Container */}
      <div className="h-64 overflow-hidden relative flex-shrink-0">
        {branch.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${branch.title} - Imagen ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

    
        {/* Dark overlay for text contrast if needed, mostly for hover effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none" />

        {/* Carousel Controls */}
        {branch.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
              {branch.images.map((_, idx) => (
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

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-cdr-blue mb-2">{branch.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
          {branch.description}
        </p>
        
        <div className="space-y-3 pt-4 border-t border-gray-100 mt-auto">
          {/* Schedule */}
          <div className="flex items-start">
            <Clock className="w-4 h-4 text-cdr-blue mt-1 mr-2 flex-shrink-0" />
            <div>
               <span className="text-xs font-semibold text-gray-500 uppercase block">Horarios</span>
               <span className="text-sm font-medium text-gray-800">{branch.schedule}</span>
            </div>
          </div>

          {/* Manager */}
          <div className="flex items-start">
            <User className="w-4 h-4 text-cdr-blue mt-1 mr-2 flex-shrink-0" />
            <div>
               <span className="text-xs font-semibold text-gray-500 uppercase block">Encargado</span>
               <span className="text-sm text-gray-800">{branch.manager}</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <Mail className="w-4 h-4 text-cdr-blue mt-1 mr-2 flex-shrink-0" />
            <div className="overflow-hidden">
               <span className="text-xs font-semibold text-gray-500 uppercase block">Contacto</span>
               <a href={`mailto:${branch.email}`} className="text-sm text-cdr-red hover:underline truncate block">
                 {branch.email}
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BranchesSection: React.FC = () => {
  return (
    <section id="ramas" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-cdr-blue mb-2">Ramas Deportivas</h2>
            <div className="w-24 h-1 bg-cdr-red"></div>
          </div>
          <div className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center shadow-lg">
            <Lock className="w-5 h-5 mr-3 text-yellow-400" />
            <p className="font-semibold text-sm md:text-base">
              Acceso exclusivo para Socios del Club
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANCHES.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
