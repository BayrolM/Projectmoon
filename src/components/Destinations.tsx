import { useState, useCallback, useEffect } from "react";
import { MapPin, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { nacionalDestinations, internacionalDestinations, type DestinationData } from "../data/destinationcards";

function DestinationCard({ destination, index }: { destination: DestinationData, index: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = destination.images || [];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

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
        <img
          src={images[currentIndex]}
          alt={`${destination.name} - image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
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
                  onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
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
            href={`https://wa.me/573046495250?text=${encodeURIComponent(`¡Hola Equipo Moon Travel Co.!  Estoy muy interesado/a en organizar mi viaje a *${destination.name}* para disfrutar de una increíble experiencia de *${destination.type}*.  ¿Me podrían brindar más información, opciones de itinerario y tarifas disponibles para planear mi aventura? ¡Muchas gracias! `)}`}
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
