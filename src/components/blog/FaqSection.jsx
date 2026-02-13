import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FaqSection() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need prior meditation experience?",
      answer:
        "Swami Ji strives to respond personally to all messages within 24-48 hours. For urgent matters, please use the phone consultation option.",
    },
    {
      question: "Can Swamiji speak at international events?",
      answer:
        "Yes. Swami Ji regularly participates in global conferences, retreats, and spiritual gatherings.",
    },
    {
      question: "How do I join the 60-day meditation journey?",
      answer:
        "You can enroll through the courses section on the website and begin your guided transformation.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Limited scholarships are offered based on need and availability. Please contact support for details.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EFE6C9] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-5xl font-serif text-gray-800 leading-tight">
              Frequently
              <br />
              <span className="text-orange-500">Asked Questions</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
              <span className="italic font-semibold">
                Join Swami on a journey of wisdom,
              </span>{" "}
              joy, and authentic storytelling. Five decades of natural healing
              expertise meeting the{" "}
              <span className="italic font-semibold">
                power of shared stories.
              </span>
            </p>

          </div>



          {/* RIGHT SIDE ACCORDION */}
          <div className="space-y-5">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 cursor-pointer transition ${
                    isOpen
                      ? "bg-white border-2 border-orange-400 shadow-md"
                      : "bg-[#F4F0DC] border border-orange-200"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >

                  <div className="flex justify-between items-center">

                    <h3 className="font-medium text-gray-700">
                      {faq.question}
                    </h3>

                    {isOpen ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}

                  </div>

                  {isOpen && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
