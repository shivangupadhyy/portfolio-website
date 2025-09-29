"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Database, Globe, Container, Code } from "lucide-react"

const learningAreas = [
  {
    icon: Globe,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
    color: "text-primary",
  },
  {
    icon: Code,
    title: "Backend Technologies",
    items: ["Node.js", "Express", "MongoDB"],
    color: "text-accent",
  },
  {
    icon: Brain,
    title: "Programming & DSA",
    items: ["Java + DSA", "Striver Sheet", "NeetCode Sheets"],
    color: "text-chart-3",
  },
  {
    icon: Database,
    title: "AI & Machine Learning",
    items: ["LangChain", "OpenAI API", "Vector Stores"],
    color: "text-chart-4",
  },
  {
    icon: Container,
    title: "DevOps & Tools",
    items: ["Docker", "DevOps Fundamentals"],
    color: "text-chart-5",
  },
]

export function Learning() {
  return (
    <section id="learning" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">📚 I'm Currently Learning</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            My learning philosophy: "You don't need to be great to start. But you need to start to be great."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {learningAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <Card
                key={area.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/50 group-hover:scale-110 transition-transform duration-200">
                    <Icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <h3 className="font-semibold">{area.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <Badge key={item} variant="outline" className="hover:scale-105 transition-transform duration-200">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <Card
          className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">💡 My Learning Philosophy</h3>
          </div>
          <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
            "You don't need to be great to start. But you need to start to be great."
          </blockquote>
          <p className="mt-4 text-muted-foreground">
            So here I am — starting publicly. Learning in front of the world. If you're on a similar journey, let's
            connect and grow together!
          </p>
        </Card>
      </div>
    </section>
  )
}
