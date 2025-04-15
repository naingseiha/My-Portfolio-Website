import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // Professional milestones/timeline
  const milestones = [
    {
      year: "2022-Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Inc.",
      description:
        "Leading development of enterprise web applications using Next.js, React, and Node.js. Mentoring junior developers and implementing CI/CD pipelines.",
    },
    {
      year: "2020-2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      description:
        "Built robust mobile applications with React Native and developed backend services with Express.js and MongoDB.",
    },
    {
      year: "2018-2020",
      title: "Front-End Developer",
      company: "WebCraft Studios",
      description:
        "Created responsive web interfaces with React.js and collaborated with UI/UX designers to implement pixel-perfect designs.",
    },
    {
      year: "2016-2018",
      title: "Junior Developer",
      company: "TechStart Company",
      description:
        "Developed and maintained websites using JavaScript, HTML, and CSS while learning modern front-end frameworks.",
    },
  ];

  // Skills with proficiency levels
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "React Native", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 bg-[bottom_1px_center] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                About Me
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                I am a passionate Full-Stack Developer with over 6 years of
                experience building web and mobile applications. I specialize in
                creating high-performance, accessible, and user-friendly digital
                experiences using modern technologies.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md"
                >
                  Contact Me
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-md transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                {/* Replace with your profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-slate-700">
                  Your Photo
                </div>
                {/* Uncomment when you have an image
                <Image 
                  src="/images/profile.jpg" 
                  alt="Your Name" 
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              With a background in computer science and a passion for creating
              innovative solutions, I've been working in the tech industry for
              over 6 years. I'm driven by the constant evolution of web
              technologies and enjoy solving complex problems through clean,
              efficient code.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I specialize in JavaScript-based technologies, particularly the
              MERN stack (MongoDB, Express.js, React, Node.js) and have
              extensive experience with Next.js for building performant,
              SEO-friendly web applications. I'm also proficient in mobile
              development using React Native.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Beyond coding, I'm an advocate for accessibility and believe in
              creating web experiences that are inclusive for all users. I
              constantly strive to balance beautiful design with optimal
              performance and usability.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              When I'm not coding, you can find me hiking, reading tech blogs,
              or contributing to open-source projects. I'm always open to
              discussing new projects and opportunities to create something
              amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  React.js & Next.js
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  TypeScript
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Modern CSS & Sass
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Responsive Design
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Backend Development
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Node.js & Express.js
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  MongoDB & Mongoose
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  RESTful API Design
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Authentication & Security
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Database Optimization
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Mobile Development
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  React Native
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Expo Framework
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  iOS Development
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Android Development
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mobile UI/UX Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Professional Journey
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-500 dark:border-blue-400">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-10 ml-6">
                  <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border border-white dark:border-slate-800 bg-blue-500 dark:bg-blue-400"></div>
                  <time className="block mb-2 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
                    {milestone.year}
                  </time>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {milestone.company}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      University of Technology
                    </p>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                    2012 - 2016
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Graduated with honors. Specialized in software development and
                  database systems. Participated in multiple hackathons and
                  coding competitions.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-600">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    Key Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                      Data Structures & Algorithms
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                      Database Management
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                      Software Engineering
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                      AI & Machine Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            I'm currently available for freelance work and full-time positions.
            Let's build something amazing together!
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
