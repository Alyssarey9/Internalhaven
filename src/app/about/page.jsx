import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* About Header */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              About Internal Haven
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl dark:text-gray-300">
              Our mission is to help you discover your inner strength and create a balanced, fulfilling life.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Philosophy</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                At Internal Haven, we believe that everyone has the potential for growth and transformation. Our coaching approach is based on the principle that with the right guidance and support, individuals can overcome obstacles, discover their true purpose, and lead more fulfilling lives.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                We combine proven coaching techniques with a personalized approach to meet you where you are and help you get to where you want to be. Our coaching is holistic, addressing all aspects of your life to create sustainable change and lasting results.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Start Your Journey
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-64 sm:h-72 md:h-96 w-full">
                {/* Replace with your actual image path */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-2xl text-blue-500 dark:text-blue-300">Coach Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Story</h2>
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto dark:text-gray-300">
              <p>
                Internal Haven was founded with a simple mission: to help individuals navigate life's challenges and discover their true potential. Our founder, after experiencing personal transformation through coaching, was inspired to create a practice dedicated to helping others achieve similar breakthroughs.
              </p>
              <p>
                What began as a small coaching practice has grown into a comprehensive life coaching service that has helped hundreds of clients transform their lives. We've seen firsthand the power of personalized coaching to create lasting change, and we're passionate about sharing that experience with others.
              </p>
              <p>
                Our name, "Internal Haven," reflects our belief that within each person lies a sanctuary of strength, wisdom, and resilience. Our job as coaches is to help you access that internal haven and use it as a foundation for creating the life you desire.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">Our Values</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Authenticity</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We believe in being genuine in our interactions and encouraging our clients to embrace their authentic selves.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Empowerment</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Our goal is to empower you with the tools, insights, and confidence to create lasting change in your life.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Growth</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We are committed to continuous growth, both for ourselves and our clients, embracing challenges as opportunities for development.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Compassion</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We approach our work with deep empathy and understanding, creating a safe space for exploration and vulnerability.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Balance</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We believe in the importance of creating harmony between all aspects of life for true fulfillment.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Integrity</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We uphold the highest ethical standards in our practice, ensuring confidentiality and respect in all interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to begin your journey?</span>
            <span className="block text-blue-200">Let's take the first step together.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:text-white dark:bg-blue-900 dark:hover:bg-blue-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
} 