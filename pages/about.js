import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


export default function About() {
  return (
    <>
      <Head>
        <title>About | Mystic Bloom</title>
      </Head>

      {/* Navbar */}
      <Navigation />

      <section
        className="min-h-screen bg-[#0B0A2A] text-white px-6 py-20 text-center"
        style={{
          backgroundImage: "url('/stars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-serif mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
          About Mystic Bloom
        </h1>

        {/* Mission Section */}
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-800/40 via-purple-600/30 to-blue-700/40 
                        rounded-2xl border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] 
                        transition duration-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Our Mission
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            At Mystic Bloom, we are dedicated to helping you achieve inner clarity and healing. 
            Through tarot, energy work, and mindfulness practices, we guide you on your spiritual journey.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-800/40 via-purple-700/30 to-purple-900/40 
                        rounded-2xl border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] 
                        transition duration-300 mb-12">
          <h2 className="text-2xl font-semibold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Our Story
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Founded with a vision of nurturing the soul and mind, Mystic Bloom combines ancient 
            spiritual practices with a modern approach to wellbeing. We believe in the transformative 
            power of holistic healing.
          </p>
        </div>

        {/* Core Values Heading */}
        <h2 className="text-3xl md:text-4xl font-serif mb-8 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
          Our Core Values
        </h2>

        {/* 3 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            {
              title: "Healing",
              desc: "We provide a safe, nurturing space for personal transformation.",
              icon: "/heart-icon.png",
            },
            {
              title: "Guidance",
              desc: "We offer insights and support to help you navigate life’s challenges.",
              icon: "/guidance-icon.png",
            },
            {
              title: "Mindfulness",
              desc: "We promote practices that cultivate inner peace and awareness.",
              icon: "/mindfulness-icon.png",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-b from-purple-900/40 to-purple-700/20 rounded-2xl shadow-lg 
                         hover:shadow-[0_0_30px_rgba(200,100,255,0.8)] hover:scale-105 transition transform duration-300 text-center"
            >
              <Image src={card.icon} alt={card.title} width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-semibold 
                           shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] hover:scale-105 transition">
          Learn More
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
