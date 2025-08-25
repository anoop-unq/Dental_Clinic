import React from 'react';
import { 
  UserGroupIcon, 
  HeartIcon, 
  AcademicCapIcon,
  BuildingOfficeIcon,
  ClockIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "General Dentist",
      bio: "With over 15 years of experience, Dr. Johnson specializes in cosmetic dentistry and restorative procedures. She graduated from Harvard Dental School and is a member of the American Dental Association.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80&fit=crop",
      specialties: ["Cosmetic Dentistry", "Restorative Procedures", "Teeth Whitening"]
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      bio: "Dr. Chen is our expert in orthodontics, helping patients of all ages achieve perfectly aligned smiles. He completed his orthodontic residency at UCLA and is certified in Invisalign treatment.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80&fit=crop",
      specialties: ["Braces", "Invisalign", "Jaw Alignment"]
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Dentist",
      bio: "Dr. Rodriguez makes dental visits fun for kids while ensuring they develop healthy oral hygiene habits. She's board certified in pediatric dentistry and has a special certification in treating children with dental anxiety.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80&fit=crop",
      specialties: ["Child Dental Care", "Preventive Dentistry", "Behavior Management"]
    }
  ];

  const stats = [
    { id: 1, name: 'Years of Combined Experience', value: '50+', icon: ClockIcon },
    { id: 2, name: 'Satisfied Patients', value: '10,000+', icon: UserGroupIcon },
    { id: 3, name: 'Professional Awards', value: '15+', icon: TrophyIcon },
    { id: 4, name: 'Dental Specialties', value: '12+', icon: BuildingOfficeIcon },
  ];

  return (
    <div className="bg-white font-sans antialiased">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-500 text-white overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=800&q=80"
            alt="Dental clinic"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-24">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              About SmileCare Dental
            </h1>
            <p className="mt-4 text-xl text-teal-100 max-w-3xl mx-auto">
              Providing exceptional dental care with compassion and expertise since 2008.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-teal-50 p-6 rounded-xl text-center h-full">
                <div className="flex justify-center">
                  <stat.icon className="h-10 w-10 text-teal-600" aria-hidden="true" />
                </div>
                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clinic History */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Legacy of Dental Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Founded in 2008 by Dr. Sarah Johnson, SmileCare Dental began as a small practice with a big vision: to provide comprehensive, patient-centered dental care in a comfortable environment.
              </p>
              <p className="text-lg text-gray-600">
                Over the years, we've grown into a full-service dental clinic with a team of highly skilled professionals, but we've never lost sight of our core values: compassion, excellence, and personalized care.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve generations of families in our community, using state-of-the-art technology to deliver the best possible outcomes for our patients.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Dental clinic interior"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-800 to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Patient-Centered Care
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Everything we do is centered around providing the best possible experience for our patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-teal-100 rounded-full text-teal-600">
                  <HeartIcon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600 text-center">
                We understand that dental visits can be stressful, so we prioritize your comfort and peace of mind with gentle techniques and a welcoming environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-teal-100 rounded-full text-teal-600">
                  <AcademicCapIcon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">Expertise</h3>
              <p className="text-gray-600 text-center">
                Our team stays at the forefront of dental technology and techniques through continuous education and training in the latest procedures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-teal-100 rounded-full text-teal-600">
                  <UserGroupIcon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 text-center">
                We're proud to be part of this community and are committed to giving back through free dental camps, school programs, and other initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
     {/* Team Section */}
<div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
        Our Team
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Meet Our Dental Experts
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-600">
        Our team of board-certified dentists and hygienists are dedicated to your oral health.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
        >
          {/* Image Container with Fixed Aspect Ratio */}
          <div className="relative pt-[75%] w-full overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={`${member.image}&fit=crop&crop=faces,center`}
              alt={member.name}
              loading="lazy"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-teal-200">{member.role}</p>
            </div>
          </div>
          
          <div className="p-6 flex-grow">
            <p className="text-gray-600 mb-4">{member.bio}</p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience Exceptional Dental Care?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule your appointment today and meet our team of dental professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-teal-600 hover:bg-teal-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Call Us: (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;