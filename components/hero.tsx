"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Coffee } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-muted-foreground">
                Currently available for opportunities
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              I'm Shivang,<br />
              <span className="text-muted-foreground">I build things</span><br />
              <span className="text-muted-foreground">for the web.</span>
            </h1>
          </div>

          <div className="space-y-4 text-lg leading-relaxed max-w-lg">
            <p className="text-muted-foreground">
              MCA student who fell in love with code. I'm passionate about creating 
              digital experiences that people actually want to use.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>📍 Delhi, India</span>
              <span>•</span>
              <span>🎓 MCA Student</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact" className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Let's Talk
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/shivangupadhyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shivang-upadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shivangupadhyy@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative lg:h-[600px] flex items-center justify-center">
          <div className="relative">
            {/* Code window mockup */}
            <div className="bg-card border rounded-lg shadow-xl p-6 space-y-4 max-w-sm">
              <div className="flex items-center gap-2 pb-2 border-b">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-xs text-muted-foreground ml-2">currently-working.js</p>
              </div>
              
              <div className="space-y-2 text-sm font-mono">
                <div className="text-muted-foreground">// Learning every day</div>
                <div className="flex">
                  <span className="text-blue-500">const</span>
                  <span className="ml-2">skills = [</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="text-green-500">'JavaScript',</div>
                  <div className="text-green-500">'React',</div>
                  <div className="text-green-500">'Node.js',</div>
                  <div className="text-muted-foreground">'...learning more'</div>
                </div>
                <div>];</div>
                <div className="pt-2">
                  <span className="text-blue-500">console</span>
                  <span className="text-muted-foreground">.log(</span>
                  <span className="text-green-500">'Ready to build!'</span>
                  <span className="text-muted-foreground">);</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              Learning Mode: ON
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
