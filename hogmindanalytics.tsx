import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Clock, Compass, Database, LineChart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">HogMind Analytics</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#approach" className="text-sm font-medium hover:text-primary">
              Our Approach
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Digging Deep for Intelligent Insights
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  HogMind Analytics combines deep data analysis with predictive intelligence to help businesses make
                  smarter decisions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1" asChild>
                    <Link
                      href="https://calendly.com/your-username/consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl opacity-50"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-lg border">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                        <Brain className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">AI Insights</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                        <Database className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">Data Mining</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                        <LineChart className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">Predictive Models</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                        <Compass className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">Strategic Direction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How We Help Businesses Grow
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We dig deep into your data to uncover insights and predict future trends, helping you make informed
                  decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Service 1 */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                <BarChart3 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Data Analytics</h3>
                <p className="text-sm text-gray-500">
                  Transform raw data into actionable insights with our comprehensive analytics services.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                <Brain className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">AI Solutions</h3>
                <p className="text-sm text-gray-500">
                  Leverage the power of artificial intelligence to automate processes and enhance decision-making.
                </p>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                <Lightbulb className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Strategic Consulting</h3>
                <p className="text-sm text-gray-500">
                  Get expert guidance on business strategy informed by data-driven insights.
                </p>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                <LineChart className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Predictive Forecasting</h3>
                <p className="text-sm text-gray-500">
                  Anticipate market trends and customer behavior with our advanced predictive models.
                </p>
              </div>

              {/* Service 5 */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                <Database className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Data Infrastructure</h3>
                <p className="text-sm text-gray-500">
                  Build robust data systems that scale with your business and provide reliable insights.
                </p>
              </div>

              {/* Service 6 */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Real-time Analytics</h3>
                <p className="text-sm text-gray-500">
                  Monitor key metrics in real-time to make quick, informed decisions when they matter most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section id="approach" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Approach</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The HogMind Methodology</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Like our groundhog namesake, we dig deep into data and predict what's coming next.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">1</div>
                    <div>
                      <h3 className="font-bold">Dig Deep</h3>
                      <p className="text-sm text-gray-500">
                        We thoroughly analyze your data to uncover hidden patterns and insights.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">2</div>
                    <div>
                      <h3 className="font-bold">Predict the Future</h3>
                      <p className="text-sm text-gray-500">
                        Using advanced AI models, we forecast trends and outcomes with precision.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">3</div>
                    <div>
                      <h3 className="font-bold">Strategic Intelligence</h3>
                      <p className="text-sm text-gray-500">
                        We transform insights into actionable strategies for your business.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">4</div>
                    <div>
                      <h3 className="font-bold">Continuous Adaptation</h3>
                      <p className="text-sm text-gray-500">
                        We refine our models and strategies as new data becomes available.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl opacity-50"></div>
                  <div className="relative h-full w-full rounded-xl bg-white p-6 shadow-lg border flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="h-20 w-20 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Intelligent Analysis</h3>
                      <p className="text-sm text-gray-500 max-w-xs mx-auto">
                        Our proprietary methodology combines human expertise with AI-powered analytics for superior
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The HogMind Story</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded by Maria Gutierrez, MS in Business Analytics from the University of Dallas, HogMind Analytics
                  combines academic excellence with practical business intelligence to deliver exceptional data-driven
                  solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12 space-y-6">
              <p className="text-gray-500">
                Maria founded HogMind Analytics with a vision to transform how businesses leverage data. With her
                background in Industrial Engineering and advanced expertise in Business Analytics, she brings a unique
                perspective to data challenges across industries.
              </p>
              <p className="text-gray-500">
                Her technical proficiency in SQL, Python, Tableau, and various AI frameworks, combined with her
                experience in retail analytics, media buying, and inventory optimization, enables HogMind to deliver
                insights that drive real business impact.
              </p>
              <p className="text-gray-500">
                Maria's award-winning work includes developing custom analytics solutions that have increased sales
                revenue by 45% and improved inventory fill rates from 60% to 95%. As a winner of the Intelligage AI
                Hackathon for her work on PediMinds, she brings cutting-edge AI expertise to every client engagement.
              </p>
              <div className="flex justify-center mt-8">
                <Button>Learn More About Maria</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Dig Deeper?</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch to discover how HogMind Analytics can transform your data into strategic advantage.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="font-bold">Email:</span> maria@hogmindanalytics.com
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold">Phone:</span> (555) 123-4567
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold">Address:</span> Dallas, Texas
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">HogMind Analytics</span>
            </div>
            <p className="text-sm text-gray-500">Digging deep for intelligent insights.</p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Strategic Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Whitepapers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">© 2025 HogMind Analytics. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
