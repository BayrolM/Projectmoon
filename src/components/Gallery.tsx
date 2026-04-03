export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1599444121410-b9cf6156986a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB0cmF2ZWxpbmclMjBhZHZlbnR1cmUlMjBoYXBweXxlbnwxfHx8fDE3NzUwOTc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pareja viajando feliz",
      large: true,
    },
    {
      url: "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGxhbmRzY2FwZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzUwOTc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Senderismo en montañas",
      large: false,
    },
    {
      url: "https://images.unsplash.com/photo-1631535152690-ba1a85229136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHRyb3BpY2FsJTIwdmFjYXRpb258ZW58MXx8fHwxNzc1MDk3NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Atardecer en la playa",
      large: false,
    },
    {
      url: "https://images.unsplash.com/photo-1679757635255-ea2c361b628d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwdHJhdmVsJTIwZXVyb3BlfGVufDF8fHx8MTc3NTA5NzU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Arquitectura europea",
      large: false,
    },
    {
      url: "https://images.unsplash.com/photo-1762529486225-e8c28fd5b500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZSUyMGFzaWFuJTIwdHJhdmVsfGVufDF8fHx8MTc3NTA5NzU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Templo asiático",
      large: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#1a1a2e]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            Galería de Experiencias
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', system-ui, sans-serif" }}
          >
            Momentos inolvidables capturados por nuestros viajeros alrededor del mundo
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[580px]">
          {/* Large Image - 2x2 */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#512DDB]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Small Images */}
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4E30B2]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}