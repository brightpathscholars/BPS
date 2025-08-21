import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, Clock, ArrowLeft, Calendar, BookmarkIcon } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
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
              <Link href="/resources" className="text-foreground font-medium">
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
            Learning <span className="text-primary">Resources & Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover helpful study resources, educational tools, and expert insights to support your student's learning
            journey at home and beyond.
          </p>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Trusted Learning Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated collection of educational websites, tools, and materials to enhance your student's learning
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Khan Academy */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Khan Academy</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Free online courses, lessons and practice for math, science, and more. Perfect for K-12 students.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Math</Badge>
                  <Badge variant="secondary">Science</Badge>
                  <Badge variant="secondary">Free</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer">
                    Visit Khan Academy
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quizlet */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Quizlet</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Create flashcards and study sets for any subject. Great for vocabulary, definitions, and memorization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Flashcards</Badge>
                  <Badge variant="secondary">All Subjects</Badge>
                  <Badge variant="secondary">Study Tools</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="https://quizlet.com" target="_blank" rel="noopener noreferrer">
                    Visit Quizlet
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* College Board SAT Practice */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>SAT Practice</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Official SAT practice tests and prep materials from College Board. Essential for high school students.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SAT Prep</Badge>
                  <Badge variant="secondary">Practice Tests</Badge>
                  <Badge variant="secondary">Official</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link
                    href="https://collegereadiness.collegeboard.org/sat/practice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit SAT Practice
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* ACT Practice */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>ACT Practice</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Official ACT test prep resources including practice tests, study guides, and test-taking strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">ACT Prep</Badge>
                  <Badge variant="secondary">Practice Tests</Badge>
                  <Badge variant="secondary">Strategies</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link
                    href="https://www.act.org/content/act/en/products-and-services/the-act/test-preparation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit ACT Practice
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Coursera */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Coursera</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Online courses from top universities. Great for advanced high school students exploring college-level
                  topics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Advanced</Badge>
                  <Badge variant="secondary">University Level</Badge>
                  <Badge variant="secondary">Certificates</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">
                    Visit Coursera
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Wolfram Alpha */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Wolfram Alpha</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Computational knowledge engine for math, science, and engineering. Shows step-by-step solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Math</Badge>
                  <Badge variant="secondary">Science</Badge>
                  <Badge variant="secondary">Step-by-Step</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="https://www.wolframalpha.com" target="_blank" rel="noopener noreferrer">
                    Visit Wolfram Alpha
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Study Guides */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Study Skills & Tips</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential guides to help students develop effective study habits and time management skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Time Management Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Create a daily and weekly schedule</li>
                  <li>• Use the Pomodoro Technique (25-minute focused sessions)</li>
                  <li>• Prioritize tasks using the Eisenhower Matrix</li>
                  <li>• Set specific goals for each study session</li>
                  <li>• Take regular breaks to maintain focus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookmarkIcon className="h-5 w-5 text-secondary" />
                  Effective Study Techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Active reading with note-taking</li>
                  <li>• Create mind maps and visual organizers</li>
                  <li>• Practice retrieval with flashcards</li>
                  <li>• Teach concepts to someone else</li>
                  <li>• Use spaced repetition for memorization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Educational Blog</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, tips, and strategies to support your student's academic journey and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2024</span>
                </div>
                <CardTitle className="text-xl">5 Ways to Help Your Child Stay Motivated in School</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Discover practical strategies to keep your student engaged and motivated throughout the school year,
                  from setting achievable goals to celebrating small wins.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Motivation</Badge>
                  <Badge variant="outline">Parent Tips</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Article
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>December 10, 2024</span>
                </div>
                <CardTitle className="text-xl">How to Build Better Study Habits at Any Age</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Learn evidence-based techniques for developing effective study routines that stick, whether your
                  student is in elementary school or preparing for college.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Study Skills</Badge>
                  <Badge variant="outline">Habits</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Article
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>December 5, 2024</span>
                </div>
                <CardTitle className="text-xl">Why Tutoring Builds More than Just Grades</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Explore how personalized tutoring develops confidence, critical thinking skills, and a lifelong love
                  of learning that extends far beyond academic performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tutoring Benefits</Badge>
                  <Badge variant="outline">Confidence</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Article
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 4 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>November 28, 2024</span>
                </div>
                <CardTitle className="text-xl">Preparing for Standardized Tests: A Parent's Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Navigate the world of SAT, ACT, and AP exams with confidence. Learn how to support your student
                  through test preparation without adding stress.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Test Prep</Badge>
                  <Badge variant="outline">SAT/ACT</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Article
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 5 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>November 20, 2024</span>
                </div>
                <CardTitle className="text-xl">Creating a Productive Study Environment at Home</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Transform any space into an effective learning environment. Tips for minimizing distractions and
                  maximizing focus for students of all ages.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Study Space</Badge>
                  <Badge variant="outline">Home Learning</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Article
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 6 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>November 15, 2024</span>
                </div>
                <CardTitle className="text-xl">Understanding Different Learning Styles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Discover how visual, auditory, and kinesthetic learners process information differently and how to
                  adapt study methods to match your student's style.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Learning Styles</Badge>
                  <Badge variant="outline">Personalized Learning</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Article
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="bg-transparent">
              View All Blog Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Need Personalized Support?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            While these resources are helpful, nothing replaces personalized tutoring tailored to your student's unique
            needs and learning style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/services">Explore Our Services</Link>
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
