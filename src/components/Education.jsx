import React from 'react'
import SectionContainer from './SectionContainer'
import { educationData } from '../data/portfolioData'

export default function Education() {
  return (
    <SectionContainer
      id="formacion"
      eyebrow="04 • TRAYECTORIA DE APRENDIZAJE"
      title="Formación Académica"
      subtitle="Preparación universitaria en Ingeniería de Software complementada con el desarrollo práctico de aplicaciones."
    >
      <div className="education-grid">
        {educationData.map((item) => (
          <article key={item.id} className="education-card">
            <div className="education-card-top">
              <span className="education-status">{item.status}</span>
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
            </div>

            <p className="education-description">{item.description}</p>

            <div className="education-topics">
              {item.topics.map((topic) => (
                <span key={topic} className="education-topic-chip">
                  {topic}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}
