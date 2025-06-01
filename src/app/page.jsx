'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/40 to-gray-900/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-16 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-widest">
            INTERNAL HAVEN
          </h1>
          <p className="text-white/80 text-sm md:text-base tracking-wider leading-relaxed uppercase">
            A Professional Life Coaching Service to Help You Navigate Life's Challenges, 
            Discover Your Purpose, and Achieve Your Goals.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveModal('intro')}
            className="px-8 py-3 border border-white/30 text-white text-sm tracking-widest 
                     hover:bg-white hover:text-gray-900 transition-all duration-300 
                     backdrop-blur-sm uppercase"
          >
            Intro
          </button>
          <button
            onClick={() => setActiveModal('work')}
            className="px-8 py-3 border border-white/30 text-white text-sm tracking-widest 
                     hover:bg-white hover:text-gray-900 transition-all duration-300 
                     backdrop-blur-sm uppercase"
          >
            Services
          </button>
          <button
            onClick={() => setActiveModal('about')}
            className="px-8 py-3 border border-white/30 text-white text-sm tracking-widest 
                     hover:bg-white hover:text-gray-900 transition-all duration-300 
                     backdrop-blur-sm uppercase"
          >
            About
          </button>
          <button
            onClick={() => setActiveModal('contact')}
            className="px-8 py-3 border border-white/30 text-white text-sm tracking-widest 
                     hover:bg-white hover:text-gray-900 transition-all duration-300 
                     backdrop-blur-sm uppercase"
          >
            Contact
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/50 text-xs tracking-wider uppercase">
            © Internal Haven. Design: Dimension
          </p>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-gray-900/95 backdrop-blur-md text-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl"
            >
              ×
            </button>

            {/* Modal Content Based on Active Modal */}
            {activeModal === 'intro' && <IntroModal />}
            {activeModal === 'work' && <WorkModal />}
            {activeModal === 'about' && <AboutModal />}
            {activeModal === 'contact' && <ContactModal />}
          </div>
        </div>
      )}
    </main>
  );
}

// Modal Components
function IntroModal() {
  return (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-4 tracking-widest">INTRO</h2>
      <div className="w-24 h-1 bg-white mb-8"></div>
      
      <div className="mb-8">
        <Image
          src="/pic01.jpg"
          alt="Life Coaching"
          width={600}
          height={300}
          className="w-full h-64 object-cover rounded"
        />
      </div>

      <div className="space-y-4 text-gray-300">
        <p>
          Welcome to Internal Haven, where transformation begins from within. Our professional 
          life coaching services are designed to help you navigate life's challenges, discover 
          your true purpose, and achieve lasting personal and professional growth.
        </p>
        <p>
          We believe that everyone has the potential for greatness within them. Sometimes, 
          all it takes is the right guidance, support, and tools to unlock that potential. 
          Our coaching approach is holistic, addressing all aspects of your life to create 
          sustainable change and meaningful results.
        </p>
        <p>
          Whether you're seeking career advancement, personal growth, better relationships, 
          or simply a more balanced life, we're here to support you on your journey. 
          Let's work together to create the life you've always envisioned.
        </p>
      </div>
    </div>
  );
}

function WorkModal() {
  return (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-4 tracking-widest">SERVICES</h2>
      <div className="w-24 h-1 bg-white mb-8"></div>
      
      <div className="mb-8">
        <Image
          src="/pic02.jpg"
          alt="Our Services"
          width={600}
          height={300}
          className="w-full h-64 object-cover rounded"
        />
      </div>

      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Personal Growth Coaching</h3>
          <p>
            Discover your authentic self and develop strategies to overcome limiting beliefs. 
            We'll work together to identify your core values, strengths, and areas for growth.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Career Advancement</h3>
          <p>
            Navigate career transitions and achieve your professional goals with confidence. 
            From career pivots to leadership development, we'll create a roadmap for success.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Relationship Building</h3>
          <p>
            Develop healthy communication skills and strengthen your personal and professional 
            relationships. Learn to set boundaries and build meaningful connections.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Life Balance</h3>
          <p>
            Create harmony between your personal and professional life for greater fulfillment 
            and well-being. Discover strategies for managing stress and maintaining balance.
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutModal() {
  return (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-4 tracking-widest">ABOUT</h2>
      <div className="w-24 h-1 bg-white mb-8"></div>
      
      <div className="mb-8">
        <Image
          src="/pic03.jpg"
          alt="About Us"
          width={600}
          height={300}
          className="w-full h-64 object-cover rounded"
        />
      </div>

      <div className="space-y-4 text-gray-300">
        <h3 className="text-xl font-semibold text-white">Our Philosophy</h3>
        <p>
          At Internal Haven, we believe that everyone has the potential for growth and 
          transformation. Our coaching approach is based on the principle that with the 
          right guidance and support, individuals can overcome obstacles, discover their 
          true purpose, and lead more fulfilling lives.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6">Our Story</h3>
        <p>
          Internal Haven was founded with a simple mission: to help individuals navigate 
          life's challenges and discover their true potential. What began as a small 
          coaching practice has grown into a comprehensive life coaching service that 
          has helped hundreds of clients transform their lives.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6">Our Values</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Authenticity - Being genuine in all interactions</li>
          <li>Empowerment - Providing tools for lasting change</li>
          <li>Growth - Embracing continuous development</li>
          <li>Compassion - Creating safe spaces for vulnerability</li>
          <li>Balance - Promoting harmony in all aspects of life</li>
          <li>Integrity - Upholding the highest ethical standards</li>
        </ul>
      </div>
    </div>
  );
}

function ContactModal() {
  return (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-4 tracking-widest">CONTACT</h2>
      <div className="w-24 h-1 bg-white mb-8"></div>
      
      <div className="space-y-4 text-gray-300">
        <p>
          Ready to begin your transformation journey? We'd love to hear from you. 
          Reach out to schedule your free consultation and take the first step 
          toward creating the life you deserve.
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded 
                       focus:outline-none focus:border-white/50 transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded 
                       focus:outline-none focus:border-white/50 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded 
                       focus:outline-none focus:border-white/50 transition-colors resize-none"
              placeholder="Tell us about your goals..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-gray-900 font-medium tracking-wider 
                     uppercase hover:bg-gray-200 transition-colors rounded"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="space-y-2 text-sm">
            <p>Email: contact@internalhaven.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Location: Your City, State</p>
          </div>
        </div>
      </div>
    </div>
  );
}