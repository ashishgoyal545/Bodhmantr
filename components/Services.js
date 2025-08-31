import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Tarot Readings", description: "Gain insights and guidance through intuitive tarot sessions.", icon: "/icon-tarot.svg" },
    { title: "Energy Healing", description: "Experience transformative Reiki and energy balancing.", icon: "/icon-hand.svg" },
    { title: "Self Discovery Workshops", description: "Join our online workshops to grow self-awareness.", icon: "/icon-lotus.svg" },
  ];

  return (
    <section id="services" className="py-20 text-center relative z-10">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-black/30 border border-purple-300/50 rounded-lg p-6 backdrop-blur-md hover:shadow-[0_0_20px_rgba(200,162,200,0.8)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-14 h-14" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-200">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <a
  href="/services"
  className="mt-4 inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition"
>
  Learn More About Us
</a>
    </section>
  );
}
