// import React from 'react';
// import { FaLightbulb, FaRocket, FaBrain, FaChartLine, FaUserGraduate, FaTools, FaCheck } from 'react-icons/fa';

// const CourseOverview = () => {
//   return (
//     <section className="bg-white text-gray-800 py-12 px-6 lg:px-20">
//       {/* Section Heading */}
//       <h2 className="text-4xl font-bold text-center mb-8">
//          What You’ll Get From This Course
//       </h2>

//       {/* Course Introduction */}
//       <div className="bg-blue-50 rounded-lg p-6 mb-8 shadow-md">
//         <h3 className="text-2xl font-semibold mb-2"> Course Introduction</h3>
//         <p className="text-lg leading-relaxed">
//           Discover the secrets to building wealth and achieving financial freedom with{' '}
//           <span className="font-bold">Not Too Young For Wealth</span>. This course equips you with 
//           actionable strategies to develop a wealth-building mindset, launch your business, and 
//           secure your financial future — all at your own pace.
//         </p>
//       </div>

//       {/* Learning Outcomes Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {/* Each Card */}
//         <div className="bg-white rounded-lg shadow-md p-6 text-center">
//           <FaLightbulb className="text-yellow-500 text-4xl mx-auto mb-4" />
//           <h4 className="font-semibold text-xl mb-2">Master the Foundations of Wealth</h4>
//           <p className="text-gray-600">Learn the true meaning of wealth and how to build it.</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 text-center">
//           <FaBrain className="text-blue-500 text-4xl mx-auto mb-4" />
//           <h4 className="font-semibold text-xl mb-2">Upgrade Your Mindset</h4>
//           <p className="text-gray-600">Break free from limiting beliefs and think like a winner.</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 text-center">
//           <FaRocket className="text-red-500 text-4xl mx-auto mb-4" />
//           <h4 className="font-semibold text-xl mb-2">Develop Winning Business Strategies</h4>
//           <p className="text-gray-600">Tools to start, grow, and scale your business effectively.</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 text-center">
//           <FaChartLine className="text-green-500 text-4xl mx-auto mb-4" />
//           <h4 className="font-semibold text-xl mb-2">Build Wealth Through Financial Literacy</h4>
//           <p className="text-gray-600">Learn strategies for passive income and investments.</p>
//         </div>
//       </div>

//       {/* Target Audience */}
//       <div className="bg-yellow-50 rounded-lg p-6 mb-8 shadow-md">
//         <h3 className="text-2xl font-semibold mb-4"> Who Should Take This Course?</h3>
//         <ul className="list-none space-y-3 text-lg">
//           <li className="flex items-center">
//             <FaCheck className="text-yellow-500 mr-3" />
//             <span>Beginners ready to start their wealth journey.</span>
//           </li>
//           <li className="flex items-center">
//             <FaCheck className="text-yellow-500 mr-3" />
//             <span>Aspiring investors looking to grow their income streams.</span>
//           </li>
//           <li className="flex items-center">
//             <FaCheck className="text-yellow-500 mr-3" />
//             <span>Young entrepreneurs with big dreams and ideas.</span>
//           </li>
//         </ul>
//       </div>

//       {/* What Makes It Unique */}
//       <div className="bg-blue-50 rounded-lg p-6 shadow-md">
//         <h3 className="text-2xl font-semibold mb-4">🛠 What Makes This Course Different?</h3>
//         <ul className="list-disc pl-6 space-y-2 text-lg">
//           <li>
//             <span className="font-semibold">Step-by-Step Framework:</span> Simple, actionable strategies
//             you can apply immediately.
//           </li>
//           <li>
//             <span className="font-semibold">Self-Paced Learning:</span> Study anytime, anywhere — at
//             your own speed.
//           </li>
//           <li>
//             <span className="font-semibold">Real-World Examples:</span> Proven methods that deliver results
//             for young entrepreneurs and investors.
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default CourseOverview;


import React from 'react';
import { AiOutlineBulb, AiOutlineSetting, AiOutlineBarChart, AiOutlineDollarCircle, AiOutlineRocket } from 'react-icons/ai';

const CourseBreakdown = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">
          What You'll Get Inside the Course
        </h2>

         {/* Course Introduction */}
         <div className="bg-blue-50 rounded-lg p-6 mt-12 mb-12 shadow-md text-left">
          <h3 className="text-2xl font-semibold mb-2">Course Introduction</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Discover the secrets to building wealth and achieving financial freedom with{' '}
            <span className="font-bold">Not Too Young For Wealth</span>. This course equips you with 
            actionable strategies to develop a wealth-building mindset, launch your business, and 
            secure your financial future — all at your own pace.
          </p>
        </div>

        {/* Course Modules */}
        <div className="space-y-8">
          {/* Module 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineBulb className="text-blue-600 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 1: Mastering the Foundations of Wealth</h3>
              <p className="text-gray-600 mt-2">
                Understand what true wealth is and learn how to start building it with confidence.
              </p>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineSetting className="text-yellow-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 2: Developing a Winning Mindset</h3>
              <p className="text-gray-600 mt-2">
                Detox your mindset and unlock the confidence you need to achieve your financial goals.
              </p>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineBarChart className="text-green-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 3: Business Strategy & Marketing Secrets</h3>
              <p className="text-gray-600 mt-2">
                Discover proven strategies to build, scale, and market successful businesses.
              </p>
            </div>
          </div>

          {/* Module 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineDollarCircle className="text-red-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 4: Financial Literacy & Smart Investments</h3>
              <p className="text-gray-600 mt-2">
                Learn practical tools to manage money, grow investments, and secure your future.
              </p>
            </div>
          </div>

          {/* Module 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineRocket className="text-purple-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 5: Turning Knowledge Into Action</h3>
              <p className="text-gray-600 mt-2">
                Create your personalized wealth-building plan and start taking action immediately.
              </p>
            </div>
          </div>
        </div>


        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
            🚀 Get the blueprint to build wealth — step-by-step and stress-free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseBreakdown;
