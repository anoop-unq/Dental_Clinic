import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { 
  FaceSmileIcon,
  ViewfinderCircleIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      name: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar buildup.",
      details: [
        "Complete oral examination",
        "Plaque and tartar removal",
        "Teeth polishing",
        "Fluoride treatment options",
        "Personalized oral hygiene instructions"
      ],
      icon: <FaceSmileIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1564429099367-49c5d4e0f9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop&crop=faces"
    },
    {
      name: "Dental Implants",
      description: "Permanent solution for missing teeth that look and function naturally.",
      details: [
        "Titanium implant placement",
        "Custom crown fabrication",
        "Bone grafting when needed",
        "Single tooth or full arch solutions",
        "Lifetime average of 25+ years"
      ],
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop"
    },
    {
      name: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, whitening, and other cosmetic procedures.",
      details: [
        "Porcelain veneers",
        "Professional teeth whitening",
        "Composite bonding",
        "Gum contouring",
        "Smile makeover consultations"
      ],
      icon: <SparklesIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop&crop=faces"
    },
    {
      name: "Orthodontics",
      description: "Straighten teeth and correct bites with braces or clear aligners.",
      details: [
        "Traditional metal braces",
        "Ceramic braces",
        "Invisalign clear aligners",
        "Retainer options",
        "Child and adult treatments"
      ],
      icon: <ViewfinderCircleIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop"
    },
    {
      name: "Pediatric Dentistry",
      description: "Gentle dental care designed specifically for children.",
      details: [
        "Child-friendly environment",
        "Preventive care",
        "Dental sealants",
        "Behavior management",
        "Early orthodontic evaluation"
      ],
      icon: <FaceSmileIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop&crop=faces"
    },
    {
      name: "Emergency Care",
      description: "Immediate treatment for dental emergencies and urgent issues.",
      details: [
        "Toothache relief",
        "Broken tooth repair",
        "Knocked-out tooth preservation",
        "Abscess treatment",
        "Same-day appointments available"
      ],
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop"
    }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="bg-white font-sans antialiased">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
            alt="Dental tools"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 to-teal-600/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-24">
          <div className="text-center w-full">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-teal-100 bg-teal-700/30 rounded-full backdrop-blur-sm mb-6 border border-teal-400/20">
              Comprehensive Dental Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
              Exceptional Dental Services
            </h1>
            <p className="mt-6 text-xl text-teal-100 max-w-3xl mx-auto drop-shadow-md">
              State-of-the-art treatments delivered with compassion and expertise for your entire family.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-3 bg-white text-teal-600 hover:bg-teal-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
              Our Comprehensive Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Dental Treatments
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                We offer a full range of dental services using cutting-edge technology and evidence-based techniques to ensure optimal oral health.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-teal-100 rounded-lg p-3 shadow-sm">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <button
                    onClick={() => toggleService(index)}
                    className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
                  >
                    {expandedService === index ? (
                      <>
                        <span>Show less</span>
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      </>
                    ) : (
                      <>
                        <span>Learn more</span>
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>

                  {expandedService === index && (
                    <div className="mt-6 space-y-4 animate-fadeIn">
                      <h4 className="font-semibold text-gray-900">Treatment includes:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 mt-1 mr-2">
                              <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200"
                        >
                          Book this service
                          <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
              Patient Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Patients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The dental implant procedure was completely painless and the results are amazing. I can smile with confidence again!",
                author: "Sarah Johnson",
                role: "Dental Implant Patient"
              },
              {
                quote: "My kids actually look forward to their dental visits now. The pediatric team is wonderful with children.",
                author: "Michael Chen",
                role: "Parent"
              },
              {
                quote: "After years of hiding my smile, the cosmetic dentistry work transformed my teeth. The staff made me feel comfortable throughout the entire process.",
                author: "Emily Rodriguez",
                role: "Cosmetic Dentistry Patient"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 text-teal-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Schedule your appointment today and experience world-class dental care in a comfortable, welcoming environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 hover:bg-teal-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Your Appointment
              </a>
              <a
                href="tel:+1234567890"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="hidden sm:inline">Call us: </span>(123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;