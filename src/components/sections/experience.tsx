import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-10 md:px-20 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Experience</h2>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6 flex gap-4">
            <div className="p-3 rounded-lg bg-white/10 h-fit">
              <Briefcase size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Salesforce Developer Virtual Intern</h3>
              <p className="text-neutral-400">SmartBridge &middot; Remote</p>
              <p className="text-neutral-500 text-sm mt-1">May 2025 &ndash; July 2025</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li className="flex gap-2">
                  <span className="text-neutral-500 mt-1.5 shrink-0">&bull;</span>
                  Completed an intensive 8-week program focused on Salesforce platform development, mastering data management, security, and process automation.
                </li>
                <li className="flex gap-2">
                  <span className="text-neutral-500 mt-1.5 shrink-0">&bull;</span>
                  Gained hands-on experience with Apex programming and Lightning Web Components (LWC), earning the Apex Specialist Superbadge.
                </li>
                <li className="flex gap-2">
                  <span className="text-neutral-500 mt-1.5 shrink-0">&bull;</span>
                  Built and customized user interfaces and managed object relationships within the Salesforce ecosystem.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
