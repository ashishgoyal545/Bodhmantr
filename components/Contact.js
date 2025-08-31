import { motion } from "framer-motion";

export default function Contact() {
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
        CONTACT
      </motion.h2>

      <form className="max-w-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md bg-black/50 border border-purple-400 text-white placeholder-gray-300 
                       focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-400/70 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-black/50 border border-purple-400 text-white placeholder-gray-300 
                       focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-400/70 transition"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-md bg-black/50 border border-purple-400 text-white placeholder-gray-300 
                     focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-400/70 transition mb-6"
          rows="5"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full font-semibold 
                     hover:shadow-[0_0_20px_rgba(150,100,255,0.8)] focus:shadow-[0_0_25px_rgba(150,100,255,0.9)] transition"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
