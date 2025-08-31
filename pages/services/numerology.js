import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../../styles/numerology.module.css"; // Custom CSS

export default function Numerology() {
  return (
    <>
      <Head>
        <title>Numerology | Mystic Bloom</title>
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
        {/* Main Heading */}
        <h1 className={`${styles.gradientHeading} text-5xl md:text-6xl font-bold mb-2`}>
          NUMEROLOGY
        </h1>
        <p className="text-pink-300 text-lg tracking-[0.15em] uppercase mb-12">
          DISCOVER YOUR LIFE PATH
        </p>

        {/* Numerology Icon */}
        <div className="flex justify-center mb-12">
          <Image
            src="/numerology.png" // Add numerology icon in public folder
            alt="Numerology Icon"
            width={150}
            height={150}
            className={styles.glowIcon}
          />
        </div>

        {/* About Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>
            About <span className="text-pink-400">Numerology</span>
          </h2>
          <div className={styles.starDivider}></div>
          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            Numerology reveals the hidden meaning behind numbers and their influence on your life path, personality, and destiny. By understanding your life path number and other core numbers, you can gain clarity and direction.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>How It Works</h2>
          <div className={styles.starDivider}></div>
          <ul className="text-lg text-gray-200 space-y-3 mt-4">
            <li>1. Provide your birth date and name for analysis.</li>
            <li>2. Receive a detailed numerology chart with personalized insights.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <div className={styles.bookingBox}>
          <p className="text-lg font-semibold mb-3">₹ 999 for 40 minutes</p>
          <button className={styles.glowButton}>BOOK NOW</button>
        </div>
      </section>

      <Footer />
    </>
  );
}
