'use client';

import { useState } from 'react';
import Image from 'next/image';
import ClickSpark from './components/ClickSpark';
import {
  IntroModal,
  WorkModal,
  AboutModal,
  ContactModal,
  FreebiesModal,
  ModalWrapper,
  RealReflectionsModal,
} from './components/modals';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <ClickSpark 
      sparkColor="#EFA986" 
      sparkSize={12}
      sparkRadius={25}
      sparkCount={10}
      duration={500}
      easing="ease-out"
    >
      <main className="relative min-h-screen overflow-hidden bg-cotton">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/background_10.jpg"
            alt="Peaceful mountain landscape"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 rounded-full border-2 border-cotton/50 flex items-center justify-center bg-lavender/20 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 hover:border-apricot">
            <Image
              src="/images/dragonfly.svg"
              alt="Internal Haven Dragonfly Logo"
              width={48}
              height={48}
              className="w-20 h-20 text-cotton"
            />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-16 max-w-4xl animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-urbanist text-cotton mb-8 tracking-widest animate-palette-glow">
            Internal Haven
          </h1>
          <p className="text-cotton/90 text-base md:text-lg tracking-wider leading-relaxed max-w-3xl mx-auto font-coming-soon">
            Stop feeling stuck, overwhelmed, and unsure of your next step. 
            <span className="block mt-2 text-apricot font-semibold">
              Discover your purpose, break through barriers, and create the fulfilling life you deserve.
            </span>
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up-delay">
          <button
            onClick={() => setActiveModal('intro')}
            className="btn-secondary"
          >
            <span className="relative z-10">FIND YOUR HAVEN</span>
          </button>
          <button
            onClick={() => setActiveModal('about')}
            className="btn-secondary"
          >
            <span className="relative z-10">My Story</span>
          </button>
          <button
            onClick={() => setActiveModal('work')}
            className="btn-secondary"
          >
            <span className="relative z-10">How I Help</span>
          </button>
          <button
            onClick={() => setActiveModal('contact')}
            className="btn-primary"
          >
            <span className="relative z-10">LET'S CONNECT</span>
          </button>
          <button
            onClick={() => setActiveModal('freebies')}
            className="btn-secondary"
          >
            <span className="relative z-10">FREEBIES</span>
          </button>
          <button
            onClick={() => setActiveModal('realreflections')}
            className="btn-secondary"
          >
            <span className="relative z-10">Real Reflections</span>
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in">
          <p className="text-cotton/60 text-xs tracking-wider uppercase font-coming-soon">
            © Internal Haven. Transform Your Life From Within.
          </p>
        </div>
        </div>

        {/* Modals */}
        <ModalWrapper isOpen={!!activeModal} onClose={closeModal}>
          {activeModal === 'intro' && <IntroModal />}
          {activeModal === 'work' && <WorkModal />}
          {activeModal === 'about' && <AboutModal />}
          {activeModal === 'contact' && <ContactModal />}
          {activeModal === 'freebies' && <FreebiesModal />}
          {activeModal === 'realreflections' && <RealReflectionsModal />}
        </ModalWrapper>

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
        
        .animate-modal-overlay {
          animation: modal-overlay 0.3s ease-out;
        }
        
        .animate-modal-content {
          animation: modal-content 0.4s ease-out;
        }
      `}</style>
      </main>
    </ClickSpark>
  );
}


