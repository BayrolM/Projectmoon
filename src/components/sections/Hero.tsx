import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const carouselImages = [
    "https://images.unsplash.com/photo-1628075265328-aec05575f8f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMHRyYXZlbCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjgzMjE0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbnMlMjBsYW5kc2NhcGUlMjBzdW5yaXNlfGVufDF8fHx8MTc2ODI5NzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFsbXMlMjBzdW5zZXR8ZW58MXx8fHwxNzY4MzE0NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdHJhdmVsJTIwbGlnaHRzJTIwbmlnaHR8ZW58MXx8fHwxNzY4MzIxNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  // Memoize particles to avoid re-calculating random values on every re-render
  const particles = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        id: i,
        initialX: `${Math.random() * 100}%`,
        initialY: `${Math.random() * 100}%`,
        animateY: [null, `${Math.random() * -100}%`],
        animateX: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("paquetes");
    packagesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={carouselImages[currentImageIndex]}
            alt="Travel destination"
            className="w-full h-full object-cover"
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.1 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.6 : 1.2,
              ease: "easeInOut",
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/85 via-[#1a1a2e]/75 to-[#4E30B2]/65"></div>
      </div>

      {/* Carousel Indicators (Dots) */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating particles effect - only show if reduced motion is not preferred */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: p.initialX,
                y: p.initialY,
              }}
              animate={{
                y: p.animateY,
                x: p.animateX,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/isotipo.png"
              alt="Moon Travel Co Isotipo"
              className="w-16 h-16 object-contain scale-[2]"
            />
          </motion.div>
          <h1
            className="text-5xl md:text-7xl text-white tracking-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Moon Travel Co.
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p
            className="text-xl md:text-3xl text-white/95 mb-4 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            Más que un viaje, creamos experiencias
          </p>
          <p
            className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            Especialistas en crear experiencias de viaje únicas y
            personalizadas. Desde playas paradisíacas hasta destinos culturales,
            tu aventura perfecta comienza aquí.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToPackages}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-10 py-4 text-white rounded-full transition-all duration-300 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #512DDB, #4E30B2)",
              boxShadow: "0 10px 40px rgba(81,45,219,0.35)",
            }}
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span
              className="text-lg"
              style={{
                fontFamily: "'Lato', system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Explorar Destinos
            </span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            style={{
              fontFamily: "'Lato', system-ui, sans-serif",
              fontWeight: 700,
            }}
          >
            Planificar mi viaje
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm"
          style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D2C3F7] rounded-full" />
            <span>+100 viajeros satisfechos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D2C3F7] rounded-full" />
            <span>Asesoría personalizada 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D2C3F7] rounded-full" />
            <span>Mejores precios garantizados</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
