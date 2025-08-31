import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways: Tarot Card Smarts Your Life",
    link: "#",
  },
  {
    id: 2,
    title: "The Benefits of Meditation for Inner Peace",
    link: "#",
  },
  {
    id: 3,
    title: "Understanding Your Astrological Chart",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 px-6 bg-transparent text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Blog Heading */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-serif mb-8 text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            From the Blog
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="p-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-md font-semibold mb-3">{post.title}</h3>
                <a
                  href={post.link}
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
