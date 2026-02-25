const skillCategories = [
  { label: "Languages", items: ["Python", "JavaScript", "HTML/CSS", "SQL", "Apex"] },
  { label: "Frameworks", items: ["React.js", "Node.js", "Express.js", "Streamlit", "Tailwind CSS", "Vite"] },
  { label: "Libraries", items: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Socket.io", "PixiJS"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { label: "Developer Tools", items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Salesforce", "Lightning App Builder"] },
  { label: "Concepts", items: ["Machine Learning", "REST APIs", "Data Visualization", "CRM Development", "Responsive Design"] },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-10 md:px-20 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>

        <div className="grid gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-sm font-medium text-neutral-400 mb-3">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
