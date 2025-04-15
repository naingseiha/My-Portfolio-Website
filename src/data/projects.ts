export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    longDescription: `
      This e-commerce platform provides a complete shopping experience with features including:
      
      • User authentication and profile management
      • Product catalog with categories, filtering, and search
      • Shopping cart functionality
      • Secure payment processing with Stripe
      • Order history and tracking
      • Admin dashboard for product and order management
      
      The application is built with the MERN stack (MongoDB, Express.js, React, Node.js) and uses Redux for state management. The frontend is styled with TailwindCSS and features a responsive design for all device sizes.
    `,
    image: "/images/projects/ecommerce.jpg",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "TailwindCSS",
      "Stripe API",
    ],
    demoLink: "https://ecommerce-demo.example.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
    category: "fullstack",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness tracking application with iOS-specific features using SwiftUI and Android customizations in Kotlin.",
    longDescription: `
      This fitness tracking app helps users monitor their fitness journey and improve their health:
      
      • Workout tracking and custom workout plans
      • Calorie and nutrition tracking
      • Progress visualization with charts
      • Social sharing features
      • Integration with health devices
      • Personalized fitness goals
      
      The core application is built with React Native and Expo for cross-platform functionality. Platform-specific features are implemented using SwiftUI for iOS and Kotlin for Android to provide the best native experience on each platform.
    `,
    image: "/images/projects/fitness-app.jpg",
    technologies: [
      "React Native",
      "Expo",
      "SwiftUI",
      "Kotlin",
      "Firebase",
      "Neo4j",
    ],
    demoLink: "https://fitnessapp-demo.example.com",
    githubLink: "https://github.com/yourusername/fitness-mobile-app",
    featured: true,
    category: "mobile",
  },
  {
    id: 3,
    title: "Next.js Dashboard",
    description:
      "An analytics dashboard with real-time data visualization, authentication, and dark mode support.",
    longDescription: `
      This dashboard application provides businesses with insights through:
      
      • Real-time data visualization
      • Interactive charts and graphs
      • User authentication and role-based access
      • Dark mode support
      • Data export functionality
      • Customizable widgets
      
      Built with Next.js App Router for optimal performance and SEO. Uses server components for improved loading states and initial page load performance. The dashboard includes a responsive design that works well on all device sizes.
    `,
    image: "/images/projects/dashboard.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Chart.js",
    ],
    demoLink: "https://dashboard-demo.example.com",
    githubLink: "https://github.com/yourusername/nextjs-dashboard",
    featured: false,
    category: "web",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A full-stack social media platform with real-time chat, post sharing, and user interactions.",
    longDescription: `
      This social media platform enables users to connect and share:
      
      • User profiles and connections
      • Post creation with rich media support
      • Real-time chat and notifications
      • Comment and reaction systems
      • Content discovery feed
      • Privacy and security controls
      
      The application uses the MERN stack with Socket.io for real-time features. It includes a responsive design and progressive web app capabilities for mobile use.
    `,
    image: "/images/projects/social-media.jpg",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "Redis",
      "AWS S3",
    ],
    demoLink: "https://social-demo.example.com",
    githubLink: "https://github.com/yourusername/social-platform",
    featured: false,
    category: "fullstack",
  },
];
