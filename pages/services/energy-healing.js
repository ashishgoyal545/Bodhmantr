import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../../styles/energyHealing.module.css"; // Custom CSS

export default function EnergyHealing() {
  return (
    <>
      <Head>
        <title>Energy Healing | Mystic Bloom</title>
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
          ENERGY HEALING
        </h1>
        <p className="text-pink-300 text-lg tracking-[0.15em] uppercase mb-12">
          Restore Your Balance
        </p>

        {/* Energy Healing Icon */}
        <div className="flex justify-center mb-12">
          <Image
            src="/energyh.png"
            alt="Energy Healing Icon"
            width={150}
            height={150}
            className={styles.glowIcon}
          />
        </div>

        {/* About Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>
            About <span className="text-pink-400">Energy Healing</span>
          </h2>
          <div className={styles.starDivider}></div>
          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            Energy healing involves channeling universal life force to balance and align
            the body’s energy centers. This holistic approach promotes physical, emotional,
            and spiritual wellbeing.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className={`${styles.sectionHeading} mb-4`}>How It Works</h2>
          <div className={styles.starDivider}></div>
          <ul className="text-lg text-gray-200 space-y-3 mt-4">
            <li>1. Book a Zoom session for a 1-on-1 energy healing appointment.</li>
            <li>2. Experience aura cleansing and chakra balancing.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <div className={styles.bookingBox}>
          <p className="text-lg font-semibold mb-3">₹ 999 for 30 minutes</p>
          <button className={styles.glowButton}>BOOK NOW</button>
        </div>
      </section>

      <Footer />
    </>
  );
}
