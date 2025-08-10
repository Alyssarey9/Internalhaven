'use client';

import { useState } from 'react';

/**
 * CalendlyButton component for scheduling discovery calls
 * @param {Object} props - Component props
 * @param {string} props.text - Button text (default: "Schedule Your FREE Discovery Call")
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.size - Button size ('small', 'medium', 'large')
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {Function} props.onClick - Custom click handler
 * @param {string} props.eventType - Calendly event type URL (optional)
 * @returns {JSX.Element} Calendly button component
 */
export default function CalendlyButton({ 
  text = "Schedule Your FREE Discovery Call",
  className = "",
  size = "medium",
  fullWidth = false,
  onClick,
  eventType
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Handle button click to open Calendly scheduling
   */
  const handleCalendlyClick = async () => {
    if (onClick) {
      onClick();
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Use the direct Calendly URL if provided, otherwise use the default
      const calendlyUrl = eventType || 'https://calendly.com/alyssarey9/45min';
      
      // Add current month/year to the URL to ensure it's up to date
      const now = new Date();
      const currentMonth = now.getMonth() + 1; // getMonth() returns 0-11
      const currentYear = now.getFullYear();
      
      // Construct URL with current month/year parameters
      const urlWithDate = `${calendlyUrl}?month=${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
      
      console.log('Opening Calendly URL:', urlWithDate);
      window.open(urlWithDate, '_blank');
      
    } catch (err) {
      console.error('Calendly error:', err);
      setError('Unable to open scheduling. Please try again or contact us directly.');
      
      // Fallback: open the direct Calendly URL
      setTimeout(() => {
        window.open('https://calendly.com/alyssarey9/30min', '_blank');
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  // Size classes
  const sizeClasses = {
    small: 'py-2 px-6 text-sm',
    medium: 'py-3 px-8 text-base',
    large: 'py-4 px-10 text-lg'
  };

  // Width classes
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className="relative">
      <button
        onClick={handleCalendlyClick}
        disabled={isLoading}
        className={`
          btn-primary
          ${sizeClasses[size]}
          ${widthClass}
          ${className}
          ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
        `}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-midnight-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Opening...
          </span>
        ) : (
          text
        )}
      </button>
      
      {error && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}
    </div>
  );
} 