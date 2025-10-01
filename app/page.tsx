import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { GitHubSection } from "@/components/github-section"
import { Goals } from "@/components/goals"
import { Learning } from "@/components/learning"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      {/* <Projects /> */}
      <GitHubSection />
      {/* <Goals /> */}
      <Learning />
      <Contact />
    </main>
  )
}
