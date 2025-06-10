"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Cpu, Eye, Github, Linkedin, Mail, Rss, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"
import { EcoThemeToggle } from "@/components/eco-theme-toggle"

// Static topic data for GitHub Pages
const topics = [
  {
    title: "IoT Ecosystem Monitoring",
    description:
      "Explore how Internet of Things sensors are revolutionizing environmental monitoring and ecosystem management.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 12,
    slug: "iot-ecosystem",
  },
  {
    title: "AI Environmental Analytics",
    description:
      "Discover how artificial intelligence is analyzing environmental data to predict and prevent ecological disasters.",
    icon: <Eye className="h-6 w-6" />,
    count: 8,
    slug: "ai-environmental",
  },
  {
    title: "Blockchain Sustainability",
    description:
      "Learn about blockchain applications in carbon credits, supply chain transparency, and environmental verification.",
    icon: <Cpu className="h-6 w-6" />,
    count: 15,
    slug: "blockchain-sustainability",
  },
  {
    title: "NFT Conservation",
    description:
      "Explore how Non-Fungible Tokens are funding conservation projects and creating new models for environmental protection.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 6,
    slug: "nft-conservation",
  },
  {
    title: "Smart Agriculture",
    description:
      "Discover precision farming techniques using IoT sensors, AI analytics, and sustainable agricultural practices.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 9,
    slug: "smart-agriculture",
  },
  {
    title: "Renewable Energy Tech",
    description:
      "Stay updated with the latest technologies in renewable energy, smart grids, and sustainable energy systems.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 11,
    slug: "renewable-energy",
  },
]

export default function TopicsPage() {
  const router = useRouter()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            EcoSystem 4.0
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/articles/" className="text-muted-foreground hover:text-foreground transition-colors">
              Articles
            </Link>
            <Link href="/topics/" className="text-foreground transition-colors border-b-2 border-green-500 pb-1">
              Topics
            </Link>
            <Link href="/about/" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <EcoThemeToggle />
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/10"
              onClick={handleSubscribeClick}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-8">Topics</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <TopicCard
                key={index}
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                count={topic.count}
                slug={topic.slug}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                EcoSystem 4.0
              </Link>
              <p className="text-muted-foreground text-sm">
                Pioneering the future of sustainable ecosystems through technology.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Topics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    IoT Ecosystem Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    AI Environmental Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blockchain Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    NFT Conservation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Smart Agriculture
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Code Samples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Datasets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>ameyaudeshmukh@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} EcoSystem 4.0. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TopicCard({ title, description, icon, count, slug = "" }) {
  return (
    <Link href={`/articles/`} className="group">
      <Card className="bg-card border-border hover:border-green-500/50 transition-colors h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="bg-green-500/10 p-3 rounded-lg text-green-500">{icon}</div>
            <div className="bg-muted px-3 py-1 rounded-full text-sm">{count} articles</div>
          </div>
          <CardTitle className="text-xl mt-4 group-hover:text-green-400 transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <span className="text-green-500 text-sm group-hover:text-green-400 transition-colors">View articles →</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
