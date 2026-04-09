import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CruceroCard } from "./CruisesCard";
import { cruisesPackages, nationalCruises } from "../data/cruises";

export function CruisesSection() {
  const [activeCruiseTab, setActiveCruiseTab] = useState<
    "nacional" | "internacional"
  >("nacional");

  // Detectar cambios en el hash de la URL para activar el tab correcto
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      // Manejar los hash de cruceros
      if (hash === "#cruceros-nacional") {
        setActiveCruiseTab("nacional");
        // Hacer scroll suave a la sección de cruceros
        setTimeout(() => {
          const cruisesSection = document.getElementById("cruceros");
          cruisesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#cruceros-internacional") {
        setActiveCruiseTab("internacional");
        // Hacer scroll suave a la sección de cruceros
        setTimeout(() => {
          const cruisesSection = document.getElementById("cruceros");
          cruisesSection?.scrollIntoView({ behavior: "smooth" });
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

  const currentCruises =
    activeCruiseTab === "nacional" ? nationalCruises : cruisesPackages;

  return (
    <section id="cruceros" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
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

          {/* Botones de filtro */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={() => setActiveCruiseTab("nacional")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full transition-all duration-300"
              style={
                activeCruiseTab === "nacional"
                  ? {
                      background: "linear-gradient(135deg, #512DDB, #4E30B2)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(81,45,219,0.3)",
                      fontFamily: "'Lato', system-ui, sans-serif",
                      fontWeight: 700,
                    }
                  : {
                      background: "white",
                      color: "#4b5563",
                      border: "1.5px solid #e5e7eb",
                      fontFamily: "'Lato', system-ui, sans-serif",
                      fontWeight: 700,
                    }
              }
            >
              Nacional
            </motion.button>
            <motion.button
              onClick={() => setActiveCruiseTab("internacional")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full transition-all duration-300"
              style={
                activeCruiseTab === "internacional"
                  ? {
                      background: "linear-gradient(135deg, #512DDB, #4E30B2)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(81,45,219,0.3)",
                      fontFamily: "'Lato', system-ui, sans-serif",
                      fontWeight: 700,
                    }
                  : {
                      background: "white",
                      color: "#4b5563",
                      border: "1.5px solid #e5e7eb",
                      fontFamily: "'Lato', system-ui, sans-serif",
                      fontWeight: 700,
                    }
              }
            >
              Internacional
            </motion.button>
          </div>
        </motion.div>

        {/* Grid de Cruceros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCruises.map((Cruise, index) => (
            <CruceroCard key={`${activeCruiseTab}-${index}`} {...Cruise} />
          ))}
        </div>

        {/* Footer */}
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
