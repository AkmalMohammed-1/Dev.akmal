import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "adamakmal857@gmail.com",
    href: "mailto:adamakmal857@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9885774118",
    href: "tel:+919885774118",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "AkmalMohammed-1",
    href: "https://github.com/AkmalMohammed-1",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "akmalmohammed",
    href: "https://www.linkedin.com/in/akmalmohammed/",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Get in Touch</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-colors">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-white/10">
                    <contact.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">{contact.label}</p>
                    <p className="text-sm text-neutral-300">{contact.value}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
