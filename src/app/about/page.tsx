"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaUserTie,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");
  const [animateSection, setAnimateSection] = useState({
    hero: false,
    bio: false,
    tabs: false,
    skills: false,
    education: false,
    experience: false,
  });

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setAnimateSection({
        hero: true, // Always animate hero on load
        bio: scrollPosition > 100,
        tabs: scrollPosition > windowHeight * 0.2,
        skills: scrollPosition > windowHeight * 0.4,
        education: scrollPosition > windowHeight * 0.6,
        experience: scrollPosition > windowHeight * 0.8,
      });
    };

    // Initial call to set visible sections
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Professional milestones/timeline
  const milestones = [
    {
      year: "2022-Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Inc.",
      location: "Prague, Czech Republic",
      description:
        "Leading development of enterprise web applications using Next.js, React, and Node.js. Mentoring junior developers and implementing CI/CD pipelines. Successfully delivered projects for major clients with 30% improved performance metrics.",
      achievements: [
        "Led a team of 5 developers to deliver 3 major product features ahead of schedule",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Optimized database queries resulting in 50% faster page loads",
      ],
    },
    {
      year: "2020-2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Phnom Penh, Cambodia",
      description:
        "Built robust mobile applications with React Native and developed backend services with Express.js and MongoDB. Collaborated with design and product teams to create seamless user experiences across platforms.",
      achievements: [
        "Developed 4 mobile applications with combined 50,000+ downloads",
        "Architected scalable backend services handling 1M+ API requests daily",
        "Reduced app load time by 35% through performance optimizations",
      ],
    },
    {
      year: "2018-2020",
      title: "Front-End Developer",
      company: "WebCraft Studios",
      location: "Phnom Penh, Cambodia",
      description:
        "Created responsive web interfaces with React.js and collaborated with UI/UX designers to implement pixel-perfect designs. Specialized in building accessible, high-performance user interfaces.",
      achievements: [
        "Rebuilt company's flagship product UI increasing user engagement by 25%",
        "Implemented accessibility standards achieving WCAG AA compliance",
        "Created reusable component library reducing development time by 30%",
      ],
    },
    {
      year: "2016-2018",
      title: "Junior Developer",
      company: "TechStart Company",
      location: "Phnom Penh, Cambodia",
      description:
        "Developed and maintained websites using JavaScript, HTML, and CSS while learning modern front-end frameworks. Assisted senior developers with code reviews and bug fixes.",
      achievements: [
        "Built and deployed 12+ client websites with responsive designs",
        "Contributed to internal tools that improved team productivity",
        'Received "Rising Talent Award" for exceptional growth and contributions',
      ],
    },
  ];

  // Education details
  const education = [
    {
      degree: "Master of Informatics",
      institution: "Czech University of Life Science Prague",
      location: "Prague, Czech Republic",
      period: "2023-2025",
      description:
        'Focusing on advanced data analysis, machine learning applications, and information systems design. Thesis on "Optimizing Neural Networks for Real-time Data Processing in Web Applications."',
      courses: [
        "Advanced Algorithms",
        "Machine Learning",
        "Information System Design",
        "Data Mining",
        "Network Security",
      ],
    },
    {
      degree: "Informatics for Higher Education",
      institution: "National Institute of Education",
      location: "Phnom Penh, Cambodia",
      period: "2018-2019",
      description:
        "Specialized in educational technology and digital learning platforms. Developed innovative teaching methodologies using technology integration.",
      courses: [
        "Educational Technology",
        "Digital Pedagogy",
        "Learning Management Systems",
        "Interactive Learning Design",
        "Assessment Technologies",
      ],
    },
    {
      degree: "Computer Science and Engineering",
      institution: "Royal University of Phnom Penh",
      location: "Phnom Penh, Cambodia",
      period: "2013-2017",
      description:
        "Foundation in computer science principles, software engineering, and systems design. Graduated with honors and received recognition for innovative final project.",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Software Engineering",
        "Web Development",
      ],
    },
  ];

  // Skills with proficiency levels
  const skills = [
    { name: "JavaScript", level: 95, category: "languages" },
    { name: "TypeScript", level: 85, category: "languages" },
    { name: "Python", level: 75, category: "languages" },
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "Vue.js", level: 70, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 85, category: "backend" },
    { name: "MongoDB", level: 75, category: "database" },
    { name: "PostgreSQL", level: 70, category: "database" },
    { name: "React Native", level: 80, category: "mobile" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "AWS", level: 65, category: "tools" },
  ];

  // Filter skills by category
  const getSkillsByCategory = (category) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section with Parallax effect */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 -top-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/4 bottom-1/3 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animateSection.hero ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="md:w-1/2">
              <div className="mb-4 inline-block">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                  </span>
                  Full-Stack Developer
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block">Hello, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
                  Naing Seiha
                </span>
              </h1>

              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                A passionate Full-Stack Developer with international experience
                building high-performance web and mobile applications. I combine
                technical expertise with creative problem-solving to create
                exceptional digital experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 flex items-center gap-2"
                >
                  <FaUserTie className="text-lg" />
                  Contact Me
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Download CV
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                >
                  <FaTwitter size={22} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl h-full w-full">
                  {/* Fallback text that shows if image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700">
                    NS
                  </div>

                  <Image
                    src="/images/profile3.jpg"
                    alt="Naing Seiha"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: animateSection.hero ? 1 : 0,
              y: animateSection.hero ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-100 dark:border-slate-700 transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                1+
              </div>
              <div className="text-slate-700 dark:text-slate-300">
                Years Experience
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-100 dark:border-slate-700 transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                5+
              </div>
              <div className="text-slate-700 dark:text-slate-300">
                Projects Completed
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-100 dark:border-slate-700 transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                8+
              </div>
              <div className="text-slate-700 dark:text-slate-300">
                Technologies
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-100 dark:border-slate-700 transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                10+
              </div>
              <div className="text-slate-700 dark:text-slate-300">
                In-Development Projects
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section with Interactive Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animateSection.bio ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
                  My Journey
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 transform scale-x-50 origin-center transition-transform group-hover:scale-x-100"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                  <svg
                    className="h-6 w-6 text-indigo-500 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Professional Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With a rich multicultural background and education spanning
                  three countries, I bring a unique global perspective to every
                  project. My passion lies in creating technology that bridges
                  cultural gaps and solves real-world problems across diverse
                  markets.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  I'm committed to building applications that are not only
                  technically sound but also culturally relevant and accessible
                  to users worldwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <svg
                    className="h-6 w-6 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  Technical Approach
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My technical philosophy centers on creating maintainable,
                  scalable solutions that stand the test of time. I believe in
                  choosing the right technology for each specific problem rather
                  than following trends blindly.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  By balancing cutting-edge technologies with proven
                  methodologies, I deliver solutions that are both innovative
                  and reliable, giving clients the best of both worlds.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <svg
                    className="h-6 w-6 text-purple-500 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Work Philosophy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I approach every project with a blend of creativity and
                  methodical planning. My work style emphasizes clear
                  communication, attention to detail, and delivering beyond
                  expectations. I believe in building relationships, not just
                  code.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Whether working with startups or established enterprises, I
                  bring the same level of dedication and commitment to
                  excellence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                  <svg
                    className="h-6 w-6 text-cyan-500 dark:text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Continuous Learning
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Technology never stands still, and neither do I. My
                  educational journey spans multiple countries and disciplines,
                  reflecting my commitment to lifelong learning and personal
                  growth.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  I dedicate time each week to learning new technologies,
                  methodologies, and best practices, ensuring my skills remain
                  cutting-edge in this rapidly evolving industry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tabs Section for Experience, Education, Skills */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animateSection.tabs ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center gap-2
                  ${
                    activeTab === "experience"
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
                  }`}
              >
                <FaBriefcase />
                Professional Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center gap-2
                  ${
                    activeTab === "education"
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
                  }`}
              >
                <FaGraduationCap />
                Education
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center gap-2
                  ${
                    activeTab === "skills"
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
                  }`}
              >
                <FaLaptopCode />
                Skills & Technologies
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-600">
              {/* Experience Content */}
              <div
                className={`${
                  activeTab === "experience" ? "block" : "hidden"
                } p-8`}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                  Professional Journey
                </h2>

                <div className="relative border-l-2 border-indigo-500 dark:border-indigo-400 pl-8 pb-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-12 relative"
                    >
                      <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-slate-700 bg-indigo-500 dark:bg-indigo-400"></div>

                      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {milestone.title}
                          </h3>
                          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm font-medium rounded-full">
                            {milestone.year}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                            {milestone.company}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400">
                            •
                          </span>
                          <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1 text-sm">
                            <FaMapMarkerAlt className="text-slate-400" />
                            {milestone.location}
                          </span>
                        </div>

                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          {milestone.description}
                        </p>

                        {milestone.achievements && (
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <svg
                                className="h-4 w-4 text-indigo-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {milestone.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                                >
                                  <svg
                                    className="h-4 w-4 text-green-500 mt-1 flex-shrink-0"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Content */}
              <div
                className={`${
                  activeTab === "education" ? "block" : "hidden"
                } p-8`}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                  Educational Background
                </h2>

                <div className="grid gap-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-600 p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm font-medium rounded-full">
                          {edu.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                          {edu.institution}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          •
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1 text-sm">
                          <FaMapMarkerAlt className="text-slate-400" />
                          {edu.location}
                        </span>
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 mb-6">
                        {edu.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                        <h4 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <svg
                            className="h-4 w-4 text-indigo-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-700/70 text-slate-800 dark:text-slate-300 rounded-lg text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Content */}
              <div
                className={`${activeTab === "skills" ? "block" : "hidden"} p-8`}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                  Technical Expertise
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Languages */}
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-indigo-500"
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
                      Programming Languages
                    </h3>
                    <div className="space-y-4">
                      {getSkillsByCategory("languages").map((skill) => (
                        <div key={skill.name} className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Frontend */}
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Frontend Development
                    </h3>
                    <div className="space-y-4">
                      {getSkillsByCategory("frontend").map((skill) => (
                        <div key={skill.name} className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                      Backend Development
                    </h3>
                    <div className="space-y-4">
                      {getSkillsByCategory("backend").map((skill) => (
                        <div key={skill.name} className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Skills */}
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                      Tools & Other Technologies
                    </h3>
                    <div className="space-y-4">
                      {[
                        ...getSkillsByCategory("tools"),
                        ...getSkillsByCategory("database"),
                        ...getSkillsByCategory("mobile"),
                      ].map((skill) => (
                        <div key={skill.name} className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-orange-600 to-amber-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 dark:from-indigo-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="absolute opacity-10">
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Collaborate on Your Next Project?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Whether you need a complete web application, mobile app, or
              technical consultation, I'm here to help turn your vision into
              reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <FaUserTie className="text-lg" />
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors font-medium flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add this style for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
