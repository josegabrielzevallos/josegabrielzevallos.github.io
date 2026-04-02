export default function Experience() {
  const experiences = [
    {
      title: 'Founder & Developer',
      company: 'Medical Appointment Startup',
      period: '11/2025 – Present',
      description: 'Designed and developed a medical appointment management platform using React, Django, and PostgreSQL. Managed cloud infrastructure on Google Cloud with Docker.',
      highlights: ['React', 'Django', 'PostgreSQL', 'Google Cloud', 'Docker'],
    },
    {
      title: 'Developer Analyst',
      company: 'Periferia IT Group (Bancamía)',
      period: '04/2024 – Present',
      description: 'Administered GeneXus source control, managed SVT workflows, and coordinated CI/CD readiness with GitLab and Jenkins.',
      highlights: ['GeneXus', 'GitLab', 'Jenkins', 'SVT'],
    },
    {
      title: 'Developer Analyst',
      company: 'Sonda del Perú',
      period: '03/2024 – 07/2025',
      description: 'Developed core investment maintainers using hybrid architecture with stored procedures and GeneXus. Implemented dual-control approval models.',
      highlights: ['GeneXus', 'SQL', 'API Design'],
    },
    {
      title: 'Software Engineer',
      company: 'Incalpaca TPX',
      period: '02/2022 – 03/2024',
      description: 'Engineered enterprise surveillance and access-control systems. Redesigned ERP logistics workflows improving operational efficiency.',
      highlights: ['ERP', 'Django', 'System Design'],
    },
  ]

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-accent pl-6 py-4 hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-accent font-semibold">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
