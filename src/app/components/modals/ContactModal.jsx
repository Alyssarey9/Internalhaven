'use client';

import CalendlyButton from '../CalendlyButton';

export default function ContactModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">Lets Connect</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="space-y-8 text-cloud-gray font-coming-soon">
        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50">
          <h3 className="text-3xl font-bold mb-6 text-apricot font-urbanist">One-on-One Life Coaching Sessions</h3>
          <p className="text-lg mb-4">In our personalized, one-on-one coaching relationship, I am dedicated to supporting you on your path to becoming the best version of yourself! Through empowerment and guidance, we work together to expand your self-awareness, foster deep self-love, and unlock the immense power that resides within you!</p>
          <p className="mb-6">The one-on-one coaching journey will begin with a <span className="text-apricot font-semibold">FREE clarity call</span>, where we focus on building a trusting, honest connection. I create a safe, non-judgmental space where you can be yourself. We will establish clear expectations to ensure our time together is effective and meaningful.</p>
          <p className="mb-6">In our work together, I’ll guide you through open, reflective questions that help you better understand yourself and what might be holding you back, whether it’s fear, self-doubt, or old patterns. With compassion and steady support, we’ll uncover what’s truly important to you and explore new, meaningful steps toward the life you’re ready to create.</p>
          <p className="mb-6">Real transformation happens when you start applying these insights to your everyday life. With continued support, reflection, and accountability, you’ll begin to make meaningful progress toward a life filled with purpose, clarity, and fulfillment. I’m here to walk alongside you, because you don’t have to do this alone.</p>
          <p className="mb-6">
          Whether you’re exploring life coaching for the first time or looking to deepen your personal growth journey, your questions are always welcome here. I believe that connection begins with curiosity. If there’s something you’d like to know about my coaching approach, services, or how we can work together, click the button below to send me a message. I’ll get back to you as soon as possible with the guidance you need.

          </p>
          <div className="text-center">
            <CalendlyButton 
              text="Schedule a FREE Clarity Call Now!"
              size="large"
            />
            
            <div className="mt-6 pt-6 border-t border-apricot/30">
              <p className="text-sm text-apricot mb-3">Or send me a message directly:</p>
              <a 
                href="mailto:alyssa@internalhaven.com?subject=Life Coaching Inquiry&body=Hi Alyssa,%0D%0A%0D%0AI'm interested in learning more about your life coaching services.%0D%0A%0D%0A[Please share your message here]"
                className="inline-flex items-center justify-center px-6 py-3 bg-apricot/20 hover:bg-apricot/30 text-apricot font-medium rounded-lg transition-colors duration-200 border border-apricot/40"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 