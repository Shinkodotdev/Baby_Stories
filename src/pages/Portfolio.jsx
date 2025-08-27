import { memo, useEffect, useRef, useState } from "react";

const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
];

// LazyImage with IntersectionObserver
const LazyImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : null}
      data-src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-64 md:h-72 object-cover rounded-xl transition-transform duration-500"
      style={{ backgroundColor: "#f0f0f0" }}
    />
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Portfolio</h1>
          <div className="h-1 w-24 bg-gray-300 rounded-full mx-auto mt-4 shadow-sm"></div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group">
              <LazyImage src={src} alt={`Portfolio ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
