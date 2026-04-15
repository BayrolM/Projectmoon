export function Gallery() {
  const images = [
    {
      url: "/images/experienciasViajeros/experiencia 1.jpeg",
      alt: "Experiencia 1",
      large: true,
    },
    {
      url: "/images/experienciasViajeros/experiencia 2.jpeg",
      alt: "Experiencia 2",
      large: false,
    },
    {
      url: "/images/experienciasViajeros/experiencia 3.jpeg",
      alt: "Experiencia 3",
      large: false,
    },
    {
      url: "/images/experienciasViajeros/experiencia 4.jpeg",
      alt: "Experiencia 4",
      large: false,
    },
    {
      url: "/images/experienciasViajeros/experiencia 5.jpeg",
      alt: "Experiencia 5",
      large: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a1a2e] font-serif font-semibold">
            Galería de Experiencias
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
            Momentos inolvidables capturados por nuestros viajeros alrededor del
            mundo
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[580px]">
          {/* Large Image - 2x2 */}
          <div className="col-span-2 row-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 h-64 md:h-full">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#512DDB]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Small Images */}
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 h-40 md:h-full"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4E30B2]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
