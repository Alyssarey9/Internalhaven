'use client';

export default function FreebiesModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">FREEBIES</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>

      <div className="text-cloud-gray font-coming-soon space-y-6">
        <h3 className="text-2xl font-urbanist text-cotton">FREE DOWNLOADS: MINDFULNESS TOOLS</h3>
        <p>Unlock your full potential with these 3 powerful life coaching tools that will help support your personal growth and cultivate more mindfulness into your daily habits and actions. Whether it’s enhancing emotional intelligence or building a positive mindset, these tools are here to guide you on a journey of self-discovery and transformation. Explore them on my website and take the first step toward a more empowered, fulfilling life!</p>

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
            <p>Master your emotions with this transformative coaching tool. Learn simple, effective strategies to stay calm under pressure, navigate difficult feelings, and respond to life’s challenges with confidence and clarity. Take control of your emotional well-being today!</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-urbanist text-cotton">CALL TO ACTION: Schedule a FREE Clarity Call with Me!</h4>
          <p>Are YOU ready to take the next step toward your best self?</p>
          <p>With How to Be Your Own Bestie, you’ll build a stronger foundation of self-love and inner support. Then, dive into Tips to Cultivate a Growth Mindset to open yourself up to new possibilities and embrace your full potential. Finally, the Emotion Self-Regulation Guide will equip you with practical tools to navigate life’s emotional ups and downs with confidence and clarity.</p>
          <p className="font-semibold text-apricot">These tools are just the BEGINNING!</p>
          <p>Let’s work together to create a life of peace, purpose, and self-empowerment. Schedule your free discovery call today, and let’s start your journey toward transformation!</p>
        </div>
      </div>
    </div>
  );
} 