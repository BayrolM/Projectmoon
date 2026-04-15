import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PackageCard } from "../cards/PackageCard";
import {
  colombiaPackages,
  playasColombiaPackages,
  europaPackages,
  norteAmericaPackages,
  surAmericaPackages,
  caribePackages,
} from "../../data/packages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function PackagesSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activePackageTab, setActivePackageTab] = useState<
    | "colombia"
    | "playasColombia"
    | "europa"
    | "norteAmerica"
    | "surAmerica"
    | "caribe"
  >("colombia");

  // Detectar cambios en el hash de la URL para activar el tab correcto
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      // Manejar los hash de paquetes
      if (hash === "#paquetes-colombia") {
        setActivePackageTab("colombia");
        // Hacer scroll suave a la sección de paquetes
        setTimeout(() => {
          const packagesSection = document.getElementById("paquetes");
          packagesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#paquetes-playasColombia") {
        setActivePackageTab("playasColombia");
        // Hacer scroll suave a la sección de paquetes
        setTimeout(() => {
          const packagesSection = document.getElementById("paquetes");
          packagesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#paquetes-europa") {
        setActivePackageTab("europa");
        // Hacer scroll suave a la sección de paquetes
        setTimeout(() => {
          const packagesSection = document.getElementById("paquetes");
          packagesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#paquetes-norteAmerica") {
        setActivePackageTab("norteAmerica");
        // Hacer scroll suave a la sección de paquetes
        setTimeout(() => {
          const packagesSection = document.getElementById("paquetes");
          packagesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#paquetes-surAmerica") {
        setActivePackageTab("surAmerica");
        // Hacer scroll suave a la sección de paquetes
        setTimeout(() => {
          const packagesSection = document.getElementById("paquetes");
          packagesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#paquetes-caribe") {
        setActivePackageTab("caribe");
        // Hacer scroll suave a la sección de paquetes
        setTimeout(() => {
          const packagesSection = document.getElementById("paquetes");
          packagesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // Ejecutar al cargar la página
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const currentPackages =
    activePackageTab === "colombia"
      ? colombiaPackages
      : activePackageTab === "playasColombia"
        ? playasColombiaPackages
        : activePackageTab === "europa"
          ? europaPackages
          : activePackageTab === "norteAmerica"
            ? norteAmericaPackages
            : activePackageTab === "surAmerica"
              ? surAmericaPackages
              : caribePackages;

  return (
    <section id="paquetes" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a1a2e] font-serif font-semibold">
            Paquetes diseñados para ti
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-sans">
            Experiencias completas con alojamiento, traslados y actividades
            incluidas. Elige entre destinos nacionales o internacionales
          </p>

          {/* Tabs */}
          <div className="flex overflow-x-auto pb-4 md:justify-center gap-3 no-scrollbar scroll-smooth">
            <motion.button
              type="button"
              onClick={() => setActivePackageTab("colombia")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-sans font-bold whitespace-nowrap ${
                activePackageTab === "colombia"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Colombia
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActivePackageTab("playasColombia")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-sans font-bold whitespace-nowrap ${
                activePackageTab === "playasColombia"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Playas de Colombia
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActivePackageTab("europa")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-sans font-bold whitespace-nowrap ${
                activePackageTab === "europa"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Europa
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActivePackageTab("norteAmerica")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-sans font-bold whitespace-nowrap ${
                activePackageTab === "norteAmerica"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Norte América
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActivePackageTab("surAmerica")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-sans font-bold whitespace-nowrap ${
                activePackageTab === "surAmerica"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Sur América
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActivePackageTab("caribe")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-sans font-bold whitespace-nowrap ${
                activePackageTab === "caribe"
                  ? "brand-gradient text-white brand-shadow"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Playas del Caribe
            </motion.button>
          </div>
        </motion.div>

        {/* Packages Carousel */}
        <div className="relative group px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {currentPackages.map((pkg, index) => (
                <CarouselItem
                  key={`${activePackageTab}-${index}`}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full py-4">
                    <PackageCard
                      title={pkg.title}
                      description={pkg.description}
                      duration={pkg.duration}
                      location={pkg.location}
                      images={pkg.images}
                      whatsappMessage={pkg.whatsappMessage}
                      features={pkg.features}
                      notIncluded={pkg.notIncluded}
                      customizable={pkg.customizable}
                    />
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
