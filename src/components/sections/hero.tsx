'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
} as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
}

export function HeroSection() {
  return (
    <>
      {/* ── Full-screen opening ─────────────────────────────────── */}
      <section
        id="hero"
        className="relative w-full h-screen bg-black overflow-hidden flex items-center"
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Floating particles for depth */}
        <FloatingParticles count={40} color="rgba(99,102,241,0.06)" />

        {/* Subtle radial glow behind content */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
          {/* Left */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-10 md:px-20"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm tracking-widest text-neutral-500 uppercase mb-4"
            >
              Computer Science &bull; SRM University AP
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold leading-tight gradient-text-shimmer"
            >
              Mohammed<br />Abdul Adam<br />Akmal
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-neutral-400 max-w-md text-base leading-relaxed"
            >
              Full-stack developer &amp; ML enthusiast building end-to-end
              applications — from MERN web apps to clinical AI tools and
              Salesforce CRM solutions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mt-10"
            >
              <a
                href="https://github.com/AkmalMohammed-1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akmalmohammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:adamakmal857@gmail.com"
                className="p-3 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <span className="flex items-center gap-1.5 text-neutral-600 text-sm ml-2">
                <MapPin size={14} /> Guntur, India
              </span>
            </motion.div>
          </motion.div>

          {/* Right — 3D Spline */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.div>
      </section>
    </>
  )
}

/* ── Exported separately so page.tsx can place it outside the sticky hero ── */
export function ProjectsShowcase() {
  return (
    <section className="bg-black w-full">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <p className="text-sm tracking-widest text-neutral-500 uppercase">What I Build</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              From idea to<br />
              <span className="gradient-text-shimmer">
                production
              </span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto text-base">
              4 projects across machine learning, full-stack web, and enterprise CRM — all live on GitHub.
            </p>
          </div>
        }
      >
        <div className="h-full w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
          {[
            {
              title: "Clinical Mental Health Assessment",
              tag: "Python · ML · Streamlit",
              desc: "Clinical mental health screening tool combining PHQ-9, GAD-7, and Epworth questionnaires with Logistic Regression risk prediction.",
              href: "https://github.com/AkmalMohammed-1/Clinical-Mental-Health-Assesment",
              bg: "bg-gradient-to-b from-[#1a3a2a] to-transparent",
              border: "border-[#4ade80]/20",
            },
            {
              title: "BondBloom",
              tag: "JavaScript · Node.js · MongoDB",
              desc: "Full-stack web platform for human connection and emotional well-being through gamification and community-driven growth.",
              href: "https://github.com/AkmalMohammed-1/BondBloom",
              bg: "bg-gradient-to-b from-[#2d1f0e] to-transparent",
              border: "border-[#fbbf24]/20",
            },
            {
              title: "RhythmicTunes",
              tag: "React · Tailwind · Vite",
              desc: "Web-based music streaming app with playlist management, playback controls, shuffle, and local preference storage.",
              href: "https://github.com/AkmalMohammed-1/RhythmicTunes",
              bg: "bg-gradient-to-b from-[#1e1333] to-transparent",
              border: "border-[#c4b5fd]/20",
            },
            {
              title: "Replastix Innovations",
              tag: "Salesforce · Apex · Flows",
              desc: "Salesforce platform for plastic waste management — automates inventory, order processing, and sustainability workflows.",
              href: "https://github.com/AkmalMohammed-1/Replastix-innovations",
              bg: "bg-gradient-to-b from-[#0f2233] to-transparent",
              border: "border-[#7dd3fc]/20",
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl border ${p.border} ${p.bg} p-5 flex flex-col gap-3 hover:border-white/20 transition-all duration-300 group`}
            >
              <span className="text-xs text-neutral-500 tracking-wide font-mono">{p.tag}</span>
              <h3 className="text-sm font-semibold text-white group-hover:text-neutral-200">{p.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
            </a>
          ))}
        </div>
      </ContainerScroll>
    </section>
  )
}


