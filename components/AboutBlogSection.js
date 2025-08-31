// import { motion } from "framer-motion";

// const blogPosts = [
//   { id: 1, title: "5 Ways: Tarot Card Smarts Your Life", link: "#" },
//   { id: 2, title: "The Benefits of Meditation for Inner Peace", link: "#" },
//   { id: 3, title: "Understanding Your Astrological Chart", link: "#" },
// ];

// export default function AboutBlogSection() {
//   return (
//     <section
//       className="py-24 px-8 text-white relative"
//       style={{
//         backgroundImage: "url('/stars-bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
//         {/* About Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-serif mb-6">About Us</h2>
//           <p className="text-lg leading-relaxed text-gray-300 mb-8">
//             At Mystic Bloom, we are dedicated to guiding you on your path to spiritual wellness.
//             Our compassionate approach empowers you to achieve inner peace and personal transformation.
//           </p>
//           <motion.button
//             className="px-8 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full font-semibold hover:scale-110 transition transform"
//             whileHover={{ scale: 1.05 }}
//           >
//             See More
//           </motion.button>
//         </motion.div>

//         {/* Blog Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <h2 className="text-4xl font-serif mb-6">From the Blog</h2>
//           <div className="flex flex-col sm:flex-row gap-4">
//             {blogPosts.map((post) => (
//               <motion.div
//                 key={post.id}
//                 className="p-6 bg-gradient-to-b from-purple-900/40 to-purple-700/20 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(200,100,255,0.5)] hover:scale-105 transition text-left w-full sm:w-1/3"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h3 className="text-base font-semibold mb-4">{post.title}</h3>
//                 <a
//                   href={post.link}
//                   className="text-purple-400 hover:text-purple-300 font-medium"
//                 >
//                   Read More
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways: Tarot Card Smarts Your Life",
    link: "#",
    image: "/tarot.png",
  },
  {
    id: 2,
    title: "The Benefits of Meditation for Inner Peace",
    link: "#",
    image: "/meditation.png",
  },
  {
    id: 3,
    title: "Understanding Your Astrological Chart",
    link: "#",
    image: "/astrology.png",
  },
];

export default function AboutBlogSection() {
  return (
    <section className="py-20 px-6 text-white relative" style={{ backgroundImage: "url('/stars-bg.png')", backgroundSize: "cover" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* About Section */}
        <div>
          {/* <motion.h2
            className="text-3xl md:text-4xl font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2> */}

            <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            About Us
            </motion.h2>


          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            At BodhMantr, we are dedicated to guiding you on your path to spiritual wellness. 
            Our compassionate approach empowers you to achieve inner peace and personal transformation.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full font-semibold 
                     hover:shadow-[0_0_20px_rgba(150,100,255,0.8)] focus:shadow-[0_0_25px_rgba(150,100,255,0.9)] transition"
            whileHover={{ scale: 1.05 }}
          >
            See More
          </motion.button>
        </div>

        {/* Blog Section */}
        <div>
          {/* <motion.h2
            className="text-3xl md:text-4xl font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            From the Blog
          </motion.h2> */}

            <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            From the Blog
            </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="p-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:shadow-lg hover:shadow-[0_0_20px_rgba(200,100,255,0.5)] hover:scale-105 transition text-center"
                //className="p-4 bg-gradient-to-b from-purple-900/40 to-purple-700/20 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:shadow-[0_0_30px_rgba(200,100,255,0.7)] hover:scale-105 transition-all duration-300 text-center"

                whileHover={{ scale: 1.05 }}
              >
                <Image src={post.image} alt={post.title} width={50} height={50} className="mx-auto mb-3" />
                <h3 className="text-base font-semibold mb-4">{post.title}</h3>
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
