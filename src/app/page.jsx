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
          src="/images/sunset-river-view-stockcake-background.jpg"
          alt="Peaceful mountain landscape"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/50 to-gray-900/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/15 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 hover:border-white/70">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white"
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
        <div className="text-center mb-16 max-w-4xl animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-widest animate-glow">
            INTERNAL HAVEN
          </h1>
          <p className="text-white/90 text-base md:text-lg tracking-wider leading-relaxed uppercase max-w-3xl mx-auto">
            Stop feeling stuck, overwhelmed, and unsure of your next step. 
            <span className="block mt-2 text-yellow-300">
              Discover your purpose, break through barriers, and create the fulfilling life you deserve.
            </span>
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up-delay">
          <button
            onClick={() => setActiveModal('intro')}
            className="px-10 py-4 border-2 border-white/40 text-white text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500 backdrop-blur-md uppercase transform hover:scale-105 hover:shadow-2xl hover:border-white relative overflow-hidden group"
          >
            <span className="relative z-10">Start Here</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          <button
            onClick={() => setActiveModal('work')}
            className="px-10 py-4 border-2 border-white/40 text-white text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500 backdrop-blur-md uppercase transform hover:scale-105 hover:shadow-2xl hover:border-white relative overflow-hidden group"
          >
            <span className="relative z-10">How I Help</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          <button
            onClick={() => setActiveModal('about')}
            className="px-10 py-4 border-2 border-white/40 text-white text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500 backdrop-blur-md uppercase transform hover:scale-105 hover:shadow-2xl hover:border-white relative overflow-hidden group"
          >
            <span className="relative z-10">My Story</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          <button
            onClick={() => setActiveModal('contact')}
            className="px-10 py-4 border-2 border-yellow-400/70 text-yellow-300 text-sm tracking-widest hover:bg-yellow-400 hover:text-gray-900 transition-all duration-500 backdrop-blur-md uppercase transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 relative overflow-hidden group font-semibold"
          >
            <span className="relative z-10">Work With Me</span>
            <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in">
          <p className="text-white/50 text-xs tracking-wider uppercase">
            © Internal Haven. Transform Your Life From Within.
          </p>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-overlay">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/90 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-gray-900/95 backdrop-blur-xl text-white max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-white/10 animate-modal-content">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-4xl transition-all duration-300 hover:scale-110 z-10"
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

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6); }
        }
        
        @keyframes modal-overlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modal-content {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-modal-overlay {
          animation: modal-overlay 0.3s ease-out;
        }
        
        .animate-modal-content {
          animation: modal-content 0.4s ease-out;
        }
      `}</style>
    </main>
  );
}

// Modal Components
function IntroModal() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest">START HERE</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-white mb-10"></div>
      
      <div className="mb-10">
        <Image
          src="/images/Me meditating photo.jpg"
          alt="Peaceful meditation moment"
          width={800}
          height={400}
          className="w-full h-80 object-cover rounded-lg shadow-2xl"
        />
      </div>

      <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
        <p className="text-xl text-white font-medium">
          Are you tired of feeling stuck, going through the motions, wondering "Is this it?"
        </p>
        
        <p>
          You're successful on paper, but something's missing. You wake up feeling empty, going through the same routine, 
          knowing there's more to life but not knowing how to find it. The worst part? Everyone thinks you "have it all together" 
          when inside you're questioning everything.
        </p>
        
        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-6 rounded-lg border-l-4 border-yellow-400">
          <p className="font-semibold text-yellow-300 text-xl mb-3">What if I told you...</p>
          <p>
            You're closer to your breakthrough than you think. That restless feeling? It's your soul calling you toward your purpose. 
            The confusion? It's because you've been following someone else's blueprint for success instead of creating your own.
          </p>
        </div>

        <p>
          I help high-achievers like you break free from the "should be happy" trap and design a life that actually fulfills you. 
          No more pretending everything's fine. No more settling for "good enough."
        </p>

        <div className="mt-10 space-y-4">
          <button
            onClick={() => setShowNewsletterModal(true)}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl uppercase tracking-wider"
          >
            Get My Free "Life Audit" Tool
          </button>
          <p className="text-center text-sm text-gray-400">
            Discover exactly where you're stuck and your next steps forward (5-minute assessment)
          </p>
        </div>
      </div>

      {/* Newsletter Modal */}
      {showNewsletterModal && <NewsletterModal onClose={() => setShowNewsletterModal(false)} />}
    </div>
  );
}

function WorkModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest">HOW I HELP</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-white mb-10"></div>
      
      <div className="mb-10">
        <Image
          src="/images/Me coaching Volleyball Smiling.JPG"
          alt="Coaching in action"
          width={800}
          height={400}
          className="w-full h-80 object-cover rounded-lg shadow-2xl"
        />
      </div>

      <div className="space-y-8 text-gray-200">
        <p className="text-xl text-white font-medium leading-relaxed">
          I don't believe in one-size-fits-all solutions. Your journey is unique, and your transformation should be too.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-400/30">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Purpose Discovery</h3>
            <p className="mb-4">
              Stop guessing what you're "supposed" to do. Uncover your authentic purpose using proven frameworks 
              that cut through the noise and get to your core.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Values clarification exercises</li>
              <li>• Strengths identification</li>
              <li>• Life vision mapping</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 p-8 rounded-xl border border-green-400/30">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Breakthrough Barriers</h3>
            <p className="mb-4">
              Identify and dissolve the invisible walls keeping you stuck. Transform limiting beliefs into 
              empowering truths that propel you forward.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Limiting belief rewiring</li>
              <li>• Fear transformation techniques</li>
              <li>• Confidence building strategies</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-8 rounded-xl border border-orange-400/30">
            <h3 className="text-2xl font-bold mb-4 text-orange-300">Strategic Action</h3>
            <p className="mb-4">
              Bridge the gap between where you are and where you want to be with clear, actionable steps 
              tailored to your unique situation.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Custom action plans</li>
              <li>• Accountability systems</li>
              <li>• Progress tracking tools</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Lasting Transformation</h3>
            <p className="mb-4">
              Create sustainable change that sticks. Build new habits and mindsets that support 
              your growth long after our work together ends.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Habit formation strategies</li>
              <li>• Mindset optimization</li>
              <li>• Support system building</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-8 rounded-lg border border-yellow-400/50 text-center">
          <h4 className="text-2xl font-bold mb-4 text-yellow-300">Ready to stop settling?</h4>
          <p className="mb-6 text-lg">
            Book a free 30-minute clarity call where we'll identify your biggest obstacle 
            and create a roadmap to overcome it.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wider">
            Book Your Free Call
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest">MY STORY</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-white mb-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Image
            src="/images/Headshot of Me for About Me Page.jpg"
            alt="Personal headshot"
            width={500}
            height={600}
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="space-y-6 text-gray-200 leading-relaxed">
          <p className="text-xl text-white font-medium">
            I used to be the poster child for "having it all together."
          </p>
          
          <p>
            From the outside, my life looked perfect. Successful career, checking all the boxes society told me would make me happy. 
            But inside, I felt empty, disconnected, and constantly asking "Is this really it?"
          </p>
          
          <p>
            The breaking point came when I realized I was living someone else's definition of success. 
            I had climbed the ladder only to discover it was leaning against the wrong wall.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-300 mb-2">The moment everything changed:</p>
            <p>
              I stopped asking "What should I do?" and started asking "Who am I really, and what do I actually want?" 
              That shift in perspective changed everything.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6 text-gray-200">
        <p>
          Today, I wake up excited about my life. I've built a business I love, relationships that fulfill me, 
          and most importantly, I know who I am and what I stand for. But it wasn't luck or chance—it was a process.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="text-center">
            <Image
              src="/images/Jay Shetty Certified Coach Photo.PNG"
              alt="Certification"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg"
            />
            <h4 className="font-semibold text-white">Certified Life Coach</h4>
            <p className="text-sm text-gray-400">Jay Shetty Certification School</p>
          </div>
          
          <div className="text-center">
            <Image
              src="/images/Me reading Photo.jpg"
              alt="Continuous learning"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg h-32 w-32 object-cover"
            />
            <h4 className="font-semibold text-white">Continuous Learner</h4>
            <p className="text-sm text-gray-400">Always growing, always evolving</p>
          </div>
          
          <div className="text-center">
            <Image
              src="/images/peaceful vibes with journal.JPEG"
              alt="Daily practice"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg h-32 w-32 object-cover"
            />
            <h4 className="font-semibold text-white">Daily Practitioner</h4>
            <p className="text-sm text-gray-400">Walking the walk, not just talking</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-8 rounded-lg border border-yellow-400/50 text-center mt-10">
          <h4 className="text-2xl font-bold mb-4 text-yellow-300">My Mission</h4>
          <p className="text-lg mb-6">
            To help you stop living someone else's life and start creating the one that's truly yours. 
            Because you deserve more than just getting by—you deserve to thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest">WORK WITH ME</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-white mb-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-200">
          <p className="text-xl text-white font-medium">
            Ready to stop settling and start thriving?
          </p>
          
          <p>
            If you're tired of feeling stuck and ready to create real change, I'm here to guide you. 
            This isn't about quick fixes or surface-level changes—this is about deep, lasting transformation.
          </p>

          <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-6 rounded-lg border border-green-400/30">
            <h4 className="text-xl font-bold mb-3 text-green-300">Perfect for you if:</h4>
            <ul className="space-y-2">
              <li>• You're successful but unfulfilled</li>
              <li>• You know there's more to life but don't know how to find it</li>
              <li>• You're ready to do the work (not looking for magic pills)</li>
              <li>• You want authentic transformation, not just temporary motivation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 p-6 rounded-lg border border-red-400/30">
            <h4 className="text-xl font-bold mb-3 text-red-300">Not for you if:</h4>
            <ul className="space-y-2">
              <li>• You're looking for someone to fix your problems for you</li>
              <li>• You want quick fixes without putting in effort</li>
              <li>• You're not ready to challenge your current beliefs</li>
              <li>• You prefer complaining to taking action</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-8 rounded-lg border border-yellow-400/50 text-center">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Free Clarity Call</h4>
            <p className="mb-6">
              30 minutes to identify your biggest obstacle and create a clear path forward. 
              No sales pitch, just value.
            </p>
            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wider">
              Book Now
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-300">
                Name *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400/50 transition-colors text-white"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-300">
                Email *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400/50 transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-300">
                What's your biggest challenge right now? *
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400/50 transition-colors resize-none text-white"
                placeholder="Be specific - this helps me prepare for our call..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium tracking-wider uppercase hover:from-blue-500 hover:to-purple-500 transition-all duration-300 rounded-lg transform hover:scale-105 shadow-xl"
            >
              Send Message
            </button>
          </form>

          <div className="text-center text-sm text-gray-400">
            <p>Usually respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Newsletter Modal Component
function NewsletterModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl max-w-md w-full border border-yellow-400/30 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>
        
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Tools!</h3>
            <p className="text-gray-300 text-sm">
              Enter your email and I'll send you the Life Audit Tool plus 2 bonus resources:
            </p>
          </div>
          
          <ul className="text-left text-sm text-gray-300 mb-6 space-y-2">
            <li>✓ Life Audit Assessment (5 min)</li>
            <li>✓ Values Clarification Worksheet</li>
            <li>✓ Purpose Discovery Guide</li>
          </ul>
          
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your best email"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 uppercase tracking-wider"
            >
              Send Me The Tools
            </button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}