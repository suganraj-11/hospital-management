import React from 'react';
import { Clock, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1600')", 
          height: '100%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60 backdrop-blur-sm"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-32 md:py-40 lg:py-48 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Your Health Is Our Top Priority
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Providing exceptional healthcare services with compassion and cutting-edge technology. Our dedicated team of specialists is here to serve you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Make Appointment
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Quick info bar */}
      <div className="bg-white py-4 shadow-md relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Clock className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Working Hours</h3>
                <p className="text-gray-600 text-sm">Mon-Fri: 8:00AM - 8:00PM</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Appointments</h3>
                <p className="text-gray-600 text-sm">Online & In-person Available</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Emergency Contact</h3>
                <p className="text-gray-600 text-sm">+1 (555) 911-1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;