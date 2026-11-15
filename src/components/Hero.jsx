import React from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content fade-in-up">
          <div className="status-pill">
            <span className="status-dot" />
            <span>{personalInfo.statusBadge}</span>
          </div>

          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-title">{personalInfo.name}</h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-subtitle">{personalInfo.subtitle}</p>
          <p className="hero-description">{personalInfo.heroDescription}</p>

          <div className="hero-cta-group">
            <a href="#proyectos" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Perfil de GitHub
            </a>
            <a href="#contacto" className="btn btn-outline">
              Contacto
            </a>
          </div>

          <div className="hero-meta-row">
            <div className="hero-meta-item">
              <span className="hero-meta-label">Enfoque Principal</span>
              <span className="hero-meta-value">Backend & APIs REST</span>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <span className="hero-meta-label">Stack Base</span>
              <span className="hero-meta-value">Node.js • Express • React</span>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <span className="hero-meta-label">Ubicación</span>
              <span className="hero-meta-value">{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual fade-in-up" aria-label="Resumen técnico en código">
          <div className="code-window">
            <div className="code-window-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="code-filename">joan-torres.config.js</span>
            </div>

            <pre className="code-content">
              <code>
{`const developer = {
  nombre: "${personalInfo.name}",
  formacion: "Ingeniería de Software",
  interesPrincipal: "Desarrollo Backend",
  lenguajeBase: "JavaScript (ES6+)",
  backend: ["Node.js", "Express"],
  frontend: ["React", "Vite", "CSS"],
  basesDeDatos: ["MongoDB", "MySQL"],
  controlVersiones: ["Git", "GitHub"],
  objetivo: "Crear software limpio, útil y escalable"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
