import React from 'react';
import HeroCarousel from './HeroCarousel';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Calendar, MapPin, Trees, Landmark, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Carousel is now part of Home */}
      <HeroCarousel />

      {/* Welcome / Summary Section */}
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-cdr-blue mb-6">Bienvenidos a CDR Concón</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Somos la corporación sin fines de lucro que administra y desarrolla las dependencias del Campo Deportivo de ENAP Refinería Aconcagua en Concón. 
            Con más de 23 hectáreas de equipamiento deportivo y recreativo, tenemos como misión el fomento del deporte en todos sus niveles, desde el introductorio hasta el de alto rendimiento, especialmente entre nuestros asociados, funcionarios de Refinería Aconcagua, en la comunidad de Concón y la V Región.
          </p>
        </div>
      </section>

      {/* NEW: Core Values Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Item 1: Sustentabilidad */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border border-green-100 shadow-sm">
                  <Trees className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustentabilidad medioambiental</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Nuestras instalaciones están insertas en el pulmón verde de la comuna, espacio en el que desarrollamos procesos de 
                  reforestación con flora nativa para concretar nuestro compromiso medio ambiental.
                </p>
              </div>
            </div>

            {/* Item 2: Patrimonio */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 shadow-sm">
                  <Landmark className="w-8 h-8 text-gray-800" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Valor patrimonial</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Y nuestro compromiso también considera el gran valor patrimonial, natural y cultural del terreno en el que están nuestras 
                  dependencias deportivas y recreativas, por lo que las mantenemos y difundimos la riqueza histórica y ambiental, como 
                  son las piedras tacitas, la Casona del antiguo fundo Concón Bajo, hospital de la batalla de Concón, guerra civil de 1891 
                  y toda la flora y fauna nativa que hay en el Campo Deportivo.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-200">
                    Piedras Tacitas
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-200">
                    Casona Fundo Concón Bajo
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-200">
                    Sitio Histórico 1891
                  </span>
                </div>
              </div>
            </div>

            {/* Item 3: RSE */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 shadow-sm">
                  <Globe className="w-8 h-8 text-cdr-blue" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Responsabilidad social empresarial</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Desarrollamos actividades deportivas y recreativas para los habitantes de las comunas aledañas, juntas de vecinos, 
                  Instituciones de educación, cruz roja, clubes de adulto mayor, entre otros Olimpiadas escolares, con las escuelas de 
                  las comunas aledañas. Con un programa de vinculación con el medio que posibilita que las dependencias del Campo Deportivo 
                  puedan ser utilizadas por la mayor cantidad de habitantes de las comunas aledañas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cdr-blue">Explora nuestro Club</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1: Ramas */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                 <img 
                    src="https://picsum.photos/id/1058/800/600" 
                    alt="Deportes" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-cdr-blue/60 group-hover:bg-cdr-blue/40 transition-colors flex items-center justify-center">
                    <Activity className="text-white w-12 h-12" />
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-cdr-blue mb-3">Ramas Deportivas</h3>
                <p className="text-gray-600 mb-6">Fútbol, Tenis, Natación y más. Descubre nuestras disciplinas exclusivas.</p>
                <Link to="/ramas" className="inline-flex items-center text-cdr-red font-bold hover:text-red-700 transition-colors">
                  Ver todas las ramas <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Dependencias */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                 <img 
                    src="https://picsum.photos/id/431/800/600" 
                    alt="Instalaciones" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-cdr-blue/60 group-hover:bg-cdr-blue/40 transition-colors flex items-center justify-center">
                    <MapPin className="text-white w-12 h-12" />
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-cdr-blue mb-3">Dependencias</h3>
                <p className="text-gray-600 mb-6">Quinchos, salones y espacios recreativos disponibles para arriendo de socios.</p>
                <Link to="/dependencias" className="inline-flex items-center text-cdr-red font-bold hover:text-red-700 transition-colors">
                  Revisar instalaciones <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Eventos */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                 <img 
                    src="https://picsum.photos/id/158/800/600" 
                    alt="Eventos" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-cdr-blue/60 group-hover:bg-cdr-blue/40 transition-colors flex items-center justify-center">
                    <Calendar className="text-white w-12 h-12" />
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-cdr-blue mb-3">Eventos Club</h3>
                <p className="text-gray-600 mb-6">Mantente al día con las actividades sociales y deportivas de nuestra comunidad.</p>
                <Link to="/eventos" className="inline-flex items-center text-cdr-red font-bold hover:text-red-700 transition-colors">
                  Ver calendario <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;