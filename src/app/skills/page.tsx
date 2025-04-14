export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Professional Skills
      </h1>

      {/* MERN Stack */}
      <section id="mern" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
          MERN Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="MongoDB"
            description="Database design, aggregation pipelines, performance optimization, Atlas cloud deployment."
            level={90}
          />
          <SkillCard
            title="Express.js"
            description="RESTful API design, middleware implementation, authentication, route handling."
            level={85}
          />
          <SkillCard
            title="React.js"
            description="Component architecture, hooks, context API, custom hooks, state management (Redux, Zustand)."
            level={95}
          />
          <SkillCard
            title="Node.js"
            description="Server-side JavaScript, asynchronous programming, microservices, real-time applications."
            level={90}
          />
        </div>
      </section>

      {/* Next.js */}
      <section id="nextjs" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
          Next.js
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            title="Next.js App Router"
            description="Server components, client components, layouts, loading states, error boundaries, streaming."
            level={90}
          />
          <SkillCard
            title="Next.js API Routes"
            description="API development, serverless functions, middleware, edge functions, authentication."
            level={85}
          />
        </div>
      </section>

      {/* Mobile Development */}
      <section id="mobile" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
          Mobile Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="React Native with Expo"
            description="Cross-platform mobile app development, Expo SDK integration, native modules, performance optimization."
            level={90}
          />
          <SkillCard
            title="iOS Development (SwiftUI)"
            description="Modern declarative UI framework for iOS, Swift programming, iOS app lifecycle and architecture."
            level={75}
          />
          <SkillCard
            title="Android Development (Kotlin)"
            description="Android app development using Kotlin, Jetpack libraries, material design principles."
            level={70}
          />
        </div>
      </section>

      {/* Additional Skills */}
      <section id="additional" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
          Additional Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="TypeScript"
            description="Static typing, interfaces, generics, advanced types, type inference."
            level={90}
          />
          <SkillCard
            title="TailwindCSS"
            description="Utility-first CSS framework, responsive design, custom configurations."
            level={95}
          />
          <SkillCard
            title="GraphQL"
            description="Schema design, resolvers, Apollo Client/Server, subscriptions."
            level={80}
          />
          <SkillCard
            title="CI/CD"
            description="GitHub Actions, Vercel deployment, automated testing, continuous integration."
            level={85}
          />
        </div>
      </section>
    </div>
  );
}

// Skill Card Component
function SkillCard({
  title,
  description,
  level,
}: {
  title: string;
  description: string;
  level: number;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-700 dark:text-slate-300 mb-4">{description}</p>

      <div className="mt-2">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Proficiency</span>
          <span className="text-sm font-medium">{level}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
