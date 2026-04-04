import { Search, Heart, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Cuéntanos tu sueño",
      description: "Completa el formulario o escríbenos directamente. Queremos conocer tus preferencias, fechas y presupuesto para diseñar tu viaje ideal",
    },
    {
      number: "02",
      icon: Heart,
      title: "Recibe tu itinerario personalizado",
      description: "Nuestro equipo diseñará una propuesta a medida con opciones de alojamiento, actividades y experiencias únicas",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Confirma y viaja tranquilo",
      description: "Aprueba los detalles, realizamos la reserva y te acompañamos durante todo el viaje con soporte 24/7",
    },
  ];

  return (
    <section
      className="py-24 px-4 text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #512DDB 50%, #4E30B2 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(210,195,247,0.08)' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(210,195,247,0.06)' }}></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [null, `${Math.random() * -100}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/20"
              style={{
                fontFamily: "'Lato', system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Proceso simple
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            Tu viaje en 3 pasos
          </h2>
          <p
            className="text-lg text-white/85 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            Transformamos tus ideas en experiencias reales de manera fácil y transparente
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-8 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
              >
                {/* Number */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #D2C3F7, #a78bfa)' }}
                >
                  <span
                    className="text-xl text-[#512DDB]"
                    style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}
                  >
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  className="mb-6 mt-4"
                >
                  <Icon className="w-10 h-10 text-[#D2C3F7]" strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700, color: 'white' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/75 leading-relaxed text-sm"
                  style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
                >
                  {step.description}
                </p>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                      className="origin-left"
                    >
                      <div className="w-8 h-0.5 bg-white/25"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-white/25 rotate-45"></div>
                    </motion.div>
                  </div>
                )}

                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D2C3F7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p
            className="text-white/70 text-sm mb-4"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            ✨ Todo el proceso es gratuito hasta que confirmes tu reserva
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#512DDB] rounded-full transition-all duration-300"
            style={{
              fontFamily: "'Lato', system-ui, sans-serif",
              fontWeight: 700,
              boxShadow: '0 4px 20px rgba(255,255,255,0.2)',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Comenzar ahora</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
