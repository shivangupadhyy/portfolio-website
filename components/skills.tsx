"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: "comfortable" },
      { name: "React", level: "learning" },
      { name: "Next.js", level: "learning" },
      { name: "Tailwind CSS", level: "comfortable" },
      { name: "HTML/CSS", level: "comfortable" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "learning" },
      { name: "Express", level: "learning" },
      { name: "MongoDB", level: "basic" },
      { name: "REST APIs", level: "learning" }
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: "comfortable" },
      { name: "TypeScript", level: "learning" },
      { name: "Java", level: "basic" },
      { name: "Python", level: "basic" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: "comfortable" },
      { name: "GitHub", level: "comfortable" },
      { name: "VS Code", level: "comfortable" },
      { name: "Figma", level: "basic" }
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'comfortable':
      return 'bg-green-500/10 text-green-700 dark:text-green-400'
    case 'learning':
      return 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
    case 'basic':
      return 'bg-orange-500/10 text-orange-700 dark:text-orange-400'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's my current tech stack. I'm always learning something new!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-4 text-center">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${getLevelColor(skill.level)}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 mx-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Comfortable
            </span>
            <span className="inline-flex items-center gap-2 mx-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Learning
            </span>
            <span className="inline-flex items-center gap-2 mx-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Basic
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
