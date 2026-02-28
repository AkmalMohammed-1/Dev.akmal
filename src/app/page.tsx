'use client'

import { Navbar } from "@/components/navbar"
import { HeroSection, ProjectsShowcase } from "@/components/sections/hero"
import { EducationSection } from "@/components/sections/education"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"
import { StickyParallaxSection } from "@/components/ui/sticky-parallax-section"

export default function Home() {
  return (
    <main className="w-full bg-black noise-overlay">
      <Navbar />

      {/* Hero stays fixed, "From idea to production" slides over it */}
      <StickyParallaxSection zIndex={1}>
        <HeroSection />
      </StickyParallaxSection>

      {/* "From idea to production" — plain div so ContainerScroll's 80rem height lives in document flow */}
      <div className="relative z-[2] bg-black">
        <ProjectsShowcase />
      </div>

      {/* Education — plain div; Timeline internal scroll works naturally */}
      <div className="relative z-[3] bg-black">
        <div className="section-divider" />
        <EducationSection />
      </div>

      <StickyParallaxSection zIndex={4}>
        <div className="bg-black min-h-screen">
          <div className="section-divider" />
          <ExperienceSection />
        </div>
      </StickyParallaxSection>

      <StickyParallaxSection zIndex={5}>
        <div className="bg-black min-h-screen">
          <div className="section-divider" />
          <ProjectsSection />
        </div>
      </StickyParallaxSection>

      <StickyParallaxSection zIndex={6}>
        <div className="bg-black min-h-screen">
          <div className="section-divider" />
          <SkillsSection />
        </div>
      </StickyParallaxSection>

      <StickyParallaxSection zIndex={7}>
        <div className="bg-black min-h-screen">
          <div className="section-divider" />
          <ContactSection />
        </div>
      </StickyParallaxSection>

      <div className="relative z-[8] bg-black">
        <div className="section-divider" />
        <footer className="py-10 px-8">
          <p className="text-center text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Mohammed Abdul Adam Akmal
          </p>
          <p className="text-center text-xs text-neutral-700 mt-2">
            Built with Next.js, Framer Motion &amp; Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  )
}
