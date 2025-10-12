import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">California Entertainment</h3>
            <p className="text-sm text-primary-foreground/80">
              Showcasing the economic and cultural impact of California's entertainment industry.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Industry Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Economic Data
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} California Entertainment Industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
