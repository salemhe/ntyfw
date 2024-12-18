import React from 'react';
import PersonImage from '../assets/pwealth.jpg';

const Credentials = () => {
  return (
    <section className="py-16 px-6 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center mb-8 leading-snug">
         About Pwealth
        </h2>

        {/* Flex Container for Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={PersonImage}
              alt="Mr. Wealth Oladele Olaitan"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              <strong>Mr. Wealth Oladele Olaitan</strong>, the Chairman of Teens Voice Academy, leads this transformative initiative. Teens Voice is an NGO dedicated to empowering young people across Lagos through financial literacy, business education, and leadership training.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              With a focus on secondary school students, our mission is to equip the next generation with the knowledge and tools they need to succeed.
            </p>
            <p className="text-lg leading-relaxed mb-4 italic">
              Teens Voice has made a significant impact, receiving district-level recognition for its outreach and positively influencing thousands of students.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Trusted by leading organizations across Lagos, Teens Voice continues to gain support from companies committed to shaping the future of our youth.
            </p>

            <a href="/contact">
            <button className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition w-full sm:w-auto justify-center">               
                Let's Get Started !
            </button>
           </a>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Credentials;
