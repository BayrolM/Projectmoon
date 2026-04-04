import { Clock, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  description: string;
  duration: string;
  location: string;
  image: string;
  whatsappMessage: string;
}

export function PackageCard({
  title,
  description,
  duration,
  location,
  image,
  whatsappMessage,
}: PackageCardProps) {
  const whatsappNumber = "5491234567890";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"></div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
        >
          <MapPin className="w-3.5 h-3.5 text-[#512DDB]" />
          <span className="text-xs text-gray-800" style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
            {location}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl mb-2 text-[#1a1a2e] group-hover:text-[#512DDB] transition-colors"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
        >
          {title}
        </h3>
        <p
          className="text-gray-500 mb-4 leading-relaxed line-clamp-2 text-sm"
          style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
        >
          {description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-5">
          <Clock className="w-4 h-4 text-[#512DDB]" />
          <span
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            {duration}
          </span>
        </div>

        {/* CTA Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group/btn"
          style={{
            background: 'linear-gradient(135deg, #512DDB, #4E30B2)',
            fontFamily: "'Lato', system-ui, sans-serif",
            fontWeight: 700,
          }}
        >
          <MessageCircle className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
          <span>Reservar ahora</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
