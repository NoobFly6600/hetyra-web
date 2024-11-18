import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PrivacyPage() {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash and scroll to that section
    if (location.hash === '#rules') {
      const rulesSection = document.getElementById('rules');
      if (rulesSection) {
        rulesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us when using our services.
          This may include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Your name and contact information</li>
          <li>Account credentials</li>
          <li>Communication preferences</li>
          <li>Usage data and interaction with our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the collected information to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Send important updates and notifications</li>
          <li>Ensure security and prevent fraud</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your
          personal information against unauthorized access, alteration, disclosure, or
          destruction.
        </p>
      </section>

      <section id="rules" className="mb-8 mt-12 pt-8 border-t">
        <h1 className="text-3xl font-bold mb-6">Rules Center</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General Rules</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Treat all users with respect and professionalism</li>
            <li>Maintain appropriate conduct during massage sessions</li>
            <li>Follow all local regulations and licensing requirements</li>
            <li>Adhere to scheduled appointment times</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Therapist Guidelines</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Maintain valid certification and insurance</li>
            <li>Follow hygiene and safety protocols</li>
            <li>Respect client boundaries and preferences</li>
            <li>Provide services as described in the booking</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Client Guidelines</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide accurate health information</li>
            <li>Cancel or reschedule with appropriate notice</li>
            <li>Maintain proper hygiene</li>
            <li>Communicate preferences clearly</li>
          </ul>
        </section>
      </section>
    </div>
  );
}

