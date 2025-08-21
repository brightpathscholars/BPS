import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/story" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Story
              </Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Guiding Students Toward Success, <span className="text-primary">One Step at a Time</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Personalized K-12 tutoring in Los Angeles that builds confidence, improves grades, and develops
                  lifelong learning skills through compassionate, individualized support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Book a Session</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/story">Our Story</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Los Angeles, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>K-12 All Subjects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Students learning together in a bright, welcoming environment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Comprehensive K-12 Academic Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From elementary fundamentals to advanced high school courses, we provide personalized tutoring across all
              subjects to help every student succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mathematics</h3>
                <p className="text-muted-foreground">
                  From basic arithmetic to advanced calculus, algebra, geometry, and statistics. Building strong
                  mathematical foundations at every level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Science</h3>
                <p className="text-muted-foreground">
                  Biology, chemistry, physics, and earth science. Hands-on learning approaches that make complex
                  concepts accessible and engaging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">English & Writing</h3>
                <p className="text-muted-foreground">
                  Reading comprehension, literature analysis, essay writing, and communication skills. Developing
                  confident, articulate learners.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Social Studies</h3>
                <p className="text-muted-foreground">
                  History, geography, civics, and social sciences. Connecting past and present to develop critical
                  thinking skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Test Preparation</h3>
                <p className="text-muted-foreground">
                  SAT, ACT, AP exams, and state testing preparation. Strategic approaches to maximize scores and reduce
                  test anxiety.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Homework Support</h3>
                <p className="text-muted-foreground">
                  Daily homework assistance and study skills development. Building independence and organizational
                  skills for long-term success.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Story: Why We Started BrightPath Scholars
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "When I was younger, I needed extra support that wasn't always available. BrightPath Scholars was
                created to give students the guidance I once needed — a place where every learner feels supported and
                capable."
              </p>
              <p className="text-muted-foreground">
                Our mission is simple: helping the next generation succeed through compassionate, individualized
                tutoring that builds not just better grades, but confidence and lifelong learning skills.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/story">Read Our Full Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="BrightPath Scholars tutors and students"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">What Families Are Saying</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from parents and students who have experienced the BrightPath Scholars difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "BrightPath Scholars has been a game-changer for my son. His confidence in math has skyrocketed, and
                  his grades followed. The tutors are patient, kind, and truly care."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah M.</p>
                    <p className="text-muted-foreground">Parent of 8th Grader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "We tried other tutoring services, but BrightPath felt different. They took the time to understand my
                  daughter's strengths and struggles. She's not only improving but enjoying learning again."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Maria L.</p>
                    <p className="text-muted-foreground">Parent of 10th Grader</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Ready to see similar results for your student?</p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Your First Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Contact us today to schedule your first tutoring session and begin your path to academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Book a Session</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="tel:+1234567890">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@brightpathscholars.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Serving Los Angeles, CA</span>
            </div>
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
                <li>info@brightpathscholars.com</li>
                <li>(555) 123-4567</li>
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
