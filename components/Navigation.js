import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    return router.pathname === path
      ? "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r from-purple-400 to-blue-500 after:shadow-[0_0_10px_rgba(168,85,247,0.8)]"
      : "hover:text-purple-300 transition";
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-4 md:py-6 text-[#F9EBD8] font-serif z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/sun.png" alt="Sun Icon" width={80} height={80} />
        <span className="text-lg md:text-2xl font-bold">BodhMantr</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex relative items-center space-x-10 text-lg">
        <Link href="/" className={getLinkClass("/")}>Home</Link>
        <Link href="/about" className={getLinkClass("/about")}>About</Link>

        {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link href="/services" className={getLinkClass("/services")}>Services</Link>
          <div
            className={`absolute top-full mt-2 w-52 bg-[#1E1A3E] text-white rounded-lg shadow-lg border border-purple-400/30 z-50 transition-all duration-300 ${
              showDropdown ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
            }`}
          >
            <Link href="/services/tarot" className="block px-4 py-2 hover:bg-purple-600/40 transition">
              Tarot Readings
            </Link>
            <Link href="/services/astrology" className="block px-4 py-2 hover:bg-purple-600/40 transition">
              Astrology Readings
            </Link>
            <Link href="/services/energy-healing" className="block px-4 py-2 hover:bg-purple-600/40 transition">
              Energy Healing
            </Link>
            <Link href="/services/numerology" className="block px-4 py-2 hover:bg-purple-600/40 transition">
              Numerology
            </Link>
          </div>
        </div>

        <Link href="/blog" className={getLinkClass("/blog")}>Blog</Link>

        <Link
          href="#contact"
          className="px-5 py-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full text-black font-semibold shadow-[0_0_10px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-transform duration-300 hover:scale-110"
        >
          Get Started
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(true)} className="focus:outline-none text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Menu (Slide-in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#1E1A3E] text-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-purple-400/30">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col p-6 space-y-4">
          <Link href="/" className="hover:text-purple-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-purple-300" onClick={() => setMobileMenuOpen(false)}>About</Link>

          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full text-left hover:text-purple-300 focus:outline-none"
            >
              Services
            </button>
            {showDropdown && (
              <div className="ml-4 mt-2 flex flex-col space-y-2 text-sm">
                <Link href="/services/tarot" onClick={() => setMobileMenuOpen(false)}>Tarot Readings</Link>
                <Link href="/services/astrology" onClick={() => setMobileMenuOpen(false)}>Astrology Readings</Link>
                <Link href="/services/energy-healing" onClick={() => setMobileMenuOpen(false)}>Energy Healing</Link>
                <Link href="/services/numerology" onClick={() => setMobileMenuOpen(false)}>Numerology</Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-purple-300" onClick={() => setMobileMenuOpen(false)}>Blog</Link>

          <Link
            href="#contact"
            className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full text-black font-semibold shadow-[0_0_10px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-transform duration-300 hover:scale-105"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
