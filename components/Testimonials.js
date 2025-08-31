import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      className="py-20 text-center text-white relative"
      style={{ backgroundImage: "url('/stars-bg.png')", backgroundSize: "cover" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-serif mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        TESTIMONIALS
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-lg italic text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque fermentum
        massa vel arcu bibendum, non fougiat massa hendrerit.”
      </motion.p>
      <p className="text-right max-w-2xl mx-auto text-gray-400">Sarah M.</p>
    </section>
  );
}
