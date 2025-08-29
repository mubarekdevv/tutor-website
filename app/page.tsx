"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calculator,
  BookOpen,
  Award,
  Users,
  Mail,
  Phone,
  Star,
  Download,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import Lottie from "lottie-react";
import { siteConfig, animationConfig } from "@/lib/config";
import { useState, useEffect } from "react";

export default function MathTutorWebsite() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        console.log("Loading animation from /data/exams-preparation.json");
        const response = await fetch("/data/exams-preparation.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Animation loaded successfully:", data);
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load animation:", error);
        setAnimationData(null);
      }
    };

    loadAnimation();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-primary" />
              <span className="text-xl font-serif font-bold text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#certificates"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Certificates
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
              <ThemeToggle />
              <Button className="text-foreground hover:text-background">
                {siteConfig.cta.primary}
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                  {siteConfig.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  {siteConfig.description}
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  {siteConfig.tagline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-3 text-foreground hover:text-background"
                  >
                    {siteConfig.cta.primary}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-3 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary border-2 transition-all duration-200 dark:hover:text-primary"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {siteConfig.cta.secondary}
                  </Button>
                </div>
              </div>

              {/* Lottie Animation */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md h-80 flex items-center justify-center overflow-hidden">
                  {animationData ? (
                    <Lottie
                      animationData={animationData}
                      loop={animationConfig.loop}
                      autoplay={animationConfig.autoplay}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      <p className="text-sm text-muted-foreground">
                        Loading animation...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="group relative">
                <img
                  src="/mubaPro.png"
                  alt="Professional Math Tutor"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto transition-transform duration-75 ease-out transform-gpu will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = ((y - centerY) / centerY) * -25;
                    const rotateY = ((x - centerX) / centerX) * 25;

                    e.currentTarget.style.transform = `
                      perspective(800px) 
                      rotateX(${rotateX}deg) 
                      rotateY(${rotateY}deg) 
                      scale(1.05)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
                  }}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong background in both software engineering and
                  civil engineering, I bring a unique perspective to mathematics
                  education. My deep understanding of mathematical principles,
                  combined with years of tutoring experience, allows me to break
                  down complex concepts into clear, digestible explanations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Organized</h3>
                    <p className="text-sm text-muted-foreground">
                      Structured learning approach
                    </p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Patient</h3>
                    <p className="text-sm text-muted-foreground">
                      Understanding every student's pace
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Clear Communication</Badge>
                  <Badge variant="secondary">Results-Focused</Badge>
                  <Badge variant="secondary">Interactive Learning</Badge>
                  <Badge variant="secondary">Personalized Guidance</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Worksheets Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Portfolio & Worksheets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.portfolio.map((subject, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <CardTitle className="font-serif">{subject.title}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {subject.worksheets} worksheets available
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="text-foreground hover:text-background"
                    >
                      View All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Certificates & Qualifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.certificates.map((cert, index) => (
              <Card
                key={index}
                className={`${
                  cert.verified ? "border-primary/20" : "border-dashed"
                } group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5`}
              >
                {/* Background image + gradient overlay for readability */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform-gpu transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${
                        (cert as any).image || "/placeholder.jpg"
                      })`,
                      filter: "saturate(0.9) contrast(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/85 to-background/95 group-hover:from-background/60 group-hover:via-background/70 group-hover:to-background/80 transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Award
                        className={`h-6 w-6 ${
                          cert.verified
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      {cert.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-serif">
                      {cert.title}
                    </CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.year}
                    </CardDescription>
                  </CardHeader>
                  {cert.verified && (
                    <CardContent className="pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center gap-2 text-foreground transition-all backdrop-blur-sm border border-transparent hover:border-primary/30 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99]"
                        onClick={() => {
                          if (cert.link && cert.link !== "#") {
                            window.open(
                              cert.link,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </Button>
                    </CardContent>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Student Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {siteConfig.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>
                        {testimonial.grade} • {testimonial.subject}
                      </CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              More testimonials coming as I help more students succeed!
            </p>
            <Button
              variant="outline"
              className="text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary border-2 transition-all duration-200 dark:hover:text-primary"
              onClick={() => {
                // Scroll to contact section where they can share their experience
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Share Your Experience
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Ready to start your math journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're struggling with basic concepts or looking to
                master advanced topics, I'm here to help you succeed. Let's
                discuss your goals and create a personalized learning plan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:mubarekj71@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    mubarekj71@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+251910401222</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  <a href="#" className="text-primary hover:underline">
                    View Professional Profile
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="space-y-3 pt-4">
                  <h4 className="font-semibold text-foreground">
                    Connect with me:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {siteConfig.social.linkedin !==
                      "https://linkedin.com/in/yourprofile" && (
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {siteConfig.social.github !==
                      "https://github.com/yourusername" && (
                      <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    {siteConfig.social.youtube !==
                      "https://youtube.com/@yourchannel" && (
                      <a
                        href={siteConfig.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>YouTube</span>
                      </a>
                    )}
                    {siteConfig.social.instagram !==
                      "https://instagram.com/yourhandle" && (
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-2.617 6.782-6.98 6.979-1.281.059-1.69.073-4.949.073-3.259 0-3.667-.014-4.947-.072-4.358-.2-6.78-2.618-6.98-6.98-.059-1.281-.073-1.689-.073-4.948 0-3.259.014-3.667.072-4.947.2-4.358 2.618-6.78 6.98-6.98 1.281-.059 1.689-.073 4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Send a Message</CardTitle>
                <CardDescription>
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject (e.g., Calculus Tutoring)" />
                <Textarea
                  placeholder="Tell me about your math goals and current challenges..."
                  className="min-h-[100px]"
                />
                <Button className="w-full text-foreground hover:text-background dark:hover:text-primary">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="text-lg font-serif font-bold">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-muted-foreground mb-2">
            {siteConfig.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.footer.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
