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

  const nacionalPackages = [
    {
      title: "Ciudad Amurallada",
      description: "Descubre la magia colonial de Cartagena, sus playas paradisíacas y la vida nocturna del caribe colombiano.",
      duration: "5 días / 4 noches",
      location: "Cartagena, Colombia",
      image: "https://images.unsplash.com/photo-1770808564556-7bc511b893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGNvbG9yZnVsJTIwY29sb25pYWx8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Me interesa el paquete 'Ciudad Amurallada' en Cartagena. ¿Podrían darme más información? 🏖️",
    },
    {
      title: "Eje Cafetero",
      description: "Sumérgete en la cultura cafetera, recorre plantaciones, disfruta del paisaje cultural y vive la hospitalidad paisa.",
      duration: "4 días / 3 noches",
      location: "Eje Cafetero, Colombia",
      image: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc1MDk3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Quisiera información sobre el paquete 'Eje Cafetero'. ¿Qué actividades incluye? ☕",
    },
    {
      title: "San Andrés Todo Incluido",
      description: "Relájate en las playas más hermosas de Colombia con mar de 7 colores, deportes acuáticos y gastronomía isleña.",
      duration: "6 días / 5 noches",
      location: "San Andrés, Colombia",
      image: "https://images.unsplash.com/photo-1669517270484-df54ad8d54c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBhbmRyZXMlMjBpc2xhbmQlMjBjYXJpYmJlYW4lMjBiZWFjaHxlbnwxfHx8fDE3NzUwOTc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Me interesa el paquete 'San Andrés Todo Incluido'. ¿Cuál es el precio? 🏝️",
    },
    {
      title: "Desierto y Villa de Leyva",
      description: "Aventura en el Desierto de la Tatacoa y encanto colonial en Villa de Leyva, dos joyas únicas de Colombia.",
      duration: "5 días / 4 noches",
      location: "Huila y Boyacá, Colombia",
      image: "https://images.unsplash.com/photo-1697823411806-3402bf656659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhY29hJTIwZGVzZXJ0JTIwY29sb21iaWElMjByZWQlMjBzYW5kfGVufDF8fHx8MTc3NTA5NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Me fascina el paquete 'Desierto y Villa de Leyva'. ¿Cuándo puedo viajar? 🏜️",
    },
  ];

  const internacionalPackages = [
    {
      title: "Caribe Paradisíaco",
      description: "Disfruta de playas de arena blanca, aguas cristalinas y atardeceres inolvidables en el Caribe.",
      duration: "7 días / 6 noches",
      location: "Caribe",
      image: "https://images.unsplash.com/photo-1602455891364-31034e19a826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY4MzE0NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Me interesa el paquete 'Caribe Paradisíaco' de 7 días. ¿Podrían darme más información? 🏝️",
    },
    {
      title: "París Romántico",
      description: "Vive la ciudad del amor con visitas a la Torre Eiffel, Louvre y paseos por el Sena.",
      duration: "5 días / 4 noches",
      location: "París, Francia",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2ODI5NzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Me interesa el paquete 'París Romántico'. ¿Qué incluye el itinerario? 🗼",
    },
    {
      title: "Japón Tradicional",
      description: "Explora templos milenarios, jardines zen y sumérgete en la cultura japonesa auténtica.",
      duration: "10 días / 9 noches",
      location: "Kyoto, Japón",
      image: "https://images.unsplash.com/photo-1649451898726-1ed602692cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlbXBsZSUyMGt5b3RvfGVufDF8fHx8MTc2ODI2Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Quisiera saber más sobre el paquete 'Japón Tradicional'. ¿Cuáles son las fechas disponibles? 🏯",
    },
    {
      title: "Aventura Patagónica",
      description: "Trekking en glaciares, lagos turquesa y paisajes que te dejarán sin aliento en la Patagonia.",
      duration: "8 días / 7 noches",
      location: "Patagonia",
      image: "https://images.unsplash.com/photo-1649710972692-34778ba6164f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY4Mjk2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Me encanta la aventura y me interesa el paquete 'Aventura Patagónica'. ¿Qué actividades incluye? ⛰️",
    },
    {
      title: "Grecia Mágica",
      description: "Descubre las islas griegas, sus puestas de sol en Santorini y la historia de Atenas.",
      duration: "9 días / 8 noches",
      location: "Grecia",
      image: "https://images.unsplash.com/photo-1676730056228-7e38cbb88edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY4MjUxMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Estoy interesado/a en el paquete 'Grecia Mágica'. ¿Qué islas se visitan? 🇬🇷",
    },
    {
      title: "Auroras Boreales",
      description: "Vive la magia de las auroras boreales en Islandia con aguas termales y paisajes únicos.",
      duration: "6 días / 5 noches",
      location: "Islandia",
      image: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGljZWxhbmR8ZW58MXx8fHwxNzY4MjY3Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "¡Hola! Me fascina el paquete 'Auroras Boreales'. ¿En qué época del año es mejor viajar? ✨",
    },
  ];

  const currentPackages = activePackageTab === "nacional" ? nacionalPackages : internacionalPackages;

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Adding padding-top to account for fixed navbar */}
      <div className="pt-20">
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
            {currentPackages.map((pkg, index) => (
              <PackageCard
                key={`${activePackageTab}-${index}`}
                title={pkg.title}
                description={pkg.description}
                duration={pkg.duration}
                location={pkg.location}
                image={pkg.image}
                whatsappMessage={pkg.whatsappMessage}
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