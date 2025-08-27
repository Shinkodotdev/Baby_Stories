const Home = () => {
  return (
    <section
      id="home"
      className="bg-[#faf7f3] min-h-screen flex items-center"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Text */}
          <div className="text-center md:text-left p-4 sm:p-6 md:p-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug">
              Welcome to Baby Stories Photography
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed max-w-md mx-auto md:mx-0">
              Capturing the magic of babyhood—one tiny yawn, giggle, and
              milestone at a time. I specialize in natural, heartfelt baby
              photography that turns fleeting moments into lasting memories
              you’ll treasure for years to come. Every photo tells your baby’s
              story.
            </p>
          </div>

          {/* Right: Optimized Responsive Image */}
          <div className="flex justify-center md:justify-end">
            <picture>
              <img
                src="/images/Logo.webp"
                alt="Baby Stories Photography studio logo"
                width="400"
                height="400"
                decoding="async"
                loading="eager"
                className="w-full max-w-[180px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] h-auto rounded-lg object-contain"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
