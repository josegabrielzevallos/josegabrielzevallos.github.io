'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-secondary/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-accent">
          JGZ
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-primary hidden md:block">
          Contact Me
        </a>
      </div>
    </nav>
  )
}
