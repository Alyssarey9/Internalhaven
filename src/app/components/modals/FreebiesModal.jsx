'use client';

import { useState } from 'react';
import CalendlyButton from '../CalendlyButton';
import { submitFreebiesEmail } from '../../utils/freebies';
import { testSupabaseConnection } from '../../utils/test-supabase';

export default function FreebiesModal() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!fullName.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your full name');
      return;
    }

    if (!email.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const result = await submitFreebiesEmail(fullName, email);

    if (result.success) {
      setSubmitStatus('success');
      setFullName('');
      setEmail('');
    } else {
      setSubmitStatus('error');
      setErrorMessage(result.error);
    }

    setIsSubmitting(false);
  };

  const handleTestConnection = async () => {
    console.log('🧪 Testing Supabase connection...');
    const result = await testSupabaseConnection();
    console.log('🧪 Test result:', result);
    
    if (result.success) {
      alert('✅ Supabase connection test passed!');
    } else {
      alert(`❌ Supabase connection test failed: ${result.error}`);
    }
  };

  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">FREEBIES</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>

      <div className="text-cloud-gray font-coming-soon space-y-6">
        <div className="bg-gradient-to-r from-sage/10 to-sage/30 p-8 rounded-lg border border-sage/50">
          <p className="text-lg">Unlock your full potential with these 3 powerful life coaching tools that will help support your personal growth and cultivate more mindfulness into your daily habits and actions. Whether it's enhancing emotional intelligence or building a positive mindset, these tools are here to guide you on a journey of self-discovery and transformation. Explore them on my website and take the first step toward a more empowered, fulfilling life!</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-urbanist text-apricot">How to be Your Own Bestie</h4>
            <p>Unlock the secrets to building a loving, supportive relationship with yourself. This empowering coaching tool guides you through practical steps to boost self-love, nurture your inner dialogue, and show up for yourself like your own biggest cheerleader. It's time to embrace the best friend you already have, YOU!</p>
          </div>
          <div>
            <h4 className="text-xl font-urbanist text-apricot">Tips to Cultivate a Growth Mindset</h4>
            <p>Transform challenges into opportunities with this empowering coaching tool. Discover practical strategies to reframe setbacks, embrace lifelong learning, and unlock your potential. Build a mindset that thrives on growth and fuels your journey to success!</p>
          </div>
          <div>
            <h4 className="text-xl font-urbanist text-apricot">Emotion Self-Regulation Guide</h4>
            <p>Master your emotions with this transformative coaching tool. Learn simple, effective strategies to stay calm under pressure, navigate difficult feelings, and respond to life's challenges with confidence and clarity. Take control of your emotional well-being today!</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50">
            <h4 className="text-2xl font-urbanist text-cotton mb-4">Get Your FREE Life Coaching Tools!</h4>
            <p className="mb-6">Are YOU ready to take the next step toward your best self?</p>
            
            {submitStatus === 'success' ? (
              <div className="text-center p-6 bg-green-100 border border-green-300 rounded-lg">
                <h5 className="text-green-800 font-semibold mb-2">🎉 Thank you for subscribing!</h5>
                <p className="text-green-700 text-sm">Check your email for your FREE life coaching tools. We've sent you:</p>
                <ul className="text-green-700 text-sm mt-2 space-y-1">
                  <li>• How to Be Your Own Bestie Guide</li>
                  <li>• Tips to Cultivate a Growth Mindset</li>
                  <li>• Emotion Self-Regulation Technique</li>
                </ul>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-cotton mb-2">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-lavender/20 border border-amethyst/30 rounded-lg text-cotton focus:outline-none focus:border-apricot transition-colors placeholder-amethyst/60"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cotton mb-2">
                    Your Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-lavender/20 border border-amethyst/30 rounded-lg text-cotton focus:outline-none focus:border-apricot transition-colors placeholder-amethyst/60"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-midnight-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Me The FREE Tools!'
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="space-y-4">
            <p>With How to Be Your Own Bestie, you'll build a stronger foundation of self-love and inner support. Then, dive into Tips to Cultivate a Growth Mindset to open yourself up to new possibilities and embrace your full potential. Finally, the Emotion Self-Regulation Guide will equip you with practical tools to navigate life's emotional ups and downs with confidence and clarity.</p>
            <p className="font-semibold text-apricot flex justify-center">These tools are just the BEGINNING!</p>
            <p>Let's work together to create a life of peace, purpose, and self-empowerment. Ready to take the next step?</p>
            
            <div className="pt-2 flex justify-center">
              <CalendlyButton 
                text="Schedule Your FREE Clarity Call"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 