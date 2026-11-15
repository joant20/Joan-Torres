import React from 'react'

export default function ProjectCard({ project, onOpenDiagrams }) {
  return (
    <article
      className={`project-card ${
        project.featured ? 'project-card-featured' : ''
      }`}
    >
      <div className="project-card-header">
        <span className="project-category">{project.category}</span>
        {project.featured && (
          <span className="project-featured-badge">Proyecto Destacado</span>
        )}
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item} className="project-highlight-item">
              <span className="highlight-bullet" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="project-tech-list" aria-label="Tecnologías utilizadas">
        {project.tech.map((techItem) => (
          <li key={techItem} className="project-tech-chip">
            {techItem}
          </li>
        ))}
      </ul>

      <div className="project-actions">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            Visitar Proyecto ↗
          </a>
        )}

        {project.diagrams && project.diagrams.length > 0 && (
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => onOpenDiagrams(project)}
          >
            Ver Prototipos & Diagramas
          </button>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            Repositorio GitHub
          </a>
        )}

        {project.secondaryRepoUrl && (
          <a
            href={project.secondaryRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
          >
            {project.secondaryRepoLabel || 'Repositorio Backend'}
          </a>
        )}
      </div>
    </article>
  )
}
