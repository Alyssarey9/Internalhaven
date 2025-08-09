'use client';

export default function ContactModal() {
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