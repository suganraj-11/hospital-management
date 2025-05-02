import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16"> {/* padding to compensate for fixed header */}
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", 
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About MediCare Hospital</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Providing compassionate care and medical excellence for over two decades
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To deliver exceptional healthcare services that improve the health and wellbeing of the individuals and communities we serve with compassion, respect, and integrity.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be the trusted leader in healthcare excellence, setting the standard for patient-centered care, innovative treatments, and community wellness initiatives.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Compassionate Care</li>
                <li>Excellence & Innovation</li>
                <li>Integrity & Transparency</li>
                <li>Respect & Dignity</li>
                <li>Teamwork & Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our History</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-blue-300 transform md:translate-x-0"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2000 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-700">2000</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Foundation</h4>
                  <p className="text-gray-600">
                    MediCare Hospital was founded with a vision to bring world-class healthcare services to the community. Starting with just 30 beds and a small team of dedicated physicians.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white transform md:-translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 2005 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 order-1 md:order-1 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white transform md:-translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                  <h3 className="text-xl font-bold text-blue-700">2005</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Expansion</h4>
                  <p className="text-gray-600">
                    Expanded facilities to include specialized departments in cardiology, neurology, and pediatrics. The hospital capacity increased to 100 beds with state-of-the-art equipment.
                  </p>
                </div>
              </div>
              
              {/* 2012 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-blue-700">2012</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Center</h4>
                  <p className="text-gray-600">
                    Established a dedicated research center focused on medical innovations and clinical trials, collaborating with leading universities and pharmaceutical companies.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white transform md:-translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 2018 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 order-1 md:order-1 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white transform md:-translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                  <h3 className="text-xl font-bold text-blue-700">2018</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Digital Transformation</h4>
                  <p className="text-gray-600">
                    Implemented comprehensive digital health records and telemedicine services, making healthcare more accessible to patients in remote areas.
                  </p>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-blue-700">2023</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Community Health Initiative</h4>
                  <p className="text-gray-600">
                    Launched a comprehensive community health initiative focusing on preventive care, health education, and wellness programs for underserved populations.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white transform md:-translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Meet the dedicated professionals who lead our hospital with expertise and compassion, ensuring we provide the highest quality of care.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Doctor 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. James Wilson" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. James Wilson</h3>
                <p className="text-blue-600 mb-3">Chief Medical Officer</p>
                <p className="text-gray-600">
                  With over 20 years of experience in internal medicine and healthcare management, Dr. Wilson leads our medical team with expertise and compassion.
                </p>
              </div>
            </div>
            
            {/* Doctor 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. Sarah Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Sarah Chen</h3>
                <p className="text-blue-600 mb-3">Director of Surgery</p>
                <p className="text-gray-600">
                  A pioneering surgeon specializing in minimally invasive techniques, Dr. Chen has performed over 1,000 successful surgeries and leads our surgical department.
                </p>
              </div>
            </div>
            
            {/* Doctor 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. Michael Rodriguez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Michael Rodriguez</h3>
                <p className="text-blue-600 mb-3">Head of Pediatrics</p>
                <p className="text-gray-600">
                  Dedicated to children's health for over 15 years, Dr. Rodriguez brings warmth and expertise to our pediatric department, ensuring young patients receive the best care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;