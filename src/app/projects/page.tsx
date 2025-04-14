import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Projects Portfolio
      </h1>

      {/* Project filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <Link
          href="/projects"
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          All
        </Link>
        <Link
          href="/projects?category=web"
          className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          Web Development
        </Link>
        <Link
          href="/projects?category=mobile"
          className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          Mobile Development
        </Link>
        <Link
          href="/projects?category=fullstack"
          className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          Full-Stack
        </Link>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-400">
                {project.title}
              </div>
              {/* Uncomment when you have images
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover"
              />
              */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 rounded-full text-sm">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex gap-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
