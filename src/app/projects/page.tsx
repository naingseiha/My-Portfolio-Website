"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

// Tech stack icons mapping
const techIcons = {
  MongoDB: "/icons/mongodb.svg",
  "Express.js": "/icons/express.svg",
  React: "/icons/react.svg",
  "Node.js": "/icons/nodejs.svg",
  Redux: "/icons/redux.svg",
  TailwindCSS: "/icons/tailwindcss.svg",
  "Next.js": "/icons/nextdotjs.svg",
  TypeScript: "/icons/typescript.svg",
  Firebase: "/icons/firebase.svg",
  GraphQL: "/icons/graphql.svg",
  "React Native": "/icons/react.svg",
  Expo: "/icons/expo.svg",
  SwiftUI: "/icons/swift.svg",
  Kotlin: "/icons/kotlin.svg",
  PostgreSQL: "/icons/postgresql.svg",
  Prisma: "/icons/prisma.svg",
  "Chart.js": "/icons/chartjs.svg",
  "Socket.io": "/icons/socketio.svg",
  Redis: "/icons/redis.svg",
  "AWS S3": "/icons/aws.svg",
  "Stripe API": "/icons/stripe.svg",
};

// Mock project images since they're placeholder in the original code
const projectBackgrounds = {
  web: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  mobile: "linear-gradient(120deg, #ff9a9e 0%, #fad0c4 100%)",
  fullstack: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Filter projects based on category and search query
    const filtered = projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });

    setVisibleProjects(filtered);
  }, [selectedCategory, searchQuery]);

  // Setup intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            Project Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-center max-w-3xl mx-auto text-slate-700 dark:text-slate-300 mb-12"
          >
            Explore my latest work and development projects across web, mobile,
            and full-stack technologies
          </motion.p>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 rotate-45 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Filters & Search */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 mb-12 border border-slate-100 dark:border-slate-700"
        >
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {["all", "web", "mobile", "fullstack"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
                  }`}
                >
                  {category === "all"
                    ? "All Projects"
                    : category === "web"
                    ? "Web Development"
                    : category === "mobile"
                    ? "Mobile Development"
                    : "Full-Stack"}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="w-full p-2.5 pl-10 text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 text-slate-600 dark:text-slate-400"
        >
          Showing {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: isInView ? index * 0.1 : 0,
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col"
              >
                {/* Project Image/Header */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: projectBackgrounds[project.category] }}
                >
                  {/* If you have real images, use this:
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  */}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white dark:bg-slate-900 bg-opacity-90 dark:bg-opacity-90 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 z-10">
                    {project.category === "web"
                      ? "Web Development"
                      : project.category === "mobile"
                      ? "Mobile Development"
                      : "Full-Stack"}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-semibold text-white z-10 flex items-center">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      Featured
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white bg-black bg-opacity-30 px-4 py-2 rounded-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          {techIcons[tech] && (
                            <span className="w-4 h-4 mr-1 flex items-center justify-center">
                              <img
                                src={techIcons[tech]}
                                alt={tech}
                                width={16}
                                height={16}
                              />
                            </span>
                          )}
                          {tech}
                        </div>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="p-6 pt-0 mt-4 border-t border-slate-100 dark:border-slate-700 flex gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center text-sm font-medium transition-colors"
                  >
                    <HiCode className="mr-1.5" size={16} />
                    View details
                  </Link>

                  <div className="ml-auto flex gap-3">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label="View live demo"
                      >
                        <HiOutlineExternalLink size={20} />
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {visibleProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-slate-400 dark:text-slate-500 text-6xl mb-4">
              🔍
            </div>
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Call-to-action section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-indigo-100 dark:text-indigo-200 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center"
          >
            Get in touch
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
