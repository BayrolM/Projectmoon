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

export interface Cruise {
  title: string;
  shipName: string;
  line: string;
  description: string;
  duration: string;
  location: string;
  images: string[];
  whatsappMessage: string;
  itinerary: string[];
  included: string[];
  type: "visa" | "sin-visa" | "europa";
}

export interface DestinationData {
  name: string;
  description: string;
  type: string;
  images: string[];
}
