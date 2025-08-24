# MathTutor Pro Website

A modern, responsive website for your online math tutoring business built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional design with dark/light theme support
- 📱 **Responsive**: Works perfectly on all devices
- 🎬 **Lottie Animations**: Custom animations for engaging user experience
- 🌓 **Theme Toggle**: Automatic light/dark mode switching
- 📊 **Portfolio Section**: Showcase your worksheets and materials
- 🏆 **Certificates Display**: Highlight your qualifications
- 💬 **Testimonials**: Share student success stories
- 📞 **Contact Form**: Easy communication with potential students
- 🔗 **Social Media Integration**: Connect on various platforms

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd math-tutor-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your website.

## 📝 Content Management

### Easy Updates - No Code Required!

All your content is now managed through the `lib/config.ts` file. Simply edit this file to update your website:

#### 1. **Basic Information**
```typescript
export const siteConfig = {
  name: "MathTutor Pro",           // Your business name
  title: "Online Math Tutor",      // Main headline
  description: "K-12 to University | Algebra, Geometry, Calculus",
  tagline: "Clear explanations, interactive learning...",
}
```

#### 2. **Personal Information**
```typescript
personal: {
  name: "Your Name",               // Your actual name
  email: "your-email@example.com", // Your email
  phone: "+1234567890",            // Your phone
  location: "Your Location",       // Your location
  bio: "Your bio description...",  // About you
  image: "/your-image.png",        // Profile photo path
}
```

#### 3. **Add Your Certificates**
```typescript
certificates: [
  {
    title: "Your Certificate Name",
    issuer: "Issuing Organization",
    year: "2024",
    verified: true,
    link: "https://verify-link.com", // Certificate verification link
  },
  // Add more certificates...
]
```

#### 4. **Update Portfolio/Worksheets**
```typescript
portfolio: [
  {
    title: "Your Subject",
    description: "Description of what you teach",
    icon: "📊",                    // Emoji or symbol
    worksheets: 15,                // Number of worksheets
    link: "https://your-link.com", // Link to materials
  },
  // Add more subjects...
]
```

#### 5. **Add Student Testimonials**
```typescript
testimonials: [
  {
    name: "Student Name",
    grade: "Grade Level",
    subject: "Math Subject",
    rating: 5,                     // 1-5 stars
    text: "What the student said...",
  },
  // Add more testimonials...
]
```

#### 6. **Social Media Links**
```typescript
social: {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle",
  youtube: "https://youtube.com/@yourchannel",
  instagram: "https://instagram.com/yourhandle",
  website: "https://yourwebsite.com",
}
```

### Adding New Content

1. **New Certificate**: Add to the `certificates` array in `lib/config.ts`
2. **New Portfolio Item**: Add to the `portfolio` array
3. **New Testimonial**: Add to the `testimonials` array
4. **New Social Media**: Add to the `social` object

## 🎨 Customization

### Colors & Themes
The website automatically adapts to light/dark modes. Colors are defined in your Tailwind CSS configuration.

### Animation
Your Lottie animation file is configured in `lib/config.ts`:
```typescript
export const animationConfig = {
  lottieFile: "/Exams Preparation..json", // Your animation file
  loop: true,
  autoplay: true,
}
```

### Images
- Place your images in the `public/` folder
- Update the image paths in `lib/config.ts`
- Supported formats: PNG, JPG, SVG, WebP

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Most likely not needed for this project

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, great for static sites
- **Railway**: Good for full-stack applications
- **AWS Amplify**: Enterprise-grade hosting

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Structure
```
├── app/                 # Next.js app directory
│   ├── page.tsx        # Main page component
│   └── layout.tsx      # Root layout
├── components/          # Reusable UI components
├── lib/                 # Utilities and configuration
│   └── config.ts       # Main content configuration
├── public/              # Static assets
│   └── Exams Preparation..json  # Your Lottie animation
├── styles/              # Global styles
└── package.json         # Dependencies
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- 📱 Mobile phones
- 📱 Tablets  
- 💻 Desktop computers
- 🖥️ Large screens

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🔒 Security Features

- ✅ HTTPS ready
- ✅ Secure external links (`rel="noopener noreferrer"`)
- ✅ Input sanitization
- ✅ XSS protection

## 📈 Performance

- ✅ Next.js optimization
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ SEO optimized

## 🆘 Troubleshooting

### Common Issues

1. **Animation not showing**
   - Check if `Exams Preparation..json` is in the `public/` folder
   - Verify the file path in `lib/config.ts`

2. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for syntax errors in `lib/config.ts`

3. **Images not loading**
   - Verify image paths in `public/` folder
   - Check image paths in `lib/config.ts`

### Getting Help

- Check the browser console for errors
- Verify all file paths are correct
- Ensure all dependencies are installed

## 🎯 Next Steps

After deployment, consider:

1. **SEO Optimization**
   - Add meta tags
   - Submit sitemap to search engines
   - Set up Google Analytics

2. **Content Updates**
   - Add real testimonials
   - Upload actual worksheets
   - Include real certificate links

3. **Analytics**
   - Google Analytics
   - Vercel Analytics
   - User behavior tracking

4. **Backup**
   - Regular content backups
   - Version control with Git
   - Database backups (if adding backend)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For questions or support:
- Email: [your-email@example.com]
- GitHub Issues: [Create an issue](https://github.com/yourusername/math-tutor-website/issues)

---

**Happy Teaching! 🧮📚✨**
