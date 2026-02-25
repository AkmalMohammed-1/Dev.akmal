import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { EducationSection } from "@/components/sections/education"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <footer className="py-8 px-8 border-t border-white/10">
        <p className="text-center text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Mohammed Abdul Adam Akmal
        </p>
      </footer>
    </main>
  )
}
