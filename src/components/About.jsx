import React from 'react'
import SectionContainer from './SectionContainer'
import { aboutData } from '../data/portfolioData'

export default function About() {
  return (
    <SectionContainer
      id="sobre-mi"
      eyebrow="01 • PERFIL PERSONAL"
      title="Sobre mí"
      subtitle="Estudiante de Ingeniería de Software comprometido con el aprendizaje continuo y la construcción de soluciones reales."
      alternate
    >
      <div className="about-layout">
        <div className="about-text-card">
          {aboutData.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about-pillars">
          {aboutData.pillars.map((pillar, index) => (
            <article key={pillar.id} className="pillar-card">
              <div className="pillar-index">0{index + 1}</div>
              <div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
