import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  const whatsappNumber = "573046495250";
  const message =
    "¡Hola! Me gustaría recibir asesoría personalizada sobre los paquetes turísticos de Moon Travel Co.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #D2C3F7 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(81,45,219,0.12)" }}
      ></div>
      <div
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(78,48,178,0.10)" }}
      ></div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#512DDB]/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [null, `${Math.random() * -50}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-3xl shadow-xl mb-8 bg-white"
          style={{ boxShadow: "0 10px 40px rgba(81,45,219,0.15)" }}
        >
          <img
            src="/logo.png"
            alt="Moon Travel Co."
            className="w-25 h-25 object-contain"
          />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2
            className="text-4xl md:text-5xl mb-6 text-[#1a1a2e]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
            }}
          >
            ¿Listo para tu próxima aventura?
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
        >
          Recibe una <strong>consulta gratuita</strong> y personalizada.
          Nuestros expertos diseñarán el itinerario perfecto según tus gustos,
          presupuesto y fechas disponibles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-white text-lg rounded-2xl transition-all duration-300 group"
            style={{
              background: "linear-gradient(135deg, #512DDB, #4E30B2)",
              fontFamily: "'Lato', system-ui, sans-serif",
              fontWeight: 700,
              boxShadow: "0 10px 40px rgba(81,45,219,0.35)",
            }}
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Chatear por WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
          style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Disponible ahora</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
          <span>📞 Respuesta inmediata</span>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
          <span>✨ Sin compromiso</span>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
          <span>🔒 100% confidencial</span>
        </motion.div>

        {/* Testimonial snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200"
        >
          <div className="flex items-center gap-1 mb-3 justify-center">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-yellow-400 text-xl"
              >
                ★
              </motion.span>
            ))}
          </div>
          <p
            className="text-gray-700 italic mb-2"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            "Moon Travel, fue muy cumplido con todos sus servicios, Tours,
            Viajes, etc. Siempre pendientes a todo, no duden en reservar o
            planear sus planes con ellos👏🏽…"
          </p>
          <p
            className="text-sm text-gray-500"
            style={{
              fontFamily: "'Lato', system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            — Bayrol M., viajero feliz ⭐
          </p>
        </motion.div>
      </div>
    </section>
  );
}
