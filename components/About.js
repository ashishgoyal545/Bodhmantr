import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 px-6 bg-transparent text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - About Text */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-serif mb-6 text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6 text-left">
            At Mystic Bloom, we are dedicated to guiding you on your path to spiritual wellness. 
            Our compassionate approach empowers you to achieve inner peace and personal transformation.
          </p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            See More
          </motion.button>
        </div>
      </div>
    </section>
  );
}
