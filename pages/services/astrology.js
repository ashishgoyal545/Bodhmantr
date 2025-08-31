import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../../styles/astrology.module.css"; // Custom CSS

export default function Astrology() {
  return (
    <>
      <Head>
        <title>Astrology | Mystic Bloom</title>
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
        {/* Main Title */}
        <h1 className={`${styles.gradientHeading} text-5xl md:text-6xl font-bold mb-2`}>
          ASTROLOGY
        </h1>
        <p className="text-[#E3DAC9] text-lg tracking-[0.15em] uppercase mb-12">
          Unveil Your Cosmic Blueprint
        </p>

        {/* Astrology Icon */}
        <div className="flex justify-center mb-12">
          <Image
            src="/astrology.png"
            alt="Astrology"
            width={150}
            height={150}
            className={styles.glowCard}
          />
        </div>

        {/* About Astrology */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>About Astrology</h2>
          <div className={styles.starDivider}></div>
          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            Astrology offers profound insights into your personality, relationships, and life’s path
            by analyzing the positions of celestial bodies at the time of your birth.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>How It Works</h2>
          <div className={styles.starDivider}></div>
          <ul className="text-lg text-gray-200 space-y-3 mt-4">
            <li>1. Receive a personalized natal chart analysis and interpretation.</li>
            <li>2. Gain clarity and understanding of your life’s purpose.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <div className={styles.bookingBox}>
          <p className="text-lg font-semibold mb-3">₹ 999 for 45 minutes</p>
          <button className={`${styles.glowButton} px-6 py-3`}>
            BOOK NOW
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
