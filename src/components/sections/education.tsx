import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Globe, BookOpen } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Education</h2>

        <div className="space-y-6">
          {/* Bachelor's Degree */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6 flex gap-4">
              <div className="p-3 rounded-lg bg-white/10 h-fit">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">SRM University, Amaravati</h3>
                  <span className="text-neutral-400 text-sm">August 2023 - May 2027 (Expected)</span>
                </div>
                <p className="text-neutral-400 mb-2">B.Tech, Computer Science (AI & ML)</p>
                <p className="text-neutral-300 text-sm">
                  <span className="font-medium text-white">Current GPA:</span> 8.8/10
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intermediate Education */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6 flex gap-4">
              <div className="p-3 rounded-lg bg-white/10 h-fit">
                <BookOpen size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">VIVA The School</h3>
                  <span className="text-neutral-400 text-sm">June 2021 - May 2023</span>
                </div>
                <p className="text-neutral-400 mb-2">Intermediate Education</p>
                <p className="text-neutral-300 text-sm">
                  <span className="font-medium text-white">Percentage:</span> 86.0%
                </p>
              </div>
            </CardContent>
          </Card>

          {/* School Education */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6 flex gap-4">
              <div className="p-3 rounded-lg bg-white/10 h-fit">
                <BookOpen size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">Sri Venkateswara Bala Kuteer</h3>
                  <span className="text-neutral-400 text-sm">2009 - Mar 2021</span>
                </div>
                <p className="text-neutral-400 mb-2">School Education</p>
                <p className="text-neutral-300 text-sm">
                  <span className="font-medium text-white">Percentage:</span> 72.8%
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Languages */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Globe size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Languages</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-neutral-300 text-sm">
                    <span className="text-white font-medium">Urdu:</span> Native
                  </li>
                  <li className="text-neutral-300 text-sm">
                    <span className="text-white font-medium">English:</span> Advanced
                  </li>
                  <li className="text-neutral-300 text-sm">
                    <span className="text-white font-medium">Hindi:</span> Advanced
                  </li>
                  <li className="text-neutral-300 text-sm">
                    <span className="text-white font-medium">Telugu:</span> Intermediate
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Certifications & Awards */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Award size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Achievements</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Certifications</h4>
                    <p className="text-neutral-300 text-sm">Salesforce Developer With Agentblazer Champion Program (2025)</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Awards & Activities</h4>
                    <ul className="space-y-1">
                      <li className="text-neutral-300 text-sm">KL University Hackathon Winner - 1st Place (2025)</li>
                      <li className="text-neutral-300 text-sm">International Model United Nations (IMUN) Delegate</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
