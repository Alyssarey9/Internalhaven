import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Contact Header */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Get in Touch
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl dark:text-gray-300">
              We're here to answer your questions and help you begin your journey to personal transformation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Send us a message</h2>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                Fill out the form below to schedule a free consultation or ask us any questions.
              </p>
              
              <form className="mt-9 grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Service Interested In
                  </label>
                  <div className="mt-1">
                    <select
                      id="service"
                      name="service"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    >
                      <option value="">Please select</option>
                      <option value="personal">Personal Development Coaching</option>
                      <option value="career">Career Coaching</option>
                      <option value="life">Life Balance Coaching</option>
                      <option value="other">Other/Not Sure Yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 lg:mt-0">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Contact Information</h2>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                We offer in-person coaching in our office as well as virtual coaching sessions for clients worldwide.
              </p>
              
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FiMapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <p>123 Serenity Lane</p>
                    <p className="mt-1">Tranquil City, TC 12345</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <FiPhone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <p>(555) 123-4567</p>
                    <p className="mt-1">Mon-Fri 9am-5pm</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <FiMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <p>info@internalhaven.com</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-9 rounded-lg overflow-hidden">
                <div className="h-56 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Map Placeholder</span>
                </div>
              </div>
              
              {/* Hours */}
              <div className="mt-9">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office Hours</h3>
                <div className="mt-3 text-base text-gray-500 dark:text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="mt-3 italic">Virtual appointments available outside of regular business hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
              Have questions before getting started? Find answers to common questions about our coaching services.
            </p>
          </div>
          
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  How long does a typical coaching session last?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Our standard coaching sessions are 60 minutes long, which provides enough time for meaningful discussion and progress while maintaining focus.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  How many coaching sessions will I need?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  The number of sessions varies depending on your goals and situation. Some clients achieve their desired results in just a few sessions, while others benefit from ongoing support over several months. We'll discuss this during your free consultation.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Do you offer virtual coaching?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Yes, we offer coaching sessions via video conferencing platforms for clients who prefer virtual meetings or are located outside of our local area.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  What's the difference between coaching and therapy?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  While there can be some overlap, coaching typically focuses on present challenges and future goals, helping you move forward through action-oriented strategies. Therapy often deals more with healing past trauma and addressing clinical mental health concerns.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Is everything we discuss confidential?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Yes, confidentiality is a cornerstone of our coaching relationship. We maintain strict confidentiality about all aspects of our coaching engagement, with the standard ethical exceptions.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  What if I need to reschedule a session?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  We understand that life happens. We ask for 24 hours' notice for rescheduling, but we're flexible and will work with you to find a suitable alternative time whenever possible.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
} 