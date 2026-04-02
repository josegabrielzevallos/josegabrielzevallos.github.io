export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Jose Gabriel Zevallos
        </h1>
        <h2 className="text-2xl md:text-3xl text-accent mb-4">
          Software Engineer | Web & ERP Developer
        </h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Bachelor's in Computer Science with expertise in web development, artificial intelligence, and enterprise systems.
          Passionate about building scalable solutions using React, Django, and modern cloud technologies.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="https://github.com/josegabrielzevallos" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View GitHub
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-accent">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">20+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">3+</div>
            <div className="text-gray-400">Companies</div>
          </div>
        </div>
      </div>
    </section>
  )
}
