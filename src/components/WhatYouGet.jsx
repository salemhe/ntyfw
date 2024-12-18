// import React from 'react';
// import { FaRegCheckCircle } from 'react-icons/fa';
// import { BsRocket } from 'react-icons/bs';

// const WhatYouGetSection = () => {
//   const benefits = [
//     "Lifetime Access to all course content.",
//     "A step-by-step system to create a wealth-building plan.",
//     "Templates, tools, and actionable strategies for business and investing.",
//     "A supportive community of like-minded learners.",
//     "Bonus Resources: Guides, checklists, and financial tools."
//   ];

//   return (
//     <section className="w-full py-16 bg-gray-50">
//       <div className="max-w-3xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-8">
//           What You’ll Get When You Enroll
//         </h2>
//         <div className="space-y-6">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="flex items-start space-x-3 justify-start mx-4">
//               <FaRegCheckCircle className="text-green-500" size={25} />
//               <p className="text-lg text-gray-800 text-left">{benefit}</p>
//             </div>
//           ))}
//         </div>
//         <div className="mt-8 flex justify-center">
//           <button className="flex items-center bg-blue-500 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-blue-600 transition w-full sm:w-auto">
//             <BsRocket className="mr-2 sm:text-2xl text-xl" />
//             Everything you need to build wealth — all in one place
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatYouGetSection;


import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { BsRocket } from 'react-icons/bs';

const WhatYouGetSection = () => {
  const benefits = [
    "Lifetime Access to all course content.",
    "A step-by-step system to create a wealth-building plan.",
    "Templates, tools, and actionable strategies for business and investing.",
    "A supportive community of like-minded learners.",
    "Bonus Resources: Guides, checklists, and financial tools."
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          What You’ll Get When You Enroll
        </h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 justify-start mx-4">
              <FaRegCheckCircle className="text-green-500" size={25} />
              <p className="text-lg text-gray-800 text-left">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition w-full sm:w-auto">
            {/* <BsRocket className="mr-2 sm:text-2xl text-xl" /> */}
            🚀 Everything you need to build wealth - all in one place
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
