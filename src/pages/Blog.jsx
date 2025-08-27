import React, { Suspense } from "react";

// 🔹 Single Image Component — WebP only
const BlogImage = React.memo(({ src, alt, width = 400, height = 300, priority = false }) => (
  <img
    src={`${src}.webp`}
    alt={alt}
    width={width}
    height={height}
    loading={priority ? "eager" : "lazy"}
    fetchPriority={priority ? "high" : "auto"}
    decoding="async"
    className="w-full rounded-xl object-cover"
  />
));

const Blog = () => {
  const featuredImages = [
    { src: "/images/8", alt: "Wild One birthday celebration", width: 250, height: 200, priority: true },
    { src: "/images/10", alt: "Baby smiling during playtime", width: 250, height: 200},
    { src: "/images/11", alt: "Closeup of baby tiny hands", width: 250, height: 200},
  ];

  const recentPosts = [
    { src: "/images/13", title: "Roar louder, play harder, smile bigger", desc: "A joyful day full of laughter, fun, and endless smiles." },
    { src: "/images/14", title: "Shell-ebrating 7 years of mermaid magic", desc: "An ocean-inspired birthday filled with waves of happiness." },
    { src: "/images/15", title: "Together is our favorite place to be", desc: "Family moments captured with warmth and love." },
    { src: "/images/16", title: "A whole year of magic", desc: "Celebrating our little one’s first birthday milestone." },
  ];

  return (
    <article id="blog" className="w-full px-4 py-16 bg-gray-50" aria-labelledby="blog-title">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Blog Title */}
        <header className="text-center space-y-2">
          <h1 id="blog-title" className="text-3xl md:text-4xl font-bold text-gray-900">
            Baby Stories Blog
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Capturing Tiny Moments, One Story at a Time
          </p>
        </header>

        {/* Featured Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
            <Suspense fallback={<p>Loading featured images…</p>}>
              <div className="grid grid-cols-3 gap-4 justify-center">
                {featuredImages.map((img, idx) => (
                  <BlogImage key={idx} {...img} />
                ))}
              </div>
            </Suspense>
          </div>
          <div className="md:w-1/2 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Wild One – Our little explorer has roared through a whole year!
            </h2>
          </div>
        </section>

        {/* Recent Posts */}
        <section aria-labelledby="recent-posts">
          <h2 id="recent-posts" className="text-2xl font-bold text-center text-gray-900 mb-6">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <BlogImage src={post.src} alt={post.title} width={400} height={300} />
                <h3 className="mt-3 font-semibold text-lg text-gray-900">{post.title}</h3>
                <p className="mt-1 text-gray-700 text-sm md:text-base">{post.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default React.memo(Blog);
