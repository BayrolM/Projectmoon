import { useState, useEffect } from "react";
import {
  nacionalDestinations,
  internacionalDestinations,
} from "../../data/destinationcards";
import { DestinationCard } from "../cards/DestinationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { motion } from "framer-motion";

export function Destinations() {
  const [activeTab, setActiveTab] = useState<"nacional" | "internacional">(
    "nacional",
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#destinos-nacional") setActiveTab("nacional");
      else if (hash === "#destinos-internacional")
        setActiveTab("internacional");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const currentDestinations =
    activeTab === "nacional" ? nacionalDestinations : internacionalDestinations;

  return (
    <section
      id="destinos"
      className="py-24 px-4 relative"
      style={{
        background: "linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)",
      }}
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
            Desde las maravillas de Colombia hasta los rincones más fascinantes
            del mundo
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "nacional", label: "Nacional" },
              { id: "internacional", label: "Internacional" },
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
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
            <CarouselContent className="-ml-4">
              {currentDestinations.map((destination, index) => (
                <CarouselItem
                  key={`${activeTab}-${index}`}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full py-4">
                    <DestinationCard destination={destination} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="-left-16 h-12 w-12 bg-[#512DDB] border-[#512DDB] text-white hover:bg-[#4E30B2] transition-all shadow-lg" />
              <CarouselNext className="-right-16 h-12 w-12 bg-[#512DDB] border-[#512DDB] text-white hover:bg-[#4E30B2] transition-all shadow-lg" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
