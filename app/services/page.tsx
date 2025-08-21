import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Calculator,
  Microscope,
  PenTool,
  Globe,
  GraduationCap,
  Users,
  ArrowLeft,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
              <Link href="/services" className="text-foreground font-medium">
                Services
              </Link>
              <Link href="/story" className="text-muted-foreground hover:text-foreground transition-colors">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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
            Comprehensive <span className="text-primary">K-12 Tutoring Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From elementary fundamentals to advanced high school courses, we provide personalized tutoring across all
            subjects to help every student succeed and build confidence.
          </p>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Sessions available after school, evenings, and weekends to fit your family's schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Affordable Rates</h3>
                <p className="text-muted-foreground">
                  Competitive pricing with package discounts available. Payment accepted via cash, Zelle, PayPal, and
                  more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Personalized Approach</h3>
                <p className="text-muted-foreground">
                  Every session is tailored to your student's learning style, pace, and academic goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Subject Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive academic support across all K-12 subjects with experienced, patient tutors.
            </p>
          </div>

          <div className="space-y-12">
            {/* Mathematics */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">Mathematics</CardTitle>
                    <p className="text-muted-foreground">Building strong mathematical foundations at every level</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Elementary & Middle School</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Basic arithmetic and number sense
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Fractions, decimals, and percentages
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Pre-algebra concepts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Problem-solving strategies
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">High School & Advanced</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Algebra I & II
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Geometry and Trigonometry
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Pre-Calculus and Calculus
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Statistics and Probability
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Algebra</Badge>
                  <Badge variant="secondary">Geometry</Badge>
                  <Badge variant="secondary">Calculus</Badge>
                  <Badge variant="secondary">Statistics</Badge>
                  <Badge variant="secondary">Pre-Calculus</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Science */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Microscope className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">Science</CardTitle>
                    <p className="text-muted-foreground">Hands-on learning that makes complex concepts accessible</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Life Sciences</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Biology and Life Science
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Human Anatomy & Physiology
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Environmental Science
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        AP Biology
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Physical Sciences</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Chemistry and AP Chemistry
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Physics and AP Physics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Earth Science & Geology
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Astronomy
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Biology</Badge>
                  <Badge variant="secondary">Chemistry</Badge>
                  <Badge variant="secondary">Physics</Badge>
                  <Badge variant="secondary">Earth Science</Badge>
                  <Badge variant="secondary">AP Sciences</Badge>
                </div>
              </CardContent>
            </Card>

            {/* English & Writing */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">English Language Arts</CardTitle>
                    <p className="text-muted-foreground">Developing confident, articulate communicators</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Reading & Literature</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Reading comprehension strategies
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Literature analysis and interpretation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Vocabulary development
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        AP Literature & Composition
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Writing & Communication</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Essay writing and structure
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Creative writing and storytelling
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Grammar and mechanics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Research and citation skills
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Reading Comprehension</Badge>
                  <Badge variant="secondary">Essay Writing</Badge>
                  <Badge variant="secondary">Literature</Badge>
                  <Badge variant="secondary">Grammar</Badge>
                  <Badge variant="secondary">AP English</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Social Studies */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">Social Studies & History</CardTitle>
                    <p className="text-muted-foreground">Connecting past and present to develop critical thinking</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">History</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        World History and Civilizations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        U.S. History and Government
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        AP History courses
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Historical analysis and writing
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Social Sciences</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Geography and Map Skills
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Civics and Government
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Economics and Personal Finance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Current events and analysis
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">World History</Badge>
                  <Badge variant="secondary">U.S. History</Badge>
                  <Badge variant="secondary">Geography</Badge>
                  <Badge variant="secondary">Government</Badge>
                  <Badge variant="secondary">AP Social Studies</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Test Preparation */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">Test Preparation</CardTitle>
                    <p className="text-muted-foreground">Strategic approaches to maximize scores and reduce anxiety</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Standardized Tests</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        SAT and PSAT preparation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        ACT preparation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        State testing (CAASPP, etc.)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Test-taking strategies
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Advanced Placement</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        AP exam preparation (all subjects)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Content review and practice
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Essay writing for AP exams
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Time management skills
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SAT Prep</Badge>
                  <Badge variant="secondary">ACT Prep</Badge>
                  <Badge variant="secondary">AP Exams</Badge>
                  <Badge variant="secondary">State Testing</Badge>
                  <Badge variant="secondary">Test Strategies</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today to discuss your student's needs and schedule their first tutoring session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/story">Learn About Our Approach</Link>
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
