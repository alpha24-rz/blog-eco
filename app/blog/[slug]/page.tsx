"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"
import { EcoThemeToggle } from "@/components/eco-theme-toggle"

// Static mapping of ecosystem-focused blog posts
const blogPosts = {
  "iot-forest-conservation": {
    title: "IoT Sensors Revolutionizing Forest Conservation: Real-time Ecosystem Monitoring",
    date: "May 15, 2024",
    author: "Dr. Elena Rodriguez",
    category: "IoT Ecosystem",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Forest ecosystems are among the most critical components of our planet's environmental health, yet traditional monitoring methods have been limited by accessibility, cost, and real-time data collection challenges. The Internet of Things (IoT) is revolutionizing forest conservation through comprehensive sensor networks that provide unprecedented insights into ecosystem dynamics.</p>
      
      <h2>The IoT Forest Monitoring Revolution</h2>
      <p>Modern IoT sensor networks deployed in forests can monitor dozens of environmental parameters simultaneously, including soil moisture, temperature, humidity, air quality, sound levels for wildlife activity, and even tree growth rates. These sensors create a digital nervous system for forest ecosystems.</p>
      
      <h2>Key IoT Technologies in Forest Conservation</h2>
      <p>Several cutting-edge IoT technologies are transforming how we monitor and protect forests:</p>
      
      <h3>Environmental Sensor Networks</h3>
      <p>Wireless sensor networks measure critical environmental parameters including microclimate conditions, soil health indicators, and air quality metrics. These sensors can detect early signs of environmental stress or disease outbreaks.</p>
      
      <h3>Wildlife Tracking Systems</h3>
      <p>IoT-enabled camera traps, acoustic sensors, and GPS collars provide real-time data on wildlife populations, migration patterns, and behavioral changes that indicate ecosystem health.</p>
      
      <h3>Fire Detection and Prevention</h3>
      <p>Advanced sensor networks can detect the earliest signs of forest fires through smoke detection, temperature monitoring, and humidity analysis, enabling rapid response to prevent catastrophic damage.</p>
      
      <h2>Real-World Applications</h2>
      <p>Several innovative projects demonstrate the power of IoT in forest conservation:</p>
      
      <h3>Amazon Rainforest Monitoring</h3>
      <p>Large-scale IoT deployments in the Amazon use satellite connectivity to monitor deforestation, illegal logging, and biodiversity changes across vast areas of rainforest.</p>
      
      <h3>Smart Reforestation Projects</h3>
      <p>IoT sensors monitor newly planted trees, tracking survival rates, growth patterns, and optimal conditions for successful reforestation efforts.</p>
      
      <h2>Data Analytics and AI Integration</h2>
      <p>The massive amounts of data collected by IoT sensors are processed using artificial intelligence and machine learning algorithms to identify patterns, predict environmental changes, and optimize conservation strategies.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>While IoT forest monitoring offers tremendous benefits, challenges include power management in remote locations, data transmission in areas with limited connectivity, and the need for weather-resistant, long-lasting sensors.</p>
      
      <h2>Future of IoT Forest Conservation</h2>
      <p>As IoT technology continues to advance, we can expect even more sophisticated monitoring capabilities, including drone-based sensor deployment, satellite-connected sensor networks, and AI-powered predictive analytics for proactive forest management.</p>
      
      <p>The integration of IoT technology in forest conservation represents a paradigm shift toward data-driven, proactive ecosystem management that can help preserve these critical environments for future generations.</p>
    `,
    relatedPosts: [
      {
        title: "AI-Powered Carbon Credit Systems: Blockchain Verification for Climate Action",
        category: "Blockchain Sustainability",
        image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ai-carbon-credits",
      },
      {
        title: "Smart Agriculture: IoT and AI Transforming Sustainable Farming Practices",
        category: "Smart Agriculture",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "smart-agriculture-iot-ai",
      },
    ],
  },
  "ai-carbon-credits": {
    title: "AI-Powered Carbon Credit Systems: Blockchain Verification for Climate Action",
    date: "June 2, 2024",
    author: "Dr. Michael Chen",
    category: "Blockchain Sustainability",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Carbon credit systems have emerged as a crucial mechanism for addressing climate change, but traditional systems have faced challenges with transparency, verification, and fraud prevention. The integration of artificial intelligence and blockchain technology is creating a new generation of carbon credit systems that are more reliable, transparent, and effective.</p>
      
      <h2>Understanding Carbon Credits</h2>
      <p>Carbon credits represent a reduction or removal of greenhouse gas emissions equivalent to one metric ton of CO2. These credits can be traded in carbon markets, creating economic incentives for emission reduction projects and sustainable practices.</p>
      
      <h2>Challenges in Traditional Carbon Credit Systems</h2>
      <p>Traditional carbon credit systems have faced several significant challenges including verification difficulties, lack of transparency, double counting issues, and limited real-time monitoring capabilities.</p>
      
      <h2>AI-Powered Verification and Monitoring</h2>
      <p>Artificial intelligence is revolutionizing carbon credit verification through several innovative approaches:</p>
      
      <h3>Satellite Image Analysis</h3>
      <p>AI algorithms analyze satellite imagery to verify reforestation projects, monitor forest health, and detect deforestation in real-time, providing accurate data for carbon sequestration calculations.</p>
      
      <h3>IoT Sensor Integration</h3>
      <p>Machine learning models process data from IoT sensors to monitor carbon capture projects, renewable energy installations, and emission reduction initiatives continuously.</p>
      
      <h3>Predictive Analytics</h3>
      <p>AI systems can predict the long-term carbon impact of projects, helping to price credits more accurately and identify the most effective conservation strategies.</p>
      
      <h2>Blockchain for Transparency and Trust</h2>
      <p>Blockchain technology addresses many of the transparency and trust issues in carbon credit systems:</p>
      
      <h3>Immutable Record Keeping</h3>
      <p>Every carbon credit transaction is recorded on a blockchain, creating an immutable audit trail that prevents double counting and fraud.</p>
      
      <h3>Smart Contracts</h3>
      <p>Automated smart contracts can release payments for carbon credits only when AI verification systems confirm that emission reduction targets have been met.</p>
      
      <h3>Decentralized Verification</h3>
      <p>Multiple parties can participate in the verification process, reducing reliance on centralized authorities and increasing system reliability.</p>
      
      <h2>Real-World Implementations</h2>
      <p>Several pioneering projects are demonstrating the potential of AI and blockchain in carbon credit systems, including forest conservation projects using satellite monitoring and renewable energy installations with IoT verification.</p>
      
      <h2>Benefits of AI-Blockchain Carbon Systems</h2>
      <p>The integration of AI and blockchain in carbon credit systems offers numerous advantages including enhanced accuracy, real-time monitoring, reduced costs, and increased market confidence.</p>
      
      <h2>Future Developments</h2>
      <p>As these technologies mature, we can expect to see more sophisticated carbon credit systems that integrate multiple data sources, provide real-time pricing, and create new opportunities for small-scale emission reduction projects to participate in carbon markets.</p>
    `,
    relatedPosts: [
      {
        title: "NFT Conservation: Digital Assets Funding Ecosystem Restoration Projects",
        category: "NFT Conservation",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "nft-ecosystem-restoration",
      },
      {
        title: "Blockchain-Based Supply Chain Transparency for Sustainable Products",
        category: "Blockchain Supply Chain",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "blockchain-supply-chain",
      },
    ],
  },
  "nft-ecosystem-restoration": {
    title: "NFT Conservation: Digital Assets Funding Ecosystem Restoration Projects",
    date: "June 28, 2024",
    author: "Dr. Sarah Thompson",
    category: "NFT Conservation",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Non-Fungible Tokens (NFTs) are finding new purpose beyond digital art and collectibles, emerging as powerful tools for funding and tracking ecosystem restoration projects. This innovative approach is creating new economic models for environmental conservation while providing transparency and accountability in conservation efforts.</p>
      
      <h2>NFTs Meet Conservation</h2>
      <p>Conservation NFTs represent real-world environmental assets or conservation actions, such as protected forest areas, restored wetlands, or carbon sequestration projects. Each NFT serves as a digital certificate of ownership or support for specific conservation initiatives.</p>
      
      <h2>Types of Conservation NFTs</h2>
      <p>Several innovative models are emerging in the conservation NFT space:</p>
      
      <h3>Ecosystem Ownership NFTs</h3>
      <p>These NFTs represent ownership or stewardship rights to specific ecosystem areas, such as forest plots, coral reef sections, or wetland areas. Holders contribute to conservation efforts and receive updates on their ecosystem's health.</p>
      
      <h3>Species Protection NFTs</h3>
      <p>NFTs that fund specific wildlife conservation efforts, such as protecting endangered species or supporting breeding programs. Each NFT might represent support for a specific animal or conservation milestone.</p>
      
      <h3>Carbon Offset NFTs</h3>
      <p>These NFTs represent verified carbon offsets from reforestation, renewable energy, or other carbon reduction projects, combining environmental impact with blockchain verification.</p>
      
      <h2>Funding Mechanisms</h2>
      <p>Conservation NFTs create several innovative funding mechanisms for environmental projects:</p>
      
      <h3>Initial Conservation Offerings</h3>
      <p>Similar to Initial Coin Offerings, conservation projects can raise funds by selling NFTs that represent future environmental benefits or conservation milestones.</p>
      
      <h3>Royalty-Based Funding</h3>
      <p>NFTs can include smart contracts that direct a percentage of secondary sales back to ongoing conservation efforts, creating sustainable funding streams.</p>
      
      <h3>Milestone-Based Releases</h3>
      <p>Funds from NFT sales can be released automatically as conservation projects meet specific, verifiable milestones tracked through IoT sensors and satellite monitoring.</p>
      
      <h2>Transparency and Verification</h2>
      <p>Blockchain technology ensures transparency in conservation NFT projects through immutable records, smart contract automation, and real-time impact tracking using IoT sensors and satellite data.</p>
      
      <h2>Case Studies</h2>
      <p>Several successful conservation NFT projects demonstrate the potential of this approach, including rainforest protection initiatives and coral reef restoration programs that have raised significant funds through NFT sales.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>While promising, conservation NFTs face challenges including environmental concerns about blockchain energy use, verification of real-world impact, and ensuring long-term project sustainability.</p>
      
      <h2>Future of Conservation NFTs</h2>
      <p>As the technology matures, we can expect more sophisticated conservation NFT models that integrate with IoT monitoring, provide real-time impact updates, and create new opportunities for global participation in local conservation efforts.</p>
    `,
    relatedPosts: [
      {
        title: "Renewable Energy NFTs: Tokenizing Clean Energy for Sustainable Investment",
        category: "Energy NFTs",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "renewable-energy-nfts",
      },
      {
        title: "AI-Powered Carbon Credit Systems: Blockchain Verification for Climate Action",
        category: "Blockchain Sustainability",
        image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ai-carbon-credits",
      },
    ],
  },
  "smart-agriculture-iot-ai": {
    title: "Smart Agriculture: IoT and AI Transforming Sustainable Farming Practices",
    date: "July 5, 2024",
    author: "Dr. James Wilson",
    category: "Smart Agriculture",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Agriculture faces unprecedented challenges in the 21st century, from climate change and resource scarcity to the need to feed a growing global population. Smart agriculture, powered by IoT sensors and AI analytics, is emerging as a crucial solution for creating sustainable, efficient, and environmentally responsible farming practices.</p>
      
      <h2>The Smart Agriculture Revolution</h2>
      <p>Smart agriculture integrates IoT sensors, AI analytics, and precision farming techniques to optimize crop production while minimizing environmental impact. This approach enables farmers to make data-driven decisions about irrigation, fertilization, pest control, and harvesting.</p>
      
      <h2>IoT Sensors in Agriculture</h2>
      <p>Modern farms are being equipped with various IoT sensors that monitor critical agricultural parameters:</p>
      
      <h3>Soil Monitoring Sensors</h3>
      <p>These sensors measure soil moisture, pH levels, nutrient content, and temperature, providing real-time data on soil health and optimal planting conditions.</p>
      
      <h3>Weather Monitoring Stations</h3>
      <p>IoT weather stations track temperature, humidity, rainfall, wind speed, and solar radiation, helping farmers predict weather patterns and plan agricultural activities.</p>
      
      <h3>Crop Health Sensors</h3>
      <p>Specialized sensors and drones equipped with multispectral cameras can detect early signs of plant stress, disease, or pest infestations before they become visible to the human eye.</p>
      
      <h2>AI Analytics for Precision Farming</h2>
      <p>Artificial intelligence processes the vast amounts of data collected by IoT sensors to provide actionable insights:</p>
      
      <h3>Predictive Analytics</h3>
      <p>AI models analyze historical and real-time data to predict optimal planting times, irrigation schedules, and harvest windows, maximizing yield while conserving resources.</p>
      
      <h3>Disease and Pest Detection</h3>
      <p>Machine learning algorithms can identify plant diseases and pest infestations from images captured by drones or field sensors, enabling early intervention and targeted treatment.</p>
      
      <h3>Yield Optimization</h3>
      <p>AI systems analyze multiple variables to recommend optimal fertilizer application, irrigation timing, and crop management practices for maximum yield and quality.</p>
      
      <h2>Sustainable Water Management</h2>
      <p>Smart irrigation systems use IoT sensors and AI to optimize water usage, reducing waste while ensuring crops receive adequate hydration. These systems can reduce water consumption by up to 30% while maintaining or improving crop yields.</p>
      
      <h2>Precision Fertilization</h2>
      <p>AI-driven fertilization systems analyze soil conditions and crop needs to apply fertilizers precisely where and when needed, reducing chemical runoff and environmental impact while optimizing plant nutrition.</p>
      
      <h2>Livestock Monitoring</h2>
      <p>IoT sensors and AI are also transforming livestock management through health monitoring, behavior analysis, and automated feeding systems that improve animal welfare while increasing productivity.</p>
      
      <h2>Environmental Benefits</h2>
      <p>Smart agriculture practices contribute to environmental sustainability through reduced chemical usage, optimized water consumption, decreased soil erosion, and lower greenhouse gas emissions from agricultural activities.</p>
      
      <h2>Economic Impact</h2>
      <p>While the initial investment in smart agriculture technology can be significant, farmers typically see returns through increased yields, reduced input costs, and improved crop quality.</p>
      
      <h2>Future of Smart Agriculture</h2>
      <p>As technology continues to advance, we can expect even more sophisticated smart agriculture systems that integrate satellite data, advanced robotics, and blockchain technology for supply chain transparency.</p>
    `,
    relatedPosts: [
      {
        title: "IoT Sensors Revolutionizing Forest Conservation: Real-time Ecosystem Monitoring",
        category: "IoT Ecosystem",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "iot-forest-conservation",
      },
      {
        title: "Ocean Health Monitoring: IoT Buoys and AI Analytics for Marine Ecosystems",
        category: "Marine IoT",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ocean-health-monitoring",
      },
    ],
  },
  "future-ecosystem-4-0": {
    title: "The Future of Ecosystem 4.0: Integrating Technology for Planetary Health",
    date: "September 20, 2024",
    author: "Dr. Maria Santos",
    category: "Future Ecosystem",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>As we stand at the intersection of technological advancement and environmental crisis, Ecosystem 4.0 represents a paradigm shift toward integrating IoT, AI, blockchain, and NFT technologies to create sustainable solutions for planetary health. This comprehensive approach promises to revolutionize how we monitor, protect, and restore our planet's ecosystems.</p>
      
      <h2>Defining Ecosystem 4.0</h2>
      <p>Ecosystem 4.0 is the convergence of digital technologies with environmental science to create intelligent, interconnected systems that can monitor, predict, and respond to environmental changes in real-time. This approach combines the physical and digital worlds to create a comprehensive understanding of ecosystem health.</p>
      
      <h2>The Four Pillars of Ecosystem 4.0</h2>
      
      <h3>1. IoT Environmental Monitoring</h3>
      <p>Internet of Things sensors create a global nervous system for environmental monitoring, providing real-time data on air quality, water conditions, soil health, biodiversity, and climate patterns across the planet.</p>
      
      <h3>2. AI Environmental Intelligence</h3>
      <p>Artificial intelligence processes vast amounts of environmental data to identify patterns, predict changes, and recommend actions for ecosystem protection and restoration.</p>
      
      <h3>3. Blockchain Environmental Verification</h3>
      <p>Blockchain technology ensures transparency and accountability in environmental initiatives, from carbon credit verification to supply chain sustainability tracking.</p>
      
      <h3>4. NFT Conservation Economics</h3>
      <p>Non-Fungible Tokens create new economic models for conservation funding, enabling global participation in local environmental protection efforts.</p>
      
      <h2>Integrated Applications</h2>
      <p>The true power of Ecosystem 4.0 emerges when these technologies work together:</p>
      
      <h3>Global Forest Monitoring Network</h3>
      <p>IoT sensors monitor forest health, AI predicts deforestation risks, blockchain verifies conservation efforts, and NFTs fund protection initiatives, creating a comprehensive forest protection system.</p>
      
      <h3>Ocean Health Management</h3>
      <p>Marine IoT buoys collect ocean data, AI models predict ecosystem changes, blockchain tracks fishing quotas and marine protected areas, while NFTs fund coral reef restoration projects.</p>
      
      <h3>Urban Sustainability Systems</h3>
      <p>Smart city technologies monitor urban environmental conditions, AI optimizes resource usage, blockchain verifies sustainability claims, and NFTs fund green infrastructure projects.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Implementing Ecosystem 4.0 faces several challenges including technological integration complexity, data standardization needs, energy consumption concerns, and ensuring equitable access to technology benefits.</p>
      
      <h2>Global Impact Potential</h2>
      <p>Ecosystem 4.0 has the potential to transform environmental management on a global scale through early warning systems, precision conservation, sustainable resource management, and new economic models for environmental protection.</p>
      
      <h2>The Path Forward</h2>
      <p>Realizing the full potential of Ecosystem 4.0 requires collaboration between technologists, environmental scientists, policymakers, and communities worldwide. Success depends on creating interoperable systems, establishing global standards, and ensuring that technological solutions serve environmental justice and equity.</p>
      
      <h2>Conclusion</h2>
      <p>Ecosystem 4.0 represents our best hope for creating a sustainable future where technology and nature work in harmony. By integrating IoT monitoring, AI analytics, blockchain verification, and NFT economics, we can create comprehensive solutions for the environmental challenges facing our planet.</p>
    `,
    relatedPosts: [
      {
        title: "AI-Powered Carbon Credit Systems: Blockchain Verification for Climate Action",
        category: "Blockchain Sustainability",
        image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ai-carbon-credits",
      },
      {
        title: "NFT Conservation: Digital Assets Funding Ecosystem Restoration Projects",
        category: "NFT Conservation",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "nft-ecosystem-restoration",
      },
    ],
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { toast } = useToast()
  const post = blogPosts[params.slug]

  useEffect(() => {
    if (!post) {
      toast({
        title: "Post not found",
        description: "The requested blog post could not be found.",
        variant: "destructive",
      })
    }
  }, [post, toast])

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Check out this article: ${post.title}`

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied",
          description: "The article link has been copied to your clipboard.",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            EcoSystem 4.0
          </Link>
          <div className="flex items-center gap-4">
            <EcoThemeToggle />
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/10"
              onClick={() => {
                const newsletterSection = document.getElementById("newsletter")
                if (newsletterSection) {
                  newsletterSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/articles/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to articles
          </Link>

          <div className="flex items-center gap-2 text-sm text-green-500 mb-4">
            <BrainCircuit className="h-5 w-5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div>{post.date}</div>
            <div>By {post.author}</div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Article hero image"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-border hover:bg-muted"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-border hover:bg-muted"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-border hover:bg-muted"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 border-gray-800 hover:bg-gray-900"
              onClick={() => handleShare("clipboard")}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>

          <article className="prose prose-invert dark:prose-invert prose-green max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-foreground [&>p]:text-foreground [&>h2]:text-foreground [&>h3]:text-foreground [&>ul]:text-foreground [&>li]:text-foreground [&>strong]:text-foreground"
            />
          </article>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link href={`/blog/${relatedPost.slug}/`} className="group" key={index}>
                  <div className="space-y-3">
                    <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-green-500/50 transition-colors">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={`${relatedPost.title} thumbnail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-green-500 mb-2">
                        <BrainCircuit className="h-4 w-4" />
                        <span>{relatedPost.category}</span>
                      </div>
                      <h3 className="font-medium group-hover:text-green-400 transition-colors">{relatedPost.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              EcoSystem 4.0
            </Link>
            <p className="text-muted-foreground text-sm mt-4 mb-6">
              Pioneering the future of sustainable ecosystems through technology.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="border-t border-border mt-8 pt-6 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} EcoSystem 4.0. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
