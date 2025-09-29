"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Target, Calendar, Briefcase, Code2 } from "lucide-react"

const goals = [
  {
    icon: Calendar,
    title: "Master Full Stack Web Development",
    description: "React + Node.js + Next.js",
    status: "in-progress",
  },
  {
    icon: Target,
    title: "Learn AI Agent Development",
    description: "OpenAI, LangChain, and vector databases",
    status: "in-progress",
  },
  {
    icon: CheckCircle,
    title: "Practice DSA Daily",
    description: "Java with Striver & NeetCode Sheets",
    status: "active",
  },
  {
    icon: Calendar,
    title: "Build Real Projects",
    description: "Contribute on GitHub regularly",
    status: "active",
  },
  {
    icon: Briefcase,
    title: "Land Remote Internship/Job",
    description: "Strong off-campus opportunity by 2026–27",
    status: "planned",
  },
]

export function Goals() {
  return (
    <section id="goals" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🎯 My Current Goals (2025–2027)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Here's my roadmap to becoming a successful Software Engineer with expertise in AI and full-stack
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <Card
                key={goal.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      goal.status === "active"
                        ? "bg-primary/20"
                        : goal.status === "in-progress"
                          ? "bg-accent/20"
                          : "bg-muted/20"
                    } group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        goal.status === "active"
                          ? "text-primary"
                          : goal.status === "in-progress"
                            ? "text-accent"
                            : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                    <div className="mt-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          goal.status === "active"
                            ? "bg-primary/20 text-primary"
                            : goal.status === "in-progress"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted/20 text-muted-foreground"
                        }`}
                      >
                        {goal.status === "active"
                          ? "✅ Active"
                          : goal.status === "in-progress"
                            ? "🔄 In Progress"
                            : "📅 Planned"}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
