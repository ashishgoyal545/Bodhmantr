import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
      style={{ backgroundImage: "url('/stars-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-serif mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        BodhMantr
      </motion.h1>
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Discover Spiritual Healing
      </motion.h2>

      {/* Subheading */}
      <p className="max-w-xl mx-auto mb-6 text-lg text-gray-200">
        Unlock your inner peace and transform your life through our holistic practices.
      </p>

{/* Learn More Button */}
<motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-semibold 
             hover:shadow-[0_0_20px_rgba(150,100,255,0.8)] focus:shadow-[0_0_25px_rgba(150,100,255,0.9)] transition"
>
  Learn More
</motion.button>


      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-5xl w-full">
        {/* Tarot Card */}
        <div className="p-6 bg-gradient-to-b from-purple-900/40 to-purple-700/20 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(200,100,255,0.7)] hover:scale-105 transition">
          <Image src="/tarot.png" alt="Tarot Readings" width={60} height={60} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tarot Readings</h3>
          <p className="text-sm text-gray-300">Gain insights and guidance through the ancient art of tarot.</p>
        </div>

        {/* Energy Healing */}
        <div className="p-6 bg-gradient-to-b from-blue-900/40 to-blue-700/20 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(100,200,255,0.7)] hover:scale-105 transition">
          <Image src="/energy3.png" alt="Energy Healing" width={60} height={60} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Energy Healing</h3>
          <p className="text-sm text-gray-300">Restore balance and harmony to your body, mind, and spirit.</p>
        </div>

        {/* Astrology */}
        <div className="p-6 bg-gradient-to-b from-purple-900/40 to-purple-700/20 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(200,100,255,0.7)] hover:scale-105 transition">
          <Image src="/astrology.png" alt="Astrology" width={60} height={60} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Astrology</h3>
          <p className="text-sm text-gray-300">Explore your cosmic blueprint and understand your life’s purpose.</p>
        </div>

          {/* Numerology */}
  <div className="p-6 bg-gradient-to-b from-pink-900/40 to-pink-700/20 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(255,150,200,0.7)] hover:scale-105 transition">
    <Image src="/numerology.png" alt="Numerology" width={60} height={60} className="mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">Numerology</h3>
    <p className="text-sm text-gray-300">Unlock the mystical meanings behind numbers to guide your life.</p>
  </div>
      </div>

      {/* Bottom Text */}
      <h3 className="text-2xl md:text-3xl font-serif mt-16 mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
  Experience the Power of Holistic Healing
</h3>


      {/* Decorative Moons */}
      <div className="absolute bottom-8 left-10 w-16 h-16 opacity-80">
        <Image src="/moon.svg" alt="Moon Icon" width={64} height={64} />
      </div>
      <div className="absolute bottom-8 right-10 w-16 h-16 opacity-80">
        <Image src="/moon.svg" alt="Moon Icon" width={64} height={64} />
      </div>
    </section>
  );
}
