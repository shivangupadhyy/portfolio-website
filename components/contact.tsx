"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/shivang-upadhyay",
    description: "Connect with me professionally",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/shivangupadhyy",
    description: "Check out my code and projects",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/Shiv_ang07",
    description: "Follow my learning journey",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:shivang14071193@gmail.com",
    description: "Send me a message directly",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">📫 Connect With Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Thanks for stopping by! If you're working on cool projects or just want to connect, feel free to reach out.
            Let's build & learn together! 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Card
                key={link.name}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={link.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-200"
                >
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </Card>
            )
          })}
        </div>

        <Card
          className="p-8 bg-card/50 backdrop-blur-sm border-border/50 text-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-2xl font-semibold mb-4">🌟 Let's Build Something Amazing Together!</h3>
          <p className="text-muted-foreground mb-6">
            Whether you're a fellow learner, potential collaborator, or just want to say hi, I'd love to hear from you.
          </p>
          <Button size="lg" className="animate-glow">
            <a href="mailto:shivang14071193@gmail.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </Button>
        </Card>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2025 Shivang Upadhyay. Built with Next.js, Tailwind CSS, and lots of ☕
        </p>
      </footer>
    </section>
  )
}
