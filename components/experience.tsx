"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Award, BookOpen } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Your University Name",
    location: "Delhi, India",
    period: "2024 - Present",
    description: "Currently pursuing MCA with focus on Software Engineering, AI/ML, and Full Stack Development. Learning advanced programming concepts and working on real-world projects.",
    skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems", "AI/ML"],
    icon: GraduationCap,
    color: "blue"
  },
  {
    type: "project",
    title: "Self-Taught Developer Journey",
    organization: "Personal Learning",
    location: "Remote",
    period: "2023 - Present",
    description: "Embarked on a self-directed learning journey in web development. Built multiple projects while learning HTML, CSS, JavaScript, and modern frameworks.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Git/GitHub"],
    icon: Code,
    color: "green"
  },
  {
    type: "education",
    title: "Bachelor's Degree",
    organization: "Your Previous College",
    location: "India",
    period: "2021 - 2024",
    description: "Completed undergraduate studies which laid the foundation for my technical journey. Developed interest in programming and software development.",
    skills: ["Problem Solving", "Mathematics", "Basic Programming"],
    icon: GraduationCap,
    color: "purple"
  },
  {
    type: "achievement",
    title: "Personal Projects & Learning",
    organization: "Open Source & Personal",
    location: "Remote",
    period: "2023 - Present",
    description: "Consistently working on personal projects to apply learned concepts. Contributing to open source when possible and documenting the learning journey.",
    skills: ["Project Management", "Version Control", "Documentation", "Testing"],
    icon: Award,
    color: "orange"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🛤️ My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a curious learner to an aspiring full-stack developer - here's my educational and professional journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const colorClasses = {
                blue: "bg-blue-500/20 text-blue-500 border-blue-500/30",
                green: "bg-green-500/20 text-green-500 border-green-500/30",
                purple: "bg-purple-500/20 text-purple-500 border-purple-500/30",
                orange: "bg-orange-500/20 text-orange-500 border-orange-500/30"
              }

              return (
                <div 
                  key={index}
                  className="relative animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>
                  
                  <Card className="md:ml-16 p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${colorClasses[exp.color as keyof typeof colorClasses]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <Badge variant="outline" className="w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                        
                        <div className="text-muted-foreground mb-2">
                          <span className="font-medium">{exp.organization}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Always expanding my skillset! Currently diving deeper into advanced React patterns, 
              Node.js backend development, and exploring AI/ML integration in web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Next.js", "TypeScript", "Python", "Docker", "AWS", "GraphQL"].map((tech) => (
                <Badge key={tech} className="bg-primary/10 text-primary border-primary/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}