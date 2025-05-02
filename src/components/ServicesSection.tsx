import React from 'react';
import { Stethoscope, Microscope, Heart, Activity, Pill as Pills, CalendarClock } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
      <div className="mb-4 text-blue-600 p-3 bg-blue-50 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Stethoscope size={28} />,
      title: "Primary Care",
      description: "Comprehensive primary healthcare services for patients of all ages, from preventive care to chronic disease management."
    },
    {
      icon: <Heart size={28} />,
      title: "Specialist Consultations",
      description: "Access to a wide range of medical specialists with expertise in various fields of medicine."
    },
    {
      icon: <Activity size={28} />,
      title: "Emergency Care",
      description: "24/7 emergency services with state-of-the-art facilities and experienced emergency physicians."
    },
    {
      icon: <Microscope size={28} />,
      title: "Diagnostic Services",
      description: "Advanced laboratory and imaging services including X-rays, ultrasounds, and specialized tests."
    },
    {
      icon: <Pills size={28} />,
      title: "Pharmacy Services",
      description: "On-site pharmacy providing prescribed medications and expert pharmaceutical guidance."
    },
    {
      icon: <CalendarClock size={28} />,
      title: "Online Appointments",
      description: "Convenient online appointment scheduling for both in-person and virtual consultations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of healthcare services to meet all your medical needs, 
            delivered by experienced professionals in a caring environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;