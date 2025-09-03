# Viral Chovatiya - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. This portfolio showcases my skills, projects, and professional experience as a Frontend Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with a grid-based layout
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized with Vite for fast development and building

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📱 Sections

1. **Hero Section**: Introduction with name, role, and call-to-action buttons
2. **About Section**: Professional summary and key achievements
3. **Skills Section**: Technical skills organized by category with proficiency levels
4. **Projects Section**: Showcase of featured projects with tech stacks and links
5. **Experience Section**: Work experience timeline with detailed achievements
6. **Contact Section**: Contact form and social media links
7. **Footer**: Quick links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.17.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx     # Navigation component
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Projects.tsx   # Projects section
│   ├── ProjectCard.tsx # Individual project card
│   ├── Experience.tsx # Experience section
│   ├── Contact.tsx    # Contact section
│   └── Footer.tsx     # Footer component
├── data/               # Static data
│   ├── projects.ts    # Project information
│   ├── skills.ts      # Skills data
│   ├── experience.ts  # Work experience
│   └── social.ts      # Social media links
├── hooks/              # Custom React hooks
│   └── useTheme.ts    # Theme management hook
├── types/              # TypeScript type definitions
│   └── index.ts       # Main type definitions
├── utils/              # Utility functions
├── App.tsx            # Main App component
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`. The current theme includes:

- Primary colors (blue variants)
- Dark mode colors
- Custom animations and keyframes

### Content

Update the content by modifying the data files in the `src/data/` directory:

- `projects.ts`: Add/remove projects and update project details
- `skills.ts`: Modify skills, categories, and proficiency levels
- `experience.ts`: Update work experience and achievements
- `social.ts`: Update social media links and contact information

### Styling

The project uses Tailwind CSS utility classes. Custom styles are defined in `src/index.css` using Tailwind's `@layer` directive.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🌙 Dark Mode

Dark mode is automatically detected based on:
1. User's saved preference (stored in localStorage)
2. System preference (if no saved preference exists)

Users can toggle between themes using the theme toggle button in the navigation.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: vchovatiya992@gmail.com
- **LinkedIn**: [Viral Chovatiya](https://www.linkedin.com/in/viral-chovatiya-b66a751a0)
- **Phone**: +91 8758921153

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
