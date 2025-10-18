'use client';

import { useRef, useEffect, useCallback } from 'react';

/**
 * ClickSpark component - Creates sparkling animation on click/tap
 * @param {Object} props - Component props
 * @param {string} props.sparkColor - Color of the sparks (default: '#fff')
 * @param {number} props.sparkSize - Size of each spark (default: 10)
 * @param {number} props.sparkRadius - Radius of spark spread (default: 15)
 * @param {number} props.sparkCount - Number of sparks per click (default: 8)
 * @param {number} props.duration - Animation duration in ms (default: 400)
 * @param {string} props.easing - Easing function ('linear', 'ease-in', 'ease-out', 'ease-in-out')
 * @param {number} props.extraScale - Scale multiplier for spark radius (default: 1.0)
 * @param {React.ReactNode} props.children - Child elements
 */
const ClickSpark = ({
  sparkColor = '#EFA986', // Using apricot color from your palette
  sparkSize = 10,
  sparkRadius = 20, // Slightly larger for better visibility on mobile
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
  children
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const startTimeRef = useRef(null);

  // Handle canvas resizing to cover viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeTimeout;

    const resizeCanvas = () => {
      // Set canvas to full viewport size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    window.addEventListener('resize', handleResize);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Easing function
  const easeFunc = useCallback(
    t => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default: // 'ease-out'
          return t * (2 - t);
      }
    },
    [easing]
  );

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;

    const draw = timestamp => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

  // Handle click/tap events (mobile responsive)
  const handleInteraction = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    
    // Support both mouse and touch events
    let clientX, clientY;
    if (e.type === 'touchstart' || e.type === 'touchend') {
      const touch = e.touches[0] || e.changedTouches[0];
      clientX = touch.clientX;
      clientY = touch.clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now
    }));

    sparksRef.current.push(...newSparks);
  }, [sparkCount]);

  return (
    <div 
      className="relative w-full h-full" 
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      style={{ touchAction: 'manipulation' }} // Improve mobile responsiveness
    >
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-screen h-screen block select-none pointer-events-none"
        style={{ zIndex: 9999 }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;
