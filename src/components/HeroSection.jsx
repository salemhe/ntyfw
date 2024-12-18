import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';
import HeroVideo from '../assets/intro-video.mp4';

const HeroSection = () => {
  return (
    <>
      <header
        className='relative bg-blue-900 text-gray-100 py-8 flex flex-col items-center justify-center rounded-b-[120px] md:h-[850px]'
        style={{ height: "650px" }}
      >
        {/* Dark overlay */}
        {/* <div className='absolute inset-0 bg-blue-900 opacity-90 z-0'></div> */}

        {/* Logo Section */}
        <nav className='absolute top-6 w-full z-10'>
          <motion.div
            className='flex justify-center mb-10 lg:mb-32'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={Logo}
              alt='Logo'
              className='h-40 sm:h-52 lg:h-60'
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </nav>

        {/* Content */}
        <motion.div
          className='relative z-10 text-center px-4 sm:px-8 py-6 sm:py-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Tag-Like Label */}
          <motion.div
            className='inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium px-3 py-2 rounded-full text-sm sm:text-base shadow-md mt-6 mb-2'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Join Thousands of Learners!
          </motion.div>

          <h1 className='text-4xl sm:text-6xl font-bold mb-4 sm:mb-6'>
            {/* Master Financial Intelligence in Just 5 Days — Anytime, Anywhere */}
            Master Wealth Creation with Our Exclusive Course
          </h1>
          <p className="text-base sm:text-xl my-4 sm:my-6 w-[90%] lg:w-[70%] mx-auto text-center">
            Unlock financial intelligence and entrepreneurial skills with this transformative course. Get the tools to build wealth and secure your future today!
            {/* Learn step-by-step how to build wealth and secure your future */}
          </p>

          {/* Registration Button */}
          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className='bg-yellow-500  text-darkBlue mt-6 px-6 py-3 rounded-lg text-lg font-semibold z-10 relative'>
              Join The Course Now
            </button>
          </motion.a>
        </motion.div>
      </header>

      {/* Video Section */}
      <motion.section
        className='relative -mt-16 sm:-mt-20 lg:-mt-12 z-20 w-full flex justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <motion.div
          className='w-[90%] max-w-[700px] lg:max-w-[600px] rounded-lg overflow-hidden shadow-2xl'
          whileHover={{ scale: 1.02 }}
        >
          <video
            autoPlay
            loop
            controls
            className='w-full h-[250px] lg:h-[300px] object-cover'
          >
            <source src={HeroVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.section>
    </>
  );
};

export default HeroSection;






// import React from 'react';
// import { motion } from 'framer-motion';
// import Logo from '../assets/Logo.png';
// import HeroVideo from '../assets/intro-video.mp4';

// const HeroSection = () => {
//   return (
//     <>
//       <header
//         className="relative bg-gradient-to-r from-blue-900 via-indigo-700 to-blue-800 text-gray-100 py-12 flex flex-col items-center justify-center rounded-b-[120px] md:h-[850px] h-[650px]"
//       >
//         {/* Logo Section */}
//         <nav className="absolute top-8 w-full z-10">
//           <motion.div
//             className="flex justify-center mb-12 lg:mb-32"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <motion.img
//               src={Logo}
//               alt="Logo"
//               className="h-44 sm:h-52 lg:h-60"
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </nav>

//         {/* Content Section */}
//         <motion.div
//           className="relative z-10 text-center px-6 sm:px-8 py-6 sm:py-10"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           {/* Tag-Like Label */}
//           <motion.div
//             className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base shadow-lg mt-6 mb-4"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 1 }}
//           >
//             Join Thousands of Learners!
//           </motion.div>

//           <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6">
//             Master Wealth Creation with Our Exclusive Course
//           </h1>
//           <p className="text-lg sm:text-xl my-4 sm:my-6 text-white mx-auto w-[90%] lg:w-[75%]">
//             Unlock financial intelligence and entrepreneurial skills with this transformative course. Get the tools to build wealth and secure your future today!
//           </p>

//           {/* Registration Button */}
//           <motion.a
//             href="/"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <button className="bg-yellow-500 text-darkBlue mt-6 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
//               Join The Course Now
//             </button>
//           </motion.a>
//         </motion.div>
//       </header>

//       {/* Video Section */}
//       <motion.section
//         className="relative z-20 w-full flex justify-center mt-16"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, delay: 1.5 }}
//       >
//         <motion.div
//           className="w-[90%] max-w-[700px] lg:max-w-[600px] rounded-lg overflow-hidden shadow-xl"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             controls
//             className="w-full h-[250px] lg:h-[350px] object-cover rounded-lg"
//           >
//             <source src={HeroVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </motion.div>
//       </motion.section>
//     </>
//   );
// };

// export default HeroSection;


// import React from 'react';
// import { motion } from 'framer-motion';
// import Logo from '../assets/Logo.png';
// import HeroVideo from '../assets/intro-video.mp4';

// const HeroSection = () => {
//   return (
//     <section
//       className="relative flex flex-col md:flex-row items-center justify-center bg-[#afe6ff] text-blue-900 min-h-screen px-6 sm:px-16 py-12"
//     >
//       {/* Content Section */}
//       <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 z-10">
//         {/* Logo */}
//         <motion.img
//           src={Logo}
//           alt="Logo"
//           className="h-32 mb-8 mx-auto md:mx-0"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         />
        
//         {/* Heading */}
//         <motion.h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#003366]"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           Master Financial Success with Us
//         </motion.h1>
        
//         {/* Description */}
//         <motion.p
//           className="text-lg sm:text-xl mb-8 leading-relaxed text-black"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           Learn wealth-building strategies, financial intelligence, and entrepreneurial tools to secure your future.
//         </motion.p>

//         {/* CTA Button */}
//         <motion.a
//           href="/"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="inline-block bg-[#007BFF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#005BB5] transition duration-300"
//         >
//           Enroll Now
//         </motion.a>
//       </div>

//       {/* Video Section */}
//       <motion.div
//         className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center"
//         initial={{ opacity: 0, x: 30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, delay: 0.8 }}
//       >
//         <div className="w-[90%] sm:w-4/5 lg:w-[500px] overflow-hidden rounded-2xl shadow-2xl">
//           <video
//             autoPlay
//             loop
//             muted
//             controls
//             className="w-full h-full object-cover"
//           >
//             <source src={HeroVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </motion.div>

//       {/* Subtle Background Accent */}
//       <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 rounded-bl-[50%] z-0"></div>
//     </section>
//   );
// };

// export default HeroSection;

