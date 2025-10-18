'use client';

import Image from 'next/image';
import CalendlyButton from '../CalendlyButton';

export default function AboutModal() {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-widest font-urbanist text-cotton">MY STORY</h2>
      <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-6 sm:mb-8 md:mb-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
        <div className="space-y-4 sm:space-y-6">
          <Image
            src="/images/about-me_selfie_5.jpg"
            alt="Personal headshot"
            width={500}
            height={600}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-2xl"
          />
          
          <div className="flex gap-4 sm:gap-6 items-start">
            <div className="flex-1 bg-gradient-to-r from-amethyst/20 to-lavender/20 p-4 sm:p-6 rounded-lg border-l-4 border-amethyst">
              <p className="font-semibold text-cotton mb-2 sm:mb-3 font-urbanist text-base sm:text-lg">MY PERSONAL EXPERIENCE:</p>
              <p className="leading-relaxed text-cloud-gray text-sm sm:text-base">
                Toward the beginning of 2023, I found myself trapped in a cycle of heavy emotions. As a highly sensitive person, I felt everything deeply; frustration at being stuck in a job that didn’t fulfill me, exhaustion from pouring my energy into something I wasn’t passionate about, and an overwhelming sense of urgency to pursue the things I truly cared about but never had enough time for.
              </p>
            </div>
            
            {/* <div className="flex-shrink-0 col-2">
              <Image
                src="/images/about-me_little_1.jpg"
                alt="Personal experience moment"
                width={300}
                height={400}
                className="w-48 h-48 object-cover rounded-lg shadow-lg"
              />
            </div> */}
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-6 text-cloud-gray leading-relaxed font-coming-soon">
          <p className="text-lg sm:text-xl text-cotton font-medium">Hi, I'm Alyssa Rey, a certified life coach, volleyball coach, and a passionate advocate for helping women build lives full of peace, freedom, and purpose.</p>
          
          <p className="text-sm sm:text-base">I've always felt a deep calling to create safe, authentic spaces where people can express themselves fully and confidently. With grounded energy and easy-to-understand tools, I'm here to help you organize your life and navigate your emotions with clarity and mindfulness.</p>
          
          <p className="text-sm sm:text-base">Whether it's gaining confidence, finding balance, or simply making time for yourself, we'll work together to create meaningful shifts that last.</p>
          
          <div className="flex-shrink-0">
            <Image
              src="/images/about-me_little_1.jpg"
              alt="Personal experience moment"
              width={300}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div> 
        </div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12 space-y-4 sm:space-y-6 text-cloud-gray font-coming-soon">
        <p className="text-sm sm:text-base">Every morning, I woke up carrying the same weight, knowing deep down that something needed to change. Then, I discovered the Jay Shetty Certification School, or more like it found me. This life coaching certification program became my safe space to grow, reflect, and step into the woman I was always meant to be.</p>

        <p className="text-sm sm:text-base">Today, I am no longer confined to a traditional 9-to-5 job. I have embraced my calling as a life coach, creating a career and lifestyle that aligns with my true self. Whether coaching in life or volleyball, I now wake up each day with a renewed sense of purpose, passion, and peace.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
          
          <div className="text-center">
            <Image
              src="/images/about-me_portrait_3.jpg"
              alt="Volleyball coaching"
              width={200}
              height={200}
              className="mx-auto mb-3 sm:mb-4 rounded-lg shadow-lg h-24 w-24 sm:h-32 sm:w-32 object-cover"
            />
            <h4 className="font-semibold text-cotton font-urbanist text-sm sm:text-base">Volleyball Coach</h4>
            <p className="text-xs sm:text-sm text-lavender">High School & Club Teams (40+ students)</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/Jay Shetty Certified Coach Photo.PNG"
              alt="Jay Shetty Certification"
              width={200}
              height={200}
              className="mx-auto mb-3 sm:mb-4 rounded-lg shadow-lg h-24 w-24 sm:h-auto sm:w-auto"
            />
            <h4 className="font-semibold text-cotton font-urbanist text-sm sm:text-base">Certified Life Coach</h4>
            <p className="text-xs sm:text-sm text-lavender">Jay Shetty Certification School (2023)</p>
          </div>
          
          <div className="text-center">
            <Image
              src="/images/about-me_landscape_6.jpg"
              alt="Learning drums"
              width={200}
              height={200}
              className="mx-auto mb-3 sm:mb-4 rounded-lg shadow-lg h-24 w-24 sm:h-32 sm:w-32 object-cover"
            />
            <h4 className="font-semibold text-cotton font-urbanist text-sm sm:text-base">Lifelong Learner</h4>
            <p className="text-xs sm:text-sm text-lavender">Drumming, expanding comfort zones</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sage/20 to-dusty-rose/20 p-4 sm:p-6 rounded-lg border border-sage/30 mt-6 sm:mt-8">
          <p className="text-base sm:text-lg leading-relaxed">I earned my life coaching certification from the Jay Shetty Certification School in 2023. Since then, I've had the privilege of guiding friends, peers, and family members through my personalized coaching approach. I also serve as an assistant volleyball coach at my alma mater, Alonzo & Tracy Mourning Senior High, where I've supported over 40 high school athletes, both girls and boys, using a blend of mindset coaching and emotional support. Outside of school, I coach an energetic group of 13-year-olds with Playeros, a volleyball club based in Miami Beach, FL.</p>
        </div>

        <p className="text-sm sm:text-base">Growth is a core value in everything I do. In 2022, I stretched outside my comfort zone by learning to play the drums, an experience that reminded me of the power of curiosity and consistent practice. I draw inspiration from nature and consider myself a lifelong student, committed to bringing presence, purpose, and authenticity into every interaction.</p>

        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-4 sm:p-6 md:p-8 rounded-lg border border-apricot/50 text-center mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-apricot font-urbanist">Ready to take the first step?</h4>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Let's connect for a FREE clarity call and start your path toward a life you love!</p>
          <CalendlyButton 
            text="Schedule Your FREE Clarity Call"
            size="medium"
          />
        </div>
      </div>
    </div>
  );
} 