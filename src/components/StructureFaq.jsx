import React, { useState } from "react";

const faqs = [
  {
    question: "Do you provide RCC and structural design services?",
    answer:
      "Yes, we provide RCC structure design and complete structural consultancy services for safe and durable buildings.",
  },
  {
    question: "Do you design earthquake-resistant structures?",
    answer:
      "Yes, our structural designs follow safety standards and include earthquake-resistant structure planning.",
  },
];

const StructureFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
          Structural Design FAQs
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
           {/* CTA Section */}
        <div className="mt-12 text-center group">
          <button
            className="
              inline-block
              bg-gray-800
              text-white
              px-8
              py-4
              rounded-md
              text-base sm:text-lg md:text-xl
              font-semibold
              transition
              duration-300
              hover:bg-[#cb9d54]
            "
          >
            Get Structural Consultation
          </button>

          {/* Bottom Line */}
          <div
            className="
              mt-2
              mx-auto
              w-63
              md:w-76
              h-[2px]
              bg-black
              transition
              duration-300
              group-hover:bg-[#cb9d54]
            "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default StructureFaq;
