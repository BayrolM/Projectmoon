import { useState } from "react";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { DestinationData } from "../../types";
import { useWhatsApp } from "../../hooks/useWhatsApp";

interface DestinationCardProps {
  destination: DestinationData;
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = destination.images || [];

  const whatsappMsg = `¡Hola! Estoy interesado en viajar a ${destination.name}.`;
  const { whatsappUrl } = useWhatsApp(whatsappMsg);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
      style={{ willChange: "transform" }}
    >
      {/* Image Carousel Section */}
      <div className="relative h-48 overflow-hidden bg-gray-900 shrink-0">
        <img
          src={images[currentIndex]}
          alt={`${destination.name} - image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2]"></div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-[5] w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-[5] w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 right-4 z-[5] flex gap-1.5 px-2 py-1 rounded-full bg-black/20 backdrop-blur-sm">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-white w-3" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-[#512DDB]" />
          <h3 className="text-xl text-[#1a1a2e] font-bold font-serif">
            {destination.name}
          </h3>
        </div>
        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
          {destination.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-[#512DDB] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>{destination.type}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#512DDB] hover:gap-2 transition-all duration-300 font-bold"
          >
            <span className="text-sm">Más información</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
