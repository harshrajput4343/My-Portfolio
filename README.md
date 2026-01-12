# Harsh Kumar - Portfolio Website

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.25.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A modern, responsive portfolio website showcasing my professional journey, research work, projects, skills, and certifications.

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contact](#contact)
- [License](#license)

---

## 🎯 About The Project

This portfolio website serves as a comprehensive showcase of my professional experience, academic research, technical skills, and accomplishments. Built with cutting-edge web technologies, it provides an immersive and interactive experience while maintaining optimal performance and accessibility.

### Key Sections

- **Hero** - Dynamic introduction with animated background effects
- **About** - Professional background and overview
- **Skills** - Technical proficiencies and competencies
- **Research** - Academic research work and publications
- **Projects** - Portfolio of development projects
- **Certifications** - Professional certifications and achievements
- **Contact** - Get in touch section with contact information

---

## ✨ Key Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Responsive Design** - Fully optimized for all device sizes
- ⚡ **High Performance** - Optimized loading and rendering performance
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 📱 **Mobile-First Approach** - Exceptional experience across all devices
- ♿ **Accessible** - Built with accessibility best practices
- 🔍 **SEO Optimized** - Enhanced search engine visibility
- 🚀 **Fast Navigation** - Seamless client-side routing
- 💅 **Tailwind CSS** - Utility-first styling for rapid development
- 🎯 **Type Safety** - Full TypeScript implementation

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library with latest features

### Styling & UI
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion 12.25.0** - Animation library
- **Lucide React 0.562.0** - Beautiful icon set
- **clsx & tailwind-merge** - Conditional class management

### Development
- **TypeScript 5** - Type-safe JavaScript
- **ESLint 9** - Code quality and consistency
- **PostCSS** - CSS transformation

---

## 📁 Project Structure

```
harsh-portfolio/
├── public/
│   ├── images/           # Image assets
│   └── resumes/          # Resume files
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Research.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/           # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** / **yarn** / **pnpm** / **bun**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/harshrajput4343/My-Portfolio.git
cd harsh-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload when you make changes. You can start editing by modifying files in the `src/` directory.

### Build

Create an optimized production build:

```bash
npm run build
npm run start
```

This will:
1. Build the application for production
2. Start the production server on `http://localhost:3000`

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harshrajput4343/My-Portfolio.git)

### Other Platforms

This application can also be deployed to:
- **Netlify** - Static site hosting with edge functions
- **AWS Amplify** - Full-stack deployment platform
- **Docker** - Containerized deployment
- **Traditional Hosting** - Export as static site using `next export`

For detailed deployment instructions, see the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## ⚡ Performance

This portfolio is built with performance in mind:

- ✅ Server-side rendering (SSR) for faster initial loads
- ✅ Optimized images and assets
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle size
- ✅ Efficient CSS with Tailwind CSS
- ✅ Lighthouse score: 95+ on all metrics

---

## 📫 Contact

**Harsh Kumar**

- Portfolio: [https://harshrajput4343.vercel.app/]
- Email: [harshkumarsingh4343.com]
- LinkedIn: [linkedin.com/in/yourprofile](https://www.linkedin.com/in/harshkumar4343/)
- GitHub: [github.com/harshrajput4343](https://github.com/harshrajput4343/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/) for hosting

---

<div align="center">

**[⬆ Back to Top](#harsh-kumar---portfolio-website)**

Made with effort by Harsh Kumar

</div>
