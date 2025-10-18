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
    <div className="p-4 sm:p-8 md:p-12 lg:p-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-widest font-urbanist text-cotton">FREEBIES</h2>
      <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-6 sm:mb-8 md:mb-10"></div>

      <div className="text-cloud-gray font-coming-soon space-y-4 sm:space-y-6">
        <div className="bg-gradient-to-r from-sage/10 to-sage/30 p-4 sm:p-6 md:p-8 rounded-lg border border-sage/50">
          <h4 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-urbanist text-apricot">Curious About Life Coaching? Start Here!</h4>
          <p className="text-base sm:text-lg">If life coaching is new to you, it&apos;s natural to wonder how it works and how it might support your personal growth and well-being. At its core, life coaching is a supportive, personalized process that helps you gain clarity, navigate challenges, and make meaningful changes that align with what matters most to you.</p>
          <p className="text-base sm:text-lg pt-3 sm:pt-4">To gently guide you in getting started, I&apos;ve created a FREE Intro to Life Coaching Workbook. This simple, easy-to-use guide explains the key principles of life coaching and includes practical exercises to help you begin exploring your own path to growth and self-understanding.
          </p>
          <p className="text-base sm:text-lg pt-3 sm:pt-4">Just share your name and email to receive the workbook and take your first step toward building the life you truly want.</p>

          {submitStatus === 'success' ? (
              <div className="text-center p-6 bg-green-100 border border-green-300 rounded-lg">
                <h5 className="text-green-800 font-semibold mb-2">🎉 Thank you for subscribing!</h5>
                <p className="text-green-700 text-sm">Check your email for your FREE life coaching tools. We've sent you:</p>
                <ul className="text-green-700 text-sm mt-2 space-y-1">
                  <li>• Curious About Life Coaching? Start Here!</li>
                  <li>• Your Mindfulness Starter Kit</li>
                  <li>• How to Be Your Own Bestie Guide</li>
                  <li>• Tips to Cultivate a Growth Mindset</li>
                  <li>• Emotion Self-Regulation Technique</li>
                </ul>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 md:pt-8">
                <div>
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-cotton mb-1 sm:mb-2">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-lavender/20 border border-amethyst/30 rounded-lg text-cotton focus:outline-none focus:border-apricot transition-colors placeholder-amethyst/60 text-sm sm:text-base"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-cotton mb-1 sm:mb-2">
                    Your Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-lavender/20 border border-amethyst/30 rounded-lg text-cotton focus:outline-none focus:border-apricot transition-colors placeholder-amethyst/60 text-sm sm:text-base"
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

        <div className="space-y-3 sm:space-y-4">
          <div>
            <h4 className="text-base sm:text-lg md:text-xl mb-2 font-urbanist text-apricot">Your Mindfulness Starter Kit</h4>
            <p className="text-sm sm:text-base md:text-lg">Unlock your full potential with these 3 powerful life coaching tools that will help support your personal growth and cultivate more mindfulness into your daily habits and actions. Whether it's enhancing emotional intelligence or building a positive mindset, these tools are here to guide you on a journey of self-discovery and transformation. Explore them on my website and take the first step toward a more empowered, fulfilling life!</p>
          </div>
          <div>
            <h5 className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2 font-urbanist text-sage">How to be Your Own Bestie</h5>
            <p className="text-sm sm:text-base">Unlock the secrets to building a loving, supportive relationship with yourself. This empowering coaching tool guides you through practical steps to boost self-love, nurture your inner dialogue, and show up for yourself like your own biggest cheerleader. It's time to embrace the best friend you already have, YOU!</p>
          </div>
          <div>
            <h5 className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2 font-urbanist text-sage">Tips to Cultivate a Growth Mindset</h5>
            <p className="text-sm sm:text-base">Transform challenges into opportunities with this empowering coaching tool. Discover practical strategies to reframe setbacks, embrace lifelong learning, and unlock your potential. Build a mindset that thrives on growth and fuels your journey to success!</p>
          </div>
          <div>
            <h5 className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2 font-urbanist text-sage">Emotion Self-Regulation Guide</h5>
            <p className="text-sm sm:text-base">Master your emotions with this transformative coaching tool. Learn simple, effective strategies to stay calm under pressure, navigate difficult feelings, and respond to life's challenges with confidence and clarity. Take control of your emotional well-being today!</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
         
          
          <div className="space-y-3 sm:space-y-4">
            <p className="pb-3 sm:pb-4 text-sm sm:text-base">With How to Be Your Own Bestie, you'll build a stronger foundation of self-love and inner support. Then, dive into Tips to Cultivate a Growth Mindset to open yourself up to new possibilities and embrace your full potential. Finally, the Emotion Self-Regulation Guide will equip you with practical tools to navigate life's emotional ups and downs with confidence and clarity.</p>
            <p className="font-semibold text-apricot flex justify-center text-sm sm:text-base">These tools are just the BEGINNING!</p>
            <p className="text-sm sm:text-base">Let's work together to create a life of peace, purpose, and self-empowerment. Ready to take the next step?</p>
            
            <div className="pt-1 sm:pt-2 flex justify-center">
              <CalendlyButton 
                text="Schedule Your FREE Clarity Call"
                size="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 