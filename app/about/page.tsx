"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Rss, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"
import { EcoThemeToggle } from "@/components/eco-theme-toggle"

export default function AboutPage() {
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
            <Link href="/topics/" className="text-muted-foreground hover:text-foreground transition-colors">
              Topics
            </Link>
            <Link href="/about/" className="text-foreground transition-colors border-b-2 border-green-500 pb-1">
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About EcoSystem 4.0</h1>

          <div className="prose prose-invert prose-green max-w-none dark:prose-invert">
            <p className="text-xl text-muted-foreground mb-8">
              EcoSystem 4.0 is dedicated to exploring the intersection of technology and environmental sustainability,
              focusing on IoT sensors, AI analytics, blockchain verification, and NFT conservation for ecosystem
              preservation.
            </p>

            <h2 className="text-foreground">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to showcase how emerging technologies can be leveraged to address environmental challenges
              and create sustainable solutions for ecosystem management. We bridge the gap between technological
              innovation and environmental conservation.
            </p>

            <h2 className="text-foreground">What We Cover</h2>
            <p className="text-muted-foreground">
              At EcoSystem 4.0, we focus on four key technological pillars for environmental sustainability:
            </p>

            <ul className="text-muted-foreground">
              <li>
                <strong className="text-foreground">IoT Ecosystem Monitoring</strong>: Real-time environmental sensors,
                wildlife tracking systems, and smart environmental monitoring networks.
              </li>
              <li>
                <strong className="text-foreground">AI Environmental Analytics</strong>: Machine learning for climate
                prediction, biodiversity analysis, and ecosystem health assessment.
              </li>
              <li>
                <strong className="text-foreground">Blockchain Sustainability</strong>: Transparent carbon credit
                systems, supply chain verification, and environmental impact tracking.
              </li>
              <li>
                <strong className="text-foreground">NFT Conservation</strong>: Digital assets funding conservation
                projects, tokenized environmental assets, and sustainable investment models.
              </li>
            </ul>

            <h2 className="text-foreground">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a future where technology and nature work in harmony, where digital innovations support
              ecosystem restoration, and where blockchain and NFT technologies create new economic models for
              environmental conservation.
            </p>
          </div>
        </div>
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
