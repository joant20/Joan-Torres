import React from 'react'
import SectionContainer from './SectionContainer'
import { skillsLevels } from '../data/portfolioData'

export default function Skills() {
  return (
    <SectionContainer
      id="habilidades"
      eyebrow="02 • STACK TECNOLÓGICO"
      title="Habilidades Técnicas"
      subtitle="Tecnologías organizadas de forma transparente según mi nivel real de conocimiento y práctica en proyectos."
    >
      <div className="skills-levels-stack">
        {skillsLevels.map((group) => (
          <div key={group.id} className="skill-group-block">
            <div className="skill-group-header">
              <div>
                <h3 className="skill-group-title">{group.levelTitle}</h3>
                <p className="skill-group-desc">{group.description}</p>
              </div>
              <span className="skill-group-badge">{group.levelBadge}</span>
            </div>

            <div className="skills-grid">
              {group.skills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <article key={skill.name} className="skill-card">
                    <div className="skill-card-top">
                      <div className="skill-icon-box" aria-hidden="true">
                        <IconComponent className="skill-icon" />
                      </div>
                      <div className="skill-meta">
                        <span className="skill-category">{skill.category}</span>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                      <span className="skill-level-pill">{skill.levelLabel}</span>
                    </div>

                    <p className="skill-detail">{skill.detail}</p>

                    <div className="skill-bar-track" aria-hidden="true">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
