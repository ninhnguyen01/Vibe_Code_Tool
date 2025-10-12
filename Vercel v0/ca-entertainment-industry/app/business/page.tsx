import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Building2, Globe2, Briefcase, DollarSign } from "lucide-react"
import Link from "next/link"

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-balance">
            Economic Impact & Business Contribution
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Comprehensive analysis of California's entertainment industry's contribution to employment, GDP, and global
            influence.
          </p>
        </div>
      </section>

      {/* Employment Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users size={16} />
                Employment Impact
              </div>
              <h2 className="text-4xl font-bold mb-6">2.7 Million Jobs Created</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                California's entertainment industry is one of the state's largest employers, supporting 2.7 million
                direct and indirect jobs across diverse sectors and skill levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Briefcase className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Direct Employment</h3>
                    <p className="text-sm text-muted-foreground">
                      750,000+ jobs in production, post-production, distribution, and creative services including
                      actors, directors, technicians, and support staff.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Building2 className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Indirect Employment</h3>
                    <p className="text-sm text-muted-foreground">
                      1.95 million jobs in supporting industries including hospitality, transportation, catering,
                      equipment rental, legal services, and technology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <TrendingUp className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Career Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Extensive training programs, apprenticeships, and educational partnerships creating pathways to
                      high-paying careers in creative and technical fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/diverse-film-crew-working-on-movie-set.jpg"
                alt="Entertainment industry workforce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Employment Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">$186K</div>
              <div className="text-sm font-medium mb-2">Average Annual Salary</div>
              <div className="text-xs text-muted-foreground">
                Entertainment industry wages exceed state average by 47%
              </div>
            </Card>
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">65%</div>
              <div className="text-sm font-medium mb-2">Union Representation</div>
              <div className="text-xs text-muted-foreground">
                Strong labor protections and benefits for industry workers
              </div>
            </Card>
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">42%</div>
              <div className="text-sm font-medium mb-2">Diverse Workforce</div>
              <div className="text-xs text-muted-foreground">Growing representation across all demographics</div>
            </Card>
          </div>
        </div>
      </section>

      {/* GDP Contribution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/modern-streaming-platform-headquarters-building.jpg"
                alt="Entertainment industry headquarters"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <DollarSign size={16} />
                GDP Contribution
              </div>
              <h2 className="text-4xl font-bold mb-6">$504 Billion Annual Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The entertainment industry contributes over $504 billion annually to the U.S. GDP, representing a
                significant portion of California's economic output and national prosperity.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Direct Economic Output</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    $215 billion in direct revenue from production, distribution, licensing, and streaming services.
                    This includes box office receipts, subscription revenue, advertising, and content licensing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Multiplier Effect</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    $289 billion in indirect economic activity through supply chain spending, vendor services, real
                    estate, tourism, and consumer spending by industry employees.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tax Revenue</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    $52 billion in annual tax revenue supporting public services, infrastructure, education, and
                    community development programs across California and the nation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Innovation Investment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    $28 billion invested annually in R&D for production technology, AI, visual effects, streaming
                    infrastructure, and next-generation entertainment platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Power Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe2 size={16} />
              Global Soft Power
            </div>
            <h2 className="text-4xl font-bold mb-6">Projecting American Values Worldwide</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              California's entertainment exports serve as America's most effective tool for cultural diplomacy, reaching
              billions of people across 190+ countries and shaping global perceptions of American society, values, and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Cultural Influence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                American films, TV shows, and music dominate global entertainment markets, introducing international
                audiences to democratic values, individual freedom, and cultural diversity.
              </p>
              <div className="text-2xl font-bold text-accent">85%</div>
              <div className="text-xs text-muted-foreground">Global box office market share</div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Democratic Values</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Entertainment content promotes themes of justice, equality, human rights, and democratic governance,
                influencing political discourse and social movements worldwide.
              </p>
              <div className="text-2xl font-bold text-accent">3.2B</div>
              <div className="text-xs text-muted-foreground">Global streaming subscribers</div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Economic Diplomacy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Entertainment exports strengthen trade relationships, create international partnerships, and position
                America as the global leader in creative industries and innovation.
              </p>
              <div className="text-2xl font-bold text-accent">$42B</div>
              <div className="text-xs text-muted-foreground">Annual export revenue</div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Language & Education</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                American entertainment serves as the primary vehicle for English language learning globally,
                facilitating international communication and educational exchange.
              </p>
              <div className="text-2xl font-bold text-accent">1.5B</div>
              <div className="text-xs text-muted-foreground">English learners influenced</div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Tourism Impact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Entertainment content drives international tourism to California and the U.S., with visitors seeking to
                experience locations and attractions featured in popular media.
              </p>
              <div className="text-2xl font-bold text-accent">$168B</div>
              <div className="text-xs text-muted-foreground">Entertainment tourism revenue</div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation Leadership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                California's entertainment technology innovations in streaming, VFX, and AI set global standards,
                reinforcing America's position as the world's technology leader.
              </p>
              <div className="text-2xl font-bold text-accent">72%</div>
              <div className="text-xs text-muted-foreground">Global streaming tech market</div>
            </Card>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Strategic National Asset</h3>
            <p className="text-primary-foreground/90 leading-relaxed mb-6">
              The entertainment industry represents a critical component of American soft power strategy. Unlike
              military or economic pressure, cultural influence through entertainment creates lasting positive
              associations with American values, lifestyle, and innovation. This soft power strengthens diplomatic
              relationships, opens markets for American businesses, and promotes democratic ideals in regions where
              direct political engagement may be limited.
            </p>
            <p className="text-primary-foreground/90 leading-relaxed">
              Investment in California's entertainment industry is investment in America's global influence and
              long-term strategic interests.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Explore opportunities to collaborate with California's entertainment industry and contribute to America's
            economic and cultural leadership.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
