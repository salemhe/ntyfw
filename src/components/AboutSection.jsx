import React from 'react';
import { AiOutlineStar, AiOutlineAim } from 'react-icons/ai'; // Import React Icons

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <div className="flex justify-center items-center mb-4">
          <AiOutlineStar className="text-blue-700 text-4xl md:text-5xl" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Why This Course?
        </h2>

        {/* Section Content */}
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          The <span className="font-semibold">Not Too Young For Wealth</span> program empowers you with
          financial knowledge, tools, and strategies to transform your future. Whether you’re a beginner
          or aspiring investor, this course will guide you to success and unlock your financial potential.
        </p>

        {/* Call-To-Action */}
        <div className="flex justify-center items-center gap-2 bg-yellow-100 py-3 px-6 rounded-lg inline-block">
          {/* <AiOutlineAim className="text-yellow-700 text-2xl" /> */}
          <p className="text-sm md:text-base font-medium text-gray-700">
          🎯 Learn how to think, plan, and execute like the wealthy — starting today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
