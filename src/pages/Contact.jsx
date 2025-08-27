import { memo } from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = memo(() => {
  return (
    <section id="contact" className="bg-gray-100 py-2 px-4">
      <div className="max-w-7xl mx-auto space-y-7">
        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between flex-wrap ">
          {/* Left */}
          <div className="flex-1 min-w-[250px] space-y-3 text-gray-700 text-center justify-center">
            <p className="font-semibold">Contact Us</p>
            <div className="flex items-center gap-4 justify-center md:justify-center flex-wrap">
              <a
                href="mailto:marielrenesarialaphotography@gmail.com"
                className="text-gray-500 hover:text-blue-600 transition-transform duration-200"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a
                href="tel:09039098468"
                className="text-gray-500 hover:text-blue-600 transition-transform duration-200"
                aria-label="Phone"
              >
                <FaPhone className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/05babystories"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-gray-500 hover:text-blue-600 transition-transform duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/03babystories"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-gray-500 hover:text-pink-500 transition-transform duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
            <p className="text-sm mt-2">
              724-714 Quezon Street, Talavera, <br /> Nueva Ecija, Philippines
            </p>
            <p>
              <a
                href="https://shinkodotdev.site"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm"
              >
                Who Developed this page?
              </a>
            </p>
          </div>
        </footer>
        {/* Copyright */}
        <p className="text-center text-gray-500 text-xs ">
          &copy; {new Date().getFullYear()} Baby Stories Photography. All rights reserved.
        </p>
      </div>
    </section>
  );
});

export default Contact;
