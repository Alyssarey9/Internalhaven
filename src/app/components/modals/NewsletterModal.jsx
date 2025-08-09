'use client';

export default function NewsletterModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-deep-plum/80" onClick={onClose} />
      <div className="relative bg-deep-plum p-8 rounded-xl max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cotton/60 hover:text-apricot text-2xl"
        >
          ×
        </button>
        
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-apricot to-sage rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-midnight-ink" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-cotton mb-2 font-urbanist">Get Your Free Mindfulness Tools!</h3>
            <p className="text-cloud-gray text-sm font-coming-soon">
              Enter your email and I'll send you 3 powerful tools to support your personal growth and cultivate mindfulness:
            </p>
          </div>
          
          <ul className="text-left text-sm text-cloud-gray mb-6 space-y-2 font-coming-soon">
            <li>✓ How to Be Your Own Bestie Guide</li>
            <li>✓ Tips to Cultivate a Growth Mindset</li>
            <li>✓ Emotion Self-Regulation Technique</li>
          </ul>
          
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your best email"
              className="w-full px-4 py-3 bg-lavender/20 border border-amethyst/30 rounded-lg text-cotton focus:outline-none focus:border-apricot transition-colors placeholder-amethyst/60"
            />
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Send Me The Tools
            </button>
          </form>
          
          <p className="text-xs text-lavender mt-4 font-coming-soon">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
} 