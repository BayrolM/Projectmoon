import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CruiseCard } from "../cards/CruiseCard";
import { sinVisaCruises, visaCruises, europaCruises } from "../../data/cruises";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const cruisesByType = {
  "sin-visa": sinVisaCruises,
  visa: visaCruises,
  europa: europaCruises,
};

export function CruisesSection() {
  const [activeCruiseTab, setActiveCruiseTab] = useState<
    "sin-visa" | "visa" | "europa"
  >("sin-visa");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === "#cruceros-sin-visa") {
        setActiveCruiseTab("sin-visa");
        setTimeout(() => {
          const cruisesSection = document.getElementById("cruceros");
          cruisesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#cruceros-visa") {
        setActiveCruiseTab("visa");
        setTimeout(() => {
          const cruisesSection = document.getElementById("cruceros");
          cruisesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#cruceros-europa") {
        setActiveCruiseTab("europa");
        setTimeout(() => {
          const cruisesSection = document.getElementById("cruceros");
          cruisesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const currentCruises = cruisesByType[activeCruiseTab];

  return (
    <section id="cruceros" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-slate-900"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Cruceros Inolvidables
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Surca los mares con las mejores navieras del mundo.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.button
              type="button"
              onClick={() => setActiveCruiseTab("sin-visa")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${
                activeCruiseTab === "sin-visa"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Sin Visa
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActiveCruiseTab("visa")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${
                activeCruiseTab === "visa"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Con Visa
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActiveCruiseTab("europa")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${
                activeCruiseTab === "europa"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Europa
            </motion.button>
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
              {currentCruises.map((Cruise, index) => (
                <CarouselItem
                  key={`${activeCruiseTab}-${index}`}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full py-4">
                    <CruiseCard {...Cruise} />
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm">
            *Todas las tarifas están sujetas a disponibilidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
