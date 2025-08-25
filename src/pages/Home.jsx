import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon, CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const services = [
    {
      name: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar, keeping your gums healthy and your smile bright.",
      icon: <ShieldCheckIcon className="h-8 w-8 text-teal-500" />
    },
    {
      name: "Dental Implants",
      description: "Permanent solution for missing teeth that look, feel, and function like natural teeth.",
      icon: <CheckCircleIcon className="h-8 w-8 text-teal-500" />
    },
    {
      name: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, whitening, and other cosmetic procedures.",
      icon: <CheckCircleIcon className="h-8 w-8 text-teal-500" />
    }
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-24 md:py-32 lg:py-40">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="block">Your Beautiful Smile</span>
                <span className="block text-teal-100">Is Our Priority</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-teal-50">
                Experience gentle, comprehensive dental care in a comfortable environment with our expert team.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-white text-teal-600 hover:bg-teal-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 bg-teal-700 bg-opacity-80 hover:bg-opacity-100 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compassionate Dental Care
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                At SmileCare Dental, we believe in providing personalized, gentle dental care using the latest technology. Our team of experienced professionals is dedicated to making your visit comfortable and stress-free.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">15+ Years Experience</h3>
              </div>
              <p className="text-gray-600">
                Our dentists have extensive experience in all aspects of general and cosmetic dentistry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
                  <ShieldCheckIcon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">Modern Technology</h3>
              </div>
              <p className="text-gray-600">
                We use state-of-the-art equipment for accurate diagnoses and comfortable treatments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">Patient Comfort</h3>
              </div>
              <p className="text-gray-600">
                Your comfort is our priority, from our relaxing office environment to our gentle techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We offer a wide range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-800">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
              Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team at SmileCare made my dental visit comfortable and pain-free. Highly recommend!",
                author: "Sarah Johnson",
                role: "Regular Patient"
              },
              {
                quote: "I was nervous about getting implants, but the doctor explained everything clearly and the procedure was flawless.",
                author: "Michael Chen",
                role: "Dental Implant Patient"
              },
              {
                quote: "My kids actually look forward to their dental checkups now. The pediatric specialist is amazing!",
                author: "Emily Rodriguez",
                role: "Parent"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4 text-teal-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Schedule your appointment today and experience the difference of personalized dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-teal-600 hover:bg-teal-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Call Us: (123) 456-7890
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;