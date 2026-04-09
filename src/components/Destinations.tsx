import { useState, useEffect } from "react";
import {
  nacionalDestinations,
  internacionalDestinations,
  type DestinationData,
} from "../data/destinationcards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { MapPin, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function DestinationCard({
  destination,
  index,
}: {
  destination: DestinationData;
  index: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = destination.images || [];

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
    >
      {/* Image Carousel Section */}
      <div className="relative h-48 overflow-hidden bg-gray-900 shrink-0">
        <img
          src={images[currentIndex]}
          alt={`${destination.name} - image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
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
            href={`https://wa.me/573046495250?text=${encodeURIComponent(`¡Hola! Estoy interesado en viajar a ${destination.name}.`)}`}
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

export function Destinations() {
  const [activeTab, setActiveTab] = useState<"nacional" | "internacional">("nacional");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#destinos-nacional") setActiveTab("nacional");
      else if (hash === "#destinos-internacional") setActiveTab("internacional");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const currentDestinations = activeTab === "nacional" ? nacionalDestinations : internacionalDestinations;

  return (
    <section
      id="destinos"
      className="py-24 px-4 relative"
      style={{ background: "linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)" }}
    >
      <div id="destinos-nacional" className="absolute -top-20"></div>
      <div id="destinos-internacional" className="absolute -top-20"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a1a2e] font-serif font-semibold">
            Explora Nuestros Destinos
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-sans">
            Desde las maravillas de Colombia hasta los rincones más fascinantes del mundo
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "nacional", label: "Nacional" },
              { id: "internacional", label: "Internacional" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#512DDB] to-[#4E30B2] text-white shadow-lg shadow-purple-200"
                    : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-full bg-white text-gray-600 border border-gray-200 font-bold transition-all duration-300"
            >
              Otro
            </button>
          </div>
        </motion.div>

        <div className="relative group px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {currentDestinations.map((destination, index) => (
                <CarouselItem key={`${activeTab}-${index}`} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-full py-4">
                    <DestinationCard destination={destination} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 h-12 w-12 bg-white border-[#D2C3F7] text-[#512DDB] hover:bg-[#512DDB] hover:text-white transition-all shadow-md" />
              <CarouselNext className="-right-12 h-12 w-12 bg-white border-[#D2C3F7] text-[#512DDB] hover:bg-[#512DDB] hover:text-white transition-all shadow-md" />
            </div>

            {/* Pagination / Dots can be added if needed, but Embla supports it natively via API */}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
