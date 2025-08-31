// import { useRouter } from "next/router";
// import Head from "next/head";
// import Navigation from "../../components/Navigation";
// import Footer from "../../components/Footer";
// import Image from "next/image";

// const blogPosts = {
//   "5-ways-tarot-can-guide-your-life": {
//     title: "5 Ways Tarot Can Guide Your Life",
//     author: "Jane Doe",
//     date: "April 24, 2024",
//     intro:
//       "Tarot has helped many with introspection and personal growth. Tarot cards provide guidance and clarity in your journey.",
//     sections: [
//       {
//         heading: "Gain Clarity on Life Decisions",
//         content:
//           "Tarot encourages you to reflect on your life's path and navigate important decisions with confidence.",
//       },
//       {
//         heading: "Self-Awareness",
//         content:
//           "Tarot helps you connect with your intuition and encourages personal self-awareness.",
//       },
//       {
//         heading: "Navigate Challenges",
//         content:
//           "Tarot can help you overcome challenges and adapt to new life situations effectively.",
//       },
//     ],
//     related: [
//       {
//         title: "Understanding Energy Healing",
//         link: "/blog/understanding-energy-healing",
//         icon: "/energy3.png",
//       },
//       {
//         title: "How to Meditate Effectively",
//         link: "/blog/how-to-meditate-effectively",
//         icon: "/meditation.png",
//       },
//     ],
//   },
//   // Add other blog posts here...
// };

// export default function BlogPost() {
//   const router = useRouter();
//   const { slug } = router.query;

//   const post = blogPosts[slug];

//   if (!post) {
//     return (
//       <div className="min-h-screen bg-[#0B0A2A] text-white flex items-center justify-center">
//         <h1>Blog Post Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>{post.title} | Mystic Bloom</title>
//       </Head>

//       {/* Navbar */}
//       <Navigation />

//       {/* Blog Content */}
//       <section
//         className="min-h-screen bg-[#0B0A2A] text-white px-6 py-16"
//         style={{
//           backgroundImage: "url('/stars-bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Blog Title */}
//         <h1 className="text-4xl md:text-5xl font-serif text-purple-300 mb-4 drop-shadow-[0_0_10px_rgba(200,100,255,0.7)]">
//           {post.title}
//         </h1>
//         <p className="text-gray-400 mb-8">
//           By {post.author} – {post.date}
//         </p>

//         {/* Introduction */}
//         <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
//         <p className="text-gray-300 mb-6">{post.intro}</p>

//         {/* Sections */}
//         {post.sections.map((section, index) => (
//           <div key={index} className="mb-6">
//             <h3 className="text-xl font-bold mb-2">{section.heading}</h3>
//             <p className="text-gray-300">{section.content}</p>
//           </div>
//         ))}

//         {/* Related Posts */}
//         <h2 className="text-2xl font-semibold mt-12 mb-6">Related Posts</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
//           {post.related.map((relatedPost, index) => (
//             <div
//               key={index}
//               className="p-6 bg-gradient-to-b from-purple-900/30 to-purple-700/20 rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(200,100,255,0.8)] hover:scale-105 transition text-center"
//             >
//               <Image
//                 src={relatedPost.icon}
//                 alt={relatedPost.title}
//                 width={50}
//                 height={50}
//                 className="mx-auto mb-4"
//               />
//               <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
//               <a
//                 href={relatedPost.link}
//                 className="px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-medium hover:scale-105 transition"
//               >
//                 Read More
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Subscribe Section */}
//         <div className="mt-12 text-center">
//           <p className="text-xl mb-4">Subscribe for weekly spiritual insights</p>
//           <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-semibold shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] hover:scale-105 transition">
//             Subscribe
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }

import Head from "next/head";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

const blogPosts = [
  {
    slug: "5-ways-tarot-can-guide-your-life",
    title: "5 Ways Tarot Can Guide Your Life",
    author: "Jane Doe",
    date: "April 24, 2024",
    content: `
      Tarot has been a powerful tool for introspection and personal growth.
      In this article, we explore how tarot can guide your life, from gaining clarity on major decisions
      to fostering self-awareness and navigating challenges.
    `,
  },
  {
    slug: "understanding-energy-healing",
    title: "Understanding Energy Healing",
    author: "John Smith",
    date: "May 12, 2024",
    content: `
      Energy healing taps into your body's natural energy systems to promote balance, reduce stress,
      and enhance well-being. Let's dive deeper into this ancient yet modern practice.
    `,
  },
  // Add more blog posts here...
];

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  const router = useRouter();
  if (!post) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{post.title} | BodhMantr</title>
      </Head>

      <Navigation />

      <section
        className="min-h-screen bg-[#0B0A2A] text-white px-6 py-20"
        style={{
          backgroundImage: "url('/stars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
            {post.title}
          </h1>
          <p className="text-gray-400 mb-6">
            By {post.author} – {post.date}
          </p>

          {/* Content */}
          <article className="text-lg text-gray-200 leading-relaxed whitespace-pre-line mb-12">
            {post.content}
          </article>

          {/* Back to Blog */}
          <button
            onClick={() => router.push("/blog")}
            className="px-5 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] hover:scale-105 transition"
          >
            Back to Blog
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
