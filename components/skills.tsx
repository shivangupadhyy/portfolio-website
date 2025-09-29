"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript"],
    color: "bg-chart-3/20 text-chart-3",
  },
  {
    title: "AI & Machine Learning",
    skills: ["OpenAI API", "LangChain", "Vector Databases", "AI Agents"],
    color: "bg-chart-4/20 text-chart-4",
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "DevOps Basics"],
    color: "bg-chart-5/20 text-chart-5",
  },
  {
    title: "Data Structures & Algorithms",
    skills: ["CPP DSA", "Problem Solving"],
    color: "bg-destructive/20 text-destructive",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">💻 Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Here's what I'm working with and continuously learning to build amazing projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`${category.color} hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
