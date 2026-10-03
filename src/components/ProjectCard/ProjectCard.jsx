function ProjectCard({ project, index }) {
  return (
    <article className={`project-card${project.featured ? ' project-card--featured' : ''}`} data-reveal>
      <div className="project-card__media">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="eager" decoding="async" />
        ) : (
          <div className="converter-preview" aria-label="Illustrative currency and unit converter visual">
            <div className="converter-preview__top"><span>QUICK CONVERTER</span><span>03 / WEB APP</span></div>
            <div className="converter-preview__title">Convert<br /><em>with clarity.</em></div>
            <div className="converter-preview__fields"><span>FROM <b>Currency / unit</b></span><span>TO <b>Converted value</b></span></div>
          </div>
        )}
        <span className="project-card__media-label">{project.mediaLabel}</span>
      </div>
      <div className="project-card__content">
        <div className="project-card__meta"><span>{String(index).padStart(2, '0')}</span><span>{project.type}</span></div>
        <h3>{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        <h4>Key features</h4>
        <ul className="project-card__features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="project-tags" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        {(project.demo || project.github) && (
          <div className="project-card__actions">
            {project.demo && <a className="button button--dark" href={project.demo} target="_blank" rel="noreferrer">Live Demo <span aria-hidden="true">↗</span></a>}
            {project.github && <a className="button button--outline" href={project.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard