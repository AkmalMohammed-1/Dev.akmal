'use client'

import { ParallaxSection, StaggerContainer } from "@/components/ui/parallax-section"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "HTML/CSS", "SQL", "Apex"],
    color: "from-indigo-500/20 to-indigo-500/5",
    dotColor: "bg-indigo-400",
  },
  {
    label: "Frameworks",
    items: ["React.js", "Node.js", "Express.js", "Streamlit", "Tailwind CSS", "Vite"],
    color: "from-violet-500/20 to-violet-500/5",
    dotColor: "bg-violet-400",
  },
  {
    label: "Libraries",
    items: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Socket.io", "PixiJS"],
    color: "from-emerald-500/20 to-emerald-500/5",
    dotColor: "bg-emerald-400",
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
    color: "from-amber-500/20 to-amber-500/5",
    dotColor: "bg-amber-400",
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Salesforce", "Lightning App Builder"],
    color: "from-sky-500/20 to-sky-500/5",
    dotColor: "bg-sky-400",
  },
  {
    label: "Concepts",
    items: ["Machine Learning", "REST APIs", "Data Visualization", "CRM Development", "Responsive Design"],
    color: "from-rose-500/20 to-rose-500/5",
    dotColor: "bg-rose-400",
  },
]

function AnimatedPills({ items, dotColor, delay = 0 }: { items: string[]; dotColor: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : undefined}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.05,
            ease: "easeOut",
          }}
          className="px-4 py-2 rounded-full text-sm bg-white/[0.03] border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.1)] transition-all duration-300 cursor-default"
        >
          {item}
        </motion.span>
      ))}
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-10 md:px-20 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ParallaxSection>
          <h2 className="text-3xl font-bold text-white mb-12 heading-underline">Skills</h2>
        </ParallaxSection>

        <StaggerContainer className="grid gap-8" staggerDelay={0.1}>
          {skillCategories.map((cat, catIndex) => (
            <div key={cat.label} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${cat.dotColor}`} />
                <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">{cat.label}</h3>
              </div>
              <AnimatedPills items={cat.items} dotColor={cat.dotColor} delay={catIndex * 0.08} />
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
