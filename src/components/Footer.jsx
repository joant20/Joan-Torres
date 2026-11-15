import React from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-monogram brand-monogram-sm">JT</span>
          <div>
            <p className="footer-name">{personalInfo.name}</p>
            <p className="footer-role">
              Estudiante de Ingeniería de Software • Desarrollo Backend & Web
            </p>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {personalInfo.name}. Desarrollado con React, Vite, JavaScript y CSS.
        </p>
      </div>
    </footer>
  )
}
