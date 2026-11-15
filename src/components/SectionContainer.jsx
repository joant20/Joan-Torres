import React from 'react'

export default function SectionContainer({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  alternate = false,
}) {
  return (
    <section
      id={id}
      className={`section-block ${alternate ? 'section-alternate' : ''}`}
    >
      <div className="container">
        <div className="section-header">
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
