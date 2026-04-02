# Jose Gabriel Zevallos - Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 🚀 Fast performance with Next.js
- 📱 Mobile-first responsive layout
- 🎨 Beautiful UI with Tailwind CSS
- 📧 Contact form
- 🔗 Social media links
- ⚡ Smooth scrolling navigation

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel / GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/josegabrielzevallos/Portafolio.git
cd Portafolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

The application will be optimized and ready for deployment.

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Click "Deploy"

### Deploy on GitHub Pages

1. Add the following to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
}
module.exports = nextConfig
```

2. Build and deploy:
```bash
npm run build
```

3. Push the `out` folder to `gh-pages` branch

## Sections

- **About**: Introduction and key statistics
- **Experience**: Professional work history
- **Projects**: Featured projects and achievements
- **Skills**: Technical skills and specialties
- **Education**: Academic background and certifications
- **Contact**: Contact form and social links

## Customization

To customize the portfolio with your own information:

1. Update component data in `/components`
2. Modify colors in `tailwind.config.js`
3. Replace `JGZ` initials in `Navbar.tsx`

## Project Structure

```
Portafolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Project showcase
│   ├── Skills.tsx          # Technical skills
│   ├── Education.tsx       # Education section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: jose.zevallos.delgadolaflor@gmail.com
- **LinkedIn**: [jose-gabriel-zevallos-delgado-de-la-flor](https://www.linkedin.com/in/jose-gabriel-zevallos-delgado-de-la-flor-a82307250)
- **GitHub**: [@josegabrielzevallos](https://github.com/josegabrielzevallos)
