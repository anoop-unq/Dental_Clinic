import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [bgColor, setBgColor] = useState('from-blue-50 to-white');

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every six months for a regular check-up and cleaning. However, some patients may need more frequent visits depending on their oral health.",
      bg: 'from-blue-50 to-white'
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Please contact our office with your insurance information and we'll verify your benefits.",
      bg: 'from-teal-50 to-white'
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "If you're experiencing severe pain, swelling, or have had a tooth knocked out, please call us immediately at (123) 456-7890. We offer emergency dental services and will do our best to see you as soon as possible.",
      bg: 'from-amber-50 to-white'
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, dental X-rays are very safe. We use digital X-rays which emit significantly less radiation than traditional film X-rays. The amount of radiation is minimal and comparable to what you'd receive from a short flight.",
      bg: 'from-purple-50 to-white'
    },
    {
      question: "How can I improve my smile?",
      answer: "We offer a variety of cosmetic dentistry options including teeth whitening, veneers, and orthodontics. During a consultation, we can discuss which options would work best for your smile goals.",
      bg: 'from-rose-50 to-white'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setBgColor(faqs[index].bg);
  };

  return (
    <section className={`bg-gradient-to-b ${bgColor} transition-all duration-1000 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center`}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-lg">
            Patient Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common dental queries from our experts
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ${activeIndex === index ? 'ring-4 ring-opacity-50 ring-blue-500 scale-[1.02]' : 'hover:shadow-2xl'}`}
            >
              <button
                className={`flex justify-between items-center w-full text-left p-8 focus:outline-none group`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className={`text-xl font-bold ${activeIndex === index ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'} transition-colors duration-300`}>
                  {faq.question}
                </h3>
                <span className={`ml-6 flex-shrink-0 p-2 rounded-full ${activeIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'} transition-all duration-300`}>
                  {activeIndex === index ? (
                    <ChevronUpIcon className="h-6 w-6" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8">
                  <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;