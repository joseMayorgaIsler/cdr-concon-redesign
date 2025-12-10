import { NavItem, Branch, Facility, Event } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Ramas Deportivas', href: '/ramas' },
  { label: 'Dependencias', href: '/dependencias' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Contacto', href: '/contacto' },
];

export const BRANCHES: Branch[] = [
  {
    id: 'b1',
    title: 'Fútbol',
    description: 'Nuestra rama más histórica. Contamos con canchas de pasto sintético y natural de primer nivel para el desarrollo de ligas y escuelas.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1434.JPG',
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1434.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_9479.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_4931.JPG'
    ],
    schedule: 'Martes y Jueves 18:00 - 22:00',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b2',
    title: 'Tenis',
    description: 'Canchas de arcilla mantenidas profesionalmente. Torneos internos y clases particulares para todas las edades.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_5353.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_5353.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_5568.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_5371.JPG'
    ],
    schedule: 'Lunes a Domingo 08:00 - 22:00',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
    {
    id: 'b3',
    title: 'Tenis de Mesa',
    description: 'Velocidad y reflejos. Mesas profesionales disponibles para práctica libre, entrenamiento técnico y torneos internos.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_0026.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_0026.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_0547.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_5033.JPG'
    ],
    schedule: 'Lunes a Domingo 08:00 - 22:00',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b4',
    title: 'Basquetball',
    description: 'Cancha multipropósito para el desarrollo de escuelas formativas y ligas de adultos. Fomento del trabajo en equipo.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1865.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1865.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_2502.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_7830.JPG'
    ],
    schedule: 'Temporada de Verano',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b5',
    title: 'Gimnasio & Fitness',
    description: 'Máquinas de última generación y clases dirigidas de baile entretenido, yoga y pilates.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/IMG_8990.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/IMG_8990.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/IMG_8991.JPG',
      'https://picsum.photos/id/1069/800/600'
    ],
    schedule: 'Lunes a Sábado 07:00 - 21:00',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b6',
    title: 'Rayuela',
    description: 'Tradición y camaradería. Un espacio techado para practicar nuestro deporte nacional en un ambiente familiar.',
    //imageUrl: 'https://picsum.photos/id/191/800/600', // Placeholder
    images: [
      'https://picsum.photos/id/191/800/600',
      'https://picsum.photos/id/1070/800/600',
      'https://picsum.photos/id/1069/800/600'
    ],
    schedule: 'Viernes y Sábado',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b7',
    title: 'Arquería',
    description: 'Disciplina de concentración y precisión. Contamos con zona de tiro segura y equipamiento para iniciación y avanzados.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_4879.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_4879.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_4802.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_4786.JPG'
    ],
    schedule: 'Viernes y Sábado',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b8',
    title: 'Mountain Bike',
    description: 'Aprovechando el entorno natural de Concón. Salidas grupales, senderos técnicos y camaradería sobre ruedas.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1974.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1974.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1961.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1834.JPG'
    ],
    schedule: 'Viernes y Sábado',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b9',
    title: 'Paintball',
    description: 'Adrenalina y estrategia al aire libre. Campo equipado con obstáculos naturales y artificiales para batallas por equipos.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_3338.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_3338.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1501.JPG',
    ],
    schedule: 'Viernes y Sábado',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b10',
    title: 'Voleibol',
    description: 'Deporte de equipo dinámico. Entrenamientos mixtos enfocados en técnica, táctica y preparación física.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_9502.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_9502.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_9846.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1144.JPG'
    ],
    schedule: 'Viernes y Sábado',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b11',
    title: 'Pádel',
    description: 'Canchas modernas. Arriendos, clases y torneos en el deporte de mayor crecimiento.',
    //imageUrl: 'https://picsum.photos/id/191/800/600', // Placeholder
    images: [
      'https://picsum.photos/id/191/800/600',
      'https://picsum.photos/id/1070/800/600',
      'https://picsum.photos/id/1069/800/600'
    ],
    schedule: 'Viernes y Sábado',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
  {
    id: 'b12',
    title: 'Running & Maratón',
    description: 'Grupo de entrenamiento para corredores de distancia. Preparación física y planificación para competencias regionales.',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_0556.JPG', // Placeholder
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_0556.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_0952.JPG',
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/DEPORTES/DSC_1542.JPG'
    ],
    schedule: 'Viernes y Sábado',
    manager: 'Sofía Bravo',
    email: 'running@cdrconcon.cl'
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    title: 'Salón Principal',
    description: 'Elegante salón para matrimonios, cenas de gala y eventos corporativos. Vista panorámica al club.',
    capacity: '200 Personas',
    //imageUrl: 'https://picsum.photos/id/230/800/600',
    images: [
      'https://picsum.photos/id/191/800/600',
      'https://picsum.photos/id/1070/800/600',
      'https://picsum.photos/id/1069/800/600'
    ],
    features: ['Cocina Industrial', 'Escenario', 'Audio/Iluminación'],
  },
  {
    id: 'f2',
    title: 'Quinchos Familiares',
    description: 'Espacios al aire libre totalmente equipados para asados y celebraciones familiares.',
    capacity: '20 Personas c/u',
    //imageUrl: 'https://picsum.photos/id/431/800/600',
    images: [
      'https://picsum.photos/id/191/800/600',
      'https://picsum.photos/id/1070/800/600',
      'https://picsum.photos/id/1069/800/600'
    ],
    features: ['Parrilla', 'Agua Potable', 'Iluminación', 'Mesas Rústicas'],
  },
  {
    id: 'f3',
    title: 'Pérgolas',
    description: 'Zona semi-abierta ideal para cumpleaños infantiles o reuniones informales.',
    capacity: '20 Personas',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/PE%CC%81RGOLAS/DSC_5067.JPG',
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/PE%CC%81RGOLAS/DSC_5067.JPG',
      'https://picsum.photos/id/1070/800/600',
      'https://picsum.photos/id/1069/800/600'
    ],
    features: ['Cerca de Juegos Infantiles', 'Sombra', 'Electricidad'],
  },
    {
    id: 'f4',
    title: 'Quincho Pimentel',
    description: 'Quincho cerrado ideal para cumpleaños infantiles o reuniones grupales.',
    capacity: '30 Personas',
    //imageUrl: 'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/QUINCHO+PIMENTEL/DSC_4586.JPG',
    images: [
      'https://cdr-concon-assets-prod.s3.us-east-1.amazonaws.com/QUINCHO+PIMENTEL/DSC_4586.JPG',
      'https://picsum.photos/id/1070/800/600',
      'https://picsum.photos/id/1069/800/600'
    ],
    features: ['Cerca de Juegos Infantiles', 'Parrilla para asados', 'Refrigerador', 'Sombra'],
  },
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Campeonato Inter-Empresas',
    date: '15 de Noviembre, 2023',
    description: 'Gran final del torneo de fútbol con premiación y cóctel de cierre.',
    fullDescription: 'El Campeonato Inter-Empresas llega a su fin este 15 de noviembre. Tras 3 meses de intensa competencia, las empresas finalistas se enfrentarán en nuestra cancha principal. El evento comenzará a las 18:00 hrs con el partido por el tercer lugar, seguido de la gran final a las 20:00 hrs. Contaremos con la presencia de ex futbolistas profesionales como invitados especiales. Al finalizar, tendremos una ceremonia de premiación y un cóctel de camaradería en el Salón Principal.',
    imageUrl: 'https://picsum.photos/id/158/800/400',
    gallery: [
      'https://picsum.photos/id/147/800/600',
      'https://picsum.photos/id/158/800/600',
      'https://picsum.photos/id/169/800/600',
      'https://picsum.photos/id/191/800/600',
      'https://picsum.photos/id/201/800/600',
      'https://picsum.photos/id/222/800/600'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Example video ID
  },
  {
    id: 'e2',
    title: 'Fiesta de la Primavera',
    date: '20 de Octubre, 2023',
    description: 'Evento social para socios y sus familias con música en vivo y foodtrucks.',
    fullDescription: 'Celebramos la llegada de la primavera con nuestro tradicional evento familiar. Desde las 12:00 del día, el campo deportivo se llenará de colores y música. Tendremos zona de juegos inflables para los niños, feria de emprendedores locales, y una variada oferta gastronómica con los mejores Foodtrucks de la región. La música en vivo estará a cargo de bandas tributo y grupos folclóricos de la zona.',
    imageUrl: 'https://picsum.photos/id/348/800/400',
    gallery: [
      'https://picsum.photos/id/348/800/600',
      'https://picsum.photos/id/429/800/600',
      'https://picsum.photos/id/491/800/600',
      'https://picsum.photos/id/511/800/600'
    ]
  },
];