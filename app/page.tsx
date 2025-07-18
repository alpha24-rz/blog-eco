"use client"

import { useState, useRef, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Clock, Cpu, Eye, Github, Instagram, Mail, Rss, Twitter, Phone } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { EcoThemeToggle } from "@/components/eco-theme-toggle"

// Definisikan interface untuk props dari ArticleCard dan FeaturedCard
interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  icon?: React.ReactNode; // opsional, jika tidak selalu ada
  slug?: string; // opsional, jika tidak selalu ada
  className?: string;
}

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const newsletterRef = useRef<HTMLElement>(null)

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Pioneering the Future of <span className="text-green-500">Sustainable Ecosystems</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Exploring IoT, AI, Blockchain, and NFT innovations for environmental sustainability and ecosystem
                preservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 rounded-sm">
                  <Link href="https://platform-eco-4-0.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Mvp Platform
                  </Link>
                </Button>

                <Button variant="outline" className="border-border hover:bg-muted" onClick={scrollToNewsletter}>
                  Join Newsletter
                </Button>
              </div>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden ">
              <Image
                src="/img/Nature_Preservation_And_Conservation_Earth_Care__Nature__Earth__Environment_PNG_Transparent_Image_and_Clipart_for_Free_Download-removebg-preview.png"
                alt="AI visualization showing neural network connections"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Articles</h2>
            <Link href="/articles/" className="text-green-500 hover:text-green-400 text-sm flex items-center gap-2">
              View all <Eye className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3  gap-6">
            <FeaturedCard
              title="IoT Sensors Revolutionizing Forest Conservation: Real-time Ecosystem Monitoring"
              description="Discover how Internet of Things sensors are transforming forest management through continuous monitoring of biodiversity, soil health, and climate conditions."
              image="/img/Swarm Robotics for Wildlife Conservation 🦋🤖.jpeg"
              date="May 15, 2024"
              category="IoT Ecosystem"
              icon={<BrainCircuit className="h-5 w-5" />}
              slug="iot-forest-conservation"
            />
            <FeaturedCard
              title="AI-Powered Carbon Credit Systems: Blockchain Verification for Climate Action"
              description="Explore how artificial intelligence and blockchain technology are creating transparent, verifiable carbon credit systems for sustainable development."
              image="/img/AI in Finance.jpeg"
              date="June 2, 2024"
              category="Blockchain Sustainability"
              icon={<Cpu className="h-5 w-5" />}
              slug="ai-carbon-credits"
              className="rounded-md"
            />
            <FeaturedCard
              title="NFT Conservation: Digital Assets Funding Ecosystem Restoration Projects"
              description="Learn how Non-Fungible Tokens are being used to fund and track ecosystem restoration projects, creating new models for environmental conservation."
              image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&h=400&auto=format&fit=crop"
              date="June 28, 2024"
              category="NFT Conservation"
              icon={<Eye className="h-5 w-5" />}
              slug="nft-ecosystem-restoration"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              title="Smart Sensors for Precision Agriculture: Optimizing Resource Use"
              description="Explore how smart sensors are enabling precision agriculture by optimizing irrigation, fertilization, and pest control, leading to increased yields and reduced environmental impact."
              category="Smart Agriculture"
              date="July 5, 2024"
              slug="smart-sensors-agriculture"
              image="/img/Farm online management ads farming control technology online Creating using generative AI tools _ Premium AI-generated image.jpeg"
            />
            <ArticleCard
              title="AI-Driven Environmental Monitoring: Protecting Endangered Species"
              description="Analyze how AI is being used to monitor endangered species and their habitats, providing real-time data for conservation efforts and policy decisions."
              category="AI Environmental Monitoring"
              date="July 18, 2024"
              slug="ai-environmental-monitoring"
              image="/img/20250610_2312_AI Surveillance Tiger_remix_01jxesty8me5mby502njg0wwtq.png"
            />
            <ArticleCard
              title="Blockchain for Sustainable Supply Chains: Traceability and Transparency"
              description="Exploring how blockchain technology is enhancing the traceability and transparency of supply chains, ensuring ethical sourcing and reducing environmental impact."
              category="Blockchain Sustainability"
              date="August 3, 2024"
              slug="blockchain-sustainable-supply-chains"
              image="/img/20250610_2330_Blockchain in Supply Chains_remix_01jxettc06fww8xc6g09x4qy00.png"
            />
            <ArticleCard
              title="NFTs for Wildlife Conservation: Funding and Community Engagement"
              description="How Non-Fungible Tokens are creating new funding models for wildlife conservation and engaging communities in protecting endangered species and their habitats."
              category="NFT Conservation"
              date="August 15, 2024"
              slug="nfts-wildlife-conservation"
              image="/img/20250611_0227_NFTs for Conservation_remix_01jxf4yymvey8a13azf07btkxh.png"
            />
            <ArticleCard
              title="IoT-Enabled Renewable Energy Systems: Optimizing Performance and Reducing Waste"
              description="Examining how the Internet of Things is optimizing the performance of renewable energy systems, reducing waste, and improving grid stability for a sustainable energy future."
              category="Renewable Energy Systems"
              date="September 2, 2024"
              slug="iot-renewable-energy-systems"
              image="/img/20250611_0236_Smart Renewable Energy_simple_compose_01jxf5g6ksf2j8c1x936078t2x.png"
            />
            <ArticleCard
              title="The Future of Ecosystem Preservation: Innovations and Challenges"
              description="Predictions and insights into the next frontiers of ecosystem preservation, highlighting the innovations and challenges that lie ahead in protecting our planet's biodiversity."
              category="Future of Ecosystems"
              date="September 20, 2024"
              slug="future-ecosystem-preservation"
              image="/img/20250611_0241_Ecosystem Preservation Innovations_simple_compose_01jxf5sew2e4sa6bsv64hh3mrs.png"
            />
          </div>
        </section>

        <section ref={newsletterRef} id="newsletter" className="bg-muted rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Stay Updated</h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to receive the latest insights on ecosystem technology, sustainability
                innovations, and environmental conservation.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border focus-visible:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand & Social */}
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                EcoSystem 4.0
              </Link>
              <p className="text-muted-foreground text-sm">
                Pioneering the future of sustainable ecosystems through technology.
              </p>
              <div className="flex space-x-4">
                <Link href="https://x.com/ecosystem4_0" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://github.com/alpha24-rz" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/eco_nft4.0" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Topics */}
            <div>
              <h3 className="font-medium mb-4">Topics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">IoT Ecosystem Monitoring</Link></li>
                <li><Link href="#" className="hover:text-foreground">AI Environmental Analytics</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blockchain Sustainability</Link></li>
                <li><Link href="#" className="hover:text-foreground">NFT Conservation</Link></li>
                <li><Link href="#" className="hover:text-foreground">Smart Agriculture</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>ecosystem4.0.nft@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+62 858-2100-5447</span>
                </li>
                <li className="text-sm">
                  Jl. Toddopuli x baru, Makassar, Indonesia
                </li>
              </ul>
            </div>

            {/* Maps */}
            <div className="md:col-span-2">
              <h3 className="font-medium mb-4">Our Location</h3>
              <div className="rounded-md overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.35031080557727!2d119.46264865177066!3d-5.167072963973744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2e5027887a1%3A0x55afbd678ca0707c!2sBidan%20Sukmawati!5e0!3m2!1sid!2sid!4v1749647354716!5m2!1sid!2sid"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-border mt-12 pt-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} EcoSystem 4.0. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  )
}

function FeaturedCard({ title, description, image, date, category, icon, slug = "" }: FeaturedCardProps) {
  return (
    <Card className="bg-card border-border overflow-hidden hover:border-green-500/50 transition-colors">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
          {icon}
          <span>{category}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <Link href={`/blog/${slug}/`} className="text-green-500 hover:text-green-400">
          Read more →
        </Link>
      </CardFooter>
    </Card>
  )
}

function ArticleCard({ title, description, category, date, slug = "", image }: ArticleCardProps) {
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
