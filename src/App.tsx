import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { PackageCard } from "./components/PackageCard";
import { WhyUs } from "./components/WhyUs";
import { HowItWorks } from "./components/HowItWorks";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Destinations } from "./components/Destinations";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { motion } from "motion/react";
import { nacionalPackages, internacionalPackages } from "./data/packages";

export default function App() {
  const [activePackageTab, setActivePackageTab] = useState<"nacional" | "internacional">("nacional");

  // Detectar cambios en el hash de la URL para activar el tab correcto
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Manejar los hash de paquetes
      if (hash === "#paquetes-nacional") {
        setActivePackageTab("nacional");
        // Hacer scroll suave a la sección de paquetes
        setTimeout(() => {
          const packagesSection = document.getElementById("paquetes");
          packagesSection?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#paquetes-internacional") {
        setActivePackageTab("internacional");
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


  const currentPackages = activePackageTab === "nacional" ? nacionalPackages : internacionalPackages;

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Adding padding-top to account for fixed navbar */}
      <div className="pt-24">
        <Hero />
      </div>

      {/* Destinations Section with Tabs */}
      <Destinations />

      {/* Packages Section with Tabs */}
      <section id="paquetes" className="py-24 px-4 bg-white">
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
              Paquetes diseñados para ti
            </h2>
            <p
              className="text-lg text-gray-500 max-w-2xl mx-auto mb-10"
              style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
            >
              Experiencias completas con alojamiento, traslados y actividades incluidas. 
              Elige entre destinos nacionales o internacionales
            </p>

            {/* Tabs */}
            <div className="flex justify-center gap-3">
              <motion.button
                onClick={() => setActivePackageTab("nacional")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full transition-all duration-300"
                style={
                  activePackageTab === "nacional"
                    ? { background: 'linear-gradient(135deg, #512DDB, #4E30B2)', color: 'white', boxShadow: '0 4px 20px rgba(81,45,219,0.3)', fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }
                    : { background: 'white', color: '#4b5563', border: '1.5px solid #e5e7eb', fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }
                }
              >
                Nacional
              </motion.button>
              <motion.button
                onClick={() => setActivePackageTab("internacional")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full transition-all duration-300"
                style={
                  activePackageTab === "internacional"
                    ? { background: 'linear-gradient(135deg, #512DDB, #4E30B2)', color: 'white', boxShadow: '0 4px 20px rgba(81,45,219,0.3)', fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }
                    : { background: 'white', color: '#4b5563', border: '1.5px solid #e5e7eb', fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }
                }
              >
                Internacional
              </motion.button>
            </div>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPackages.map((pkg: any, index: number) => (
              <PackageCard
                key={`${activePackageTab}-${index}`}
                title={pkg.title}
                description={pkg.description}
                duration={pkg.duration}
                location={pkg.location}
                images={pkg.images}
                whatsappMessage={pkg.whatsappMessage}
                features={pkg.features}
                customizable={pkg.customizable}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Why Us Section */}
      <WhyUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
