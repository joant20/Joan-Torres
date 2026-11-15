import React, { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { FaEnvelope, FaCheck, FaCopy, FaLinkedin } from 'react-icons/fa'
import SectionContainer from './SectionContainer'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2600)
    } catch {
      // Fallback
    }
  }

  return (
    <SectionContainer
      id="contacto"
      eyebrow="05 • CONECTEMOS"
      title="Contacto"
      subtitle="¿Buscas un desarrollador en formación comprometido, con bases sólidas en backend y ganas de aportar en proyectos reales? Estoy disponible para conversar."
      alternate
    >
      <div className="contact-grid">
        {/* Tarjeta Email */}
        <article className="contact-card">
          <div className="contact-icon-wrap" aria-hidden="true">
            <FaEnvelope className="contact-icon" />
          </div>
          <span className="contact-label">Correo Electrónico</span>
          <h3 className="contact-value">{personalInfo.email}</h3>
          <p className="contact-hint">Respuesta directa para oportunidades o colaboraciones</p>
          <div className="contact-card-actions">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary btn-sm"
            >
              Enviar Correo
            </a>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <FaCheck /> Copiado
                </>
              ) : (
                <>
                  <FaCopy /> Copiar
                </>
              )}
            </button>
          </div>
        </article>

        {/* Tarjeta GitHub */}
        <article className="contact-card">
          <div className="contact-icon-wrap" aria-hidden="true">
            <SiGithub className="contact-icon" />
          </div>
          <span className="contact-label">Repositorios & Código</span>
          <h3 className="contact-value">GitHub ({personalInfo.githubUser})</h3>
          <p className="contact-hint">Explora mis repositorios, código fuente y commits</p>
          <div className="contact-card-actions">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Visitar GitHub ↗
            </a>
          </div>
        </article>

        {/* Tarjeta LinkedIn */}
        <article className="contact-card">
          <div className="contact-icon-wrap" aria-hidden="true">
            <FaLinkedin className="contact-icon" />
          </div>
          <span className="contact-label">Red Profesional</span>
          <h3 className="contact-value">LinkedIn</h3>
          <p className="contact-hint">Conecta conmigo y sigue mi crecimiento académico y técnico</p>
          <div className="contact-card-actions">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Ver Perfil LinkedIn ↗
            </a>
          </div>
        </article>
      </div>
    </SectionContainer>
  )
}
