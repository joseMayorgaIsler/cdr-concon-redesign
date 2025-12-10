import React from 'react';
import { ShieldCheck, Users, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cdr-blue mb-4">Quiénes Somos</h2>
          <div className="w-24 h-1 bg-cdr-red mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Somos la corporación sin fines de lucro que administra y desarrolla las dependencias del Campo Deportivo de ENAP Refinería Aconcagua, en Concón. Con más de 23 hectáreas de equipamiento deportivo, recreativo y para la producción de eventos corporativos, sociales y culturales.

            Ubicado en las laderas del rio Aconcagua y a pocos minutos de la Ciudad de Viña del Mar, se encuentra el Club Deportivo Refinería Concón, fundado el año 1981 nace con el objetivo claro de fomentar el deporte y el esparcimiento de las familias de ENAP.

            Comprometidos con la sustentabilidad medioambiental, con el gran parque natural del Campo Deportivo, el pulmón verde de la comuna, fomentando el deporte y la vida sana entre los habitantes de las comunas aledañas y manteniendo y difundiendo el rico patrimonio natural y cultural de este campo deportivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 bg-blue-100 rounded-full mb-6">
              <ShieldCheck className="w-10 h-10 text-cdr-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tradición y Prestigio</h3>
            <p className="text-gray-600">
              Años de historia formando deportistas y creando un espacio de encuentro para la familia.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 bg-red-100 rounded-full mb-6">
              <Users className="w-10 h-10 text-cdr-red" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidad Exclusiva</h3>
            <p className="text-gray-600">
              Un club privado enfocado en el bienestar de sus socios, garantizando seguridad y calidad.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 bg-blue-100 rounded-full mb-6">
              <Target className="w-10 h-10 text-cdr-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Excelencia Deportiva</h3>
            <p className="text-gray-600">
              Instalaciones mantenidas profesionalmente para la práctica de diversas disciplinas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
