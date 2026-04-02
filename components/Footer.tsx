export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-accent/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Social</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com/josegabrielzevallos" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/jose-gabriel-zevallos-delgado-de-la-flor-a82307250" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="email:jose.zevallos.delgadolaflor@gmail.com" className="hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Location</h3>
            <p className="text-gray-400">Vancouver, BC, Canada</p>
            <p className="text-gray-500 text-sm mt-2">Open to remote opportunities</p>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-gray-500">
          <p>© {currentYear} Jose Gabriel Zevallos. All rights reserved.</p>
          <p className="text-sm mt-2">Crafted with React, Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
