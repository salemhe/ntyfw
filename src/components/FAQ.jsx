import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // New icons for expand/collapse

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqQuestions = [
    {
      question: "What is the 'Not Too Young for Wealth' course?",
      answer: "The course is a digital program designed to teach young individuals essential financial skills, wealth creation strategies, and entrepreneurship principles to help them achieve financial freedom."
    },
    {
      question: "How long will it take to complete the course?",
      answer: "You can complete the course at your own pace, but we recommend dedicating 4-6 weeks to finish it, ensuring you fully absorb the material and apply it."
    },
    {
      question: "Is there any support during the course?",
      answer: "Yes! You'll have access to the 'Not Too Young for Wealth' private community for peer support, and you can also reach out for personalized assistance through our team."
    },
    {
      question: "Do I get lifetime access to the course material?",
      answer: "Yes, once you enroll, you will have lifetime access to all course materials, including future updates."
    },
    {
      question: "How do I get started with the course?",
      answer: "Simply click on the 'Start Your Wealth Journey Now' button above, make the payment, and you'll gain immediate access to the course content."
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-black mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqQuestions.map((faq, index) => (
            <div key={index}>
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center px-6 py-4 border-b border-gray-300 cursor-pointer"
              >
                <h3 className="text-xl font-medium text-black">{faq.question}</h3>
                <div>
                  {activeIndex === index ? (
                    <AiOutlineMinus className="text-gray-600 text-2xl" />
                  ) : (
                    <AiOutlinePlus className="text-gray-600 text-2xl" />
                  )}
                </div>
              </div>

              {activeIndex === index && (
                <div className="mt-4 px-6 text-gray-700">
                  <p className="text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;




