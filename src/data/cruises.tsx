import { Cruise } from "../types";

export const cruisesPackages: Cruise[] = [
  // SIN VISA
  {
    title: "Caribe Sur y Antillas (Sin Visa)",
    shipName: "Rhapsody of the Seas",
    line: "Royal Caribbean",
    type: "sin-visa",
    description:
      "Explora las maravillas del Caribe sin necesidad de visa americana. Una aventura inolvidable con el sello de Royal Caribbean.",
    duration: "8 días / 7 noches",
    location: "Cartagena, Colombia / Colón, Panamá",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Caribe Sur y Antillas' (Sin Visa) en el barco Rhapsody of the Seas saliendo de Cartagena/Panamá.",
    itinerary: ["Cartagena", "Colón (Panamá)", "Aruba", "Bonaire", "Curaçao"],
    included: [
      "Crucero + Impuestos",
      "Alimentación Completa (Buffet y a la carta)",
      "Bebidas acompañantes de dispensador y servidas a la mesa",
      "Actividades a bordo y shows en vivo",
      "Ingreso a áreas públicas y gimnasio",
      "*Paquete de bebidas ilimitado opcional (solo en tarifas que lo estipulan)",
    ],
  },
  
  // CON VISA
  {
    title: "Caribe Mágico desde La Romana",
    shipName: "Explora I",
    line: "MSC Cruises",
    type: "visa",
    description:
      "Descubre la belleza de las Antillas desde la República Dominicana. Requiere visa correspondiente según nacionalidad.",
    duration: "8 días / 7 noches",
    location: "La Romana, Rep. Dominicana",
    images: [
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero desde La Romana con destino al Caribe.",
    itinerary: ["La Romana", "St. Maarten", "Antigua", "St. Kitts", "Martinica"],
    included: [
      "Alimentación completa",
      "Entretenimiento de clase mundial",
      "Acceso a piscinas y jacuzzis",
    ],
  },
  {
    title: "Caribe Legendario (Miami)",
    shipName: "Wonder of the Seas",
    line: "Royal Caribbean",
    type: "visa",
    description:
      "Vive la aventura en el barco más grande del mundo recorriendo las joyas del Caribe saliendo de Florida.",
    duration: "8 días / 7 noches",
    location: "Miami, FL",
    images: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
    ],
    whatsappMessage:
      "¡Hola! Me interesa el crucero 'Caribe Legendario' en el barco Wonder of the Seas desde Miami.",
    itinerary: ["Miami", "Perfect Day at CocoCay", "Cozumel", "Roatán"],
    included: [
      "Alimentación completa",
      "Shows estilo Broadway",
      "Parque acuático a bordo",
    ],
  },

  // EUROPA
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
    itinerary: ["Barcelona", "Palma de Mallorca", "Marsella", "La Spezia", "Roma"],
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
