import React, { Suspense, lazy } from "react";
import Navbar from "../src/components/layout/Navbar.jsx";

// ✅ Home loads immediately (not lazy, better LCP)
import Home from "../src/pages/Home.jsx";

// ✅ Lazy load secondary pages
const Portfolio = lazy(() => import("../src/pages/Portfolio.jsx"));
const Services = lazy(() => import("../src/pages/Services.jsx"));
const About = lazy(() => import("../src/pages/About.jsx"));
const Blog = lazy(() => import("../src/pages/Blog.jsx"));
const Contact = lazy(() => import("../src/pages/Contact.jsx"));

// ✅ Reusable loader
const Loading = () => (
  <div className="flex justify-center items-center h-40">
    <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    <span className="ml-3 text-gray-700 text-sm">Loading...</span>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* ✅ Home loads instantly */}
        <Home />

        {/* ✅ Lazy-loaded sections for performance */}
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Services />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Blog />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default App;
