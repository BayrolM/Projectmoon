import {
  Clock,
  MapPin,
  Ship,
  Check,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useCarousel } from "../../hooks/useCarousel";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import { Cruise } from "../../types";

export function CruiseCard({
  title,
  shipName,
  description,
  duration,
  location,
  images = [],
  whatsappMessage,
  itinerary,
  included,
}: Cruise) {
  const { currentIndex, direction, next, prev } = useCarousel(images.length);
  const { whatsappUrl } = useWhatsApp(whatsappMessage);

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-blue-50 flex flex-col h-full"
      style={{ willChange: "transform" }}
    >
      {/* Sección Imagen */}
      <div className="relative h-72 overflow-hidden bg-slate-900">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[2]" />

        {/* Badges */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-[5]">
          <MapPin className="w-3.5 h-3.5 text-[#512DDB]" />
          <span
            className="text-xs font-bold text-gray-800"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            {location}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg z-10">
          <Ship className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-gray-800">{shipName}</span>
        </div>

        {/* Flechas con stopPropagation */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <button
              onClick={prev}
              aria-label="Anterior imagen"
              className="p-1.5 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente imagen"
              className="p-1.5 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-2xl mb-3 text-[#1a1a2e] group-hover:text-[#512DDB] transition-colors"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
          }}
        >
          {title}
        </h3>

        {/* Renderizado de la descripción que faltaba */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>

        <div
          className="flex items-center gap-2  mb-4 text-sm font-medium"
          style={{ color: "#512DDB" }}
        >
          <MapPin className="w-4 h-4" />
          <span>Sale de: {location}</span>
          <span className="text-gray-300">|</span>
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* Itinerario */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
            Ruta de Escalas
          </p>
          <div className="flex flex-wrap gap-2">
            {itinerary.map((city, i) => (
              <span
                key={i}
                className="text-[11px] bg-slate-50 text-slate-600 px-2 py-1 rounded-md border border-slate-200"
              >
                {city} {i < itinerary.length - 1 && "→"}
              </span>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="space-y-2 mb-6">
          {included.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-1 bg-[#D2C3F7]/30 p-0.5 rounded-full shrink-0">
                <Check className="w-3 h-3 text-[#512DDB]" />
              </div>
              <span
                className="text-xs text-gray-600 leading-tight"
                style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-auto flex items-center justify-center gap-2 px-6 py-4 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
          style={{
            background: "linear-gradient(135deg, #512DDB, #4E30B2)",
            fontFamily: "'Lato', system-ui, sans-serif",
            fontWeight: 800,
          }}
        >
          <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
          <span>Solicitar Presupuesto</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
