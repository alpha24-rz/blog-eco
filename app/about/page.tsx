"use client"

import Link from "next/link"
<<<<<<< HEAD
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Mail, Rss, Twitter, Phone } from "lucide-react"
=======
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Rss, Twitter } from "lucide-react"
>>>>>>> 0e243c4a0f9a523f716cb20e5499216cd3a38604
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
<<<<<<< HEAD
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Image */}
            <Image
              src="/logo.png" // ganti sesuai path logo kamu
              alt="EcoSystem Logo"
              width={32}
              height={32}
              className="rounded-md"
            />

            {/* Text */}
            <h1 className="text-xl font-bold tracking-tight">
              EcoSystem <span className="text-green-600">4.0</span>
            </h1>
=======
          <Link href="/" className="text-xl font-bold tracking-tighter">
            EcoSystem 4.0
>>>>>>> 0e243c4a0f9a523f716cb20e5499216cd3a38604
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
<<<<<<< HEAD
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand & Social */}
=======
          <div className="grid md:grid-cols-4 gap-8">
>>>>>>> 0e243c4a0f9a523f716cb20e5499216cd3a38604
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                EcoSystem 4.0
              </Link>
              <p className="text-muted-foreground text-sm">
                Pioneering the future of sustainable ecosystems through technology.
              </p>
              <div className="flex space-x-4">
<<<<<<< HEAD
                <Link href="https://x.com/ecosystem4_0" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://github.com/alpha24-rz" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/eco_nft4.0" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
=======
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
>>>>>>> 0e243c4a0f9a523f716cb20e5499216cd3a38604
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>
<<<<<<< HEAD

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
=======
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
>>>>>>> 0e243c4a0f9a523f716cb20e5499216cd3a38604
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
<<<<<<< HEAD
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
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
=======
                  <span>ameyaudeshmukh@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
>>>>>>> 0e243c4a0f9a523f716cb20e5499216cd3a38604
          <div className="border-t border-border mt-12 pt-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} EcoSystem 4.0. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
