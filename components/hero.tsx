"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            {"👋 Hey there, I'm "}
            <span className="text-primary">Shivang Upadhyay!</span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            💻 Aspiring Full Stack Developer + AI Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12">📍 Based in Delhi | Learning in public</p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group animate-glow">
              <a href="#about" className="flex items-center gap-2">
                Learn More About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/shivangupadhyy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/shivang-upadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Shiv_ang07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200 hover:scale-110 transform"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:shivangupadhyy@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
