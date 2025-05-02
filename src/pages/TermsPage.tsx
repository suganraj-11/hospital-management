import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-50"> {/* padding to compensate for fixed header */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
          
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <div className="prose prose-blue max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to MediCare Hospital's website. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use MediCare Hospital's website if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, MediCare Hospital and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
            </p>
            <p>
              You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website</li>
              <li>Redistribute content from this website (unless content is specifically made for redistribution)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. User Responsibilities</h2>
            <p>
              As a user of our website and services, you are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing accurate personal information during registration</li>
              <li>Maintaining the confidentiality of your account information</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring that information shared on our platforms is accurate and lawful</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Medical Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only and should not be considered as medical advice. Always consult with a qualified healthcare provider for specific medical concerns.
            </p>
            <p>
              In case of a medical emergency, please contact emergency services immediately or visit the nearest emergency room.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Online Appointment Booking</h2>
            <p>
              Our online appointment booking system is provided as a convenience to our patients. By using this service, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate information when scheduling appointments</li>
              <li>Give at least 24 hours notice for cancellations or rescheduling</li>
              <li>Arrive on time for scheduled appointments</li>
              <li>Follow any pre-appointment instructions provided</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Privacy Policy</h2>
            <p>
              We are committed to protecting your privacy. Our Privacy Policy, which is incorporated into these Terms and Conditions, explains how we collect, use, and safeguard your information.
            </p>
            <p>
              By using our website and services, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, MediCare Hospital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your access to or use of or inability to access or use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Governing Law</h2>
            <p>
              These terms shall be governed and construed in accordance with the laws applicable in our jurisdiction, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="font-medium">
              MediCare Hospital<br />
              123 Healthcare Blvd<br />
              Medical City, MC 12345<br />
              Email: legal@medicare-hospital.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;