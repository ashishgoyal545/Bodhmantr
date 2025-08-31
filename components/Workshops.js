import { motion } from "framer-motion";

export default function Workshops() {
  const workshops = [
    { title: "Meditation Guidance", description: "Learn to meditate and find inner peace." },
    { title: "Tarot Readings", description: "Deep dive into tarot for self-discovery." },
    { title: "Energy Healing", description: "Experience powerful energy transformations." },
  ];

  return (
    <section id="workshops" className="py-20 text-center relative z-10">
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        HEALING
      </motion.h2>
      <p className="text-lg max-w-xl mx-auto mb-8">
        Awaken your spirit and find inner peace
      </p>
      <button className="px-8 py-3 rounded-full bg-purple-400 text-gray-900 font-bold hover:bg-purple-300 transition mb-12">
        GET STARTED
      </button>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Workshops
      </motion.h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {workshops.map((workshop, i) => (
          <motion.div
            key={i}
            className="bg-black/30 border border-purple-300/50 rounded-lg p-6 backdrop-blur-md hover:shadow-[0_0_20px_rgba(200,162,200,0.8)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
            <p className="text-gray-200">{workshop.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
