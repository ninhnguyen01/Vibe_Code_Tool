import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Film, Tv, Music, Gamepad2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-balance">
            About California's Entertainment Industry
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            A century of innovation, creativity, and global influence that continues to shape American culture and
            economy.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="/vintage-hollywood-golden-age-cinema.jpg" alt="Historic Hollywood" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">A Legacy of Excellence</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since the early 1900s, California has been the epicenter of American entertainment. What began with
                silent films in small studios has evolved into a multi-billion dollar industry encompassing film,
                television, music, gaming, and digital media.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Golden Age of Hollywood established California as the world's entertainment capital, attracting
                creative talent from across the globe. This legacy continues today with cutting-edge streaming
                platforms, immersive gaming experiences, and groundbreaking visual effects technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                California's entertainment industry has consistently adapted to technological change, from the
                introduction of sound and color to digital production and AI-powered content creation, maintaining its
                position at the forefront of global media innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Sectors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              California's entertainment ecosystem spans multiple interconnected sectors, each contributing to the
              state's economic vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Film className="mb-4 text-accent" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Film & Television</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Home to major studios, independent production companies, and streaming giants. California produces the
                majority of American film and television content, employing hundreds of thousands in production,
                post-production, and distribution.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Major studio productions</li>
                <li>• Independent filmmaking</li>
                <li>• Streaming content creation</li>
                <li>• Documentary production</li>
              </ul>
            </Card>

            <Card className="p-8">
              <Tv className="mb-4 text-accent" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Digital Media & Streaming</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Leading the global shift to digital content delivery. California-based platforms have revolutionized how
                audiences consume entertainment, creating new business models and opportunities for content creators
                worldwide.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Streaming platforms</li>
                <li>• Content delivery networks</li>
                <li>• Digital distribution</li>
                <li>• Social media content</li>
              </ul>
            </Card>

            <Card className="p-8">
              <Music className="mb-4 text-accent" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Music & Audio</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From recording studios to live entertainment venues, California's music industry shapes global trends.
                The state hosts major record labels, music publishers, and innovative audio technology companies.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Recording and production</li>
                <li>• Live entertainment</li>
                <li>• Music publishing</li>
                <li>• Audio technology</li>
              </ul>
            </Card>

            <Card className="p-8">
              <Gamepad2 className="mb-4 text-accent" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Gaming & Interactive</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A rapidly growing sector combining entertainment with cutting-edge technology. California leads in game
                development, esports, virtual reality, and interactive experiences that push the boundaries of
                storytelling.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Game development</li>
                <li>• Esports and competitive gaming</li>
                <li>• VR/AR experiences</li>
                <li>• Interactive media</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
            To showcase the vital role California's entertainment industry plays in driving American economic
            prosperity, creating quality employment opportunities, and projecting democratic values and cultural
            excellence to audiences worldwide.
          </p>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            We believe in the power of storytelling to unite communities, inspire innovation, and strengthen America's
            position as the global leader in creative industries.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">Innovation</div>
              <h3 className="text-xl font-semibold mb-3">Pioneering Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuously pushing boundaries in production technology, distribution methods, and creative
                storytelling techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">Excellence</div>
              <h3 className="text-xl font-semibold mb-3">Quality Standards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintaining the highest standards of artistic and technical achievement that set global benchmarks for
                entertainment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">Impact</div>
              <h3 className="text-xl font-semibold mb-3">Global Influence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating content that resonates across cultures, promotes understanding, and strengthens America's soft
                power worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
