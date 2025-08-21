import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  Calendar,
  ArrowLeft,
  CheckCircle,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
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
              <Link href="/contact" className="text-foreground font-medium">
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
            Get Started with <span className="text-primary">BrightPath Scholars</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to help your student succeed? Contact us today to schedule a consultation and begin their journey
            toward academic excellence.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">Speak directly with our team</p>
                <Button asChild className="w-full">
                  <Link href="tel:(818)455-2423">(818) 455-2423</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">Send us a message anytime</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="mailto:brightpathscholars@gmail.com">brightpathscholars@gmail.com</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">Serving all of Los Angeles</p>
                <p className="text-foreground font-medium">Los Angeles, CA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your student's needs and
                  schedule a consultation.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Parent/Guardian Name *</Label>
                        <Input id="name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="(818) 455-2423" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-grade">Student's Grade Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k">Kindergarten</SelectItem>
                          <SelectItem value="1">1st Grade</SelectItem>
                          <SelectItem value="2">2nd Grade</SelectItem>
                          <SelectItem value="3">3rd Grade</SelectItem>
                          <SelectItem value="4">4th Grade</SelectItem>
                          <SelectItem value="5">5th Grade</SelectItem>
                          <SelectItem value="6">6th Grade</SelectItem>
                          <SelectItem value="7">7th Grade</SelectItem>
                          <SelectItem value="8">8th Grade</SelectItem>
                          <SelectItem value="9">9th Grade</SelectItem>
                          <SelectItem value="10">10th Grade</SelectItem>
                          <SelectItem value="11">11th Grade</SelectItem>
                          <SelectItem value="12">12th Grade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subjects">Subject(s) of Interest *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="english">English & Writing</SelectItem>
                          <SelectItem value="social-studies">Social Studies</SelectItem>
                          <SelectItem value="test-prep">Test Preparation</SelectItem>
                          <SelectItem value="homework">Homework Support</SelectItem>
                          <SelectItem value="multiple">Multiple Subjects</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Student's Needs</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your student's current challenges, goals, and any specific areas where they need support..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking & Pricing Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Booking & Pricing</h2>
                <p className="text-muted-foreground">
                  Flexible scheduling and affordable rates designed to fit your family's needs and budget.
                </p>
              </div>

              {/* Scheduling */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Flexible Scheduling
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">After-school sessions (3:00 PM - 6:00 PM)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Evening sessions (6:00 PM - 8:00 PM)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Weekend availability (Saturday & Sunday)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Online and in-person options</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Clock className="h-4 w-4 mr-2" />
                    View Available Times
                  </Button>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Pricing Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Single Session</p>
                        <p className="text-sm text-muted-foreground">Pay per session</p>
                      </div>
                      <Badge variant="outline">$60/hour</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <div>
                        <p className="font-medium text-foreground">5-Session Package</p>
                        <p className="text-sm text-muted-foreground">Save $25 total</p>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">$275 ($55/hour)</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                      <div>
                        <p className="font-medium text-foreground">10-Session Package</p>
                        <p className="text-sm text-muted-foreground">Save $100 total</p>
                      </div>
                      <Badge className="bg-secondary text-secondary-foreground">$500 ($50/hour)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Cash</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Zelle</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">PayPal</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Apple Pay</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Venmo</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Credit/Debit</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions from parents about our tutoring services.</p>
          </div>

          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How do I schedule a session?</h3>
                <p className="text-muted-foreground">
                  After your initial consultation, we'll provide you with access to our online booking system where you
                  can view available time slots and schedule sessions that work for your family's schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you offer online tutoring?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer both in-person and online tutoring sessions. Our online sessions use interactive tools
                  and are just as effective as in-person tutoring.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What if I need to cancel or reschedule?</h3>
                <p className="text-muted-foreground">
                  We understand that schedules change. We ask for at least 24 hours notice for cancellations or
                  rescheduling to avoid any fees.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How do you track my student's progress?</h3>
                <p className="text-muted-foreground">
                  We provide regular progress reports and maintain open communication with parents about their student's
                  improvements, challenges, and goals.
                </p>
              </CardContent>
            </Card>
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
