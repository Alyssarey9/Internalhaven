'use client';

import CalendlyButton from '../CalendlyButton';

export default function ContactModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">PROFESSIONAL LIFE COACHING SERVICES</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="space-y-8 text-cloud-gray font-coming-soon">
        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50">
          <h3 className="text-3xl font-bold mb-6 text-apricot font-urbanist">One-on-One Life Coaching Sessions</h3>
          <p className="text-lg mb-4">In our personalized, one-on-one coaching relationship, I am dedicated to supporting you on your path to becoming the best version of yourself! Through empowerment and guidance, we work together to expand your self-awareness, foster deep self-love, and unlock the immense power that resides within you!</p>
          <p className="mb-6">The one-on-one coaching journey will begin with a <span className="text-apricot font-semibold">FREE clarity call</span>, where we focus on building a trusting, honest connection. I create a safe, non-judgmental space where you can be yourself. We will establish clear expectations to ensure our time together is effective and meaningful.</p>
          <p className="mb-6">In our work together, I’ll guide you through open, reflective questions that help you better understand yourself and what might be holding you back, whether it’s fear, self-doubt, or old patterns. With compassion and steady support, we’ll uncover what’s truly important to you and explore new, meaningful steps toward the life you’re ready to create.</p>
          <p className="mb-6">Real transformation happens when you start applying these insights to your everyday life. With continued support, reflection, and accountability, you’ll begin to make meaningful progress toward a life filled with purpose, clarity, and fulfillment. I’m here to walk alongside you, because you don’t have to do this alone.</p>
          <div className="text-center">
            <CalendlyButton 
              text="Schedule a FREE Clarity Call Now!"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 