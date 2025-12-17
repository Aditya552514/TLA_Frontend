 import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            TL Academy
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            TL Academy delivers industry-ready learning through hands-on
            programs, real-world projects, and expert-led mentorship.
          </p>

          <div className="flex items-center gap-4 mt-5 text-gray-300">
            <a
              href="https://www.facebook.com/Terralogic.academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/terralogic.academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/terralogic-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://terralogic.academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Programs</li>
            <li className="hover:text-blue-400 cursor-pointer">Careers</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
            <li className="hover:text-blue-400 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex gap-3">
              <MapPin size={18} className="text-blue-400 mt-1" />
              <span>
                Gomati Nagar, Nellore<br />
                Andhra Pradesh – 524003
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <a href="tel:+919876543210" className="hover:text-blue-400">
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <a
                href="mailto:contact@terralogic.academy"
                className="hover:text-blue-400"
              >
                contact@terralogic.academy
              </a>
            </div>
          </div>
        </div>

        {/* Design Partner — OFFICIAL STYLE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Design Partner</h3>

          <p className="text-gray-400 text-sm mb-4">
            UI/UX inspired by global design standards
          </p>

          <div className="space-y-3 text-sm">
            <a
              href="https://www.terralogic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:underline underline-offset-4 transition"
            >
              Terralogic Website
              <span aria-hidden>↗</span>
            </a>

            <a
              href="https://lollypop.design"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:underline underline-offset-4 transition"
            >
              Lollypop Website
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} TL Academy · Powered by Terralogic
      </div>
    </footer>
  );
};

export default Footer;
