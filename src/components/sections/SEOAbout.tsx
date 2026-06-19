import { motion } from "framer-motion";

export function SEOAbout() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-[#0a0a16] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D2C3F7]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4E30B2]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span 
            className="text-[#D2C3F7] font-bold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            ¿Quiénes Somos?
          </span>
          <h2
            className="text-3xl md:text-4xl text-white mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            Moon Travel Co: Tu Agencia de Viajes y Paquetes Turísticos
          </h2>
          
          <div 
            className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed text-justify md:text-center"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            <p>
              En <strong className="text-white/90 font-semibold">Moon Travel Co.</strong>, somos más que una simple <strong>agencia de viajes</strong>; somos arquitectos de experiencias inolvidables. Nos especializamos en la planificación y diseño de <strong>paquetes turísticos</strong> a medida, <strong>cruceros por el Caribe</strong>, viajes a Europa y escapadas a los destinos más exóticos del mundo. Nuestro objetivo es que cada detalle de tu viaje internacional esté perfectamente organizado, para que tú solo te preocupes por disfrutar.
            </p>
            <p>
              Sabemos que organizar las vacaciones ideales puede ser abrumador. Por eso, ofrecemos un servicio integral que incluye desde la reserva de vuelos y hoteles de lujo, hasta la gestión de actividades exclusivas en el destino. Ya sea que busques <strong>viajes familiares, lunas de miel románticas o aventuras extremas</strong>, nuestro equipo de expertos en turismo trabaja 24/7 para garantizarte los mejores precios, seguridad y un itinerario que se adapte exactamente a tus gustos y presupuesto.
            </p>
            <p>
              Destaca tu próximo destino con nosotros y descubre por qué cientos de viajeros confían en nuestra <strong>asesoría personalizada</strong>. Explora nuestra amplia selección de destinos populares, aprovecha nuestras ofertas en <strong>cruceros sin visa</strong> y déjate llevar por la magia de conocer el mundo. Tu próxima gran aventura internacional está a un solo clic de distancia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
