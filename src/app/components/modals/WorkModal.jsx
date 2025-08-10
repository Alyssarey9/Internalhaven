'use client';

import Image from 'next/image';
import CalendlyButton from '../CalendlyButton';

export default function WorkModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">MY COACHING APPROACH</h2>
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
          <CalendlyButton 
            text="Schedule Your FREE Discovery Call"
            size="large"
          />
        </div>
      </div>
    </div>
  );
} 