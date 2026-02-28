'use client'

import { GraduationCap, Award, Globe, BookOpen } from "lucide-react"
import { Timeline } from "@/components/ui/timeline"

export function EducationSection() {
  const timelineData = [
    {
      title: "2023 — Present",
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl p-6 border border-white/[0.06] bg-gradient-to-r from-[#1a1a2e] via-transparent to-transparent backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#2d2b55] shrink-0">
                <GraduationCap size={24} className="text-[#a78bfa]" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white">SRM University, Amaravati</h4>
                <p className="text-neutral-400 mt-1">B.Tech, Computer Science (AI &amp; ML)</p>
                <p className="text-neutral-300 text-sm mt-2">
                  <span className="font-medium text-white">Current GPA:</span> 8.8/10
                </p>
                <p className="text-neutral-500 text-sm mt-1">August 2023 — May 2027 (Expected)</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5 border border-white/[0.06] bg-gradient-to-r from-[#1f1a0e] via-transparent to-transparent backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-[#fbbf24]" />
              <h5 className="text-sm font-semibold text-white">Achievements</h5>
            </div>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>✦ Salesforce Developer — Agentblazer Champion Program (2025)</p>
              <p>✦ CODE4CHANGE KL University Hackathon Winner — 1st Place (2025)</p>
              <p>✦ Oracle Certified Java SE17 Developer(1Z0-829) (2026)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021 — 2023",
      content: (
        <div>
          <div className="rounded-2xl p-6 border border-white/[0.06] bg-gradient-to-r from-[#1e0e24] via-transparent to-transparent backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#3b1d50] shrink-0">
                <BookOpen size={24} className="text-[#e879f9]" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white">VIVA The School</h4>
                <p className="text-neutral-400 mt-1">Intermediate Education - CBSE</p>
                <p className="text-neutral-300 text-sm mt-2">
                  <span className="font-medium text-white">Percentage:</span> 86.0%
                </p>
                <p className="text-neutral-500 text-sm mt-1">June 2021 — May 2023</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2009 — 2021",
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl p-6 border border-white/[0.06] bg-gradient-to-r from-[#0e1a22] via-transparent to-transparent backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#163040] shrink-0">
                <BookOpen size={24} className="text-[#67e8f9]" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white">Sri Venkateswara Bala Kuteer</h4>
                <p className="text-neutral-400 mt-1">School Education - CBSE</p>

                <p className="text-neutral-500 text-sm mt-1">2009 — Mar 2021</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5 border border-white/[0.06] bg-gradient-to-r from-[#0e1f15] via-transparent to-transparent backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="text-[#6ee7b7]" />
              <h5 className="text-sm font-semibold text-white">Languages</h5>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              {[
                { lang: "Urdu", level: "Native" },
                { lang: "English", level: "Advanced" },
                { lang: "Hindi", level: "Advanced" },
                { lang: "Telugu", level: "Intermediate" },
              ].map((l) => (
                <div key={l.lang} className="flex justify-between text-neutral-300">
                  <span className="text-white font-medium">{l.lang}</span>
                  <span className="text-neutral-500">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="education" className="py-24 px-10 md:px-20 relative">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-white mb-4 heading-underline">Education</h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm mb-8">
          My academic journey from school to pursuing a B.Tech in AI &amp; ML.
        </p>
        <Timeline data={timelineData} />
      </div>
    </section>
  )
}
