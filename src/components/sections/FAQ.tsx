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
      question: "¿Qué documentación necesito para viajar?",
      answer:
        "Depende del destino. Generalmente necesitarás tu documento de identidad o pasaporte vigente.Algunos países pueden requerir visa, vacunas específicas y, en el caso de menores de edad, registro civil y permisos si viajan sin alguno de sus padres.Te asesoramos en todo el proceso para que viajes sin preocupaciones",
    },
    {
      question: "¿Puedo personalizar los paquetes turísticos?",
      answer:
        "¡Absolutamente! Todos nuestros paquetes son 100% personalizables. Podemos ajustar fechas, hoteles, actividades, duración del viaje y más. Contáctanos por WhatsApp y diseñaremos el viaje perfecto según tus preferencias y presupuesto.",
    },
    {
      question: "¿Qué incluyen los paquetes de viaje?",
      answer:
        "Nuestros paquetes pueden incluir transporte al destino (aéreo o terrestre), alojamiento, traslados, alimentación y experiencias.Todo depende del plan que elijas y el tipo de viaje que desees vivir",
    },
    {
      question: "¿Los paquetes incluyen seguro de viaje?",
      answer:
        "Sí, todos nuestros paquetes internacionales e nacionales incluyen seguro de viaje básico que cubre emergencias médicas, cancelaciones,pérdida de equipaje entre otros imprevistos. También ofrecemos seguros premium con cobertura más amplia si lo deseas.",
    },
    {
      question: "¿Puedo pagar en cuotas?",
      answer:
        "Puedes separar tu viaje con un 30% de depósito y el resto pagarlo en abonos quincenales o mensuales. El plan de pagos se ajusta según la fecha de tu viaje, teniendo como plazo máximo hasta un mes antes de la salida. También puedes realizar el pago con tarjeta de crédito, según las condiciones de tu entidad bancaria.",
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer:
        "Las políticas de cancelación varían según el servicio, el destino y la antelación.Cada experiencia tiene condiciones específicas, por lo que es muy importante revisar esta información al momento de reservar.Te recomendamos validar todos los detalles con tu asesor antes de confirmar ",
    },
    {
      question: "¿Puedo hacer cambios en mi reserva?",
      answer:
        "¡Claro que sí! Contamos con paquetes familiares diseñados para todas las edades. Además, te asesoramos sobre requisitos especiales, actividades para niños y todo lo necesario para que disfruten al máximo. Para menores de edad, es indispensable presentar registro civil y, si viajan sin uno de los padres, un permiso notariado.",
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
