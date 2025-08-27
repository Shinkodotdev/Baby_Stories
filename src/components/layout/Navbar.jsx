// components/Navbar.jsx
import React, { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Services", id: "services" },
    { name: "Blog", id: "blog" },
    { name: "About", id: "about" },
    { name: "Contact Us", id: "contact" },
  ];

  // Handle nav click
  const handleNavClick = useCallback(
    (id, name) => {
      setActiveLink(name);
      setMenuOpen(false); // close menu on mobile
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    []
  );

  // Track scroll to update active link
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (let item of navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveLink(item.name);
          break;
        }
      }
    }
  }, [navItems]);

  useEffect(() => {
    let timeout;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 100); // throttle
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, [handleScroll]);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Brand */}
        <a href="/" className="text-2xl font-bold text-gray-800" aria-label="Baby Stories Photography homepage">
            Baby Stories
          </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.name)}
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                activeLink === item.name ? "text-blue-600 border-b-2 border-blue-600" : ""
              }`}
              aria-current={activeLink === item.name ? "page" : undefined}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-white shadow-md transition-max-h duration-500 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item.id, item.name)}
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                activeLink === item.name ? "text-blue-600" : ""
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleNavClick(item.id, item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
