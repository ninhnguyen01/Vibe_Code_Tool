"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Connect with us to learn more about California's entertainment industry impact or explore partnership
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to answer your questions about California's entertainment industry and its economic impact.
                </p>
              </div>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@caentertainment.org"
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      info@caentertainment.org
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+13105551234" className="text-sm text-muted-foreground hover:text-accent">
                      +1 (310) 555-1234
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      1234 Hollywood Blvd
                      <br />
                      Los Angeles, CA 90028
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>

              <div className="pt-6">
                <h3 className="font-semibold mb-3">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">How can I access industry reports and data?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide comprehensive industry reports, economic data, and research findings to qualified
                organizations and researchers. Contact us with your specific requirements, and we'll guide you through
                the access process.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer partnership opportunities?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes, we collaborate with educational institutions, research organizations, policy groups, and industry
                stakeholders. Reach out to discuss potential partnership opportunities that align with our mission.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Can I request a speaker for my event?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide speakers for conferences, educational events, and industry gatherings. Submit your request
                with event details, and we'll work to accommodate your needs based on availability.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">How do I cite your data in my research?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All data and statistics on our website are properly sourced and can be cited in academic and
                professional research. Contact us for specific citation guidelines and access to primary sources.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
            <img src="/los-angeles-hollywood-map-aerial-view.jpg" alt="Location map" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
