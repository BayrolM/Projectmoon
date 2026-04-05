import { useState, useEffect, useCallback } from "react";
import { MapPin, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DestinationData {
  name: string;
  description: string;
  type: string;
  images: string[];
}

function DestinationCard({ destination, index, handleOtroClick }: { destination: DestinationData, index: number, handleOtroClick: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = destination.images || [];

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Autoplay
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage, images.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
    >
      {/* Image Carousel Section */}
      <div className="relative h-48 overflow-hidden bg-gray-900 shrink-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${destination.name} - image ${currentIndex + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2]"></div>

        {/* Carousel Controls (Show on hover) */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-[5] w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-[5] w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 right-4 z-[5] flex gap-1.5 px-2 py-1 rounded-full bg-black/20 backdrop-blur-sm">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.preventDefault(); setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-white w-3" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-[#512DDB]" />
          <h3
            className="text-xl text-[#1a1a2e]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            {destination.name}
          </h3>
        </div>
        
        <p
          className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed"
          style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
        >
          {destination.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-[#512DDB] text-sm">
            <Sparkles className="w-4 h-4" />
            <span style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 600 }}>
              {destination.type}
            </span>
          </div>

          <button
            onClick={handleOtroClick}
            className="flex items-center gap-1 text-[#512DDB] hover:gap-2 transition-all duration-300"
          >
            <span
              className="text-sm"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}
            >
              Explorar
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Destinations() {
  const [activeTab, setActiveTab] = useState<"nacional" | "internacional">("nacional");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#destinos-nacional") {
        setActiveTab("nacional");
      } else if (hash === "#destinos-internacional") {
        setActiveTab("internacional");
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const nacionalDestinations = [
    { 
      name: "Cartagena", 
      description: "Ciudad colonial caribeña con playas hermosas y vida nocturna vibrante",
      type: "Playa & Cultura",
      images: [
        "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb25pYWx8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb25pYWx8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Medellín", 
      description: "La ciudad de la eterna primavera con innovación y cultura paisa",
      type: "Ciudad & Naturaleza",
      images: [
        "https://images.unsplash.com/photo-1568632234165-573a0e01b29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRlbGxpbiUyMGNvbG9tYmlhJTIwY2l0eXxlbnwxfHx8fDE3NzUwOTc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1568632234165-573a0e01b29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRlbGxpbiUyMGNvbG9tYmlhJTIwY2l0eXxlbnwxfHx8fDE3NzUwOTc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "San Andrés", 
      description: "Isla paradisíaca con mar de 7 colores y playas de ensueño",
      type: "Playa & Relax",
      images: [
        "https://images.unsplash.com/photo-1669517270484-df54ad8d54c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBhbmRyZXMlMjBpc2xhbmQlMjBjYXJpYmJlYW4lMjBiZWFjaHxlbnwxfHx8fDE3NzUwOTc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1669517270484-df54ad8d54c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBhbmRyZXMlMjBpc2xhbmQlMjBjYXJpYmJlYW4lMjBiZWFjaHxlbnwxfHx8fDE3NzUwOTc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Santa Marta", 
      description: "Combina playas caribeñas con la Sierra Nevada y Parque Tayrona",
      type: "Aventura & Playa",
      images: [
        "https://images.unsplash.com/photo-1583487890344-cfd3f2d5bcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50YSUyMG1hcnRhJTIwY29sb21iaWElMjBiZWFjaHxlbnwxfHx8fDE3NzUwOTc1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1583487890344-cfd3f2d5bcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50YSUyMG1hcnRhJTIwY29sb21iaWElMjBiZWFjaHxlbnwxfHx8fDE3NzUwOTc1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Eje Cafetero", 
      description: "Paisaje Cultural Cafetero, haciendas tradicionales y biodiversidad",
      type: "Cultura & Naturaleza",
      images: [
        "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Boyacá", 
      description: "Pueblos coloniales mágicos y tradiciones ancestrales",
      type: "Historia & Cultura",
      images: [
        "https://images.unsplash.com/photo-1624714538302-d7f98ee5a142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3lhY2ElMjBjb2xvbWJpYSUyMGNvbG9uaWFsfGVufDF8fHx8MTc3NTA5NzU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1624714538302-d7f98ee5a142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3lhY2ElMjBjb2xvbWJpYSUyMGNvbG9uaWFsfGVufDF8fHx8MTc3NTA5NzU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Bogotá", 
      description: "Capital de Colombia con cultura, gastronomía y sitios históricos únicos.",
      type: "Ciudad & Cultura",
      images: [
        "https://images.pexels.com/photos/19676353/pexels-photo-19676353.jpeg",
        "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb25pYWx8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Cartagena (Opción 2)", 
      description: "Ciudad colonial caribeña con playas hermosas y vida nocturna vibrante",
      type: "Playa & Cultura",
      images: [
        "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb25pYWx8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb25pYWx8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    }
  ];

  const internacionalDestinations = [
    { 
      name: "Caribe", 
      description: "Playas de arena blanca, aguas cristalinas y resorts todo incluido",
      type: "Playa & Lujo",
      images: [
        "https://images.unsplash.com/photo-1602455891364-31034e19a826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY4MzE0NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1602455891364-31034e19a826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY4MzE0NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "París", 
      description: "La ciudad del amor con arte, arquitectura y gastronomía única",
      type: "Romance & Cultura",
      images: [
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2ODI5NzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2ODI5NzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Japón", 
      description: "Templos milenarios, tecnología futurista y tradiciones zen",
      type: "Cultura & Aventura",
      images: [
        "https://images.unsplash.com/photo-1649451898726-1ed602692cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlbXBsZSUyMGt5b3RvfGVufDF8fHx8MTc2ODI2Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1649451898726-1ed602692cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlbXBsZSUyMGt5b3RvfGVufDF8fHx8MTc2ODI2Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Patagonia", 
      description: "Glaciares imponentes, trekking y paisajes naturales únicos",
      type: "Aventura & Naturaleza",
      images: [
        "https://images.unsplash.com/photo-1649710972692-34778ba6164f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY4Mjk2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1649710972692-34778ba6164f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY4Mjk2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Grecia", 
      description: "Islas de postal, historia antigua y gastronomía mediterránea",
      type: "Historia & Playa",
      images: [
        "https://images.unsplash.com/photo-1676730056228-7e38cbb88edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY4MjUxMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1676730056228-7e38cbb88edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY4MjUxMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
    { 
      name: "Islandia", 
      description: "Auroras boreales, géiseres, cascadas y aguas termales",
      type: "Aventura & Naturaleza",
      images: [
        "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGljZWxhbmR8ZW58MXx8fHwxNzY4MjY3Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGljZWxhbmR8ZW58MXx8fHwxNzY4MjY3Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ] 
    },
  ];

  const currentDestinations = activeTab === "nacional" ? nacionalDestinations : internacionalDestinations;

  const activeTabStyle = {
    background: 'linear-gradient(135deg, #512DDB, #4E30B2)',
    color: 'white',
    boxShadow: '0 4px 20px rgba(81,45,219,0.3)',
  };
  const inactiveTabStyle = {
    background: 'white',
    color: '#4b5563',
    border: '1.5px solid #e5e7eb',
  };

  const handleOtroClick = () => {
    const contactSection = document.getElementById("contacto");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="destinos" className="py-24 px-4 relative" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)' }}>
      <div id="destinos-nacional" className="absolute -top-20"></div>
      <div id="destinos-internacional" className="absolute -top-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#1a1a2e]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            Explora Nuestros Destinos
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            Desde las maravillas de Colombia hasta los rincones más fascinantes del mundo
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setActiveTab("nacional")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full transition-all duration-300"
              style={activeTab === "nacional" ? activeTabStyle : inactiveTabStyle}
            >
              <span style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}>Nacional</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("internacional")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full transition-all duration-300"
              style={activeTab === "internacional" ? activeTabStyle : inactiveTabStyle}
            >
              <span style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}>Internacional</span>
            </motion.button>
            <motion.button
              onClick={handleOtroClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full transition-all duration-300"
              style={inactiveTabStyle}
            >
              <span style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}>Otro</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentDestinations.map((destination, index) => (
            <DestinationCard 
              key={index} 
              destination={destination} 
              index={index} 
              handleOtroClick={handleOtroClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
