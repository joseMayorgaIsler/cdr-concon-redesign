import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/INICIO+PARA+ENVIAR/Copia+de+CASONA+PARA+FOLLETO+1.jpg',
    title: 'Bienvenidos a CDR Concón',
    subtitle: 'Tradición deportiva y familiar en el corazón de la V región.'
  },
  {
    image: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_6222.JPG',
    title: 'Instalaciones de Primer Nivel',
    subtitle: 'Disfruta de nuestros campos deportivos y áreas de recreación.'
  },
  {
    image: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/INICIO+PARA+ENVIAR/MOVIE_%5B1108%5D.jpg',
    title: 'Comunidad Exclusiva',
    subtitle: 'Un espacio seguro pensado para nuestros socios.'
  }
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg transform translate-y-0 transition-transform duration-700">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
            <div className="mt-8">
              <Link 
                to="/ramas" 
                className="px-8 py-3 bg-cdr-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              >
                Explorar Ramas
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-sm"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-cdr-red w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;