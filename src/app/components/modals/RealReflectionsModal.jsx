'use client';

import { useState, useEffect } from 'react';

export default function RealReflectionsModal(){
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const testimonials = [
        {
            name: "Maria S.",
            role: "Age 34",
            content: "When I started my journey with Alyssa, I was excited to see where this could take me but really didn't know what to expect. I thought it would be more surface level conversations that can help me with the little things that overwhelm me on a day to day. Little did I know it would be so much more than that. I was able to dig deep into the emotions that were hindering my growth. We were able to discuss and organize the changes that needed to take place for me to reach my goals. I am more confident in myself both emotionally and physically. I now have a new perspective and am so thankful I was able to get there in just 8 weeks.",
            rating: 5,
            highlight: "Emotional Growth"
        },
        {
            name: "Talia G.",
            role: "Age 29",
            content: "I am incredibly grateful to have had the opportunity to work with Alyssa. Her guidance and support has really impacted my life. She has helped me discover my true potential, set and achieve meaningful goals, and navigate life with confidence! She helped me organize myself better and make my living space one that is clean and put together!",
            rating: 5,
            highlight: "True Potential"
        },
        {
            name: "Ashley C.",
            role: "Age 28",
            content: "One of the biggest benefits of coaching with Alyssa has been learning how to become more mindful. I used to be very caught up in my own thoughts and feelings, and I had difficulty focusing on the present moment. Alyssa has helped me to develop mindfulness practices that have helped me to become more aware of my thoughts and feelings, and to choose how I react to them. As a result, I am now able to manage my stress and anxiety more effectively, and I am better able to enjoy the present moment.",
            rating: 5,
            highlight: "Mindfulness"
        },
        {
            name: "Brynlee K.",
            role: "Age 33",
            content: "Alyssa is a very thoughtful, intelligent, and genuine life coach. I looked forward to our meetings every week! I feel more confident about myself and my capabilities. I also have a better understanding of myself and have shifted my mindset to being more positive and kind to myself! So grateful for her!",
            rating: 5,
            highlight: "Confidence & Self-Love"
        },
        {
            name: "Brianna R.",
            role: "Age 30",
            content: "I sought Alyssa's expertise at a point in my life where I thought I was stuck indefinitely. I wanted to grow, heal and elevate my life and mindset. I struggled to be mindful and optimistic, and the days seemed to pass without anything to look forward to. I struggle with anxiety and depression, and I have always found it hard to maintain to a routine or do the things I know are most beneficial to me. I would try things and found myself giving up quickly, feeling like a failure. Since working with Alyssa, I have not only been able to stick to my routine, but have been more adaptable than ever, rolling with the punches as they come without letting life get me down. Alyssa created a safe space in her sessions for me, where I felt comfortable being my authentic self and opening up to really get to the core of my issues. I truly feel like I am getting the most out of my life, and I have Alyssa to thank for guiding me to get to this point.",
            rating: 5,
            highlight: "Life Transformation"
        },
        {
            name: "Irina Y.",
            role: "Age 18",
            content: "I've been playing volleyball for 8 years and I've never experienced a coach who had cared about my mental and physical wellbeing until I met Alyssa. Alyssa managed to flip my life 180° leaving a generous impact on me. She introduced me to being intentional and mindful with everything I do in my life even outside of sports. Alyssa taught me how to overcome hardships in a healthy way and introduced me to a whole new perspective of myself that I will be carrying on into the future. She is caring, kindhearted, and the most selfless person I've ever encountered. I'm grateful everyday to have met and be coached by Alyssa.",
            rating: 5,
            highlight: "Holistic Coaching"
        },
        {
            name: "Alejandra L.",
            role: "Age 18",
            content: "When I first met Coach Alyssa, it was like a breath of fresh air. I instantly connected with her because I could feel the safe, warm, vibrant energy from her. She guided me and was able to show me how to work with my emotions to fuel my passions. Without her, I wouldn't have been able to find and grow the love I had for volleyball again and would have given up my dream of being the starting libero my senior year. I will use the guidance, support, and tools she taught me throughout the next stage of my life, but to be honest, I am sure I will use them for the rest of my life!",
            rating: 5,
            highlight: "Passion Rediscovery"
        },
        {
            name: "Shannon H.",
            role: "Fort Lauderdale, FL",
            content: "I worked with Alyssa for a couple of months. Before our coaching sessions, I felt overwhelmed by my emotions and navigating difficult situations. I suppressed a lot of what I felt, which inevitably caused physical issues as well. She helped me to change my whole perspective on how to handle hard emotions and process them in a healthy way and truly be kind to myself. It has been a game changer in every aspect of my life and even relieved some physical issues I have dealt with for years! She is kind, caring and makes you feel important and heard. She truly has a gift that I believe will help so many!",
            rating: 5,
            highlight: "Emotional Healing"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                nextTestimonial();
            }
        }, 6000);
        
        return () => clearInterval(interval);
    }, [isTransitioning]);

    const nextTestimonial = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevTestimonial = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToTestimonial = (index) => {
        if (isTransitioning || index === currentTestimonial) return;
        setIsTransitioning(true);
        setCurrentTestimonial(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const renderStars = (rating) => {
        return Array.from({ length: rating }, (_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className="p-3 md:p-6 max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-widest font-urbanist text-cotton bg-gradient-to-r from-cotton to-gray-200 bg-clip-text text-transparent">
                    REAL REFLECTIONS
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-apricot via-sage to-apricot mx-auto mb-3 rounded-full shadow-lg"></div>
                <p className="text-gray-400 text-sm max-w-lg mx-auto">
                    Discover how life coaching has transformed the lives of real people
                </p>
            </div>
            
            {/* Testimonial Carousel */}
            <div className="relative">
                {/* Background Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-apricot/20 to-sage/20 rounded-full blur-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-sage/20 to-apricot/20 rounded-full blur-lg"></div>

                {/* Navigation Arrows - Outside the testimonial box */}
                <button 
                    onClick={prevTestimonial}
                    disabled={isTransitioning}
                    className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-purple-100 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border border-gray-200"
                    aria-label="Previous testimonial"
                >
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button 
                    onClick={nextTestimonial}
                    disabled={isTransitioning}
                    className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-purple-100 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border border-gray-200"
                    aria-label="Next testimonial"
                >
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Testimonial Content */}
                <div className={`bg-gradient-to-br from-purple-100/95 via-purple-200/95 to-purple-100/95 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-xl border border-purple-300/30 transition-all duration-500 ${isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
                    <div className="text-center">
                        {/* Highlight Badge */}
                        <div className="inline-block mb-4">
                            <span className="bg-gradient-to-r from-apricot to-sage text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                {testimonials[currentTestimonial].highlight}
                            </span>
                        </div>

                        {/* Quote Icon */}
                        <div className="mb-4">
                            <svg className="w-8 h-8 text-apricot opacity-80 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                            </svg>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 italic font-light">
                            "{testimonials[currentTestimonial].content}"
                        </blockquote>

                        {/* Rating */}
                        <div className="flex justify-center mb-4">
                            <div className="flex space-x-0.5">
                                {renderStars(testimonials[currentTestimonial].rating)}
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="mb-2">
                            <h4 className="text-lg font-bold text-gray-800 mb-0.5">
                                {testimonials[currentTestimonial].name}
                            </h4>
                            <p className="text-gray-500 font-medium text-sm">
                                {testimonials[currentTestimonial].role}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-apricot to-sage h-1 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            disabled={isTransitioning}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 transform hover:scale-125 ${
                                index === currentTestimonial 
                                    ? 'bg-gradient-to-r from-apricot to-sage scale-125 shadow-md' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}