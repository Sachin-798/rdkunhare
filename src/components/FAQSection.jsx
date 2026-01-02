import React, { useState } from "react";

const faqs = [
  {
    question: "What services does RD Kunhare provide?",
    answer:
      "RD Kunhare provides complete real estate, construction, and design solutions including architecture design, interior design, building & construction, structural design, property management, map sanction, and vastu consultancy in Indore.",
  },
  {
    question: "Is RD Kunhare based in Indore?",
    answer:
      "Yes, RD Kunhare is based in Indore and primarily serves residential and commercial clients across Indore and nearby areas.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes, we handle both residential and commercial projects including houses, row houses, apartments, offices, and commercial buildings.",
  },
  {
    question: "How can I contact RD Kunhare for enquiry?",
    answer:
      "You can contact us through our website contact form, phone number, or by visiting our office in Indore.",
  },
  {
    question: "Do you deal in row houses in Vijay Nagar and Nipania?",
    answer:
      "Yes, RD Kunhare assists in buying and selling row houses across Vijay Nagar, Nipania, Rau, Kanadia Road, and Ujjain Road.",
  },
  {
    question: "Do you help with selling property urgently in Indore?",
    answer:
      "Yes, we assist property owners who want to sell their house or plot urgently in Indore through our verified buyer network.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 sm:p-6 text-left"
              >
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl pr-4">
                  {faq.question}
                </h3>

                {/* Dropdown Icon */}
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    {faq.answer}
                  </p>
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
