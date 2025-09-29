"use client"

import { Card } from "@/components/ui/card"
import { Code, Lightbulb, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🚀 About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            I'm just getting started with my MCA journey this year — and with it, a commitment to becoming a Software
            Engineer who can build real-world AI-powered web applications, write clean code, and solve challenging
            problems with logic and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-in-left">
            <div className="mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Taught Background</h3>
              <p className="text-muted-foreground">
                I come from a self-taught background where I've already explored basic web development (HTML, CSS, JS)
                and built and broken a few mini projects along the way.
              </p>
            </div>
          </Card>

          <Card
            className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
              <p className="text-muted-foreground">
                Now I'm leveling up... step-by-step. My philosophy: "You don't need to be great to start. But you need
                to start to be great."
              </p>
            </div>
          </Card>

          <Card
            className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning in Public</h3>
              <p className="text-muted-foreground">
                So here I am — starting publicly. Learning in front of the world. If you're on a similar journey, let's
                connect and grow together!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
