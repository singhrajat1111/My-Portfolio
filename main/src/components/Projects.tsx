import { ArrowUpRight, GitBranch } from "lucide-react";

export default function Projects() {
  const projects = [

    {
      title: "RAJJO",
      description: "A Local-First Autonomous Desktop Agent. It is designed to plan and execute multi-step tasks directly on your computer with strict security boundaries, human-in-the-loop approval gating, and token-by-token streaming",
      github: "https://github.com/singhrajat1111/Rajjo",
      live: "#",
      tags: ["RAG", "Python", "Langraph", "Electron"]
    },
    {
      title: "Bunshin AI",
      description: "An AI Agent Marketplace with same origin; but alternate identities. Visit and you will never regret.",
      github: "https://github.com/singhrajat1111/bunshin-ai",
      live: "https://bunshin-ai-eight.vercel.app/",
      tags: ["AI-Agent", "RAG", "Next.js", "Python"]
    },
    {
      title: "SAAR AI",
      description: "An AI Data Analyst where you can upload your dataset and get insights with integration of Ai and ML so you will get detailed report about your data like a real data analyst does.",
      github: "https://github.com/singhrajat1111/Saar-AI",
      live: "https://saar-ai-azure.vercel.app/",
      tags: ["Python", "Machine Learning", "Data Analysis", "AI"]
    },
    {
      title: "Syncra",
      description: "A real-time chat based application built with modern web technologies. Experience seamless communication.",
      github: "https://github.com/singhrajat1111/chat_application",
      live: "https://syncra-red.vercel.app",
      tags: ["Real-time", "Chat", "Fullstack", "WebSocket"]
    },
    {
      title: "Astro-Rudra-K",
      description: "An astrology consultation platform with feature of kundli-generator",
      github: "https://github.com/Mr-Udit/Astro_Rudra_frontend",
      live: "https://astro-rudra-frontend-bgrc.onrender.com",
      tags: ["React", "Node.js", "Tailwind", "Python"]
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-6 md:px-16 z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">Selected Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
            >
              {/* Subtle hover glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              <div className="flex-grow z-10">
                <div className="flex gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white/10 text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wide">{project.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto z-10 pt-6 border-t border-white/10">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-neutral-300 transition-colors"
                >
                  Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-white transition-colors"
                >
                  <GitBranch className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
