import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // default selected is "home"

  const navLinks = [
    "Home",
    "About Us",
    "Services",
    "Package & Pricing",
    "Reviews",
    "Portfolio",
    "Blog",
    "Contact",
  ];

  const handleLinkClick = (link: any) => {
    setActiveLink(link.replace(/\s+/g, "").toLowerCase());
    setMenuOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://shorturl.at/B6gXL"
            alt="Kyptronix LLP"
            className="h-16 w-16"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-400 font-medium">
          {navLinks.map((link) => {
            const slug = link.replace(/\s+/g, "").toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${slug}`}
                  onClick={() => handleLinkClick(link)}
                  className={`transition ${
                    activeLink === slug ? "text-white" : "hover:text-white"
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-transparent border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black px-4 py-2 rounded-full transition"
            onClick={() => handleLinkClick("Contact")}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 text-white space-y-4 bg-black">
          {navLinks.map((link) => {
            const slug = link.replace(/\s+/g, "").toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${slug}`}
                  className={`block transition ${
                    activeLink === slug ? "text-sky-400" : "hover:text-sky-400"
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="block bg-sky-400 text-black px-4 py-2 mt-2 rounded-full text-center"
              onClick={() => handleLinkClick("Contact")}
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
