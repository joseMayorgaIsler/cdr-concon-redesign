import React from 'react';
import { Shield, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Info (Spans 2 columns on desktop) */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
              src='https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/MA%CC%81S+FOTOS+2025/LOGO_REDONDO.png'
              className="h-10 w-auto mr-3 transition-transform duration-300 group-hover:scale-105" // Ajusta h-10 según necesites
            />
              <span className="font-bold text-2xl tracking-wider">CDR CONCÓN</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Fomentando el deporte y la vida familiar en Concón. Una institución privada al servicio de sus socios y el bienestar de la comunidad.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-200">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-cdr-red transition-colors">Inicio</Link></li>
              <li><Link to="/ramas" className="hover:text-cdr-red transition-colors">Ramas Deportivas</Link></li>
              <li><Link to="/dependencias" className="hover:text-cdr-red transition-colors">Arriendos</Link></li>
              <li><Link to="/contacto" className="hover:text-cdr-red transition-colors">Dudas y consultas</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-200">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/cdrconcon/?locale=es_LA" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cdr-red transition-colors group">
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/cdrconcon/?hl=es" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cdr-red transition-colors group">
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="https://x.com/CDRConcon" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cdr-red transition-colors group">
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Club Deportivo Refinería Concón. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado para nuestros socios.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;