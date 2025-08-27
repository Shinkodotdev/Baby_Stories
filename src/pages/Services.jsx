const Services = () => {
  return (
    <section id="services" className="w-full bg-gray-50 py-16 px-4"  aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <div className="h-1 w-24 bg-gray-300 rounded-full mx-auto mt-4 shadow-sm"></div>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md border-2 border-gray-400 rounded-2xl overflow-hidden">
              <picture>
                <img
                  src="/images/7.webp"
                  alt="Newborn baby photography setup"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="500"
                  className="w-full h-auto object-cover"
                />
              </picture>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Capturing the Moments That Grow Too Fast
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Baby Stories Photography captures your baby’s special milestones
              with cozy newborn portraits, themed milestone sessions, fun cake
              smash celebrations, and heartfelt family portraits — all with
              styling, props, retouching, and a private gallery tailored to
              your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
