import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, User, Mail, MapPin, Compass, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    destino: "",
    tipoViaje: "nacional",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    destino: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      nombre: "",
      email: "",
      destino: "",
      mensaje: "",
    };

    let isValid = true;

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Por favor ingresa tu nombre";
      isValid = false;
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Por favor ingresa tu email";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
      isValid = false;
    }

    if (!formData.destino.trim()) {
      newErrors.destino = "Por favor selecciona o ingresa un destino";
      isValid = false;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Por favor cuéntanos sobre tu viaje ideal";
      isValid = false;
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Configuración de WhatsApp
    const whatsappNumber = "573046495250"; 
    const message = `¡Hola Moon Travel Co!\n\nQuisiera solicitar información sobre un viaje:\n\n*Nombre:* ${formData.nombre}\n*Email:* ${formData.email}\n*Destino:* ${formData.destino}\n*Tipo de viaje:* ${formData.tipoViaje === "nacional" ? "Nacional" : "Internacional"}\n\n*Mensaje:*\n${formData.mensaje}\n\n¡Espero su respuesta!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simular un pequeño retraso para la experiencia de usuario
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Redirigir a WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Limpiar formulario después del éxito
    setTimeout(() => {
      setFormData({
        nombre: "",
        email: "",
        destino: "",
        tipoViaje: "nacional",
        mensaje: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Autodetectar tipo de viaje si es destino
    if (name === "destino") {
      const isColombia = value.toLowerCase().includes("colombia") || 
                         ["cartagena", "san andres", "medellin", "bogota", "santa marta"].some(city => value.toLowerCase().includes(city));
      
      setFormData((prev) => ({ 
        ...prev, 
        [name]: value,
        tipoViaje: isColombia ? "nacional" : "internacional"
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const destinosSugeridos = [
    "Cartagena, Colombia",
    "Eje Cafetero, Colombia",
    "San Andrés, Colombia",
    "París, Francia",
    "Kyoto, Japón",
    "Patagonia, Argentina",
    "Grecia",
    "Islandia",
    "Otro destino"
  ];

  return (
    <section className="py-24 px-4 bg-white" id="contacto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#1a1a2e]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            Diseñemos tu viaje juntos
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="flex items-center gap-2 mb-2 text-gray-700"
                style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 500 }}
              >
                <User className="w-4 h-4 text-[#512DDB]" />
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  errors.nombre
                    ? "border-red-300 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-[#512DDB] bg-white"
                }`}
                style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
                placeholder="Ej: María García"
              />
              <AnimatePresence>
                {errors.nombre && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-1 mt-1 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>{errors.nombre}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 mb-2 text-gray-700"
                style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 500 }}
              >
                <Mail className="w-4 h-4 text-[#512DDB]" />
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-[#512DDB] bg-white"
                }`}
                style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
                placeholder="maria.garcia@ejemplo.com"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-1 mt-1 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>{errors.email}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Destino */}
            <div>
              <label
                htmlFor="destino"
                className="flex items-center gap-2 mb-2 text-gray-700"
                style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 500 }}
              >
                <MapPin className="w-4 h-4 text-[#512DDB]" />
                Destino de interés *
              </label>
              <input
                list="destinos-list"
                id="destino"
                name="destino"
                value={formData.destino}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  errors.destino
                    ? "border-red-300 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-[#512DDB] bg-white"
                }`}
                style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
                placeholder="Escribe o selecciona un destino"
                autoComplete="off"
              />
              <datalist id="destinos-list">
                {destinosSugeridos.map((destino) => (
                  <option key={destino} value={destino} />
                ))}
              </datalist>
              <AnimatePresence>
                {errors.destino && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-1 mt-1 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>{errors.destino}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tipo de viaje */}
            <div>
              <label
                htmlFor="tipoViaje"
                className="flex items-center gap-2 mb-2 text-gray-700"
                style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 500 }}
              >
                <Compass className="w-4 h-4 text-[#512DDB]" />
                Tipo de viaje
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, tipoViaje: "nacional" }))}
                  className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                    formData.tipoViaje === "nacional"
                      ? "border-[#512DDB] bg-[#512DDB]/5 text-[#512DDB]"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                  style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 600 }}
                >
                  Nacional
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, tipoViaje: "internacional" }))}
                  className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                    formData.tipoViaje === "internacional"
                      ? "border-[#512DDB] bg-[#512DDB]/5 text-[#512DDB]"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                  style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 600 }}
                >
                  Internacional
                </button>
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <div className="mb-6">
            <label
              htmlFor="mensaje"
              className="flex items-center gap-2 mb-2 text-gray-700"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 500 }}
            >
              <MessageSquare className="w-4 h-4 text-[#512DDB]" />
              Cuéntanos sobre tu viaje ideal *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                errors.mensaje
                  ? "border-red-300 focus:border-red-500 bg-red-50"
                  : "border-gray-200 focus:border-[#512DDB] bg-white"
              }`}
              style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
              placeholder="Ej: Busco un viaje de luna de miel en la playa, todo incluido, con actividades románticas y un presupuesto de..."
            />
            <AnimatePresence>
              {errors.mensaje && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-1 mt-1 text-red-600 text-sm"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>{errors.mensaje}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <motion.button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 text-white rounded-xl transition-all duration-300 ${
                isSubmitting || submitStatus === "success"
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-lg"
              }`}
              style={{
                background: "linear-gradient(135deg, #512DDB, #4E30B2)",
                fontFamily: "'Lato', system-ui, sans-serif",
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(81,45,219,0.3)",
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : submitStatus === "success" ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>¡Enviado con éxito!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar Solicitud</span>
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 px-4 py-3 bg-green-50 text-green-700 rounded-xl border border-green-200"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <p style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
                    ¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <p
              className="text-sm text-gray-500 text-center"
              style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
            >
              * Campos obligatorios · Respetamos tu privacidad
            </p>
          </div>
        </motion.form>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#512DDB]" />
            <span>Respuesta en 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#512DDB]" />
            <span>Sin compromiso</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#512DDB]" />
            <span>Asesoría personalizada</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
