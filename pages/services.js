import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Tarot Readings",
      desc: "Gain insights and guidance through the ancient art of tarot.",
      icon: "/tarot.png",
      link: "/services/tarot",
    },
    {
      title: "Astrology Readings",
      desc: "Explore your cosmic blueprint and understand your life’s purpose.",
      icon: "/astrology.png",
      link: "/services/astrology",
    },
    {
      title: "Energy Healing",
      desc: "Restore balance and harmony to your body, mind, and spirit.",
      icon: "/energy3.png",
      link: "/services/energy-healing",
    },
    {
      title: "Numerology",
      desc: "Discover the power of numbers to unlock insights about your life and destiny.",
      icon: "/numerology.png",
      link: "/services/numerology",
    },
  ];

  return (
    <>
      <Head>
        <title>Services | BodhMantr</title>
      </Head>

      {/* Navbar */}
      <Navigation />

      {/* Services Section */}
      <section
        className="min-h-screen bg-[#0B0A2A] text-white px-6 py-20 text-center"
        style={{
          backgroundImage: "url('/stars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
          Services
        </h1>

        {/* Mission & Who We Are */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300">
              We help you find spiritual clarity, healing, and inner balance through our holistic services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
              Who We Are
            </h2>
            <p className="text-lg text-gray-300">
              A team of spiritual guides, healers, and astrologers dedicated to your personal growth.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-purple-800/40 via-purple-600/30 to-blue-700/40 
                         rounded-2xl border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.5)] 
                         hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] hover:scale-105 transition duration-300 text-center"
            >
              <Image src={service.icon} alt={service.title} width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200 mb-4">{service.desc}</p>
              <Link href={service.link}>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-medium 
                                  shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] hover:scale-110 transition">
                  See More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
