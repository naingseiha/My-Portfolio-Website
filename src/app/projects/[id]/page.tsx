"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineExternalLink,
  HiArrowLeft,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import { FaGithub, FaRegLightbulb } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { BsCodeSlash, BsBoxArrowUpRight } from "react-icons/bs";
import { projects } from "@/data/projects";
import { useParams } from "next/navigation";

// Tech stack icons mapping (same as in projects page)
const techIcons: Record<string, string> = {
  MongoDB: "/icons/mongodb.svg",
  Neo4j: "/icons/neo4j.svg",
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

// Mock project images/backgrounds
const projectBackgrounds = {
  web: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  mobile: "linear-gradient(120deg, #ff9a9e 0%, #fad0c4 100%)",
  fullstack: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
};

// Gallery mock images - will be replaced with actual project images
const mockGalleryImages = [
  { id: 1, alt: "Project screenshot 1" },
  { id: 2, alt: "Project screenshot 2" },
  { id: 3, alt: "Project screenshot 3" },
];

export default function ProjectDetailPage() {
  const params = useParams();
  // const router = useRouter();
  interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    category: "web" | "mobile" | "fullstack";
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    featured?: boolean;
  }

  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [copied, setCopied] = useState(false);

  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Find project and handle loading state
  useEffect(() => {
    const projectId = Number(params.id);
    const foundProject = projects.find((p) => p.id === projectId);

    if (foundProject) {
      // Small timeout to show the loading animation
      setTimeout(() => {
        setProject(foundProject);
        setIsLoading(false);
      }, 500);
    } else {
      setIsLoading(false);
    }
  }, [params.id]);

  // Handle intersection observer for scrollspy
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) setActiveSection(id.replace("-section", ""));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      overviewRef.current,
      featuresRef.current,
      techRef.current,
      galleryRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isLoading]);

  // Handle copy project link
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Scroll to section
  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement | null>
  ) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Get related projects
  const getRelatedProjects = () => {
    if (!project) return [];
    return projects
      .filter((p) => p.category === project.category && p.id !== project.id)
      .slice(0, 2);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-indigo-200 dark:border-indigo-900 rounded-full animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          Project Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-center max-w-md">
          We couldn&apos;t find the project you&apos;re looking for. It may have
          been moved or doesn&apos;t exist.
        </p>
        <Link
          href="/projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <HiArrowLeft />
          Back to Projects
        </Link>
      </div>
    );
  }

  // Extract features from long description
  const getFeaturesList = () => {
    const description = project.longDescription;
    const bulletPoints = description.match(/•[^\n]+/g) || [];
    return bulletPoints.map((point) => point.replace("•", "").trim());
  };

  const features = getFeaturesList();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 pt-16 pb-8 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button & Share */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm text-slate-700 dark:text-slate-300"
            >
              <HiArrowLeft className="mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm text-slate-700 dark:text-slate-300"
                aria-label="Copy link"
              >
                {copied ? (
                  <>
                    <HiOutlineClipboardCheck className="mr-2 text-green-600 dark:text-green-400" />
                    <span className="text-green-600 dark:text-green-400">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Share
                  </>
                )}
              </button>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm text-slate-700 dark:text-slate-300"
                  aria-label="GitHub repository"
                >
                  <FaGithub size={20} />
                </a>
              )}

              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm text-slate-700 dark:text-slate-300"
                  aria-label="Live demo"
                >
                  <HiOutlineExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Project Title & Category */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 mb-4 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                {project.category === "web"
                  ? "Web Development"
                  : project.category === "mobile"
                  ? "Mobile Development"
                  : "Full-Stack Development"}

                {project.featured && (
                  <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                {project.title}
              </h1>

              <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">
                {project.description}
              </p>
            </motion.div>
          </div>

          {/* Project Preview Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-5xl mx-auto relative"
          >
            <div className="bg-white dark:bg-slate-800 p-2 md:p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div
                className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden"
                style={{
                  background: projectBackgrounds[project.category],
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white bg-black bg-opacity-30 px-6 py-3 rounded-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Project actions for mobile */}
            <div className="flex md:hidden items-center justify-center gap-3 mt-8">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                >
                  <HiOutlineExternalLink size={18} />
                  View Live Demo
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <FaGithub size={18} />
                  View Source
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation and Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar for Desktop */}
            <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-24">
                <nav className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Project Contents
                    </h3>
                  </div>

                  <ul>
                    <li>
                      <button
                        onClick={() => scrollToSection(overviewRef)}
                        className={`w-full text-left px-4 py-3 flex items-center transition-colors ${
                          activeSection === "overview"
                            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700/50 border-l-2 border-indigo-600 dark:border-indigo-400"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/30"
                        }`}
                      >
                        <IoLayersOutline className="mr-3" size={18} />
                        Project Overview
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(featuresRef)}
                        className={`w-full text-left px-4 py-3 flex items-center transition-colors ${
                          activeSection === "features"
                            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700/50 border-l-2 border-indigo-600 dark:border-indigo-400"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/30"
                        }`}
                      >
                        <FaRegLightbulb className="mr-3" size={18} />
                        Features
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(techRef)}
                        className={`w-full text-left px-4 py-3 flex items-center transition-colors ${
                          activeSection === "tech"
                            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700/50 border-l-2 border-indigo-600 dark:border-indigo-400"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/30"
                        }`}
                      >
                        <BsCodeSlash className="mr-3" size={18} />
                        Technology Stack
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(galleryRef)}
                        className={`w-full text-left px-4 py-3 flex items-center transition-colors ${
                          activeSection === "gallery"
                            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700/50 border-l-2 border-indigo-600 dark:border-indigo-400"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/30"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-3"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        Gallery
                      </button>
                    </li>
                  </ul>

                  {/* Action Buttons */}
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 px-3 mb-3 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <HiOutlineExternalLink size={18} />
                        View Live Demo
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 px-3 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaGithub size={18} />
                        View Source Code
                      </a>
                    )}
                  </div>
                </nav>
              </div>
            </div>

            {/* Navigation Pills for Mobile */}
            <div className="lg:hidden mb-6 overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex space-x-2 min-w-max">
                <button
                  onClick={() => scrollToSection(overviewRef)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "overview"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => scrollToSection(featuresRef)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "features"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection(techRef)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "tech"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Tech Stack
                </button>
                <button
                  onClick={() => scrollToSection(galleryRef)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "gallery"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Gallery
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Overview Section */}
              <div
                id="overview-section"
                ref={overviewRef}
                className="mb-16 scroll-mt-20"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md border border-slate-200 dark:border-slate-700">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                    <IoLayersOutline
                      className="text-indigo-600 dark:text-indigo-400"
                      size={24}
                    />
                    Project Overview
                  </h2>

                  <div className="prose prose-slate dark:prose-invert prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 max-w-none">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: project.longDescription
                          .replace(/•([^\n]+)/g, "<li>$1</li>")
                          .replace(/\n\n/g, "<br />")
                          .replace(/<li>/g, '<li class="mb-1">'),
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div
                id="features-section"
                ref={featuresRef}
                className="mb-16 scroll-mt-20"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md border border-slate-200 dark:border-slate-700">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                    <FaRegLightbulb
                      className="text-indigo-600 dark:text-indigo-400"
                      size={24}
                    />
                    Key Features
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700 flex items-start gap-3"
                      >
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Stack Section */}
              <div
                id="tech-section"
                ref={techRef}
                className="mb-16 scroll-mt-20"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md border border-slate-200 dark:border-slate-700">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                    <BsCodeSlash
                      className="text-indigo-600 dark:text-indigo-400"
                      size={24}
                    />
                    Technology Stack
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center gap-3 aspect-square transition-transform hover:scale-105"
                      >
                        {techIcons[tech] ? (
                          <div className="h-10 w-10 flex items-center justify-center">
                            <img
                              src={techIcons[tech]}
                              alt={tech}
                              className="h-10 w-10"
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                            <BsCodeSlash size={28} />
                          </div>
                        )}
                        <p className="font-medium text-slate-700 dark:text-slate-300">
                          {tech}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery Section */}
              <div
                id="gallery-section"
                ref={galleryRef}
                className="mb-16 scroll-mt-20"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md border border-slate-200 dark:border-slate-700">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-indigo-600 dark:text-indigo-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    Project Gallery
                  </h2>

                  <div className="mb-4">
                    {/* Main gallery image */}
                    <div
                      className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-3"
                      style={{
                        background: projectBackgrounds[project.category],
                        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-white bg-black/30 px-4 py-2 rounded">
                          Project Screenshot {activeGalleryImage + 1}
                        </span>
                      </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {mockGalleryImages.map((image, index) => (
                        <button
                          key={image.id}
                          onClick={() => setActiveGalleryImage(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                            activeGalleryImage === index
                              ? "border-indigo-600 dark:border-indigo-400 opacity-100 scale-105"
                              : "border-transparent opacity-70 hover:opacity-100"
                          }`}
                          aria-label={`View ${image.alt}`}
                        >
                          <div
                            className="w-full h-full"
                            style={{
                              background: projectBackgrounds[project.category],
                            }}
                          ></div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Projects */}
              {getRelatedProjects().length > 0 && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                    Related Projects
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    {getRelatedProjects().map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        href={`/projects/${relatedProject.id}`}
                        className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col"
                      >
                        {/* Project Header */}
                        <div
                          className="h-40 relative overflow-hidden"
                          style={{
                            background:
                              projectBackgrounds[relatedProject.category],
                          }}
                        >
                          <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-slate-900/90 rounded-full text-xs font-medium text-indigo-600 dark:text-indigo-400">
                            {relatedProject.category === "web"
                              ? "Web"
                              : relatedProject.category === "mobile"
                              ? "Mobile"
                              : "Full-Stack"}
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-xl font-bold text-white bg-black/30 px-4 py-2 rounded">
                              {relatedProject.title}
                            </div>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-5">
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {relatedProject.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                            {relatedProject.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {relatedProject.technologies
                              .slice(0, 3)
                              .map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-medium text-slate-700 dark:text-slate-300"
                                >
                                  {techIcons[tech] && (
                                    <img
                                      src={techIcons[tech]}
                                      alt={tech}
                                      className="w-3 h-3 mr-1"
                                    />
                                  )}
                                  {tech}
                                </span>
                              ))}
                            {relatedProject.technologies.length > 3 && (
                              <span className="inline-flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-medium text-slate-700 dark:text-slate-300">
                                +{relatedProject.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                            View Project
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="ml-1 group-hover:translate-x-1 transition-transform"
                            >
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-xl overflow-hidden shadow-lg">
                <div className="p-8 md:p-10 relative overflow-hidden">
                  {/* Background decorations */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-2xl"></div>

                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Interested in working together?
                    </h3>
                    <p className="text-indigo-100 dark:text-indigo-200 mb-8 max-w-xl mx-auto">
                      I&apos;m always open to discussing new projects, creative
                      ideas or opportunities to be part of your vision.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      Get in touch
                      <BsBoxArrowUpRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label="Scroll to top"
      >
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
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
