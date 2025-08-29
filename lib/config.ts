// Configuration file for easy content management
// Update these values to customize your website content

export const siteConfig = {
  // Basic Information
  name: "MathTutor Pro",
  title: "Online Math Tutor",
  description: "K-12 to University | Algebra, Geometry, Calculus",
  tagline:
    "Clear explanations, interactive learning, and personalized guidance to help you master mathematics at every level",

  // Personal Information
  personal: {
    name: "Your Name",
    email: "mubarekj71@gmail.com",
    phone: "+251910401222",
    location: "Ethiopia",
    bio: "With a strong background in both software engineering and civil engineering, I bring a unique perspective to mathematics education. My deep understanding of mathematical principles, combined with years of tutoring experience, allows me to break down complex concepts into clear, digestible explanations.",
    image: "/mubaPro.png", // Your profile image path
  },

  // Skills & Qualities
  skills: [
    "Clear Communication",
    "Results-Focused",
    "Interactive Learning",
    "Personalized Guidance",
  ],

  // Portfolio/Worksheets
  portfolio: [
    {
      title: "Algebra Fundamentals",
      description:
        "Linear equations, quadratic functions, and polynomial operations",
      icon: "📊",
      worksheets: 12,
      link: "#", // Add your actual worksheet links here
    },
    {
      title: "Geometry Essentials",
      description: "Shapes, angles, proofs, and spatial reasoning",
      icon: "📐",
      worksheets: 8,
      link: "#",
    },
    {
      title: "Calculus Mastery",
      description: "Derivatives, integrals, and advanced calculus concepts",
      icon: "∫",
      worksheets: 15,
      link: "#",
    },
    {
      title: "Advanced Topics",
      description: "Statistics, discrete math, and problem-solving strategies",
      icon: "🧮",
      worksheets: 10,
      link: "#",
    },
  ],

  // Certificates & Qualifications
  certificates: [
    {
      title: "CLEP Pre-Calculus: Functions and Conic Sections",
      issuer: "Alison",
      year: "2025",
      verified: true,
      link: "https://alison.com/certification/check/40b82536e6",
      image: "/alison-certificate.png",
    },
    {
      title: "Advanced Mathematics Certificate",
      issuer: "Coursera",
      year: "2024",
      verified: true,
      link: "#", // Add your certificate verification links
    },
    {
      title: "Teaching Excellence in STEM",
      issuer: "edX",
      year: "2023",
      verified: true,
      link: "#",
    },
    {
      title: "Calculus Specialization",
      issuer: "Khan Academy",
      year: "2023",
      verified: true,
      link: "#",
    },
    {
      title: "Engineering Mathematics",
      issuer: "University Certificate",
      year: "2022",
      verified: true,
      link: "#",
    },
    {
      title: "English Proficiency (C2)",
      issuer: "Cambridge",
      year: "2024",
      verified: true,
      link: "#",
    },
    // Add more certificates here
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah M.",
      grade: "High School Senior",
      subject: "Calculus",
      rating: 5,
      text: "Thanks to the clear explanations and patient guidance, I went from struggling with derivatives to acing my AP Calculus exam!",
    },
    {
      name: "James L.",
      grade: "College Freshman",
      subject: "Algebra",
      rating: 5,
      text: "The personalized approach helped me build a strong foundation in algebra. Now I feel confident tackling more advanced math courses.",
    },
    {
      name: "Parent - Munirah J.",
      grade: "8th Grader",
      subject: "Geometry",
      rating: 5,
      text: "My daughter's confidence in math has improved dramatically. The interactive learning style really works for visual learners like her.",
    },
    // Add more testimonials here
  ],

  // Social Media & Professional Links
  social: {
    linkedin: "https://linkedin.com/in/yourprofile", // Your LinkedIn profile
    github: "https://github.com/yourusername", // Your GitHub profile
    twitter: "https://twitter.com/yourhandle", // Your Twitter/X profile
    youtube: "https://youtube.com/@yourchannel", // Your YouTube channel
    instagram: "https://instagram.com/yourhandle", // Your Instagram
    website: "https://yourwebsite.com", // Your personal website
  },

  // Contact Information
  contact: {
    email: "mubarekj71@gmail.com",
    phone: "+251910401222",
    availability: "Monday - Friday, 9 AM - 6 PM (Local Time)",
    responseTime: "Within 24 hours",
  },

  // Call-to-Action Buttons
  cta: {
    primary: "Schedule a Lesson",
    secondary: "Contact Me",
    portfolio: "View Portfolio",
    testimonials: "Share Your Experience",
  },

  // Footer
  footer: {
    copyright:
      "© 2024 Online Math Tutor. Helping students excel in mathematics from K-12 to university level.",
    tagline: "Empowering students through personalized mathematics education",
  },
};

// Animation configuration
export const animationConfig = {
  lottieFile: "/Exams Preparation..json", // Your Lottie animation file
  loop: true,
  autoplay: true,
};

// Theme colors (these will automatically adapt to light/dark mode)
export const themeColors = {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  muted: "hsl(var(--muted))",
  accent: "hsl(var(--accent))",
};
