import { Cruise } from "../types";

export const sinVisaCruises: Cruise[] = [
  {
    title: "Encantos del Caribe (Sin Visa)",
    shipName: "Costa Favolosa",
    line: "Costa Cruises",
    type: "sin-visa",
    description:
      "Vive una experiencia mágica a bordo del renovado Costa Favolosa. Disfruta de la mejor gastronomía italiana y diversión ilimitada saliendo desde Santo Domingo.",
    duration: "8 días / 7 noches",
    location: "Santo Domingo, Rep. Dominicana",
    images: [
      "/images/Cruceros/sinVisa/santoDomingo.jpg",
      "/images/Cruceros/sinVisa/santoDomingo2.jpg",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Caribe'. ¿Podrían darme más información?",
    itinerary: ["Santo Domingo", "Destinos del Caribe (Consulte escalas)"],
    included: [
      "Barco renovado en 2022",
      "Alimentación completa: Restaurantes Duca d'Orleans y Duca di Bogogna",
      "Acceso a 9 hidromasajes y piscinas con toboganes",
      "Entretenimiento: Teatro, Casino y actividades para niños por edades",
      "Bienestar: Gimnasio, Solarium y piscinas de hidromasaje",
      "Variedad de 12 bares (4 temáticos)",
      "Acceso a zonas comerciales y Beauty Spa Solemio",
    ],
  },
  {
    title: "Caribe Mágico (Sin Visa)",
    shipName: "MSC Opera",
    line: "MSC Cruises",
    type: "sin-visa",
    description:
      "Disfruta del Caribe saliendo desde La Romana sin necesidad de visa. Una experiencia completa de relax y diversión en alta mar.",
    duration: "8 días / 7 noches",
    location: "La Romana, República Dominicana",
    images: [
      "/images/Cruceros/sinVisa/laRomanaCrucero.jpg",
      "/images/Cruceros/sinVisa/laRomanaCrucero2.jpg",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Caribe'. ¿Podrían darme más información?",
    itinerary: ["La Romana", "Destinos del Caribe (Consulte escalas)"],
    included: [
      "Temporada Noviembre 2026 - Noviembre 2027",
      "Alimentación completa (Buffet y restaurantes de especialidad)",
      "Zonas de juego LEGO para niños y Parque Acuático",
      "Entretenimiento: Teatro, Casino y Discoteca Byblos",
      "Acceso a gimnasio, sauna y baño turco",
      "Asistencia por 728 miembros de tripulación",
    ],
  },
];

export const visaCruises: Cruise[] = [
  {
    title: "Magia en el Mar: Disney Cruise Line",
    shipName: "Disney Wish / Disney Dream",
    line: "Disney Cruise Line",
    type: "visa",
    description:
      "Vive la magia de Disney en alta mar. Una experiencia inigualable con encuentros con personajes, shows de Broadway y fuegos artificiales en el mar.",
    duration: "5 días / 4 noches",
    location: "Puerto Cañaveral (Florida), EE. UU.",
    images: [
      "/images/Cruceros/Visa/disneyCrucero.avif",
      "/images/Cruceros/Visa/disneyCrucero2.jpg",
    ],
    whatsappMessage:
      "¡Hola! Me encantaría recibir información sobre los cruceros de Disney. ¿Qué fechas hay disponibles?",
    itinerary: [
      "Puerto Cañaveral",
      "Nassau (Bahamas)",
      "Castaway Cay (Isla privada de Disney)",
    ],
    included: [
      "Encuentros y fotos con personajes de Disney, Marvel y Star Wars",
      "Alimentación completa: Restaurantes temáticos con rotación",
      "Bebidas gaseosas, café y té ilimitados en cubierta",
      "Shows estilo Broadway y cine con estrenos de Disney",
      "Fiestas temáticas en cubierta y fuegos artificiales",
      "Clubes exclusivos para niños, jóvenes y áreas solo para adultos",
      "Día en Castaway Cay, la isla privada de Disney en las Bahamas",
    ],
  },
  {
    title: "Caribe y Perfect Day at CocoCay",
    shipName: "Freedom of the Seas",
    line: "Royal Caribbean",
    type: "visa",
    description:
      "Disfruta de una escapada inolvidable combinando Nassau con la exclusividad de CocoCay, la isla privada de Royal Caribbean premiada como el mejor destino privado.",
    duration: "6 días / 5 noches",
    location: "Miami, Florida, EE. UU.",
    images: [
      "/images/Cruceros/Visa/miamiCrucero.jpg",
      "/images/Cruceros/Visa/miamiCrucero2.jpg",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero de 5 noches en el Freedom of the Seas saliendo desde Miami.",
    itinerary: [
      "Miami",
      "Nassau (Bahamas)",
      "Perfect Day at CocoCay",
      "Bahamas",
      "Miami",
    ],
    included: [
      "Alojamiento 5 noches en el Freedom of the Seas",
      "Alimentación completa (Restaurantes principales y buffet)",
      "Acceso a 'Perfect Day at CocoCay' (Isla privada)",
      "Simulador de surf FlowRider® y Pared de escalada",
      "Toboganes acuáticos y piscinas renovadas",
      "Shows estilo Broadway y entretenimiento nocturno",
      "Gimnasio de última tecnología y canchas deportivas",
      "Programas para niños y jóvenes (Adventure Ocean)",
    ],
  },
];

export const europaCruises: Cruise[] = [
  {
    title: "Mediterráneo Clásico",
    shipName: "Oasis of the Seas",
    line: "Royal Caribbean",
    type: "europa",
    description:
      "Recorre la historia visual del Mediterráneo visitando las costas de España, Francia e Italia.",
    duration: "8 días / 7 noches",
    location: "Barcelona, España",
    images: [
      "https://images.unsplash.com/photo-1516483642775-7389657094a3?q=80&w=1000",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero por el Mediterráneo desde Barcelona.",
    itinerary: [
      "Barcelona",
      "Palma de Mallorca",
      "Marsella",
      "La Spezia",
      "Roma",
    ],
    included: [
      "Alimentación completa",
      "Recorrido por ciudades históricas",
      "Shows y actividades premium",
    ],
  },
  {
    title: "Islas Griegas y Adriático",
    shipName: "Odyssey of the Seas",
    line: "Royal Caribbean",
    type: "europa",
    description:
      "Navega por las aguas azules del Mar Egeo y descubre la magia de Santorini y Mykonos.",
    duration: "10 días / 9 noches",
    location: "Civitavecchia (Roma), Italia",
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero por las Islas Griegas saliendo de Roma.",
    itinerary: ["Roma", "Santorini", "Mykonos", "Kusadasi", "Atenas"],
    included: [
      "Alimentación completa",
      "Entretenimiento de alto nivel",
      "Vistas espectaculares del Egeo",
    ],
  },
];

export const cruisesPackages: Cruise[] = [
  ...sinVisaCruises,
  ...visaCruises,
  ...europaCruises,
];
