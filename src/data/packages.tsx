export interface Package {
  title: string;
  description: string;
  duration: string;
  location: string;
  images: string[];
  whatsappMessage: string;
  features?: string[];
  customizable?: boolean;
}

export const nacionalPackages: Package[] = [
  {
    title: "Ciudad Amurallada",
    description: "Descubre la magia colonial de Cartagena, sus playas paradisíacas y la vida nocturna del caribe colombiano.",
    duration: "5 días / 4 noches",
    location: "Cartagena, Colombia",
    images: [
      "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1598965612140-57f920da782e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Me interesa el paquete 'Ciudad Amurallada' en Cartagena. ¿Podrían darme más información?",
    features: ["City tour histórico", "Tour a Islas del Rosario", "Alojamiento boutique", "Traslados incluidos"],
  },
  {
    title: "Eje Cafetero",
    description: "Sumérgete en la cultura cafetera, recorre plantaciones, disfruta del paisaje cultural y vive la hospitalidad paisa.",
    duration: "4 días / 3 noches",
    location: "Eje Cafetero, Colombia",
    images: [
      "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "/images/Paquetes/norteAmerica/tours-eje.png"
    ],
    whatsappMessage: "¡Hola! Quisiera información sobre el paquete 'Eje Cafetero'. ¿Qué actividades incluye?",
    features: [
      "Transporte en vehículos de servicios especiales",
      "Alojamiento en Finca Hotel Camino al Parque Fernando o Magia Cafetera",
      "Alimentación: 3 desayunos y 3 cenas",
      "Guía acompañante durante todo el recorrido",
      "Asistencia médica Colasistencia"
    ],
    customizable: true
  },
  {
    title: "San Andrés Todo Incluido",
    description: "Relájate en las playas más hermosas de Colombia con mar de 7 colores, deportes acuáticos y gastronomía isleña.",
    duration: "6 días / 5 noches",
    location: "San Andrés, Colombia",
    images: [
      "https://images.unsplash.com/photo-1669517270484-df54ad8d54c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBhbmRyZXMlMjBpc2xhbmQlMjBjYXJpYmJlYW4lMjBiZWFjaHxlbnwxfHx8fDE3NzUwOTc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1582236471842-1e967119ec80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Me interesa el paquete 'San Andrés Todo Incluido'. ¿Cuál es el precio?",
    features: ["Vuelos incluidos", "Hotel frente al mar", "Desayunos y cenas", "Tour acuario y Johnny Cay"],
  },
  {
    title: "Desierto y Villa de Leyva",
    description: "Aventura en el Desierto de la Tatacoa y encanto colonial en Villa de Leyva, dos joyas únicas de Colombia.",
    duration: "5 días / 4 noches",
    location: "Huila y Boyacá, Colombia",
    images: [
      "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1583390234789-9e8d477813a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Me fascina el paquete 'Desierto y Villa de Leyva'. ¿Cuándo puedo viajar?",
    features: ["Observación astronómica", "Tour por el desierto rojo", "Cata de vinos en Villa de Leyva", "Transporte de lujo"],
  },
];

export const internacionalPackages: Package[] = [
  {
    title: "Caribe Paradisíaco",
    description: "Disfruta de playas de arena blanca, aguas cristalinas y atardeceres inolvidables en el Caribe.",
    duration: "7 días / 6 noches",
    location: "Caribe",
    images: [
      "https://images.unsplash.com/photo-1602455891364-31034e19a826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY4MzE0NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Me interesa el paquete 'Caribe Paradisíaco' de 7 días. ¿Podrían darme más información?",
    features: ["Alojamiento 5 estrellas", "Plan todo incluido", "Fiesta blanca nocturna", "Snorkeling guiado"],
  },
  {
    title: "París Romántico",
    description: "Vive la ciudad del amor con visitas a la Torre Eiffel, Louvre y paseos por el Sena.",
    duration: "5 días / 4 noches",
    location: "París, Francia",
    images: [
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2ODI5NzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Me interesa el paquete 'París Romántico'. ¿Qué incluye el itinerario?",
    features: ["Crucero por el Sena", "Entradas al Louvre", "Cena en Montmartre", "Guía en español"],
  },
  {
    title: "Japón Tradicional",
    description: "Explora templos milenarios, jardines zen y sumérgete en la cultura japonesa auténtica.",
    duration: "10 días / 9 noches",
    location: "Kyoto, Japón",
    images: [
      "https://images.unsplash.com/photo-1649451898726-1ed602692cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlbXBsZSUyMGt5b3RvfGVufDF8fHx8MTc2ODI2Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Quisiera saber más sobre el paquete 'Japón Tradicional'. ¿Cuáles son las fechas disponibles?",
    features: ["Ceremonia del té", "JR Pass incluido", "Hospedaje Ryokan", "Tour santuarios Kyoto"],
  },
  {
    title: "Aventura Patagónica",
    description: "Trekking en glaciares, lagos turquesa y paisajes que te dejarán sin aliento en la Patagonia.",
    duration: "8 días / 7 noches",
    location: "Patagonia",
    images: [
      "https://images.unsplash.com/photo-1649710972692-34778ba6164f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY4Mjk2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Me encanta la aventura y me interesa el paquete 'Aventura Patagónica'. ¿Qué actividades incluye?",
    features: ["Trekking glaciar Perito Moreno", "Crucero por fiordos", "Equipo técnico incluido", "Vuelos de conexión"],
  },
  {
    title: "Grecia Mágica",
    description: "Descubre las islas griegas, sus puestas de sol en Santorini y la historia de Atenas.",
    duration: "9 días / 8 noches",
    location: "Grecia",
    images: [
      "https://images.unsplash.com/photo-1676730056228-7e38cbb88edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY4MjUxMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Estoy interesado/a en el paquete 'Grecia Mágica'. ¿Qué islas se visitan?",
    features: ["Ferry express entre islas", "Entrada a la Acrópolis", "Alojamiento con vista al mar", "Tour de vinos en Santorini"],
  },
  {
    title: "Auroras Boreales",
    description: "Vive la magia de las auroras boreales en Islandia con aguas termales y paisajes únicos.",
    duration: "6 días / 5 noches",
    location: "Islandia",
    images: [
      "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGljZWxhbmR8ZW58MXx8fHwxNzY4MjY3Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    whatsappMessage: "¡Hola! Me fascina el paquete 'Auroras Boreales'. ¿En qué época del año es mejor viajar?",
    features: ["Safari fotográfico de auroras", "Baño en Blue Lagoon", "Visita a glaciares y volcanes", "Chaqueta térmica de cortesía"],
  },
];


export const europaPackages: Package[] = [
  {
    title: "Turquia",
    description: "Recorre Estambul, Capadocia y Pamukkale en un solo viaje.",
    duration: "15 días / 14 noches",
    location: "Turquia",
    images: ["/images/Paquetes/Europa/turquiaPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Turquia.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Grecia",
    description: "Recorre Atenas, Santorini y Mykonos en un solo viaje.",
    duration: "15 días / 14 noches",
    location: "Grecia",
    images: ["/images/Paquetes/Europa/greciaPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Grecia.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Egipto",
    description: "Recorre El Cairo, Luxor y Asuán en un solo viaje.",
    duration: "15 días / 14 noches",
    location: "Egipto",
    images: ["/images/Paquetes/Europa/egiptoPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Egipto.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Tailandia",
    description: "Recorre Bangkok, Chiang Mai y Phuket en un solo viaje.",
    duration: "15 días / 14 noches",
    location: "Tailandia",
    images: ["/images/Paquetes/Europa/tailandiaPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Tailandia.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Inglaterra",
    description: "Recorre Londres, Manchester y Liverpool en un solo viaje.",
    duration: "15 días / 14 noches",
    location: "Inglaterra",
    images: ["/images/Paquetes/Europa/inglaterraPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Inglaterra.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  }
];

export const norteAmericaPackages: Package[] = [
  {
    title: "Puerto Vallarta",
    description: "Disfruta de las playas de Puerto Vallarta en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Puerto Vallarta",
    images: ["/images/Paquetes/norteAmerica/puertoVallartaPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Puerto Vallarta.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Los Cabos",
    description: "Disfruta de las playas de Los Cabos en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Los Cabos",
    images: ["/images/Paquetes/norteAmerica/cabosPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Los Cabos.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Nueva York",
    description: "Disfruta de la ciudad de Nueva York en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Nueva York",
    images: ["/images/Paquetes/norteAmerica/nyPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Nueva York.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Orlando",
    description: "Disfruta de la ciudad de Orlando en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Orlando",
    images: ["/images/Paquetes/norteAmerica/orlandoPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Orlando.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Miami",
    description: "Disfruta de las playas de Miami en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Miami",
    images: ["/images/Paquetes/norteAmerica/miamiPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Miami.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Las Vegas",
    description: "Disfruta de la ciudad de Las Vegas en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Las Vegas",
    images: ["/images/Paquetes/norteAmerica/vegasPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Las Vegas.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Los Angeles",
    description: "Disfruta de la ciudad de Los Angeles en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Los Angeles",
    images: ["/images/Paquetes/norteAmerica/LAPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Los Angeles.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Ciudad de Mexico",
    description: "Disfruta de la Ciudad de Mexico en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Ciudad de Mexico",
    images: ["/images/Paquetes/norteAmerica/cdmxPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Ciudad de Mexico.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  }
];