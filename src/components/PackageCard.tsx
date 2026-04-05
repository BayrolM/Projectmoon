import { Clock, MapPin, MessageCircle, Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface PackageCardProps {
  title: string;
  description: string;
  duration: string;
  location: string;
  images: string[];
  whatsappMessage: string;
  features?: string[];
  customizable?: boolean;
}

export function PackageCard({
  title,
  description,
  duration,
  location,
  images = [],
  whatsappMessage,
  features = [],
  customizable = false,
}: PackageCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const whatsappNumber = "573046495250";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      {/* Image Carousel Section */}
      <div className="relative h-64 overflow-hidden bg-gray-900">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - image ${currentIndex + 1}`}
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

        {/* Location Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-[5]">
          <MapPin className="w-3.5 h-3.5 text-[#512DDB]" />
          <span className="text-xs font-bold text-gray-800" style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
            {location}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 bg-[#512DDB]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-white shadow-lg z-[5]">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs font-bold" style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
            {duration}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-2xl mb-3 text-[#1a1a2e] group-hover:text-[#512DDB] transition-colors"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
        >
          {title}
        </h3>
        
        <p
          className="text-gray-500 mb-6 leading-relaxed text-sm"
          style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
        >
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 group/item">
                <div className="mt-1 bg-[#D2C3F7]/30 p-0.5 rounded-full shrink-0">
                  <Check className="w-3 h-3 text-[#512DDB]" />
                </div>
                <span className="text-xs text-gray-600 leading-tight" style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Customizable Note */}
        {customizable && (
          <div className="mt-auto mb-6 p-3 bg-gradient-to-r from-[#D2C3F7]/10 to-transparent border-l-4 border-[#512DDB] rounded-r-xl">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#512DDB]" />
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#512DDB]">Diseño a medida</span>
            </div>
            <p className="text-[11px] text-gray-500 italic leading-snug">
              Puedes cambiar cualquiera de los parques incluidos por un costo adicional.
            </p>
          </div>
        )}

        {/* CTA Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-auto flex items-center justify-center gap-2 px-6 py-4 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
          style={{
            background: 'linear-gradient(135deg, #512DDB, #4E30B2)',
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
