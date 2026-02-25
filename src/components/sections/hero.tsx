'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react"

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

        <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-center px-10 md:px-20">
            <p className="text-sm tracking-widest text-neutral-500 uppercase mb-4 animate-fade-in">
              Computer Science &bull; SRM University AP
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 leading-tight animate-fade-in">
              Mohammed<br />Abdul Adam<br />Akmal
            </h1>
            <p className="mt-6 text-neutral-400 max-w-md text-base leading-relaxed animate-fade-in">
              Full-stack developer &amp; ML enthusiast building end-to-end
              applications — from MERN web apps to clinical AI tools and
              Salesforce CRM solutions.
            </p>

            <div className="flex items-center gap-4 mt-10 animate-fade-in">
              <a
                href="https://github.com/AkmalMohammed-1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white/40 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akmalmohammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white/40 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:adamakmal857@gmail.com"
                className="p-3 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white/40 transition-all"
              >
                <Mail size={20} />
              </a>
              <span className="flex items-center gap-1.5 text-neutral-600 text-sm ml-2">
                <MapPin size={14} /> Guntur, India
              </span>
            </div>
          </div>

          {/* Right — 3D Spline */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 animate-bounce">
          <ArrowDown size={18} />
        </div>
      </section>

      {/* ── Parallax scroll reveal ───────────────────────────────── */}
      <section className="bg-black w-full">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-neutral-500 uppercase">What I Build</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                From idea to<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-600">
                  production
                </span>
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto text-base">
                3 projects across machine learning, full-stack web, and enterprise CRM — all live on GitHub.
              </p>
            </div>
          }
        >
          {/* Projects grid inside the parallax card */}
          <div className="h-full w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {[
              {
                title: "Clinical Mental Health Assessment",
                tag: "Python · ML · Streamlit",
                desc: "PHQ-9, GAD-7 & Epworth questionnaires + 89.2% accurate Logistic Regression models.",
                href: "https://github.com/AkmalMohammed-1/Clinical-Mental-Health-Assesment",
                color: "from-emerald-900/40 to-transparent",
              },
              {
                title: "RhythmicTunes",
                tag: "React · Tailwind · Vite",
                desc: "Music streaming app with playlist management, dark/light themes, and React Context.",
                href: "https://github.com/AkmalMohammed-1/RhythmicTunes",
                color: "from-violet-900/40 to-transparent",
              },
              {
                title: "Replastix Innovations",
                tag: "Salesforce · Apex · Flows",
                desc: "CRM solution for waste management with automated workflows and role-based access.",
                href: "https://github.com/AkmalMohammed-1/Replastix-Innovations",
                color: "from-sky-900/40 to-transparent",
              },
            ].map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl border border-white/10 bg-gradient-to-b ${p.color} p-5 flex flex-col gap-3 hover:border-white/20 transition-colors group`}
              >
                <span className="text-xs text-neutral-500 tracking-wide">{p.tag}</span>
                <h3 className="text-sm font-semibold text-white group-hover:text-neutral-200">{p.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </ContainerScroll>
      </section>
    </>
  )
}
