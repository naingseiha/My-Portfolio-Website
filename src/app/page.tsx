"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // For animated text
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textToAnimate = "Freelance Developer";

  // For scroll animations
  const [isVisible, setIsVisible] = useState({
    skills: false,
    projects: false,
    stats: false,
  });

  useEffect(() => {
    // Text animation
    if (currentIndex < textToAnimate.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + textToAnimate[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");
      const projectsSection = document.getElementById("projects-section");
      const statsSection = document.getElementById("stats-section");

      if (skillsSection) {
        const top = skillsSection.getBoundingClientRect().top;
        setIsVisible((prev) => ({
          ...prev,
          skills: top < window.innerHeight - 100,
        }));
      }

      if (projectsSection) {
        const top = projectsSection.getBoundingClientRect().top;
        setIsVisible((prev) => ({
          ...prev,
          projects: top < window.innerHeight - 100,
        }));
      }

      if (statsSection) {
        const top = statsSection.getBoundingClientRect().top;
        setIsVisible((prev) => ({
          ...prev,
          stats: top < window.innerHeight - 100,
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modernized with animated elements */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 py-20 md:py-28">
        {/* Decorative animated circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <div className="relative mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium py-1 px-3 rounded-full">
                  Hello, I&apos;m Naing Seiha
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
                I&apos;m a developer and former ICT teacher with a strong
                passion for building impactful digital solutions. My experience
                spans from classrooms in Cambodia to freelance and international
                projects, focusing on web, mobile, and real-time applications
                using modern technologies.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <span>View Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md transition-all shadow-md hover:shadow-lg"
                >
                  Contact Me
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-12">
                <a
                  href="https://github.com/naingseiha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/naingseiha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/seiha_naing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 dark:from-blue-500/20 dark:to-indigo-500/20 blur-xl"></div>

                {/* Profile image container with stylish border */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-blue-100 dark:bg-slate-800">
                    {/* Replace with your profile image */}
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-500/50 dark:text-blue-400/50">
                      Your Photo
                    </div>

                    <Image
                      src="/images/profile.jpg"
                      alt="Naing Seiha"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Tech stack floating pill */}
                <div className="absolute bottom-5 -left-10 bg-white dark:bg-slate-800 px-5 py-2 rounded-full shadow-xl flex items-center gap-3 animate-float">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                    <span className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    MERN Stack
                  </span>
                </div>

                {/* Experience floating pill */}
                <div className="absolute top-10 -right-5 bg-white dark:bg-slate-800 px-5 py-2 rounded-full shadow-xl flex items-center gap-3 animate-float-delayed">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <span className="h-3 w-3 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Full-Stack Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section id="stats-section" className="py-14 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
              isVisible.stats
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                5+
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10+
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                In-Development Projects
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                1+
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                8+
              </div>
              <p className="text-slate-700 dark:text-slate-300">Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section - Redesigned */}
      <section
        id="skills-section"
        className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              MY EXPERTISE
            </span>
            <h2 className="text-4xl font-bold mb-4">Featured Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Leveraging cutting-edge technologies to build modern, scalable
              applications
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible.skills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* MERN Stack */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="bg-blue-100 dark:bg-blue-900/40 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                MERN Stack
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Crafting full-stack web applications using MongoDB, Express.js,
                React.js, and Node.js for seamless user experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-xs">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-xs">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-xs">
                  React.js
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-xs">
                  Node.js
                </span>
              </div>
              <Link
                href="/skills#mern"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center group"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Next.js */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="bg-indigo-100 dark:bg-indigo-900/40 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Next.js
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Building high-performance web applications with server-side
                rendering, static site generation, and optimized API routes.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full text-xs">
                  SSR
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full text-xs">
                  SSG
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full text-xs">
                  API Routes
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full text-xs">
                  React
                </span>
              </div>
              <Link
                href="/skills#nextjs"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center group"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile Development */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="bg-purple-100 dark:bg-purple-900/40 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Mobile Development
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Creating cross-platform mobile applications with native feel and
                performance using React Native and platform-specific
                optimizations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 rounded-full text-xs">
                  React Native
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 rounded-full text-xs">
                  Expo
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 rounded-full text-xs">
                  SwiftUI
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 rounded-full text-xs">
                  Kotlin
                </span>
              </div>
              <Link
                href="/skills#mobile"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium flex items-center group"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Enhanced */}
      <section
        id="projects-section"
        className="py-24 bg-slate-50 dark:bg-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
              MY WORK
            </span>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Showcasing some of my best work across web and mobile platforms
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Project 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
                    E-Commerce Platform
                  </div>
                </div>
                {/* Uncomment when you have an image
                <Image 
                  src="/images/projects/project1.jpg" 
                  alt="E-Commerce Platform" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                */}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    E-Commerce Platform
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/yourusername/ecommerce-project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://ecommerce-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  A comprehensive e-commerce platform built with the MERN stack,
                  featuring user authentication, product catalog, shopping cart,
                  and payment integration with Stripe.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-full text-sm">
                    Express.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
                <Link
                  href="/projects/1"
                  className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
                >
                  View details
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
                    Social Media for Elearning
                  </div>
                </div>

                <Image
                  src="/images/projects/mobile-project.png"
                  alt="Mobile Fitness App"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Mobile Fitness App
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/yourusername/fitness-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://fitness-app-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  A social media-powered e-learning app designed to connect
                  learners through interactive courses, and personalized
                  learning goals. Built with React Native and powered by Node.js
                  and Neo4j.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 rounded-full text-sm">
                    Expo
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 rounded-full text-sm">
                    SwiftUI
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 rounded-full text-sm">
                    Kotlin
                  </span>
                </div>
                <Link
                  href="/projects/2"
                  className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="px-8 py-4 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              <span>View All Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* My Approach Section - Replacing Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
              MY PHILOSOPHY
            </span>
            <h2 className="text-4xl font-bold mb-4">My Approach</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              How I tackle projects and deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Approach Point 1 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Research & Planning
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                I believe every successful project starts with thorough research
                and detailed planning. Understanding the core requirements and
                objectives is critical before writing a single line of code.
              </p>
            </div>

            {/* Approach Point 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Agile Development
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                I follow an agile methodology that embraces change and
                continuous improvement. This allows me to deliver high-quality
                work in iterations while remaining flexible to evolving
                requirements.
              </p>
            </div>

            {/* Approach Point 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Clean & Efficient Code
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                I&apos;m committed to writing maintainable, well-documented code
                that follows best practices. My solutions prioritize
                performance, security, and scalability from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create exceptional digital experiences
            that make an impact.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 hover:text-blue-700 rounded-md transition-all shadow-lg hover:shadow-xl font-medium inline-flex items-center gap-2 hover:bg-blue-50"
          >
            <span>Start a Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 4s ease-in-out 2s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        .bg-grid-slate-200 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h1v1H0V0zm2 0h1v1H2V0zm2 0h1v1H4V0zm2 0h1v1H6V0zm2 0h1v1H8V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zM0 2h1v1H0V2zm2 0h1v1H2V2zm2 0h1v1H4V2zm2 0h1v1H6V2zm2 0h1v1H8V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zM0 4h1v1H0V4zm2 0h1v1H2V4zm2 0h1v1H4V4zm2 0h1v1H6V4zm2 0h1v1H8V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zM0 6h1v1H0V6zm2 0h1v1H2V6zm2 0h1v1H4V6zm2 0h1v1H6V6zm2 0h1v1H8V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zM0 8h1v1H0V8zm2 0h1v1H2V8zm2 0h1v1H4V8zm2 0h1v1H6V8zm2 0h1v1H8V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zM0 10h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 12h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 14h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 16h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 18h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E");
        }

        .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='%231e293b' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h1v1H0V0zm2 0h1v1H2V0zm2 0h1v1H4V0zm2 0h1v1H6V0zm2 0h1v1H8V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zM0 2h1v1H0V2zm2 0h1v1H2V2zm2 0h1v1H4V2zm2 0h1v1H6V2zm2 0h1v1H8V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zM0 4h1v1H0V4zm2 0h1v1H2V4zm2 0h1v1H4V4zm2 0h1v1H6V4zm2 0h1v1H8V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zM0 6h1v1H0V6zm2 0h1v1H2V6zm2 0h1v1H4V6zm2 0h1v1H6V6zm2 0h1v1H8V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zM0 8h1v1H0V8zm2 0h1v1H2V8zm2 0h1v1H4V8zm2 0h1v1H6V8zm2 0h1v1H8V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zM0 10h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 12h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 14h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 16h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 18h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
