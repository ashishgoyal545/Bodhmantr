import Head from "next/head";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Workshops from "../components/Workshops";
import Contact from "../components/Contact";
import AboutBlogSection from "../components/AboutBlogSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>BodhMantr</title>
      </Head>
      <Navigation />
      <main className="bg-stars text-white">
        <Hero />
        <AboutBlogSection />
        <Testimonials />
        <Contact />
        <Footer />
        {/* <Services />
        
        <Workshops /> */}
       
      </main>
    </>
  );
}
