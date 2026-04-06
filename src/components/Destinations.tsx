import { useState, useEffect, useCallback } from "react";
import { MapPin, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface DestinationData {
  name: string;
  description: string;
  type: string;
  images: string[];
}

function DestinationCard({ destination, index }: { destination: DestinationData, index: number }) {
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

  const variants: Variants = {
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

          <a
            href={`https://wa.me/573046495250?text=${encodeURIComponent(`Hola, me gustaría recibir más información sobre el destino: ${destination.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#512DDB] hover:gap-2 transition-all duration-300"
          >
            <span
              className="text-sm"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}
            >
              Más información
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
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
        "/images/nacionales/cartagena 1.jpg",
        "/images/nacionales/cartagena 2.jpg"
      ] 
    },
    { 
      name: "Medellín", 
      description: "La ciudad de la eterna primavera con innovación y cultura paisa",
      type: "Ciudad & Naturaleza",
      images: [
        "/images/nacionales/medellin 1.jpg",
        "/images/nacionales/medellin 2.jpg"
      ] 
    },
    { 
      name: "San Andrés", 
      description: "Isla paradisíaca con mar de 7 colores y playas de ensueño",
      type: "Playa & Relax",
      images: [
        "/images/nacionales/san andres 1.jpg",
        "/images/nacionales/san andres 2.avif"
      ] 
    },
    { 
      name: "Santa Marta", 
      description: "Combina playas caribeñas con la Sierra Nevada y Parque Tayrona",
      type: "Aventura & Playa",
      images: [
        "/images/nacionales/santa marta 1.jpg",
        "/images/nacionales/santa marta 2.jpg"
      ] 
    },
    { 
      name: "Eje Cafetero", 
      description: "Paisaje Cultural Cafetero, haciendas tradicionales y biodiversidad",
      type: "Cultura & Naturaleza",
      images: [
        "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "/images/nacionales/eje cafetero.jpg"
      ] 
    },
    { 
      name: "Boyacá", 
      description: "Pueblos coloniales mágicos y tradiciones ancestrales",
      type: "Historia & Cultura",
      images: [
        "/images/nacionales/boyaca 1.jpg",
        "/images/nacionales/boyaca 2.jpg"
      ] 
    },
    { 
      name: "Bogotá", 
      description: "Capital de Colombia con cultura, gastronomía y sitios históricos únicos.",
      type: "Ciudad & Cultura",
      images: [
        "/images/nacionales/bogota 1.jpg",
        "/images/nacionales/bogota 2.jpg"
      ] 
    },
    { 
      name: "Islas del Rosario", 
      description: "Archipiélago de aguas cristalinas ideal para descansar y hacer snorkel.",
      type: "Playa & Naturaleza",
      images: [
        "/images/nacionales/islas rosario 1.jpg",
        "/images/nacionales/islas rosario 2.jpg"
      ] 
    },
    { 
      name: "Parque Tayrona", 
      description: "Parque natural con playas vírgenes, selva y biodiversidad impresionante.",
      type: "Naturaleza & Aventura",
      images: [
        "/images/nacionales/parque tayrona 1.jpg",
        "/images/nacionales/parque tayrona 2.jpg"
      ] 
    },
    { 
      name: "Guatapé", 
      description: "Pueblo colorido famoso por la Piedra del Peñol y su embalse.",
      type: "Cultura & Paisajes",
      images: [
        "/images/nacionales/guatape 1.jpg",
        "/images/nacionales/guatape 2.jpg"
      ] 
    },
    { 
      name: "Nariño", 
      description: "Región con volcanes, lagunas y cultura andina auténtica.",
      type: "Naturaleza & Tradición",
      images: [
        "/images/nacionales/nariño 1.avif",
        "/images/nacionales/nariño 2.jpg"
      ] 
    },
    { 
      name: "Cali", 
      description: "Capital mundial de la salsa con ambiente alegre y vida nocturna.",
      type: "Cultura & Fiesta",
      images: [
        "/images/nacionales/cali 1.jpeg",
        "/images/nacionales/cali 2.jpg"
      ] 
    }
  ];

  const internacionalDestinations = [
    { 
      name: "Nueva York", 
      description: "Ciudad icónica con rascacielos, cultura urbana y entretenimiento sin fin.",
      type: "Ciudad & Cultura",
      images: [
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "https://images.unsplash.com/photo-1534430480872-3498386e7856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
      ] 
    },
    { 
      name: "Roma", 
      description: "Destino histórico con monumentos antiguos, arte y gastronomía italiana.",
      type: "Historia & Cultura",
      images: [
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "https://images.unsplash.com/photo-1531572753322-ad063cecc140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
      ] 
    },
    { 
      name: "Dubai", 
      description: "Ciudad futurista con lujo, desierto y arquitectura impresionante.",
      type: "Lujo & Modernidad",
      images: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
      ] 
    },
    { 
      name: "Londres", 
      description: "Capital europea con historia, museos y cultura diversa.",
      type: "Historia & Cultura",
      images: [
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
      ] 
    },
    { 
      name: "Bangkok", 
      description: "Ciudad vibrante con templos, mercados y vida nocturna intensa.",
      type: "Cultura & Aventura",
      images: [
        "/images/internacionales/bangkok 1.jpg",
        "/images/internacionales/bangkok 2.jpg"
      ] 
    },
    { 
      name: "Estambul", 
      description: "Destino único entre Europa y Asia con rica historia y arquitectura.",
      type: "Historia & Tradición",
      images: [
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "/images/internacionales/estambul 1.jpg"
      ] 
    },
    { 
      name: "Sídney", 
      description: "Ciudad costera famosa por su ópera, playas y estilo de vida relajado.",
      type: "Playa & Ciudad",
      images: [
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
      ] 
    },
    { 
      name: "París", 
      description: "Ciudad del amor con arte, historia y monumentos icónicos como la Torre Eiffel.",
      type: "Cultura & Romance",
      images: [
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
      ] 
    },
    { 
      name: "Japón", 
      description: "País que mezcla tradición milenaria con tecnología avanzada y paisajes únicos.",
      type: "Cultura & Tecnología",
      images: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
      ] 
    },
    { 
      name: "Patagonia", 
      description: "Destino natural con glaciares, montañas y paisajes impresionantes.",
      type: "Naturaleza & Aventura",
      images: [
        "/images/internacionales/patagonia 1.jpg",
        "/images/internacionales/patagonia 2.jpg"
      ] 
    },
    { 
      name: "Grecia", 
      description: "Destino mediterráneo con islas hermosas, historia antigua y arquitectura blanca.",
      type: "Historia & Playa",
      images: [
        "/images/internacionales/grecia 1.webp",
        "/images/internacionales/grecia 2.jpg"
      ] 
    },
    { 
      name: "Islandia", 
      description: "País de paisajes volcánicos, auroras boreales y cascadas espectaculares.",
      type: "Naturaleza & Aventura",
      images: [
        "/images/internacionales/islandia 1.jpg",
        "/images/internacionales/islandia 2.jpg"
      ] 
    }
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
