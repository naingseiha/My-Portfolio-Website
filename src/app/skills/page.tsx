"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io5";

// Skills data organization
const skillsData = {
  mern: [
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-4xl text-green-500" />,
      description:
        "Database design, aggregation pipelines, performance optimization, Atlas cloud deployment.",
      level: 60,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Express.js",
      icon: <SiExpress className="text-4xl text-gray-500" />,
      description:
        "RESTful API design, middleware implementation, authentication, route handling.",
      level: 40,
      color: "from-gray-400 to-gray-600",
    },
    {
      title: "React.js",
      icon: <FaReact className="text-4xl text-blue-500" />,
      description:
        "Component architecture, hooks, context API, custom hooks, state management (Redux, Zustand).",
      level: 60,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      description:
        "Server-side JavaScript, asynchronous programming, microservices, real-time applications.",
      level: 40,
      color: "from-green-500 to-green-700",
    },
  ],
  nextjs: [
    {
      title: "Next.js App Router",
      icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />,
      description:
        "Server components, client components, layouts, loading states, error boundaries, streaming.",
      level: 40,
      color: "from-black to-gray-800 dark:from-white dark:to-gray-300",
    },
    {
      title: "Next.js API Routes",
      icon: <FaServer className="text-4xl text-purple-500" />,
      description:
        "API development, serverless functions, middleware, edge functions, authentication.",
      level: 40,
      color: "from-purple-400 to-purple-600",
    },
  ],
  mobile: [
    {
      title: "React Native with Expo",
      icon: <TbBrandReactNative className="text-4xl text-blue-400" />,
      description:
        "Cross-platform mobile app development, Expo SDK integration, native modules, performance optimization.",
      level: 60,
      color: "from-blue-300 to-blue-500",
    },
    {
      title: "iOS Development (SwiftUI)",
      icon: (
        <IoLogoApple className="text-4xl text-gray-800 dark:text-gray-200" />
      ),
      description:
        "Modern declarative UI framework for iOS, Swift programming, iOS app lifecycle and architecture.",
      level: 40,
      color: "from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400",
    },
    {
      title: "Android Development (Kotlin)",
      icon: <IoLogoAndroid className="text-4xl text-green-500" />,
      description:
        "Android app development using Kotlin, Jetpack libraries, material design principles.",
      level: 30,
      color: "from-green-400 to-green-600",
    },
  ],
  additional: [
    {
      title: "TypeScript",
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      description:
        "Static typing, interfaces, generics, advanced types, type inference.",
      level: 50,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss className="text-4xl text-teal-500" />,
      description:
        "Utility-first CSS framework, responsive design, custom configurations.",
      level: 50,
      color: "from-teal-400 to-teal-600",
    },
    {
      title: "GraphQL",
      icon: <SiGraphql className="text-4xl text-pink-600" />,
      description:
        "Schema design, resolvers, Apollo Client/Server, subscriptions.",
      level: 30,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "CI/CD",
      icon: <SiGithubactions className="text-4xl text-indigo-600" />,
      description:
        "GitHub Actions, Vercel deployment, automated testing, continuous integration.",
      level: 50,
      color: "from-indigo-500 to-indigo-700",
    },
  ],
};

// Categories and their descriptions
const categories = [
  {
    id: "mern",
    name: "MERN Stack",
    description:
      "The foundational JavaScript-based technology stack that powers my web development projects.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "Advanced React framework expertise for building production-grade applications with superior SEO and performance.",
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description:
      "Cross-platform and native mobile application development for iOS and Android platforms.",
  },
  {
    id: "additional",
    name: "Additional Skills",
    description:
      "Supporting technologies and tools that enhance my development workflow and project capabilities.",
  },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("mern");
  const [isInView, setIsInView] = useState({});
  const sectionRefs = useRef({});

  // Setup intersection observer for animations
  useEffect(() => {
    const observers = {};

    categories.forEach((category) => {
      const ref = sectionRefs.current[category.id];
      if (ref) {
        observers[category.id] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsInView((prev) => ({ ...prev, [category.id]: true }));
              if (entry.intersectionRatio > 0.5) {
                setActiveCategory(category.id);
              }
            }
          },
          { threshold: [0.1, 0.5] }
        );

        observers[category.id].observe(ref);
      }
    });

    // Cleanup observers
    return () => {
      Object.values(observers).forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);

  // Register refs for each section
  const registerRef = (id, el) => {
    if (el && !sectionRefs.current[id]) {
      sectionRefs.current[id] = el;
    }
  };

  // Scroll to section handler
  const scrollToSection = (id) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            Professional Skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-center max-w-3xl mx-auto text-slate-700 dark:text-slate-300 mb-12"
          >
            Explore my technical expertise and professional capabilities across
            various technologies and frameworks
          </motion.p>

          {/* Skills Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -rotate-45 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Skills Sections */}
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => registerRef(category.id, el)}
            className="mb-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView[category.id] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-3">{category.name}</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-3xl">
                {category.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {skillsData[category.id].map((skill, index) => (
                  <SkillCard
                    key={skill.title}
                    skill={skill}
                    index={index}
                    isVisible={isInView[category.id]}
                  />
                ))}
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </>
  );
}

// Enhanced Skill Card Component
function SkillCard({ skill, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700"
    >
      <div
        className="h-2 bg-gradient-to-r w-full block"
        style={{
          backgroundImage: `linear-gradient(to right, ${skill.color
            .split(" ")[0]
            .replace("from-", "")} , ${skill.color
            .split(" ")[1]
            .replace("to-", "")})`,
        }}
      ></div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          {skill.icon}
          <h3 className="text-xl font-bold ml-3">{skill.title}</h3>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 h-24 overflow-auto">
          {skill.description}
        </p>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Proficiency</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="text-sm font-semibold bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md"
            >
              {skill.level}%
            </motion.span>
          </div>

          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${skill.level}%` } : {}}
              transition={{
                duration: 1,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
