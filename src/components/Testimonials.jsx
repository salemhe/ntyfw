import React from "react";

const testimonials = [
  {
    name: "Jane Akasili",
    role: "Project Manager & Social Impact Leader",
    quote:
      "The Not Too Young for Wealth program was transformative, offering me the clarity to navigate finances, career, and purpose. It empowered me to launch a thriving social impact organization and take on leadership roles as a student, while mastering the art of wealth management and financial independence."
  },
  {
    name: "David Ehijie",
    role: "CEO, Creative Cloud",
    quote:
      "As a teenager, attending the program laid the foundation for my career success. The insights gained inspired me to host empowerment programs for students, guiding them to kickstart their careers and aim higher. It truly proves wealth knows no age."
  },
  {
    name: "Sharon Enuebuka",
    role: "Project Manager & Content Writer",
    quote:
      "The Not Too Young for Wealth program has been a wellspring of financial wisdom. It helped me excel in my career and make significant strides toward achieving greatness."
  },
  {
    name: "Salem Hamis",
    role: "Full-Stack Developer",
    quote:
      "Participating in the program twice and chairing the third edition changed my trajectory. Today, I’m working on global projects as a developer and pursuing my education, all thanks to the program’s insights into wealth creation and financial literacy."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Hear from Our Alumni
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          See how <span className="text-blue-600 font-semibold">Not Too Young For Wealth</span> is shaping futures and empowering youth.
        </p>

        {/* Testimonial Grid */}
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left hover:shadow-xl transition-shadow"
            >
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 border-blue-500 pl-4">
                "{testimonial.quote}"
              </p>

              {/* Name and Role */}
              <div className="mt-4">
                <h4 className="text-gray-800 font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
         <div className="mt-16">
           <button className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition w-full sm:w-auto justify-center">
             Join Us and Transform Your Story
           </button>
         </div>
      </div>
    </section>
  );
};

export default Testimonials;




