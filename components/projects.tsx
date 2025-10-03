"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"

const projects = [
  {
    title: "This Portfolio",
    description: "You're looking at it! Built this from scratch to learn Next.js and showcase my work. Features dark mode, responsive design, and some cool interactions.",
    image: "/placeholder.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/shivangupadhyy/portfolio-website",
    status: "Live",
    date: "2024"
  },
  {
    title: "Learning Project #1",
    description: "Currently building a task management app to practice full-stack development. It's my playground for learning React hooks and Node.js APIs.",
    image: "/placeholder.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Building",
    date: "2024"
  },
  {
    title: "Coming Soon",
    description: "Planning something cool with AI integration. Stay tuned as I learn and build more projects throughout my MCA journey.",
    image: "/placeholder.jpg",
    tech: ["?", "?", "?"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Planning",
    date: "2024"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Things I've Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project teaches me something new. Here's what I've been working on lately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                    className="backdrop-blur-sm"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl !== "#" && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl !== "#" && (
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}