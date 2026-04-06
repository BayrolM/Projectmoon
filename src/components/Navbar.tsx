import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestinosDropdownOpen, setIsDestinosDropdownOpen] = useState(false);
  const [isPaquetesDropdownOpen, setIsPaquetesDropdownOpen] = useState(false);

  const destinations = [
    { name: "Nacional", href: "#destinos-nacional" },
    { name: "Internacional", href: "#destinos-internacional" },
  ];

  const packages = [
    { name: "Nacional", href: "#paquetes-nacional" },
    { name: "Internacional", href: "#paquetes-internacional" },
  ];

  const whatsappNumber = "573046495250"; // Actualizar con número real
  const whatsappMessage = "¡Hola! Quisiera obtener información sobre los paquetes turísticos de Moon Travel Co. 🌙";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const linkStyle = { fontFamily: "'Lato', system-ui, sans-serif", fontWeight: 400 };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md shadow-sm border-b border-[#D2C3F7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a href="#" className="flex items-center group relative">
            <img 
              src="/logo.png" 
              alt="Moon Travel Co." 
              className="h-16 w-auto object-contain transition-all duration-300 scale-[2.5] origin-left group-hover:scale-[2.7]" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" style={linkStyle} className="text-gray-600 hover:text-[#512DDB] transition-colors duration-300">
              Home
            </a>

            {/* Destinos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDestinosDropdownOpen(true)}
              onMouseLeave={() => setIsDestinosDropdownOpen(false)}
            >
              <button style={linkStyle} className="flex items-center gap-1 text-gray-600 hover:text-[#512DDB] transition-colors duration-300">
                Destinos
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDestinosDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDestinosDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-52 animate-fadeIn z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#D2C3F7]/40 py-2">
                    {destinations.map((dest, index) => (
                      <a
                        key={index}
                        href={dest.href}
                        style={linkStyle}
                        className="block px-4 py-3 text-gray-700 hover:bg-[#D2C3F7]/20 hover:text-[#512DDB] transition-all duration-200"
                      >
                        {dest.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Paquetes Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPaquetesDropdownOpen(true)}
              onMouseLeave={() => setIsPaquetesDropdownOpen(false)}
            >
              <button style={linkStyle} className="flex items-center gap-1 text-gray-600 hover:text-[#512DDB] transition-colors duration-300">
                Paquetes
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPaquetesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPaquetesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-52 animate-fadeIn z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#D2C3F7]/40 py-2">
                    {packages.map((pkg, index) => (
                      <a
                        key={index}
                        href={pkg.href}
                        style={linkStyle}
                        className="block px-4 py-3 text-gray-700 hover:bg-[#D2C3F7]/20 hover:text-[#512DDB] transition-all duration-200"
                      >
                        {pkg.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#preguntas" style={linkStyle} className="text-gray-600 hover:text-[#512DDB] transition-colors duration-300">
              Preguntas
            </a>
            <a href="#contacto" style={linkStyle} className="text-gray-600 hover:text-[#512DDB] transition-colors duration-300">
              Contacto
            </a>
          </div>

          {/* WhatsApp CTA Button - Desktop */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-white px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #512DDB, #4E30B2)',
              fontFamily: "'Lato', system-ui, sans-serif",
              fontWeight: 700,
              boxShadow: '0 4px 20px rgba(81,45,219,0.25)'
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Contáctanos
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-[#D2C3F7]/30 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-[#D2C3F7]/30 pt-4 animate-slideDown">
            <div className="flex flex-col gap-1">
              <a href="#" onClick={() => setIsOpen(false)} style={linkStyle} className="text-gray-700 hover:text-[#512DDB] hover:bg-[#D2C3F7]/15 transition-colors py-3 px-2 rounded-lg">
                Home
              </a>

              {/* Destinos Dropdown Mobile */}
              <div>
                <button
                  onClick={() => setIsDestinosDropdownOpen(!isDestinosDropdownOpen)}
                  style={linkStyle}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#512DDB] hover:bg-[#D2C3F7]/15 transition-colors py-3 px-2 rounded-lg"
                >
                  Destinos
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDestinosDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDestinosDropdownOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {destinations.map((dest, index) => (
                      <a
                        key={index}
                        href={dest.href}
                        onClick={() => { setIsOpen(false); setIsDestinosDropdownOpen(false); }}
                        style={linkStyle}
                        className="text-gray-600 hover:text-[#512DDB] hover:bg-[#D2C3F7]/15 transition-colors py-2 px-2 rounded-lg"
                      >
                        {dest.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Paquetes Dropdown Mobile */}
              <div>
                <button
                  onClick={() => setIsPaquetesDropdownOpen(!isPaquetesDropdownOpen)}
                  style={linkStyle}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#512DDB] hover:bg-[#D2C3F7]/15 transition-colors py-3 px-2 rounded-lg"
                >
                  Paquetes
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPaquetesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isPaquetesDropdownOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {packages.map((pkg, index) => (
                      <a
                        key={index}
                        href={pkg.href}
                        onClick={() => { setIsOpen(false); setIsPaquetesDropdownOpen(false); }}
                        style={linkStyle}
                        className="text-gray-600 hover:text-[#512DDB] hover:bg-[#D2C3F7]/15 transition-colors py-2 px-2 rounded-lg"
                      >
                        {pkg.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#preguntas" onClick={() => setIsOpen(false)} style={linkStyle} className="text-gray-700 hover:text-[#512DDB] hover:bg-[#D2C3F7]/15 transition-colors py-3 px-2 rounded-lg">
                Preguntas
              </a>
              <a href="#contacto" onClick={() => setIsOpen(false)} style={linkStyle} className="text-gray-700 hover:text-[#512DDB] hover:bg-[#D2C3F7]/15 transition-colors py-3 px-2 rounded-lg">
                Contacto
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 mt-3"
                style={{
                  background: 'linear-gradient(135deg, #512DDB, #4E30B2)',
                  fontFamily: "'Lato', system-ui, sans-serif",
                  fontWeight: 700,
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </nav>
  );
}
