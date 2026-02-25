import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Clinical Mental Health Assessment",
    tech: "Python, Streamlit, scikit-learn, Pandas",
    github: "https://github.com/AkmalMohammed-1/Clinical-Mental-Health-Assesment",
    bullets: [
      "Built a mental health screening tool combining PHQ-9, GAD-7, and Epworth questionnaires with Logistic Regression models achieving 89.2% accuracy for depression and 86.7% for anxiety risk prediction.",
      "Deployed an interactive Streamlit web application with real-time risk assessment, clinical vs. ML comparison, and personalized recommendations.",
    ],
  },
  {
    title: "RhythmicTunes",
    tech: "React, Tailwind CSS, Shadcn/ui, Vite",
    github: "https://github.com/AkmalMohammed-1/RhythmicTunes",
    bullets: [
      "Created a music streaming app with full playback controls, shuffle, repeat modes, and playlist management using React Context API.",
      "Designed a responsive UI with dark/light theme support, genre-based browsing, artist collections, and a personal library tracking listening statistics.",
    ],
  },
  {
    title: "Replastix Innovations",
    tech: "Salesforce, Apex, Flows, Lightning App Builder",
    github: "https://github.com/AkmalMohammed-1/Replastix-Innovations",
    bullets: [
      "Built a Salesforce CRM solution for a waste management organization, automating inventory tracking, order processing, and restock workflows with Apex triggers and Flows.",
      "Configured role-based access controls and validation rules ensuring data consistency across inventory, sales, and recycling teams.",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-white/5 border-white/10 hover:border-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{project.tech}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all shrink-0"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-neutral-500 mt-1.5 shrink-0">&bull;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
