'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
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
            <span className="relative z-10">Start Here</span>
          </button>
          <button
            onClick={() => setActiveModal('work')}
            className="btn-secondary"
          >
            <span className="relative z-10">How I Help</span>
          </button>
          <button
            onClick={() => setActiveModal('about')}
            className="btn-secondary"
          >
            <span className="relative z-10">My Story</span>
          </button>
          <button
            onClick={() => setActiveModal('contact')}
            className="btn-primary"
          >
            <span className="relative z-10">Work With Me</span>
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
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-overlay">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-deep-plum/60 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-deep-plum text-cotton max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-modal-content">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-cotton/60 hover:text-apricot text-4xl transition-all duration-300 hover:scale-110 z-10"
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
  );
}

// Modal Components
function IntroModal() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">START HERE</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="mb-10">
        <Image
          src="/images/about-me_landscape_1.jpg"
          alt="Peaceful meditation moment"
          width={800}
          height={400}
          className="w-full h-80 object-cover rounded-lg shadow-2xl"
        />
      </div>

      <div className="space-y-6 text-cloud-gray text-lg leading-relaxed font-coming-soon">
        <p className="text-xl text-cotton font-medium">
          As a woman in her 20s to 40s, life can feel like a constant balancing act.
        </p>
        
        <p>
          We're navigating the pressures of career, relationships, and personal growth while trying to meet societal expectations 
          and care for those around us. It's easy to feel overwhelmed, stuck, or like we're never doing enough. Struggles with 
          self-doubt, perfectionism, and burnout may leave us wondering if true balance & fulfillment are even possible.
        </p>
        
        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-6 rounded-lg border-l-4 border-apricot">
          <p className="font-semibold text-apricot text-xl mb-3 font-urbanist">But what we truly long for...</p>
          <p>
            Is clarity and purpose — a sense of direction that aligns with who we truly are. We want to feel confident, 
            empowered, and at peace in our own skin. We dream of living authentically, with the freedom to prioritize our 
            needs without guilt. Above all, we're ready to reclaim our time, our health, & our energy to build a life that 
            feels meaningful and aligned with our values.
          </p>
        </div>

        <p>
          I'm here to help you move from feeling stuck and overwhelmed to confident and aligned. Together, we'll tackle the 
          doubts and habits holding you back and replace them with simple, powerful tools to bring clarity and balance to your life. 
          You'll learn how to manage stress, quiet self-doubt, and reconnect with what truly matters to you. Step by step, we'll 
          create a life that feels authentic, meaningful, and full of freedom.
        </p>
        
        <p className="text-xl text-apricot font-medium font-urbanist italic text-center py-4">
          "It's time to make yourself & your growth a priority."
        </p>

        <div className="mt-10 space-y-4">
          <button
            onClick={() => setShowNewsletterModal(true)}
            className="w-full btn-primary"
          >
            Get My Free Mindfulness Tools
          </button>
          <p className="text-center text-sm text-lavender">
            3 powerful tools to support your personal growth and cultivate mindfulness
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
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">MY COACHING APPROACH</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="mb-10">
        <Image
          src="/images/Me coaching Volleyball Smiling.JPG"
          alt="Coaching in action"
          width={800}
          height={400}
          className="w-full h-80 object-cover rounded-lg shadow-2xl"
        />
      </div>

      <div className="space-y-8 text-cloud-gray font-coming-soon">
        <p className="text-xl text-cotton font-medium leading-relaxed">
          I combine proven methodologies like Jay Shetty's ABC Framework with insights from Emotional Intelligence, 
          Positive Psychology, Mindfulness, and Neuroscience to help clients build self-awareness and emotional mastery.
        </p>

        <div className="bg-gradient-to-r from-amethyst/20 to-lavender/20 p-6 rounded-lg border border-amethyst/30">
          <h3 className="text-2xl font-bold mb-4 text-amethyst font-urbanist">My Mission</h3>
          <p>
            My mission is to empower and support women in embracing their natural curiosity about their mental and emotional processes, 
            deepening their self-understanding. By cultivating self-love, acceptance, and confidence, I help clients navigate life's 
            challenges with clarity and resilience, creating a life rooted in peace and purpose.
          </p>
        </div>

        <div className="bg-gradient-to-r from-sage/20 to-dusty-rose/20 p-6 rounded-lg border border-sage/30">
          <h3 className="text-2xl font-bold mb-4 text-sage font-urbanist">My Vision</h3>
          <p>
            My vision is to guide individuals toward greater self-awareness and mindfulness through my life coaching services 
            and authentic, everyday interactions with those around me. I strive to inspire people to integrate mindfulness into 
            their daily lives, unlocking their full potential to achieve meaningful goals and design a life they truly desire to live.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Using a unique emotion self-regulation technique, I guide clients to understand, process, and release emotions 
            that may be holding them back, empowering them to navigate challenges with calm and clarity.
          </p>
          
          <p className="text-lg leading-relaxed">
            Your journey would begin with a <span className="text-apricot font-semibold">FREE 45-minute discovery call</span>, 
            where we create a safe, judgment-free space to uncover roadblocks like fears and limiting beliefs. Together, we'll 
            map out a personalized path toward your goals, with motivation, accountability, and steady progress ensuring real transformation.
          </p>
        </div>

        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50 text-center">
          <h4 className="text-2xl font-bold mb-4 text-apricot font-urbanist">Ready to start your transformation?</h4>
          <p className="mb-6 text-lg">
            I combine proven methodologies with personalized support to help you build self-awareness, 
            emotional mastery, and create lasting change in your life.
          </p>
          <button className="btn-primary">
            Schedule Your FREE Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">MY STORY</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
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
        
        <div className="space-y-6 text-cloud-gray leading-relaxed font-coming-soon">
          <p className="text-xl text-cotton font-medium">
            Hi, I'm Alyssa Rey, a certified life coach, volleyball coach, and a passionate advocate for helping women like you build lives full of peace, freedom, and purpose.
          </p>
          
          <p>
            I've always felt a deep calling to create safe, authentic spaces where people can express themselves fully and confidently. 
            With grounded energy and easy-to-understand tools, I'm here to help you organize your life and navigate your emotions with clarity and mindfulness.
          </p>
          
          <p>
            Whether it's gaining confidence, finding balance, or simply making time for yourself, we'll work together to create meaningful shifts that last.
          </p>
          
          <div className="bg-gradient-to-r from-amethyst/20 to-lavender/20 p-6 rounded-lg border-l-4 border-amethyst">
            <p className="font-semibold text-amethyst mb-2 font-urbanist">My Personal Experience:</p>
            <p>
              Toward the beginning of 2023, I found myself trapped in a cycle of heavy emotions. As a highly sensitive person, 
              I felt everything deeply—frustration at being stuck in a job that didn't fulfill me, exhaustion from pouring my 
              energy into something I wasn't passionate about, and an overwhelming sense of urgency to pursue the things I truly cared about but never had time for.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6 text-cloud-gray font-coming-soon">
        <p>
          Every morning, I woke up carrying the same weight, knowing deep down that something needed to change. Then, I discovered 
          the Jay Shetty Certification School—or maybe it found me. This life coaching certification program became my safe space 
          to grow, reflect, and step into the person I was always meant to be.
        </p>

        <p>
          Today, I am no longer confined to a traditional 9-to-5 job. I have embraced my calling as a life coach, creating a career 
          and lifestyle that aligns with my true self. Whether coaching in life or volleyball, I now wake up each day with a renewed 
          sense of purpose, passion, and peace.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          <div className="text-center">
            <Image
              src="/images/Me reading Photo.jpg"
              alt="Volleyball coaching"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg h-32 w-32 object-cover"
            />
            <h4 className="font-semibold text-cotton font-urbanist">Volleyball Coach</h4>
            <p className="text-sm text-lavender">High School & Club Teams (40+ students)</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/Jay Shetty Certified Coach Photo.PNG"
              alt="Jay Shetty Certification"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg"
            />
            <h4 className="font-semibold text-cotton font-urbanist">Certified Life Coach</h4>
            <p className="text-sm text-lavender">Jay Shetty Certification School (2023)</p>
          </div>
          
          <div className="text-center">
            <Image
              src="/images/peaceful vibes with journal.JPEG"
              alt="Learning drums"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg h-32 w-32 object-cover"
            />
            <h4 className="font-semibold text-cotton font-urbanist">Lifelong Learner</h4>
            <p className="text-sm text-lavender">Drumming, expanding comfort zones</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sage/20 to-dusty-rose/20 p-6 rounded-lg border border-sage/30 mt-8">
          <p className="text-lg leading-relaxed">
            I earned my life coaching certification from the Jay Shetty Certification School in 2023. Since then, I have coached 
            some of my friends, peers, and family members through my unique and personalized services. I am also a high school 
            volleyball coach at my alma mater, Alonzo & Tracy Mourning Senior High, where I've been fortunate to bring my life 
            coaching skills to 40+ high school students, both girls and boys. I also coach a bundle of energetic 13-year-olds for 
            a volleyball club called Playeros based in Miami Beach, FL.
          </p>
        </div>

        <p>
          I'm always seeking to expand my comfort zone, which led me to learn how to play the drums in 2022. I draw inspiration 
          from the lessons nature offers and embrace being a student of life. Every day, I commit to bringing my best self to 
          every experience, whether that's coaching, learning, drumming, or connecting with others.
        </p>

        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50 text-center mt-10">
          <h4 className="text-2xl font-bold mb-4 text-apricot font-urbanist">I believe that every woman deserves to feel confident, capable, and at peace in her own life.</h4>
          <p className="text-lg mb-6">
            I've experienced firsthand what it means to step into alignment, and my mission is to help others do the same. 
            Through my coaching, I guide women to find clarity, confidence, and the freedom to create a life that truly resonates with them.
          </p>
          <button className="btn-primary">
            Schedule Your Free Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">WORK WITH ME</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="space-y-8 text-cloud-gray font-coming-soon">
        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50">
          <h3 className="text-3xl font-bold mb-6 text-apricot font-urbanist">One-on-One Life Coaching Sessions</h3>
          <p className="text-lg mb-4">
            In our personalized, one-on-one coaching relationship, I am dedicated to supporting you on your path to becoming the best version of yourself!
          </p>
          <p className="mb-4">
            Through empowerment and guidance, we work together to expand your self-awareness, foster deep self-love, and unlock the immense power that resides within you!
          </p>
          <p className="mb-6">
            The one-on-one coaching journey would begin with a <span className="text-apricot font-semibold">FREE discovery call</span>, where we focus on building a trusting, honest connection. I create a safe, non-judgmental space where you can be yourself, and we'll establish clear expectations to ensure our time together is effective and meaningful.
          </p>
          <p className="mb-6">
            Through thoughtful, open-ended questions, I help you gain deeper self-awareness and identify the roadblocks—like fears or limiting beliefs—that may hold you back from something that you are pursuing or want to pursue. Together, we'll explore new paths toward your goals while I provide guidance and encouragement every step of the way.
          </p>
          <p className="mb-6">
            The real transformation happens as you apply these insights to your daily life. With ongoing support, reflection, and accountability, you'll begin to see meaningful progress toward living a more fulfilled, purpose-driven life. Let's start this journey together!
          </p>
          <div className="text-center">
            <button className="btn-primary text-lg px-8 py-4">
              Schedule a FREE Discovery Call Now!
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sage/20 to-dusty-rose/20 p-8 rounded-lg border border-sage/30">
          <h3 className="text-3xl font-bold mb-6 text-sage font-urbanist">Free Mindfulness Tools</h3>
          <p className="text-lg mb-6">
            Unlock your full potential with these 3 powerful life coaching tools that will help support your personal growth and cultivate more mindfulness into your daily habits and actions. Whether it's enhancing emotional intelligence or building a positive mindset, these tools are here to guide you on a journey of self-discovery and transformation.
          </p>
          
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-amethyst/20 p-6 rounded-lg border border-amethyst/30">
              <h4 className="text-xl font-bold mb-3 text-amethyst font-urbanist">How to be Your Own Bestie</h4>
              <p className="text-sm">
                Unlock the secrets to building a loving, supportive relationship with yourself. This empowering coaching tool guides you through practical steps to boost self-love, nurture your inner dialogue, and show up for yourself like your own biggest cheerleader. It's time to embrace the best friend you already have—you!
              </p>
            </div>
            
            <div className="bg-lavender/20 p-6 rounded-lg border border-lavender/30">
              <h4 className="text-xl font-bold mb-3 text-lavender font-urbanist">Tips to Cultivate a Growth Mindset</h4>
              <p className="text-sm">
                Transform challenges into opportunities with this empowering coaching tool. Discover practical strategies to reframe setbacks, embrace lifelong learning, and unlock your potential. Build a mindset that thrives on growth and fuels your journey to success!
              </p>
            </div>
            
            <div className="bg-dusty-rose/20 p-6 rounded-lg border border-dusty-rose/30">
              <h4 className="text-xl font-bold mb-3 text-dusty-rose font-urbanist">Emotion Self-Regulation Guide</h4>
              <p className="text-sm">
                Master your emotions with this transformative coaching tool. Learn simple, effective strategies to stay calm under pressure, navigate difficult feelings, and respond to life's challenges with confidence and clarity. Take control of your emotional well-being today!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-deep-plum/20 to-amethyst/20 p-8 rounded-lg border border-deep-plum/30 text-center">
          <h4 className="text-2xl font-bold mb-4 text-cotton font-urbanist">Are YOU ready to take the next step toward your best self?</h4>
          <div className="text-left mb-6 space-y-2">
            <p>With 'How to Be Your Own Bestie', you'll strengthen your self-love and inner support system.</p>
            <p>Dive into 'Tips to Cultivate a Growth Mindset' to unlock new opportunities and embrace your full potential.</p>
            <p>And with the 'Emotion Self-Regulation Guide', you'll gain the tools to navigate life's emotional rollercoasters with confidence and clarity.</p>
          </div>
          <p className="text-xl font-semibold mb-4 text-apricot font-urbanist">These tools are just the BEGINNING!</p>
          <p className="mb-6">
            Let's work together to create a life of peace, purpose, and self-empowerment. Schedule your free discovery call today, and let's start your journey toward transformation!
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Schedule Your Free Discovery Call Today!
          </button>
        </div>
      </div>
    </div>
  );
}

// Newsletter Modal Component
function NewsletterModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-deep-plum/80" onClick={onClose} />
      <div className="relative bg-deep-plum p-8 rounded-xl max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cotton/60 hover:text-apricot text-2xl"
        >
          ×
        </button>
        
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-apricot to-sage rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-midnight-ink" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-cotton mb-2 font-urbanist">Get Your Free Mindfulness Tools!</h3>
            <p className="text-cloud-gray text-sm font-coming-soon">
              Enter your email and I'll send you 3 powerful tools to support your personal growth and cultivate mindfulness:
            </p>
          </div>
          
          <ul className="text-left text-sm text-cloud-gray mb-6 space-y-2 font-coming-soon">
            <li>✓ How to Be Your Own Bestie Guide</li>
            <li>✓ Tips to Cultivate a Growth Mindset</li>
            <li>✓ Emotion Self-Regulation Technique</li>
          </ul>
          
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your best email"
              className="w-full px-4 py-3 bg-lavender/20 border border-amethyst/30 rounded-lg text-cotton focus:outline-none focus:border-apricot transition-colors placeholder-amethyst/60"
            />
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Send Me The Tools
            </button>
          </form>
          
          <p className="text-xs text-lavender mt-4 font-coming-soon">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
