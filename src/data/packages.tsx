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

export const colombiaPackages: Package[] = [
  {
    title: "Boyaca",
    description:
      "Descubre la magia de Boyacá, sus montañas, sus paisajes y su cultura.",
    duration: "5 días / 4 noches",
    location: "Boyacá, Colombia",
    images: [
      "/images/Paquetes/Colombia/boyacaPaquete.jpeg",
      "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el paquete 'Boyaca' en Colombia. ¿Podrían darme más información?",
    features: [
      "City tour histórico",
      "Tour a Islas del Rosario",
      "Alojamiento boutique",
      "Traslados incluidos",
    ],
  },
  {
    title: "Eje Cafetero",
    description:
      "Sumérgete en la cultura cafetera, recorre plantaciones, disfruta del paisaje cultural y vive la hospitalidad paisa.",
    duration: "4 días / 3 noches",
    location: "Eje Cafetero, Colombia",
    images: [
      "/images/Paquetes/Colombia/ejeCafeteroPaquete.jpeg",
      "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Quisiera información sobre el paquete 'Eje Cafetero'. ¿Qué actividades incluye?",
    features: [
      "Transporte en vehículos de servicios especiales",
      "Alojamiento en Finca Hotel Camino al Parque Fernando o Magia Cafetera",
      "Alimentación: 3 desayunos y 3 cenas",
      "Guía acompañante durante todo el recorrido",
      "Asistencia médica Colasistencia",
    ],
    customizable: true,
  },
  {
    title: "Mompox",
    description:
      "Relájate en las playas más hermosas de Colombia con mar de 7 colores, deportes acuáticos y gastronomía isleña.",
    duration: "6 días / 5 noches",
    location: "Mompox, Colombia",
    images: [
      "/images/Paquetes/Colombia/mompoxPaquete.jpeg",
      "https://images.unsplash.com/photo-1669517270484-df54ad8d54c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBhbmRyZXMlMjBpc2xhbmQlMjBjYXJpYmJlYW4lMjBiZWFjaHxlbnwxfHx8fDE3NzUwOTc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el paquete 'Mompox'. ¿Cuál es el precio?",
    features: [
      "Vuelos incluidos",
      "Hotel frente al mar",
      "Desayunos y cenas",
      "Tour acuario y Johnny Cay",
    ],
  },
  {
    title: "Llanos Orientales",
    description:
      "Aventura en los Llanos Orientales, dos joyas únicas de Colombia.",
    duration: "5 días / 4 noches",
    location: "Llanos Orientales, Colombia",
    images: [
      "/images/Paquetes/Colombia/llanosOrientalesPaquete.jpeg",
      "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me fascina el paquete 'Llanos Orientales'. ¿Cuándo puedo viajar?",
    features: [
      "Observación astronómica",
      "Tour por el desierto rojo",
      "Cata de vinos en Villa de Leyva",
      "Transporte de lujo",
    ],
  },
  {
    title: "Medellín",
    description: "Aventura en Medellín, la ciudad de la eterna primavera.",
    duration: "5 días / 4 noches",
    location: "Medellín, Colombia",
    images: [
      "/images/Paquetes/Colombia/medellinPaquete.jpeg",
      "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me fascina el paquete 'Medellín'. ¿Cuándo puedo viajar?",
    features: [
      "Observación astronómica",
      "Tour por el desierto rojo",
      "Cata de vinos en Villa de Leyva",
      "Transporte de lujo",
    ],
  },
  {
    title: "Bogotá",
    description: "Aventura en Bogotá, la capital de Colombia.",
    duration: "5 días / 4 noches",
    location: "Bogotá, Colombia",
    images: [
      "/images/Paquetes/Colombia/bogotaPaquete.jpeg",
      "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me fascina el paquete 'Bogotá'. ¿Cuándo puedo viajar?",
    features: [
      "Observación astronómica",
      "Tour por el desierto rojo",
      "Cata de vinos en Villa de Leyva",
      "Transporte de lujo",
    ],
  },
  {
    title: "Santander",
    description: "Aventura en Santander, la joya de Colombia.",
    duration: "5 días / 4 noches",
    location: "Santander, Colombia",
    images: [
      "/images/Paquetes/Colombia/santanderPaquete.jpeg",
      "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me fascina el paquete 'Santander'. ¿Cuándo puedo viajar?",
    features: [
      "Observación astronómica",
      "Tour por el desierto rojo",
      "Cata de vinos en Villa de Leyva",
      "Transporte de lujo",
    ],
  },
  {
    title: "Amazonas",
    description: "Aventura en Amazonas, la selva de Colombia.",
    duration: "5 días / 4 noches",
    location: "Amazonas, Colombia",
    images: [
      "/images/Paquetes/Colombia/amazonasPaquete.jpeg",
      "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me fascina el paquete 'Amazonas'. ¿Cuándo puedo viajar?",
    features: [
      "Observación astronómica",
      "Tour por el desierto rojo",
      "Cata de vinos en Villa de Leyva",
      "Transporte de lujo",
    ],
  },
  {
    title: "Desierto de la Tatacoa",
    description: "Aventura en el Desierto de la Tatacoa, la joya de Colombia.",
    duration: "5 días / 4 noches",
    location: "Desierto de la Tatacoa, Colombia",
    images: [
      "/images/Paquetes/Colombia/desiertoTatacoa.jpeg",
      "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me fascina el paquete 'Desierto de la Tatacoa'. ¿Cuándo puedo viajar?",
    features: [
      "Observación astronómica",
      "Tour por el desierto rojo",
      "Cata de vinos en Villa de Leyva",
      "Transporte de lujo",
    ],
  },
];

export const playasColombiaPackages: Package[] = [
  {
    title: "Santa Marta",
    description:
      "Disfruta de playas de arena blanca, aguas cristalinas y atardeceres inolvidables en Santa Marta.",
    duration: "7 días / 6 noches",
    location: "Santa Marta, Colombia",
    images: [
      "/images/Paquetes/playasColombia/santaMartaPaquete.jpeg",
      "https://images.unsplash.com/photo-1602455891364-31034e19a826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY4MzE0NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el paquete 'Santa Marta' de 7 días. ¿Podrían darme más información?",
    features: [
      "Alojamiento 5 estrellas",
      "Plan todo incluido",
      "Fiesta blanca nocturna",
      "Snorkeling guiado",
    ],
  },
  {
    title: "Cartagena",
    description:
      "Descubre la magia de Cartagena, una ciudad colonial llena de historia, cultura y playas hermosas.",
    duration: "5 días / 4 noches",
    location: "Cartagena, Colombia",
    images: [
      "/images/Paquetes/playasColombia/cartagenaPaquete.jpeg",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el paquete 'Cartagena'. ¿Qué incluye el itinerario?",
    features: [
      "Tour por las islas",
      "Tour por la ciudad amurallada",
      "Cena en la ciudad amurallada",
      "Tour por las islas",
    ],
  },
  {
    title: "Isla Mucura",
    description:
      "Descubre la belleza natural de Isla Mucura, un paraíso caribeño con aguas cristalinas y playas de arena blanca.",
    duration: "4 días / 3 noches",
    location: "Isla Mucura, Colombia",
    images: [
      "/images/Paquetes/playasColombia/islaMucuraPaquete.jpeg",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Quisiera saber más sobre el paquete 'Isla Mucura'. ¿Cuáles son las fechas disponibles?",
    features: [
      "Snorkeling",
      "Tour por las islas",
      "Hospedaje en la playa",
      "Tour por las islas",
    ],
  },
  {
    title: "Tintipán",
    description:
      "Descubre la belleza natural de Tintipán, un paraíso caribeño con aguas cristalinas y playas de arena blanca.",
    duration: "4 días / 3 noches",
    location: "Tintipán, Colombia",
    images: [
      "/images/Paquetes/playasColombia/tintipanPaquete.jpeg",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Me encanta la aventura y me interesa el paquete 'Tintipán'. ¿Qué actividades incluye?",
    features: [
      "Snorkeling",
      "Tour por las islas",
      "Hospedaje en la playa",
      "Tour por las islas",
    ],
  },
  {
    title: "San Andres",
    description:
      "Descubre la belleza natural de San Andres, un paraíso caribeño con aguas cristalinas y playas de arena blanca.",
    duration: "9 días / 8 noches",
    location: "San Andres, Colombia",
    images: [
      "/images/Paquetes/playasColombia/sanAndresPaquete.jpeg",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Estoy interesado/a en el paquete 'San Andres'. ¿Qué islas se visitan?",
    features: [
      "Tour por las islas",
      "Tour por la ciudad amurallada",
      "Cena en la ciudad amurallada",
      "Tour por las islas",
    ],
  },
  {
    title: "Nuqui",
    description:
      "Descubre la belleza natural de Nuqui, un paraíso caribeño con aguas cristalinas y playas de arena blanca.",
    duration: "6 días / 5 noches",
    location: "Nuqui, Colombia",
    images: [
      "/images/Paquetes/playasColombia/nuquiPaquete.jpeg",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Me fascina el paquete 'Nuqui'. ¿En qué época del año es mejor viajar?",
    features: [
      "Tour por las islas",
      "Tour por la ciudad amurallada",
      "Cena en la ciudad amurallada",
      "Tour por las islas",
    ],
  },
  {
    title: "Capurganá",
    description:
      "Descubre la belleza natural de Capurganá, un paraíso caribeño con aguas cristalinas y playas de arena blanca.",
    duration: "4 días / 3 noches",
    location: "Capurganá, Colombia",
    images: [
      "/images/Paquetes/playasColombia/capurganaPaquete.jpeg",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Estoy interesado/a en el paquete 'Capurganá'. ¿Qué islas se visitan?",
    features: [
      "Tour por las islas",
      "Tour por la ciudad amurallada",
      "Cena en la ciudad amurallada",
      "Tour por las islas",
    ],
  },
  {
    title: "Guajira",
    description:
      "Descubre la belleza natural de Guajira, un paraíso caribeño con aguas cristalinas y playas de arena blanca.",
    duration: "4 días / 3 noches",
    location: "Guajira, Colombia",
    images: [
      "/images/Paquetes/playasColombia/guajiraPaquete.jpeg",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Estoy interesado/a en el paquete 'Guajira'. ¿Qué islas se visitan?",
    features: [
      "Tour por las islas",
      "Tour por la ciudad amurallada",
      "Cena en la ciudad amurallada",
      "Tour por las islas",
    ],
  },
  {
    title: "Isla Fuerte",
    description:
      "Descubre la belleza natural de Isla Fuerte, un paraíso caribeño con aguas cristalinas y playas de arena blanca.",
    duration: "4 días / 3 noches",
    location: "Isla Fuerte, Colombia",
    images: [
      "/images/Paquetes/playasColombia/islaFuertePaquete.jpeg",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    whatsappMessage:
      "¡Hola! Estoy interesado/a en el paquete 'Isla Fuerte'. ¿Qué islas se visitan?",
    features: [
      "Tour por las islas",
      "Tour por la ciudad amurallada",
      "Cena en la ciudad amurallada",
      "Tour por las islas",
    ],
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
  },
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
  },
];

export const surAmericaPackages: Package[] = [
  {
    title: "Machu Picchu",
    description: "Disfruta de las ruinas de Machu Picchu en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Machu Picchu",
    images: ["/images/Paquetes/surAmerica/machupicchu.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Machu Picchu.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Cataratas del Iguazu",
    description: "Disfruta de las cataratas del Iguazu en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Cataratas del Iguazu",
    images: ["/images/Paquetes/surAmerica/iguazu.jpeg"],
    whatsappMessage:
      "¡Hola! Quisiera info del paquete a las cataratas del Iguazu.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Salar de Uyuni",
    description: "Disfruta de las playas de Salar de Uyuni en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Salar de Uyuni",
    images: ["/images/Paquetes/surAmerica/salaruyuni.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Salar de Uyuni.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Centro del Mundo",
    description: "Disfruta del Centro del Mundo en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Centro del Mundo",
    images: ["/images/Paquetes/surAmerica/centromundo.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete al Centro del Mundo.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Santiago de Chile",
    description: "Disfruta de la ciudad de Santiago de Chile en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Santiago de Chile",
    images: ["/images/Paquetes/surAmerica/santiagochile.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Santiago de Chile.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
];

export const caribePackages: Package[] = [
  {
    title: "Cancun",
    description: "Disfruta de las playas de Cancun en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Cancun",
    images: ["/images/Paquetes/playasCaribe/cancunPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Cancun.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Punta Cana",
    description: "Disfruta de las playas de Punta Cana en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Punta Cana",
    images: ["/images/Paquetes/playasCaribe/puntaCanaPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Punta Cana.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Aruba",
    description: "Disfruta de las playas de Aruba en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Aruba",
    images: ["/images/Paquetes/playasCaribe/arubaPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Aruba.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Ciudad de Panama",
    description: "Disfruta de la ciudad de Panama en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Ciudad de Panama",
    images: ["/images/Paquetes/playasCaribe/ciudadPanamaPaquete.png"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Ciudad de Panama.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Habana",
    description: "Disfruta de las playas de la Habana en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Habana",
    images: ["/images/Paquetes/playasCaribe/habanaPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a la Habana.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
  {
    title: "Nassau",
    description: "Disfruta de las playas de Nassau en un solo viaje.",
    duration: "5 días / 4 noches",
    location: "Nassau",
    images: ["/images/Paquetes/playasCaribe/nasauPaquete.jpeg"],
    whatsappMessage: "¡Hola! Quisiera info del paquete a Nassau.",
    features: ["Vuelos incluidos", "Guía en español", "Hoteles 4 estrellas"],
  },
];
