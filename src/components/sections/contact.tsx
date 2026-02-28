'use client'

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxSection, StaggerContainer } from "@/components/ui/parallax-section"
import { FloatingParticles } from "@/components/ui/floating-particles"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "adamakmal857@gmail.com",
    href: "mailto:adamakmal857@gmail.com",
    color: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
    glowHover: "hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9885774118",
    href: "tel:+919885774118",
    color: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    glowHover: "hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "AkmalMohammed-1",
    href: "https://github.com/AkmalMohammed-1",
    color: "bg-violet-500/20",
    iconColor: "text-violet-400",
    glowHover: "hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "akmalmohammed",
    href: "https://www.linkedin.com/in/akmalmohammed/",
    color: "bg-sky-500/20",
    iconColor: "text-sky-400",
    glowHover: "hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-10 md:px-20 relative overflow-hidden">
      {/* Floating particles background */}
      <FloatingParticles count={25} color="rgba(139,92,246,0.05)" />

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ParallaxSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-neutral-400 max-w-md mx-auto">
              Feel free to reach out — I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>
        </ParallaxSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer">
              <Card className={`glass-card glow-border border-white/10 ${contact.glowHover} transition-all duration-300`}>
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${contact.color}`}>
                    <contact.icon size={20} className={contact.iconColor} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">{contact.label}</p>
                    <p className="text-sm text-neutral-300 mt-0.5">{contact.value}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
