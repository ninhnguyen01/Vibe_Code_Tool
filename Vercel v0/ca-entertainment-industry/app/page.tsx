import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, DollarSign, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              California's Entertainment Industry
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Powering America's economy, creating millions of jobs, and projecting cultural influence across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/business">
                  Explore Impact <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Users className="mb-4 text-accent" size={32} />
              <div className="text-3xl font-bold mb-2">2.7M+</div>
              <div className="text-sm text-muted-foreground">Jobs Created</div>
            </Card>
            <Card className="p-6">
              <DollarSign className="mb-4 text-accent" size={32} />
              <div className="text-3xl font-bold mb-2">$504B</div>
              <div className="text-sm text-muted-foreground">Annual GDP Contribution</div>
            </Card>
            <Card className="p-6">
              <Globe className="mb-4 text-accent" size={32} />
              <div className="text-3xl font-bold mb-2">190+</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </Card>
            <Card className="p-6">
              <TrendingUp className="mb-4 text-accent" size={32} />
              <div className="text-3xl font-bold mb-2">15%</div>
              <div className="text-sm text-muted-foreground">Annual Growth Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Three Pillars of Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              California's entertainment industry drives national prosperity through employment, economic growth, and
              global influence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-6xl font-bold text-accent mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-4">Employment Engine</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Supporting 2.7 million direct and indirect jobs across production, distribution, technology, and
                creative services. From Hollywood studios to streaming platforms, the industry creates diverse career
                opportunities.
              </p>
              <Link
                href="/business"
                className="text-accent font-medium inline-flex items-center hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-6xl font-bold text-accent mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-4">Economic Powerhouse</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Contributing over $504 billion annually to the U.S. GDP. The entertainment sector drives innovation in
                technology, attracts global investment, and generates substantial tax revenue for public services.
              </p>
              <Link
                href="/business"
                className="text-accent font-medium inline-flex items-center hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-6xl font-bold text-accent mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-4">Global Soft Power</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Projecting American values, culture, and innovation to 190+ countries. California's entertainment
                exports shape global perceptions, strengthen diplomatic ties, and promote democratic ideals worldwide.
              </p>
              <Link
                href="/business"
                className="text-accent font-medium inline-flex items-center hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Innovation Meets Creativity</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                California's entertainment industry stands at the intersection of cutting-edge technology and artistic
                excellence. From pioneering visual effects to revolutionary streaming platforms, the state continues to
                redefine how stories are told and experienced globally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                This unique ecosystem attracts the world's best talent, fosters groundbreaking collaborations, and
                maintains America's position as the global leader in entertainment and media.
              </p>
              <Button asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/hollywood-film-production-set-with-cameras-and-cre.jpg"
                alt="Film production in California"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Ready to Explore the Impact?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Discover detailed insights into how California's entertainment industry shapes the American economy and
            influences the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/business">View Business Impact</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
