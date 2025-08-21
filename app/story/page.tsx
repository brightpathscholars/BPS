import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Users, Target, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">BrightPath Scholars</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/story" className="text-foreground font-medium">
                Our Story
              </Link>
              <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button asChild>
                <Link href="/contact">Book a Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back to Home */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Our Story: Why We Started <span className="text-primary">BrightPath Scholars</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every student deserves the support they need to succeed. Our journey began with a simple belief: that with
            the right guidance, every learner can unlock their potential.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">A Personal Journey</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "When I was younger, I needed extra support that wasn't always available. I remember struggling with
                  concepts that seemed to come easily to my classmates, feeling frustrated when I couldn't keep up, and
                  wishing I had someone who could explain things in a way that made sense to me."
                </p>
                <p>
                  "Those experiences shaped who I am today. I learned that every student has their own unique way of
                  understanding the world, and that with patience, empathy, and the right approach, any concept can
                  become clear."
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://8k0zqfrsj13buhdr.public.blob.vercel-storage.com/Photo%201"
                alt="A supportive tutoring session showing personal connection"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <Image
                src="https://8k0zqfrsj13buhdr.public.blob.vercel-storage.com/Photo%202.avif"
                alt="Students celebrating their academic achievements"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "BrightPath Scholars was created to give students the guidance I once needed — a place where every
                  learner feels supported and capable. We believe that education is not just about improving grades;
                  it's about building confidence, developing critical thinking skills, and fostering a lifelong love of
                  learning."
                </p>
                <p>
                  "Our mission is simple: helping the next generation succeed through compassionate, individualized
                  tutoring that meets each student exactly where they are and guides them to where they want to be."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do, from how we teach to how we connect with families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Empathy First</h3>
                <p className="text-muted-foreground">
                  We understand that every student learns differently and faces unique challenges. Our approach is
                  always patient, understanding, and tailored to individual needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Personal Connection</h3>
                <p className="text-muted-foreground">
                  We build genuine relationships with our students and families, creating a supportive environment where
                  learning can flourish and confidence can grow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Lasting Impact</h3>
                <p className="text-muted-foreground">
                  Our goal extends beyond better grades. We aim to instill confidence, critical thinking skills, and a
                  genuine love of learning that will serve students throughout their lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Begin Your Student's Journey?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let us provide the personalized support and guidance your student needs to unlock their full potential and
            develop a lifelong love of learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/#services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-primary mr-2" />
                <span className="font-bold text-lg">BrightPath Scholars</span>
              </div>
              <p className="text-muted-foreground">
                Empowering students through personalized K-12 tutoring in Los Angeles.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    Mathematics
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    English & Writing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    Test Prep
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/story" className="hover:text-foreground transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-foreground transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Los Angeles, CA</li>
                <li>brightpathscholars@gmail.com</li>
                <li>(818) 455-2423</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BrightPath Scholars. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
