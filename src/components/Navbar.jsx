import React, { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1))
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#inicio" className="brand-logo" onClick={() => setMenuOpen(false)}>
          <span className="brand-monogram">JT</span>
          <span className="brand-text">
            {personalInfo.name}
            <span className="brand-dot">.dev</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Navegación principal">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link ${isCurrent ? 'nav-link-active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
          >
            GitHub
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`hamburger-line ${menuOpen ? 'open-1' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open-2' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open-3' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="nav-mobile" aria-label="Navegación móvil">
          <ul className="nav-mobile-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
