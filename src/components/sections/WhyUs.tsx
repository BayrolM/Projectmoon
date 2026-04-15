import {
  Heart,
  Users,
  MessageSquare,
  Shield,
  Globe,
  Award,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function WhyUs() {
  const shouldReduceMotion = useReducedMotion();
  const benefits = [
    {
      icon: Heart,
      title: "Experiencias Auténticas",
      description:
        "Diseñamos cada itinerario pensando en crear conexiones reales con cada destino y su cultura",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description:
        "Asesores dedicados que conocen tus preferencias y diseñan el viaje perfecto para ti",
    },
    {
      icon: MessageSquare,
      title: "Soporte 24/7",
      description:
        "Estamos contigo antes, durante y después del viaje. Asistencia inmediata por WhatsApp",
    },
    {
      icon: Shield,
      title: "Garantía y Confianza",
      description:
        "Trabajamos con los mejores proveedores. Tu inversión está protegida y asegurada",
    },
    {
      icon: Globe,
      title: "Destinos Exclusivos",
      description:
        "Acceso a lugares únicos y experiencias que no encontrarás en agencias convencionales",
    },
    {
      icon: Award,
      title: "Legalmente Constituida",
      description:
        "Somos una empresa legalmente constituida y registrada ante la Cámara de Comercio, con NIT 1102809922-0",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#f5f3ff] to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#D2C3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#512DDB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm brand-gradient text-white font-sans font-bold brand-shadow">
              <Award className="w-4 h-4" />
              ¿Por qué elegirnos?
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a1a2e] font-serif font-semibold">
            La diferencia Moon Travel Co.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
            No solo organizamos viajes, creamos experiencias transformadoras que
            conectan personas con lugares y culturas de manera auténtica
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D2C3F7]/30 flex flex-col items-center text-center group"
                style={{
                  willChange: shouldReduceMotion ? "auto" : "transform",
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }
                  }
                  transition={{ duration: 0.5 }}
                  className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-md brand-gradient brand-shadow"
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg mb-2 text-[#1a1a2e] group-hover:text-[#512DDB] transition-colors font-sans font-bold">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm font-sans">
                  {benefit.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#D2C3F7]/20 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "100+", label: "Viajeros Felices" },
            { number: "50+", label: "Destinos Exclusivos" },
            { number: "98%", label: "Satisfacción" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100"
            >
              <div
                className="text-4xl mb-2"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #512DDB, #4E30B2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-gray-600 text-sm"
                style={{
                  fontFamily: "'Lato', system-ui, sans-serif",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
