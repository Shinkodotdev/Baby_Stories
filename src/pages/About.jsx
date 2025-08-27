const MapEmbed = () => {
  return (
    <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden relative">
      <img
        src="/images/location2.webp"
        alt="Baby Stories Photography Location"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <iframe
        title="Baby Stories Location"
        src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1755280861290!5m2!1sen!2sph!6m8!1m7!1sl4PGR5rRSnfAg518uSw9gg!2m2!1d15.58221391887933!2d120.9187674873991!3f315.5366455420558!4f-4.300181461959326!5f0.7820865974627469"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0 absolute top-0 left-0"
      ></iframe>
    </div>

  );
};
const About = () => {
  return (
    <section id="about" className="w-full bg-gray-900 text-white py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 md:px-0 items-center">
        {/* Left: Description */}
        <div className="space-y-6 text-justify p-10">
          <h3 className="text-2xl font-semibold text-center md:text-left">
            Where Every Photo Tells a Story
          </h3>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            At Baby Stories Photography, we believe the tiniest moments make the
            biggest memories. Founded with a passion for storytelling and a deep
            love for babies, our studio specializes in capturing the magic of
            early childhood — from those sleepy newborn cuddles to the joyful
            giggles of a first birthday. With a gentle approach and an eye for
            emotion, we create a relaxed, baby-friendly environment where your
            little one can shine. Every session is thoughtfully styled and
            guided with care, ensuring beautiful images that feel as authentic
            as your love. We’re not just taking photos — we’re preserving the
            story of your growing family, one chapter at a time.
          </p>
        </div>

        {/* Right: Images */}
        <div className="flex justify-center">
          <div className="w-full">
            {/* Map Section */}
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
