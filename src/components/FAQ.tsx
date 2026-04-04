import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Con cuánto tiempo de anticipación debo reservar mi viaje?",
      answer:
        "Recomendamos reservar con al menos 30 días de anticipación para destinos nacionales y 60 días para internacionales. Esto garantiza mejor disponibilidad de vuelos, hoteles y mejores tarifas. Sin embargo, también manejamos reservas de última hora según disponibilidad.",
    },
    {
      question: "¿Puedo personalizar los paquetes turísticos?",
      answer:
        "¡Absolutamente! Todos nuestros paquetes son 100% personalizables. Podemos ajustar fechas, hoteles, actividades, duración del viaje y más. Contáctanos por WhatsApp y diseñaremos el viaje perfecto según tus preferencias y presupuesto.",
    },
    {
      question: "¿Los paquetes incluyen seguro de viaje?",
      answer:
        "Sí, todos nuestros paquetes internacionales incluyen seguro de viaje básico que cubre emergencias médicas, cancelaciones y pérdida de equipaje. También ofrecemos seguros premium con cobertura más amplia si lo deseas.",
    },
    {
      question: "¿Puedo pagar en cuotas?",
      answer:
        "Sí, ofrecemos planes de financiamiento flexibles. Puedes pagar con tarjeta de crédito en cuotas sin interés (según convenios bancarios) o con planes de pago diferido. Contáctanos para conocer todas las opciones disponibles.",
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer:
        "Nuestra política varía según el destino y la anticipación. Generalmente, cancelaciones con más de 30 días tienen reembolso del 80%, entre 15-30 días del 50%, y menos de 15 días no tienen reembolso. Te recomendamos contratar el seguro de cancelación flexible.",
    },
    {
      question: "¿Necesito visa para los destinos internacionales?",
      answer:
        "Depende de tu nacionalidad y el destino. Te asesoramos sobre los requisitos de visa, documentos necesarios y te ayudamos con el proceso de solicitud. Algunos destinos requieren visa previa, otros permiten visa a la llegada, y algunos no requieren visa.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl mb-4 text-[#1a1a2e]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            Preguntas Frecuentes
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            Todo lo que necesitas saber antes de reservar tu próximo viaje
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              style={{ borderColor: openIndex === index ? '#D2C3F7' : '#f0f0f0' }}
            >
              {/* Question Button */}
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: 'rgba(210,195,247,0.08)' }}
                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
                style={{ background: openIndex === index ? 'rgba(210,195,247,0.12)' : 'white' }}
              >
                <h3
                  className="text-base text-[#1a1a2e] pr-8"
                  style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: '#512DDB' }}
                  />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1">
                      <p
                        className="text-gray-600 leading-relaxed text-sm"
                        style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-8 bg-gradient-to-br from-[#f5f3ff] to-white rounded-2xl border border-[#D2C3F7]/30"
        >
          <h3
            className="text-xl mb-2 text-[#1a1a2e]"
            style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700 }}
          >
            ¿Tienes más preguntas?
          </h3>
          <p
            className="text-gray-500 mb-4"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            Nuestro equipo está disponible para ayudarte
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #512DDB, #4E30B2)',
              color: 'white',
              fontFamily: "'Lato', system-ui, sans-serif",
              fontWeight: 700,
              boxShadow: '0 4px 16px rgba(81,45,219,0.25)',
            }}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Contáctanos</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
