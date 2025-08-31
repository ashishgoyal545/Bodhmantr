import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0B0A2A] text-white py-12 px-6 text-center"
      style={{
        backgroundImage: "url('/stars-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 mb-8 text-lg">
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Blog", href: "/blog" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="relative group hover:text-purple-300 transition"
          >
            {link.name}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Social Media */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="p-3 bg-purple-700/20 rounded-full hover:bg-purple-600/40 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="p-3 bg-purple-700/20 rounded-full hover:bg-purple-600/40 transition">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="p-3 bg-purple-700/20 rounded-full hover:bg-purple-600/40 transition">
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Footer Title */}
      <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-wider">BodhMantr</h2>
      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} BodhMantr. All rights reserved.
      </p>

      {/* Glowing Moon */}
      <div className="absolute bottom-4 right-6 w-16 h-16 opacity-90 animate-pulse">
        <Image src="/moon.svg" alt="Moon Icon" width={64} height={64} />
      </div>
    </footer>
  );
}
