export interface Cruise {
  title: string; //Nombre del crucero o itinerario
  shipName: string; // Nombre del barco
  description: string;
  duration: string;
  location: string; // Puerto de salida
  images: string[];
  whatsappMessage: string;
  itinerary: string[]; // Escalas (ej: Miami, Nassau, Cozumel)
  included: string[]; // Buffet, shows, propinas, etc.
  line: string;
  type: "nacional" | "internacional"; // Clasificación del crucero
}

export const cruisesPackages: Cruise[] = [
  {
    title: "Caribe Legendario",
    shipName: "Wonder of the Seas",
    line: "Royal Caribbean",
    type: "internacional",
    description:
      "Vive la aventura en el barco más grande del mundo recorriendo las joyas del Caribe.",
    duration: "8 días / 7 noches",
    location: "Miami, FL",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Caribe Legendario' en el barco Wonder of the Seas.",
    itinerary: ["Miami", "Perfect Day at CocoCay", "Cozumel", "Roatán"],
    included: [
      "Alimentación completa",
      "Shows estilo Broadway",
      "Parque acuático a bordo",
    ],
  },
  {
    title: "Caribe Clásico",
    shipName: "Symphony of the Seas",
    line: "Royal Caribbean",
    type: "internacional",
    description:
      "Disfruta de las tradicionales rutas del Caribe con el confort y la excelencia de Royal Caribbean.",
    duration: "7 días / 6 noches",
    location: "Miami, FL",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Caribe Clásico' en el barco Symphony of the Seas.",
    itinerary: ["Miami", "Nassau", "Cozumel"],
    included: [
      "Alimentación completa",
      "Shows estilo Broadway",
      "Parque acuático a bordo",
    ],
  },
  {
    title: "Caribe Aventura",
    shipName: "Oasis of the Seas",
    line: "Royal Caribbean",
    type: "internacional",
    description:
      "Sumérgete en la naturaleza y explora las islas del Caribe con el confort de Royal Caribbean.",
    duration: "7 días / 6 noches",
    location: "Miami, FL",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Caribe Aventura' en el barco Oasis of the Seas.",
    itinerary: ["Miami", "Roatán", "Cozumel"],
    included: [
      "Alimentación completa",
      "Shows estilo Broadway",
      "Parque acuático a bordo",
    ],
  },
];

export const nationalCruises: Cruise[] = [
  {
    title: "Crucero por el Caribe Colombiano",
    shipName: "Sovereign",
    line: "Aqua Expeditions",
    type: "nacional",
    description:
      "Explora las aguas del Caribe colombiano con el confort de Aqua Expeditions.",
    duration: "6 días / 5 noches",
    location: "Cartagena, Colombia",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Crucero por el Caribe Colombiano' en el barco Sovereign.",
    itinerary: ["Cartagena", "San Andrés", "Providencia"],
    included: [
      "Alimentación completa",
      "Shows locales",
      "Parque acuático a bordo",
    ],
  },
  {
    title: "Crucero por el Pacífico Colombiano",
    shipName: "Pacific Explorer",
    line: "Aqua Expeditions",
    type: "nacional",
    description:
      "Descubre las bellezas del Pacífico colombiano con el confort de Aqua Expeditions.",
    duration: "6 días / 5 noches",
    location: "Cartagena, Colombia",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Crucero por el Pacífico Colombiano' en el barco Pacific Explorer.",
    itinerary: ["Cartagena", "San Blas", "Providencia"],
    included: [
      "Alimentación completa",
      "Shows locales",
      "Parque acuático a bordo",
    ],
  },
  {
    title: "Crucero por las Islas del Rosario",
    shipName: "Coral Princess",
    line: "Aqua Expeditions",
    type: "nacional",
    description:
      "Navega por las cristalinas aguas de las Islas del Rosario con el confort de Aqua Expeditions.",
    duration: "3 días / 2 noches",
    location: "Cartagena, Colombia",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Crucero por las Islas del Rosario' en el barco Coral Princess.",
    itinerary: ["Cartagena", "San Andrés", "Providencia"],
    included: [
      "Alimentación completa",
      "Shows locales",
      "Parque acuático a bordo",
    ],
  },
];
