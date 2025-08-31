import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Ways Tarot Can Guide Your Life",
      desc: "Discover the transformative potential of tarot readings for personal growth and clarity.",
      slug: "5-ways-tarot-can-guide-your-life",
    },
    {
      title: "Understanding Energy Healing",
      desc: "Discover our essentials for unlocking the potential of healing practices.",
      slug: "understanding-energy-healing",
    },
    {
      title: "The Power of Affirmations",
      desc: "Learn how affirmations can enhance clarity, focus, and positivity in your life.",
      slug: "the-power-of-affirmations",
    },
    {
      title: "How to Meditate Effectively",
      desc: "Take control of stress with proven meditation techniques.",
      slug: "how-to-meditate-effectively",
    },
    {
      title: "Exploring Moon Phases",
      desc: "Enjoy the benefits of lunar cycles for reflection and energy alignment.",
      slug: "exploring-moon-phases",
    },
    {
      title: "Daily Rituals for Inner Peace",
      desc: "Essential practices to create mindfulness and prepare for meditation.",
      slug: "daily-rituals-for-inner-peace",
    },
    {
      title: "Connecting with Your Intuition",
      desc: "Learn how to trust your inner voice and make better decisions.",
      slug: "connecting-with-your-intuition",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog | BodhMantr</title>
      </Head>

      {/* Navbar */}
      <Navigation />

      {/* Blog Section */}
      <section
        className="min-h-screen bg-[#0B0A2A] text-white px-6 py-20 text-center"
        style={{
          backgroundImage: "url('/stars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Page Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-serif mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BodhMantr Journal
        </motion.h1>

        {/* Featured Blog */}
        <motion.div
          className="relative max-w-5xl mx-auto p-8 mb-12 rounded-2xl border border-white/20 bg-black/30 
                     shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(200,100,255,0.8)] 
                     transition duration-300 flex flex-col md:flex-row items-center justify-between text-left hover:scale-105"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Text */}
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-snug">
              {blogPosts[0].title}
            </h2>
            <p className="text-gray-300 mb-6">{blogPosts[0].desc}</p>
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <button className="px-5 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                Read More
              </button>
            </Link>
          </div>

          {/* Moon Image */}
          <div className="hidden md:block">
            <Image src="/moon.svg" alt="Moon" width={120} height={120} />
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-r from-purple-800/40 via-purple-600/30 to-blue-700/40 
                         rounded-2xl border border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.5)] 
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105 transition text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-200 mb-4">{post.desc}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-medium 
                          shadow-[0_0_10px_rgba(168,85,247,0.7)] hover:shadow-[0_0_20px_rgba(168,85,247,1)] transition hover:scale-105"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Subscribe Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl mb-4">Subscribe for weekly spiritual insights</p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-semibold 
                             shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] hover:scale-105 transition">
            Subscribe
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
