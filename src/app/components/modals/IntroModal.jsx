'use client';

import { useState } from 'react';
import Image from 'next/image';
import NewsletterModal from './NewsletterModal';

export default function IntroModal() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">START HERE</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="mb-10">
        <Image
          src="/images/background_17.png"
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