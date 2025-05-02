import React from 'react';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const FAQContactPage: React.FC = () => {
  const faqs = [
    {
      question: "What are your visiting hours?",
      answer: "Our general visiting hours are from 10:00 AM to 8:00 PM daily. However, different departments may have specific visiting policies. Please check with the specific ward or department for their visiting guidelines."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our website by creating an account and using our online booking system. Alternatively, you can call our appointment desk at +1 (555) 123-4567 during business hours."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. We recommend contacting your insurance provider to verify coverage before your visit. You can also contact our billing department for specific information about accepted insurance plans."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your ID, insurance card, a list of current medications, relevant medical records from previous healthcare providers, and any referral forms if applicable. Arriving 15 minutes early to complete registration is recommended."
    },
    {
      question: "How can I access my medical records?",
      answer: "You can access your medical records through our patient portal after creating an account. For assistance or to request physical copies, please contact our medical records department at +1 (555) 234-5678 or records@medicare-hospital.com."
    },
    {
      question: "What specialized services do you offer?",
      answer: "We offer a comprehensive range of specialized services including cardiology, neurology, orthopedics, oncology, pediatrics, obstetrics and gynecology, radiology, and emergency care. Each department is staffed with board-certified specialists."
    },
    {
      question: "Do you have emergency services?",
      answer: "Yes, our emergency department is open 24/7. For life-threatening emergencies, please call 911. Our emergency room is equipped to handle all types of medical emergencies with experienced staff and advanced equipment."
    },
    {
      question: "How can I pay my bill?",
      answer: "You can pay your bill online through our patient portal, by mail, by phone, or in person at our billing office. We accept major credit cards, checks, and cash payments. Payment plans are available for those who qualify."
    },
  ];

  return (
    <div className="pt-16 pb-16 bg-gray-50"> {/* padding to compensate for fixed header */}
      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, appointments, and policies.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question that's not answered above? Get in touch with us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm 
                title="Send Us a Message" 
                subtitle="Fill out the form below and our team will get back to you as soon as possible."
              />
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-blue-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Healthcare Blvd<br />
                        Medical City, MC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-blue-600 h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">
                        Main: +1 (555) 123-4567<br />
                        Appointments: +1 (555) 234-5678<br />
                        Emergency: +1 (555) 911-1234
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-blue-600 h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">
                        General Inquiries: info@medicare-hospital.com<br />
                        Appointments: appointments@medicare-hospital.com<br />
                        Billing: billing@medicare-hospital.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-blue-600 h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM<br />
                        Emergency Services: 24/7
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map (placeholder) */}
                <div className="mt-8 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Would Be Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQContactPage;