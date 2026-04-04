import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="text-white py-14 px-4"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a1a2e 60%, #4E30B2 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-10 overflow-visible">
              <img src="/logo.png" alt="Logo Moon Travel Co." className="h-16 w-auto object-contain scale-[3] origin-left md:origin-left" />
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
            >
              Haciendo tus sueños de viaje realidad bajo las estrellas
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3
              className="text-base mb-4"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700, color: '#D2C3F7' }}
            >
              Contacto
            </h3>
            <div className="space-y-3 text-sm" style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
              <p className="flex items-center justify-center gap-2 text-white/60">
                <MapPin className="w-3.5 h-3.5" />
                Medellín, Colombia
              </p>
              <p className="text-white/60">WhatsApp: +57 304 649 5250</p>
              <p className="flex items-center justify-center gap-2 text-white/60">
                <Mail className="w-3.5 h-3.5" />
                gerencia@moontravelco.net
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="text-center">
            <h3
              className="text-base mb-4"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700, color: '#D2C3F7' }}
            >
              Síguenos
            </h3>
            <div className="flex items-center gap-3 justify-center">
              <a
                href="https://www.instagram.com/moon_travelco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(210,195,247,0.12)', border: '1px solid rgba(210,195,247,0.2)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#D2C3F7]" />
              </a>
              <a
                href="https://www.facebook.com/share/1Av5qEmBiV/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(210,195,247,0.12)', border: '1px solid rgba(210,195,247,0.2)' }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#D2C3F7]" />
              </a>
              <a
                href="https://www.tiktok.com/@moontravelco?_r=1&_t=ZS-95Ggdoq20QM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(210,195,247,0.12)', border: '1px solid rgba(210,195,247,0.2)' }}
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#D2C3F7]"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <p
            className="text-center text-white/40 text-xs"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            © {currentYear} Moon Travel Co. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
