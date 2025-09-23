# JuicyTale - Modern Next.js Website

A modern, professional website for JuicyTale built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Mobile Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎨 **Smooth Animations**: Professional animations using Framer Motion
- 🎯 **SEO Optimized**: Proper meta tags and structured data
- 🔧 **TypeScript**: Full type safety throughout the application
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development

## Pages

- **Home**: Hero section, features, franchise benefits, and business models
- **About**: Company story, mission, team, and timeline
- **Menu**: Complete menu with filtering and search functionality
- **Contact**: Contact form, location info, and FAQ
- **Franchise**: Franchise opportunities, investment packages, and application form

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── menu/              # Menu page
│   ├── contact/           # Contact page
│   └── franchise/         # Franchise page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Site footer
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Key Components

### UI Components
- **Button**: Customizable button with multiple variants
- **Card**: Animated card component with hover effects
- **FeatureCard**: Specialized card for feature highlights
- **AnimatedText**: Text with scroll-triggered animations

### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Green tones (juice/natural theme)
- Secondary: Orange tones (fruit theme)

### Animations
Animations are configured in `tailwind.config.js` and can be customized:
- Fade in/out effects
- Slide animations
- Hover effects
- Scroll-triggered animations

### Content
All content is easily editable in the respective page components.

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant components and navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The website can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

## License

This project is proprietary to JuicyTale.

## Support

For technical support or questions about the website, contact the development team.
