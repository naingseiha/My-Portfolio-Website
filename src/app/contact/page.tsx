"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formFocus, setFormFocus] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Animation for when the component comes into view
  useEffect(() => {
    setIsInView(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFormFocus(field);
  };

  const handleBlur = () => {
    setFormFocus(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("There was a problem sending your message. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="h-5 w-5" />,
      url: "https://github.com/naingseiha",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="h-5 w-5" />,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="h-5 w-5" />,
      url: "https://twitter.com/yourusername",
      color: "hover:bg-sky-500 hover:text-white",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="h-5 w-5" />,
      url: "https://discord.com/users/yourusername",
      color: "hover:bg-indigo-600 hover:text-white",
    },
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: <FiMail className="h-6 w-6" />,
      title: "Email",
      value: "naing.seiha@gmail.com",
      href: "mailto:naing.seiha@gmail.com",
      delay: 0.2,
    },
    {
      icon: <FiPhone className="h-6 w-6" />,
      title: "Phone",
      value: "+420 (778) 026-061",
      href: "tel:+420778026061",
      delay: 0.3,
    },
    {
      icon: <FiMapPin className="h-6 w-6" />,
      title: "Location",
      value: "Kamycka 1281, Praha Suchdol, Czech Republic",
      delay: 0.4,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen overflow-hidden">
      {/* Hero Section with 3D effect */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              Let's Connect
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you have any questions or
              just want to say hello!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-100 dark:border-slate-700"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="lg:order-2 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900"></div>

                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

                <div className="relative p-8 lg:p-12 text-white h-full flex flex-col justify-between z-10">
                  <div>
                    <motion.h2
                      className="text-2xl font-bold mb-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : 20,
                      }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    >
                      Contact Information
                    </motion.h2>
                    <motion.p
                      className="mb-12 opacity-90 text-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : 20,
                      }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                    >
                      I'd love to hear from you! Here's how you can reach me.
                    </motion.p>

                    <div className="space-y-8">
                      {contactMethods.map((method, index) => (
                        <motion.div
                          key={method.title}
                          className="flex items-start"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : 20,
                          }}
                          transition={{ duration: 0.8, delay: method.delay }}
                        >
                          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4 text-white">
                            {method.icon}
                          </div>
                          <div>
                            <p className="opacity-75 text-sm font-medium">
                              {method.title}
                            </p>
                            {method.href ? (
                              <a
                                href={method.href}
                                className="hover:underline text-lg transition-colors"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-lg">{method.value}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <p className="mb-4 font-medium text-lg">Connect with me</p>
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 ${social.color} hover:scale-110`}
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:order-1 p-8 lg:p-12 relative">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center h-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      key="success"
                    >
                      <div className="text-center max-w-md">
                        <motion.div
                          className="mx-auto mb-6 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300 rounded-full w-20 h-20 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <FiCheck className="w-10 h-10" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                          Message Sent!
                        </h3>
                        <p className="mb-6 text-slate-600 dark:text-slate-300">
                          Thank you for reaching out. I'll get back to you as
                          soon as possible.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      key="form"
                    >
                      <motion.h2
                        className="text-2xl font-bold mb-6 text-slate-900 dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Send a Message
                      </motion.h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <AnimatePresence>
                          {error && (
                            <motion.div
                              className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg flex items-center"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <svg
                                className="w-5 h-5 mr-2 text-red-600 dark:text-red-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              {error}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative"
                          >
                            <label
                              htmlFor="name"
                              className={`absolute left-3 ${
                                formFocus === "name" || formData.name
                                  ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-1"
                                  : "top-3 text-sm"
                              } transition-all duration-200 text-slate-500 dark:text-slate-400 z-10`}
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className={`w-full px-4 py-3 border ${
                                formFocus === "name"
                                  ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                  : "border-slate-300 dark:border-slate-600"
                              } rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200`}
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => handleFocus("name")}
                              onBlur={handleBlur}
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                          >
                            <label
                              htmlFor="email"
                              className={`absolute left-3 ${
                                formFocus === "email" || formData.email
                                  ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-1"
                                  : "top-3 text-sm"
                              } transition-all duration-200 text-slate-500 dark:text-slate-400 z-10`}
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className={`w-full px-4 py-3 border ${
                                formFocus === "email"
                                  ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                  : "border-slate-300 dark:border-slate-600"
                              } rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200`}
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => handleFocus("email")}
                              onBlur={handleBlur}
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="relative"
                        >
                          <label
                            htmlFor="subject"
                            className={`absolute left-3 ${
                              formFocus === "subject" || formData.subject
                                ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-1"
                                : "top-3 text-sm"
                            } transition-all duration-200 text-slate-500 dark:text-slate-400 z-10`}
                          >
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            className={`w-full px-4 py-3 border ${
                              formFocus === "subject"
                                ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                : "border-slate-300 dark:border-slate-600"
                            } rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200 appearance-none cursor-pointer`}
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={() => handleFocus("subject")}
                            onBlur={handleBlur}
                          >
                            <option value="">Please select a subject</option>
                            <option value="Job Opportunity">
                              Job Opportunity
                            </option>
                            <option value="Project Inquiry">
                              Project Inquiry
                            </option>
                            <option value="Collaboration">Collaboration</option>
                            <option value="General Question">
                              General Question
                            </option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="absolute right-3 top-3 pointer-events-none text-slate-400">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="relative"
                        >
                          <label
                            htmlFor="message"
                            className={`absolute left-3 ${
                              formFocus === "message" || formData.message
                                ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-1"
                                : "top-3 text-sm"
                            } transition-all duration-200 text-slate-500 dark:text-slate-400 z-10`}
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            className={`w-full px-4 py-3 border ${
                              formFocus === "message"
                                ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                : "border-slate-300 dark:border-slate-600"
                            } rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200 resize-none`}
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus("message")}
                            onBlur={handleBlur}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex justify-end"
                        >
                          <button
                            type="submit"
                            disabled={submitting}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                          >
                            {submitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                <span>Send Message</span>
                                <FiSend className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </button>
                        </motion.div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
