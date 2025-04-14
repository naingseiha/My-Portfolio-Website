// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Full-Stack Developer
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
                Building modern web & mobile applications with cutting-edge
                technologies. Specialized in MERN stack, Next.js, React Native,
                iOS, and Android development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-md transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-blue-100 dark:bg-slate-700">
                {/* Replace with your profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-500 dark:text-blue-400">
                  Your Photo
                </div>
                {/* Uncomment when you have an image
                <Image 
                  src="/images/profile.jpg" 
                  alt="Developer Profile" 
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MERN Stack */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">MERN Stack</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                MongoDB, Express.js, React.js, and Node.js development for
                full-stack web applications.
              </p>
              <Link
                href="/skills#mern"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more →
              </Link>
            </div>

            {/* Next.js */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Next.js</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Server-side rendering, static site generation, and API routes
                for React applications.
              </p>
              <Link
                href="/skills#nextjs"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more →
              </Link>
            </div>

            {/* Mobile Development */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                React Native, iOS (SwiftUI), and Android (Kotlin) app
                development.
              </p>
              <Link
                href="/skills#mobile"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-slate-200 dark:bg-slate-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-400">
                  Project Image
                </div>
                {/* Uncomment when you have an image
                <Image 
                  src="/images/projects/project1.jpg" 
                  alt="Project 1" 
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  A full-stack e-commerce platform built with the MERN stack,
                  featuring user authentication, product catalog, shopping cart,
                  and payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    Express.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
                <Link
                  href="/projects/1"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View details →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-slate-200 dark:bg-slate-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-400">
                  Project Image
                </div>
                {/* Uncomment when you have an image
                <Image 
                  src="/images/projects/project2.jpg" 
                  alt="Project 2" 
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Mobile Fitness App
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  A cross-platform fitness tracking application built with React
                  Native and Expo, with iOS-specific features using SwiftUI and
                  Android customizations in Kotlin.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    Expo
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    SwiftUI
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    Kotlin
                  </span>
                </div>
                <Link
                  href="/projects/2"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View details →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
