'use client';

import Image from 'next/image';

export default function AboutModal() {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-bold mb-6 tracking-widest font-urbanist text-cotton">MY STORY</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-apricot to-sage mb-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Image
            src="/images/about-me_selfie_5.jpg"
            alt="Personal headshot"
            width={500}
            height={600}
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="space-y-6 text-cloud-gray leading-relaxed font-coming-soon">
          <p className="text-xl text-cotton font-medium">
            Hi, I'm Alyssa Rey, a certified life coach, volleyball coach, and a passionate advocate for helping women like you build lives full of peace, freedom, and purpose.
          </p>
          
          <p>
            I've always felt a deep calling to create safe, authentic spaces where people can express themselves fully and confidently. 
            With grounded energy and easy-to-understand tools, I'm here to help you organize your life and navigate your emotions with clarity and mindfulness.
          </p>
          
          <p>
            Whether it's gaining confidence, finding balance, or simply making time for yourself, we'll work together to create meaningful shifts that last.
          </p>
          
          <div className="bg-gradient-to-r from-amethyst/20 to-lavender/20 p-6 rounded-lg border-l-4 border-amethyst">
            <p className="font-semibold text-amethyst mb-2 font-urbanist">My Personal Experience:</p>
            <p>
              Toward the beginning of 2023, I found myself trapped in a cycle of heavy emotions. As a highly sensitive person, 
              I felt everything deeply—frustration at being stuck in a job that didn't fulfill me, exhaustion from pouring my 
              energy into something I wasn't passionate about, and an overwhelming sense of urgency to pursue the things I truly cared about but never had time for.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6 text-cloud-gray font-coming-soon">
        <p>
          Every morning, I woke up carrying the same weight, knowing deep down that something needed to change. Then, I discovered 
          the Jay Shetty Certification School—or maybe it found me. This life coaching certification program became my safe space 
          to grow, reflect, and step into the person I was always meant to be.
        </p>

        <p>
          Today, I am no longer confined to a traditional 9-to-5 job. I have embraced my calling as a life coach, creating a career 
          and lifestyle that aligns with my true self. Whether coaching in life or volleyball, I now wake up each day with a renewed 
          sense of purpose, passion, and peace.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          <div className="text-center">
            <Image
              src="/images/about-me_portrait_6.jpg"
              alt="Volleyball coaching"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg h-32 w-32 object-cover"
            />
            <h4 className="font-semibold text-cotton font-urbanist">Volleyball Coach</h4>
            <p className="text-sm text-lavender">High School & Club Teams (40+ students)</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/Jay Shetty Certified Coach Photo.PNG"
              alt="Jay Shetty Certification"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg"
            />
            <h4 className="font-semibold text-cotton font-urbanist">Certified Life Coach</h4>
            <p className="text-sm text-lavender">Jay Shetty Certification School (2023)</p>
          </div>
          
          <div className="text-center">
            <Image
              src="/images/about-me_landscape_6.jpg"
              alt="Learning drums"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg shadow-lg h-32 w-32 object-cover"
            />
            <h4 className="font-semibold text-cotton font-urbanist">Lifelong Learner</h4>
            <p className="text-sm text-lavender">Drumming, expanding comfort zones</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sage/20 to-dusty-rose/20 p-6 rounded-lg border border-sage/30 mt-8">
          <p className="text-lg leading-relaxed">
            I earned my life coaching certification from the Jay Shetty Certification School in 2023. Since then, I have coached 
            some of my friends, peers, and family members through my unique and personalized services. I am also a high school 
            volleyball coach at my alma mater, Alonzo & Tracy Mourning Senior High, where I've been fortunate to bring my life 
            coaching skills to 40+ high school students, both girls and boys. I also coach a bundle of energetic 13-year-olds for 
            a volleyball club called Playeros based in Miami Beach, FL.
          </p>
        </div>

        <p>
          I'm always seeking to expand my comfort zone, which led me to learn how to play the drums in 2022. I draw inspiration 
          from the lessons nature offers and embrace being a student of life. Every day, I commit to bringing my best self to 
          every experience, whether that's coaching, learning, drumming, or connecting with others.
        </p>

        <div className="bg-gradient-to-r from-apricot/20 to-dusty-rose/20 p-8 rounded-lg border border-apricot/50 text-center mt-10">
          <h4 className="text-2xl font-bold mb-4 text-apricot font-urbanist">I believe that every woman deserves to feel confident, capable, and at peace in her own life.</h4>
          <p className="text-lg mb-6">
            I've experienced firsthand what it means to step into alignment, and my mission is to help others do the same. 
            Through my coaching, I guide women to find clarity, confidence, and the freedom to create a life that truly resonates with them.
          </p>
          <button className="btn-primary">
            Schedule Your Free Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
} 