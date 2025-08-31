import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../../styles/tarot.module.css"; // Custom CSS for gradients & effects

export default function Tarot() {
  return (
    <>
      <Head>
        <title>Tarot Readings | Mystic Bloom</title>
      </Head>

      <Navigation />

      <section
        className="min-h-screen bg-[#0B0A2A] text-white px-6 py-24 text-center"
        style={{
          backgroundImage: "url('/stars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <h1 className={`${styles.gradientHeading} text-5xl md:text-6xl font-bold mb-3`}>
          TAROT READINGS
        </h1>
        <p className="text-[#E3DAC9] text-lg tracking-[0.2em] uppercase mb-12">
          Unlock Your Inner Guidance
        </p>

        {/* Tarot Card */}
        <div className="flex justify-center mb-12">
          <Image
            src="/tarot1.png"
            alt="Tarot Card"
            width={150}
            height={150}
            className={styles.glowCard}
          />
        </div>

        {/* About Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>About Tarot Readings</h2>
          <div className={styles.starDivider}></div>
          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            Tarot readings provide insight and clarity into your life’s questions and challenges.
            Through the symbolism of the cards, you can gain self-awareness and intuitive guidance.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>How It Works</h2>
          <div className={styles.starDivider}></div>
          <ul className="text-lg text-gray-200 space-y-3 mt-4">
            <li>1. Book tarot slot for a 1-on-1 tarot reading.</li>
            <li>2. Connect via Zoom for a personalized 30-minute session.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <div className={styles.bookingBox}>
          <h3 className="text-lg font-semibold mb-3">BOOK YOUR SESSION</h3>
          <p className="text-xl mb-4">₹ 999 for 30 minutes</p>
          <button className={`${styles.glowButton} px-6 py-3`}>
            BOOK NOW
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
