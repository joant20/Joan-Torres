import React, { useState } from 'react'
import SectionContainer from './SectionContainer'
import ProjectCard from './ProjectCard'
import { projectsData } from '../data/portfolioData'

export default function Projects() {
  const [selectedProjectDiagrams, setSelectedProjectDiagrams] = useState(null)
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0)

  const handleOpenDiagrams = (project) => {
    setSelectedProjectDiagrams(project)
    setActiveDiagramIndex(0)
  }

  const handleCloseModal = () => {
    setSelectedProjectDiagrams(null)
  }

  return (
    <SectionContainer
      id="proyectos"
      eyebrow="03 • PORTAFOLIO DE TRABAJO"
      title="Proyectos Desarrollados"
      subtitle="Aplicaciones y sistemas construidos aplicando desarrollo backend, interfaces en React y modelado de software."
      alternate
    >
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDiagrams={handleOpenDiagrams}
          />
        ))}
      </div>

      {selectedProjectDiagrams && (
        <div
          className="diagram-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Prototipos de ${selectedProjectDiagrams.title}`}
          onClick={handleCloseModal}
        >
          <div
            className="diagram-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="diagram-modal-header">
              <div>
                <span className="section-eyebrow">VISTA DE ARQUITECTURA & MOCKUPS</span>
                <h3 className="diagram-modal-title">
                  {selectedProjectDiagrams.title} —{' '}
                  {selectedProjectDiagrams.diagrams[activeDiagramIndex]?.title}
                </h3>
              </div>
              <button
                type="button"
                className="diagram-close-btn"
                onClick={handleCloseModal}
              >
                ✕ Cerrar
              </button>
            </div>

            <div className="diagram-tabs">
              {selectedProjectDiagrams.diagrams.map((diag, idx) => (
                <button
                  key={diag.title}
                  type="button"
                  className={`diagram-tab-btn ${
                    activeDiagramIndex === idx ? 'active' : ''
                  }`}
                  onClick={() => setActiveDiagramIndex(idx)}
                >
                  {diag.title}
                </button>
              ))}
            </div>

            <div className="diagram-viewer-frame">
              <img
                src={selectedProjectDiagrams.diagrams[activeDiagramIndex]?.src}
                alt={selectedProjectDiagrams.diagrams[activeDiagramIndex]?.title}
                className="diagram-image"
              />
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  )
}
