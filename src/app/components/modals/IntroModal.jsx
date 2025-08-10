'use client';

import { useState } from 'react';
import Image from 'next/image';
import CalendlyButton from '../CalendlyButton';

export default function IntroModal() {
  

  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">FIND YOUR HAVEN</h2>
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
          Could your inner haven be closer than you think?
        </p>
        <p>
          For many women today, life can feel like a constant balancing act, caught between what we want and what’s expected of us. We juggle career pressures, relationships, personal growth, and the needs of those around us, often leaving us overwhelmed, stuck, or feeling like we’re never quite enough. Self-doubt, perfectionism, and burnout can make true balance and fulfillment seem out of reach.
        </p>
        <p>
          What we really crave is clarity, purpose, and a deep sense of peace, a personal space where we feel confident, empowered, and free to live authentically. A place where prioritizing ourselves doesn’t come with guilt but with joy. We long to reclaim our time, our health, and our energy so we can build a life that truly reflects our values.
        </p>
        <p>
          I’m here to help you discover that haven within yourself. Together, we’ll gently untangle the doubts and habits holding you back and replace them with simple, effective tools to bring clarity, calm, and balance to your everyday life. Step by step, you’ll learn to manage stress, quiet the inner critic, and reconnect with what truly matters. Let’s create a life that feels authentic, meaningful, and filled with freedom. Your Internal Haven awaits.
        </p>

        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-6 rounded-lg border-l-4 border-apricot">
          <p className="font-semibold text-apricot text-xl mb-3 font-urbanist">MY PURPOSE</p>
          <p>
            I’m passionate about helping women connect with their inner wisdom by exploring their emotions and thought patterns. Through nurturing self-love, self-acceptance, and emotional intelligence, I support my clients in building lasting confidence and resilience, which leads to a more peaceful life.
          </p>
          <p className="mt-4">
            My coaching approach combines mindfulness practices, personal growth strategies, and a safe, supportive space where clients can overcome challenges, gain clarity, and make empowered choices. Together, we create a meaningful path toward a life filled with intention and purpose.
          </p>
        </div>

        <p className="text-3xl text-sage font-medium font-urbanist italic text-center py-4">
          It's time to make yourself & your growth a priority.
        </p>

        <div className="mt-10 flex justify-center">
          <CalendlyButton
            text="Schedule Your FREE Clarity Call"
            size="large"
          />
        </div>
      </div>

      
    </div>
  );
} 