'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { ParallaxSection, StaggerContainer } from "@/components/ui/parallax-section"
import { useRef } from "react"

const projects = [
  {
    title: "Clinical Mental Health Assessment",
    tech: "Python, Streamlit, scikit-learn, Pandas",
    github: "https://github.com/AkmalMohammed-1/Clinical-Mental-Health-Assesment",
    description: "Clinical mental health screening tool combining PHQ-9, GAD-7, and Epworth questionnaires with Logistic Regression risk prediction, built with Streamlit.",
    gradient: "from-[#1a3a2a] via-transparent to-transparent",
    glowHover: "hover:shadow-[0_0_40px_rgba(74,222,128,0.08)]",
    borderAccent: "border-l-2 border-l-[#4ade80]/30",
  },
  {
    title: "BondBloom",
    tech: "JavaScript, Node.js, Express, MongoDB",
    github: "https://github.com/AkmalMohammed-1/BondBloom",
    description: "BondBloom is a full-stack web platform designed to strengthen human connection, communication, and emotional well-being through gamification and community-driven growth. It transforms self-care into shared care.",
    gradient: "from-[#2d1f0e] via-transparent to-transparent",
    glowHover: "hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]",
    borderAccent: "border-l-2 border-l-[#fbbf24]/30",
  },
  {
    title: "RhythmicTunes",
    tech: "React, Tailwind CSS, Shadcn/ui, Vite",
    github: "https://github.com/AkmalMohammed-1/RhythmicTunes",
    description: "A web-based music streaming app that lets users browse, play, and manage their favorite tracks. Users can create playlists, shuffle through songs, and control playback with features like play, pause, next, and previous.",
    gradient: "from-[#1e1333] via-transparent to-transparent",
    glowHover: "hover:shadow-[0_0_40px_rgba(196,181,253,0.08)]",
    borderAccent: "border-l-2 border-l-[#c4b5fd]/30",
  },
  {
    title: "Replastix Innovations",
    tech: "Salesforce, Apex, Flows, Lightning App Builder",
    github: "https://github.com/AkmalMohammed-1/Replastix-innovations",
    description: "Salesforce platform implementation for Replastix Innovations, a plastic and recycle waste management organization. Automates and streamlines critical business processes, enhancing operational efficiency and promoting data-driven sustainability efforts.",
    gradient: "from-[#0f2233] via-transparent to-transparent",
    glowHover: "hover:shadow-[0_0_40px_rgba(125,211,252,0.08)]",
    borderAccent: "border-l-2 border-l-[#7dd3fc]/30",
  },
]

function TiltCard({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

    ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        ref={ref}
        className={`tilt-card ${className || ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.15s ease-out' }}
      >
        {children}
      </div>
    </a>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-10 md:px-20 relative">
      <div className="max-w-6xl mx-auto relative">
        <ParallaxSection>
          <h2 className="text-3xl font-bold text-white mb-12 heading-underline">Projects</h2>
        </ParallaxSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {projects.map((project) => (
            <TiltCard key={project.title} href={project.github}>
              <Card className={`glass-card border-white/[0.06] ${project.glowHover} ${project.borderAccent} transition-all duration-300 bg-gradient-to-r ${project.gradient} overflow-hidden h-full cursor-pointer`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <p className="text-xs text-neutral-500 mt-1.5 font-mono tracking-wide">{project.tech}</p>
                    </div>
                    <span className="p-2 rounded-lg border border-white/[0.06] text-neutral-500 shrink-0">
                      <ExternalLink size={14} />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-neutral-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
