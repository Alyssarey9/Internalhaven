'use client';

import Image from 'next/image';
import CalendlyButton from '../CalendlyButton';

export default function WorkModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">HOW I HELP: MY COACHING APPROACH</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="mb-10">
        <Image
          src="/images/about-me_landscape_1.jpg"
          alt="Coaching in action"
          width={800}
          height={400}
          className="w-full h-80 object-cover rounded-lg shadow-2xl"
        />
      </div>

      <div className="space-y-8 text-cloud-gray font-coming-soon">
        <p className="text-xl text-cotton font-medium leading-relaxed">
          My coaching approach blends practical tools with heart-centered guidance. I utilize proven methods, such as Jay Shetty’s ABC Framework, combined with principles from Emotional Intelligence, Positive Psychology, Mindfulness, and Neuroscience, to help clients develop self-awareness and emotional strength.
        </p>

        <div className="bg-gradient-to-r from-amethyst/20 to-lavender/20 p-6 rounded-lg border border-amethyst/30">
          <h3 className="text-2xl font-bold mb-4 text-amethyst font-urbanist">MY MISSION</h3>
          <p>My mission is to support and empower women as they reconnect with their natural curiosity about their thoughts and emotions. Through cultivating self-love, acceptance, and confidence, I help clients navigate life’s challenges with greater clarity and resilience, leading to a life grounded in peace and aligned with purpose.</p>
        </div>

        <div className="bg-gradient-to-r from-sage/20 to-dusty-rose/20 p-6 rounded-lg border border-sage/30">
          <h3 className="text-2xl font-bold mb-4 text-sage font-urbanist">MY VISION</h3>
          <p>My vision is to guide individuals in cultivating self-awareness and mindfulness, both through my life coaching services and through genuine, everyday interactions. By encouraging mindful and intentional living, I help others unlock their potential, reach meaningful goals, and create a life that feels authentic and fulfilling.</p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed">Through a unique technique for emotional self-regulation, I’ll support my clients in understanding and releasing the emotions that may be holding them back, so they can move forward with clarity, confidence, and peace of mind.</p>
          
          <p className="text-lg leading-relaxed">We will begin with a <span className="text-apricot font-semibold">FREE 45-minute clarity call</span>. This is a safe, supportive space where we’ll identify what’s standing in your way, like limiting beliefs, fear, or self-doubt, and outline a personalized path toward your goals, with motivation, accountability, and steady progress ensuring real transformation.</p>
        </div>

        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50 text-center">
          <h4 className="text-2xl font-bold mb-4 text-apricot font-urbanist">READY TO START YOUR TRANSFORMATION?</h4>
          <p className="mb-6 text-lg">I blend life coaching tools with personalized support to help you deepen self-awareness, master your emotions, and create meaningful, lasting change in your life</p>
          <CalendlyButton 
            text="Schedule Your FREE Discovery Call"
            size="large"
          />
        </div>
      </div>
    </div>
  );
} 