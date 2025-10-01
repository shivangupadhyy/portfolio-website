"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Github, GitFork, Star, Users } from "lucide-react"

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

interface Repository {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

export function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  const username = "shivangupadhyy" // Replace with your GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        const userData = await userResponse.json()
        setStats(userData)

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        const reposData = await reposResponse.json()
        setRepos(reposData)
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [username])

  if (loading) {
    return (
      <section id="github" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">⚡ GitHub Activity</h2>
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">⚡ GitHub Activity</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out my coding journey and contributions on GitHub
          </p>
        </div>

        {/* GitHub Stats */}
        {stats && (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">{stats.public_repos}</div>
              <div className="text-sm text-muted-foreground">Public Repos</div>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-500">{stats.followers}</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-500">
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GitFork className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">
                {repos.reduce((acc, repo) => acc + repo.forks_count, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Forks</div>
            </Card>
          </div>
        )}

        {/* GitHub Contribution Graph */}
        <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">📊 Contribution Graph</h3>
          <div className="flex justify-center">
            <img
              src={`https://ghchart.rshah.org/00d084/${username}`}
              alt="GitHub Contribution Graph"
              className="rounded-lg w-full max-w-4xl"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            My GitHub contribution activity over the past year
          </p>
        </Card>

        {/* Recent Repositories */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">🚀 Recent Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo, index) => (
              <Card
                key={repo.name}
                className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-semibold text-lg truncate pr-2">{repo.name}</h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {repo.description || "No description available"}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <span className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <span className="flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Link to GitHub Profile */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}