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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6 overflow-visible">
              <img src="/logo.png" alt="Logo Moon Travel Co." className="h-12 w-auto object-contain scale-[2.5] origin-left" />
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mt-4"
              style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
            >
              Haciendo tus sueños de viaje realidad bajo las estrellas.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3
              className="text-base mb-6"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700, color: '#D2C3F7' }}
            >
              Contacto
            </h3>
            <div className="space-y-3 text-sm" style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
              <p className="flex items-center justify-center md:justify-start gap-2 text-white/60">
                <MapPin className="w-3.5 h-3.5" />
                Medellín, Colombia
              </p>
              <p className="text-white/60">WhatsApp: +57 304 649 5250</p>
              <a 
                href="mailto:gerencia@moontravelco.net" 
                className="flex items-center justify-center md:justify-start gap-2 text-white/60 hover:text-[#D2C3F7] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                gerencia@moontravelco.net
              </a>
            </div>
          </div>

          {/* Global Info */}
          <div className="text-center md:text-left">
            <h3
              className="text-base mb-6"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700, color: '#D2C3F7' }}
            >
              Información Legal
            </h3>
            <div className="space-y-3 text-sm text-white/60" style={{ fontFamily: "'Lato', system-ui, sans-serif" }}>
              <p>NIT: 1102809922-0</p>
              <p>RNT: 264489</p>
              <p>Dirección: Carrera 54 # 35-21</p>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h3
              className="text-base mb-6"
              style={{ fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 700, color: '#D2C3F7' }}
            >
              Síguenos
            </h3>
            <div className="flex items-center gap-3 justify-center md:justify-start">
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
            <br />
            En desarrollo de lo dispuesto en la Ley 679 de 2001 y la ley 1336 de 2009, se advierte que la explotación sexual, la pornografía, el turismo sexual y demás formas de abuso sexual en Colombia son sancionados penal y administrativamente conforme a las leyes vigentes.
          </p>
        </div>
      </div>
    </footer>
  );
}
