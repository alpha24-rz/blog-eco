"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrainCircuit, Clock, Github, Linkedin, Mail, Rss, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"
import { EcoThemeToggle } from "@/components/eco-theme-toggle"

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

// Static article data for GitHub Pages
const articles = [
  {
    title: "IoT Sensors Revolutionizing Forest Conservation: Real-time Ecosystem Monitoring",
    description:
      "Discover how Internet of Things sensors are transforming forest management through continuous monitoring of biodiversity, soil health, and climate conditions.",
    category: "IoT Ecosystem",
    date: "May 15, 2024",
    slug: "iot-forest-conservation",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "AI-Powered Carbon Credit Systems: Blockchain Verification for Climate Action",
    description:
      "Explore how artificial intelligence and blockchain technology are creating transparent, verifiable carbon credit systems for sustainable development.",
    category: "Blockchain Sustainability",
    date: "June 2, 2024",
    slug: "ai-carbon-credits",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "NFT Conservation: Digital Assets Funding Ecosystem Restoration Projects",
    description:
      "Learn how Non-Fungible Tokens are being used to fund and track ecosystem restoration projects, creating new models for environmental conservation.",
    category: "NFT Conservation",
    date: "June 28, 2024",
    slug: "nft-ecosystem-restoration",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Smart Agriculture: IoT and AI Transforming Sustainable Farming Practices",
    description:
      "Explore how IoT sensors and AI algorithms are revolutionizing agriculture through precision farming, water conservation, and sustainable crop management.",
    category: "Smart Agriculture",
    date: "July 5, 2024",
    slug: "smart-agriculture-iot-ai",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Blockchain-Based Supply Chain Transparency for Sustainable Products",
    description:
      "Discover how blockchain technology is creating transparent supply chains that verify the sustainability and environmental impact of products.",
    category: "Blockchain Supply Chain",
    date: "July 18, 2024",
    slug: "blockchain-supply-chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "AI-Driven Wildlife Conservation: Computer Vision for Species Protection",
    description:
      "Learn how artificial intelligence and computer vision are being used to monitor wildlife populations and protect endangered species.",
    category: "AI Conservation",
    date: "August 3, 2024",
    slug: "ai-wildlife-conservation",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Renewable Energy NFTs: Tokenizing Clean Energy for Sustainable Investment",
    description:
      "Explore how NFTs are being used to represent renewable energy assets, creating new investment opportunities in clean energy projects.",
    category: "Energy NFTs",
    date: "August 15, 2024",
    slug: "renewable-energy-nfts",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Ocean Health Monitoring: IoT Buoys and AI Analytics for Marine Ecosystems",
    description:
      "Discover how IoT sensors deployed in oceans are providing real-time data on marine ecosystem health and climate change impacts.",
    category: "Marine IoT",
    date: "September 2, 2024",
    slug: "ocean-health-monitoring",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "The Future of Ecosystem 4.0: Integrating Technology for Planetary Health",
    description:
      "A comprehensive look at how IoT, AI, blockchain, and NFTs are converging to create sustainable solutions for global environmental challenges.",
    category: "Future Ecosystem",
    date: "September 20, 2024",
    slug: "future-ecosystem-4-0",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=600&h=400&auto=format&fit=crop",
  },
]

export default function ArticlesPage() {
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
            <Link href="/articles/" className="text-foreground transition-colors border-b-2 border-green-500 pb-1">
              Articles
            </Link>
            <Link href="/topics/" className="text-muted-foreground hover:text-foreground transition-colors">
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
          <h1 className="text-4xl font-bold mb-8">All Articles</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                description={article.description}
                category={article.category}
                date={article.date}
                slug={article.slug}
                image={article.image}
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
                  <span>ecosystem4.0.nft@gmail.com</span>
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

function ArticleCard({ title, description, category, date, slug, image }: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}/`} className="group">
      <div className="space-y-3">
        <div className="relative h-48 rounded-lg overflow-hidden border border-border group-hover:border-green-500/50 transition-colors">
          <Image src={image || "/placeholder.svg"} alt={`${title} thumbnail`} fill className="object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs text-green-500 mb-2">
            <BrainCircuit className="h-4 w-4" />
            <span>{category}</span>
          </div>
          <h3 className="font-medium group-hover:text-green-400 transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
