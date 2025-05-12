import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Services Header */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Our Coaching Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl dark:text-gray-300">
              Personalized coaching programs designed to help you overcome challenges and achieve your goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="space-y-16">
              {/* Personal Development Coaching */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Personal Development Coaching
                  </h2>
                  <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                    Our personal development coaching helps you gain clarity about who you are, what you want, and how to get there. We'll work together to identify your strengths, overcome limiting beliefs, and develop strategies for personal growth.
                  </p>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Key Benefits:</h3>
                    <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Increased self-awareness and understanding
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Tools to overcome limiting beliefs and self-doubt
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Enhanced emotional intelligence and resilience
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Greater clarity about your life purpose and direction
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-blue-100 dark:bg-blue-900">
                    <div className="h-64 flex items-center justify-center">
                      <span className="text-2xl text-blue-500 dark:text-blue-300">Personal Development Image</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Career Coaching */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Career Coaching
                  </h2>
                  <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                    Our career coaching helps you navigate career transitions, advance in your current role, or find greater satisfaction and purpose in your work. We'll explore your interests, strengths, and values to align your career with your life goals.
                  </p>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Key Benefits:</h3>
                    <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Clarify career goals and create an action plan
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Develop leadership skills and professional confidence
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Learn effective strategies for career advancement
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Navigate career transitions with confidence
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-blue-100 dark:bg-blue-900">
                    <div className="h-64 flex items-center justify-center">
                      <span className="text-2xl text-blue-500 dark:text-blue-300">Career Coaching Image</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Life Balance Coaching */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Life Balance Coaching
                  </h2>
                  <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                    Our life balance coaching helps you create harmony among all aspects of your life—work, relationships, health, and personal growth. We'll identify areas of imbalance and develop strategies to create a more fulfilled and sustainable lifestyle.
                  </p>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Key Benefits:</h3>
                    <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Reduced stress and improved well-being
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Better time management and prioritization skills
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Strategies for setting boundaries and saying no
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Greater fulfillment in all areas of life
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-blue-100 dark:bg-blue-900">
                    <div className="h-64 flex items-center justify-center">
                      <span className="text-2xl text-blue-500 dark:text-blue-300">Life Balance Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coaching Process */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Coaching Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
              We follow a structured approach to help you achieve your goals, with flexibility to adapt to your unique needs.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center dark:text-white">Discovery</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We begin with a thorough assessment to understand your current situation, challenges, and goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center dark:text-white">Planning</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We create a personalized coaching plan with specific objectives, timelines, and strategies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center dark:text-white">Implementation</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Through regular coaching sessions, we work on implementing changes and addressing challenges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center dark:text-white">Integration</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  We ensure the changes are sustainable by integrating new habits and perspectives into your daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Coaching Packages</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
              Choose the coaching package that best fits your needs and goals.
            </p>
          </div>
          
          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Essential</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">Perfect for those looking to address a specific challenge or goal.</p>
              <p className="mt-8 text-4xl font-extrabold text-gray-900 dark:text-white">$99</p>
              <p className="mt-2 text-gray-500 dark:text-gray-300">per session</p>
              
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  60-minute coaching sessions
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pay-as-you-go flexibility
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Email support between sessions
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/contact" className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center dark:bg-blue-500 dark:hover:bg-blue-600">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Transformation</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">Our most popular package for comprehensive coaching support.</p>
              <p className="mt-8 text-4xl font-extrabold text-gray-900 dark:text-white">$499</p>
              <p className="mt-2 text-gray-500 dark:text-gray-300">6 sessions</p>
              
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Six 60-minute coaching sessions
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Personalized action plan
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Email and text support
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Resources and worksheets
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/contact" className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center dark:bg-blue-500 dark:hover:bg-blue-600">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Premium</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">Intensive coaching for deep transformation and lasting change.</p>
              <p className="mt-8 text-4xl font-extrabold text-gray-900 dark:text-white">$899</p>
              <p className="mt-2 text-gray-500 dark:text-gray-300">12 sessions</p>
              
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Twelve 60-minute coaching sessions
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Comprehensive assessment and plan
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Priority email and phone support
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Extensive resources and tools
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Long-term sustainability plan
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/contact" className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center dark:bg-blue-500 dark:hover:bg-blue-600">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block text-blue-200">Book a free consultation today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:text-white dark:bg-blue-900 dark:hover:bg-blue-700">
                Get in Touch
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