import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Luz Dary Palacio",
      initials: "LP",
      destination: "Santa Marta, Colombia",
      date: "Abril 2026",
      rating: 5,
      text: "Moon travel tiene excelente servicio. Profesionalismo. Puntualidad y calidez humana.  Pendientes del viaje de principio a fin, de cumplimiento de los tours y del itinerario. Increíble experiencia.",
    },
    {
      name: "Manuela Zapata Restrepo",
      initials: "MZ",
      destination: "Isla Fuerte, Colombia",
      date: "Enero 2026",
      rating: 5,
      text: "Lili es excelente en todos los sentidos, muy comprometida, responsable y amable. Es muy sincera a la hora de brindar sugerencias y de atender cualquier situación que se pueda presentar.",
    },
    {
      name: "David Cavajal  ",
      initials: "DC",
      destination: "Cartagena, Colombia",
      date: "Abril 2026",
      rating: 5,
      text: "Excelente viaje, recomendado con esta página ya que ofrece precios a tu bolsillo!",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D2C3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#512DDB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm"
              style={{
                background: 'linear-gradient(135deg, #512DDB, #4E30B2)',
                color: 'white',
                fontFamily: "'Lato', system-ui, sans-serif",
                fontWeight: 700,
                boxShadow: '0 4px 16px rgba(81,45,219,0.25)'
              }}
            >
              <Star className="w-4 h-4 fill-white" />
              Testimonios reales
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl mb-4 text-[#1a1a2e]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            Historias de viajeros felices
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D2C3F7]/30 flex flex-col h-full"
              style={{ willChange: "transform" }}
            >
              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #512DDB, #4E30B2)' }}
              >
                <Quote className="w-5 h-5 text-white" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <p
                className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow"
                style={{ fontFamily: "'Lato', system-ui, sans-serif", fontStyle: 'italic' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 mt-auto border-t border-[#D2C3F7]/30">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #512DDB, #4E30B2)' }}
                >
                  <span style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700, fontSize: '0.85rem' }}>
                    {testimonial.initials}
                  </span>
                </motion.div>

                <div>
                  <h4
                    className="text-[#1a1a2e] mb-0.5"
                    style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-xs text-gray-400"
                    style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
                  >
                    {testimonial.destination} · {testimonial.date}
                  </p>
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D2C3F7]/10 via-transparent to-[#512DDB]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 px-8 py-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs border-2 border-white"
                    style={{ background: 'linear-gradient(135deg, #512DDB, #4E30B2)' }}
                  >
                    ★
                  </div>
                ))}
              </div>
              <span
                className="text-gray-700"
                style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 600 }}
              >
                98% de satisfacción
              </span>
            </div> 
            {/* Google Reviews Button */}
            <a
              href="https://g.page/r/Cd37pb0SKKWlEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 mt-1 rounded-full text-white text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #512DDB, #4E30B2)', fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}
            >
              Ver opiniones en Google
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
