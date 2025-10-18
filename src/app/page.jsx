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
        <div className="mb-8 animate-fade-in dragonfly-container">
          <div className="w-24 h-24 rounded-full border-2 border-cotton/50 flex items-center justify-center bg-lavender/20 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 hover:border-apricot">
            <Image
              src="/images/dragonfly.svg"
              alt="Internal Haven Dragonfly Logo"
              width={48}
              height={48}
              className="w-20 h-20 text-cotton dragonfly-wings"
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
        
        /* Dragonfly flight path animation - Figure 8 pattern */
        @keyframes dragonfly-flight {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          /* Right loop - going up */
          12.5% {
            transform: translate(120px, -80px) rotate(45deg) scale(1.05);
          }
          /* Top of right loop */
          25% {
            transform: translate(180px, -120px) rotate(90deg) scale(1.1);
          }
          /* Right loop - coming down */
          37.5% {
            transform: translate(120px, -80px) rotate(135deg) scale(1.05);
          }
          /* Center crossing point */
          50% {
            transform: translate(0, 0) rotate(180deg) scale(1);
          }
          /* Left loop - going down */
          62.5% {
            transform: translate(-120px, 80px) rotate(225deg) scale(1.05);
          }
          /* Bottom of left loop */
          75% {
            transform: translate(-180px, 120px) rotate(270deg) scale(1.1);
          }
          /* Left loop - coming up */
          87.5% {
            transform: translate(-120px, 80px) rotate(315deg) scale(1.05);
          }
          /* Return to center */
          100% {
            transform: translate(0, 0) rotate(360deg) scale(1);
          }
        }
        
        /* Wing flapping animation - more realistic */
        @keyframes wing-flap {
          0% {
            transform: rotateY(0deg) scaleX(1);
            filter: brightness(1);
          }
          25% {
            transform: rotateY(-15deg) scaleX(0.9);
            filter: brightness(1.1);
          }
          50% {
            transform: rotateY(-25deg) scaleX(0.75);
            filter: brightness(1.2);
          }
          75% {
            transform: rotateY(-15deg) scaleX(0.9);
            filter: brightness(1.1);
          }
          100% {
            transform: rotateY(0deg) scaleX(1);
            filter: brightness(1);
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
        
        /* Apply dragonfly animations */
        .dragonfly-container {
          animation: dragonfly-flight 16s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          animation-delay: 2s;
          will-change: transform;
        }
        
        .dragonfly-wings {
          animation: wing-flap 0.2s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        
        /* Pause animation on hover */
        .dragonfly-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      </main>
    </ClickSpark>
  );
}


