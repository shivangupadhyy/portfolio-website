"use client"

import { Card } from "@/components/ui/card"
import { Code2, BookOpen, Zap, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main about content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                A bit about me
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Turning curiosity into code
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Hey! I'm a computer science student who discovered programming and never looked back. 
                What started as curiosity about "how websites work" turned into late nights coding 
                and an obsession with building things that solve real problems.
              </p>
              <p>
                I'm currently pursuing my MCA, but most of my learning happens outside the classroom. 
                I believe in learning by doing, which is why I'm always working on projects that 
                challenge me to grow.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source, or planning my next project over coffee.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold">Currently focused on:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Full-stack web development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">React & Next.js ecosystem</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Backend with Node.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Building real-world projects</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Simple stats or highlights */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-2">Clean Code</h3>
            <p className="text-sm text-muted-foreground">
              Writing readable, maintainable code that others can understand
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold mb-2">Always Learning</h3>
            <p className="text-sm text-muted-foreground">
              Staying curious and exploring new technologies every day
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="font-semibold mb-2">Problem Solver</h3>
            <p className="text-sm text-muted-foreground">
              Breaking down complex problems into simple solutions
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold mb-2">Team Player</h3>
            <p className="text-sm text-muted-foreground">
              Collaborating effectively and learning from others
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
