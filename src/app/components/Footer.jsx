import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/services" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Services
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Contact
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Internal Haven. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 