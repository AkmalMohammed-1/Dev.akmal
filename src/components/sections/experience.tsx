'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { ParallaxSection, StaggerContainer } from "@/components/ui/parallax-section"

const bullets = [
  "Completed an intensive 8-week program focused on Salesforce platform development, mastering data management, security, and process automation.",
  "Gained hands-on experience with Apex programming and Lightning Web Components (LWC), earning the Apex Specialist Superbadge.",
  "Built and customized user interfaces and managed object relationships within the Salesforce ecosystem.",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-10 md:px-20 relative">
      <div className="max-w-6xl mx-auto relative">
        <ParallaxSection>
          <h2 className="text-3xl font-bold text-white mb-12 heading-underline">Experience</h2>
        </ParallaxSection>

        <ParallaxSection delay={0.15}>
          <Card className="border-white/[0.06] border-l-2 border-l-[#a78bfa]/30 overflow-hidden relative bg-gradient-to-r from-[#1a1a2e] via-[#111] to-transparent backdrop-blur-sm">
            <CardContent className="p-8 flex gap-5">
              <div className="p-3 rounded-xl bg-[#2d2b55] h-fit shrink-0">
                <Briefcase size={24} className="text-[#a78bfa]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="text-xl font-semibold text-white">Salesforce Developer Virtual Intern</h3>
                  <span className="text-neutral-500 text-sm whitespace-nowrap">May 2025 – July 2025</span>
                </div>
                <p className="text-neutral-400 mb-4">SmartBridge · Remote</p>

                <StaggerContainer className="space-y-3" staggerDelay={0.12}>
                  {bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-3 group">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#a78bfa]/40 shrink-0 group-hover:bg-[#a78bfa] transition-colors" />
                      <p className="text-sm text-neutral-400 leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </StaggerContainer>
              </div>
            </CardContent>
          </Card>
        </ParallaxSection>
      </div>
    </section>
  )
}
