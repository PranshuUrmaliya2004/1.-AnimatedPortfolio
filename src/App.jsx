import { useEffect, useState } from 'react'
import Nav from './components/Nav/Nav'
import ProjectCard from './components/ProjectCard/ProjectCard'
import {
  certifications,
  contactEndpoint,
  education,
  githubUrl,
  internships,
  linkedInUrl,
  projects,
  skillGroups,
  summary,
} from './data/portfolioData'

function App() {
  const [contactStatus, setContactStatus] = useState('')

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    revealItems.forEach((item) => {
      item.classList.add('reveal-ready')
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!contactEndpoint) {
      setContactStatus('Message delivery is not configured yet. Add your form endpoint in .env to enable sending.')
      return
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })

      if (!response.ok) throw new Error('Message could not be sent.')
      form.reset()
      setContactStatus('Your message has been sent.')
    } catch {
      setContactStatus('Message could not be sent. Please try LinkedIn instead.')
    }
  }

  return (
    <div className="portfolio" id="home">
      <Nav />
      <main>
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro__copy">
            <p className="eyebrow"><span className="status-dot" /> Bhopal, Madhya Pradesh, India</p>
            <h1 id="intro-title"><span className="intro__greeting">Hi, I&apos;m</span><br />Pranshu<br /><span>Urmaliya</span></h1>
            <p className="intro__role">Full Stack / MERN Stack Developer</p>
            <p className="intro__summary">Computer Science graduate passionate about building full-stack web applications and AI-powered solutions.</p>
            <div className="intro__actions">
              <a className="button button--light" href="#projects">View Projects <span aria-hidden="true">↘</span></a>
              <a className="button button--outline" href="/Pranshu-Urmaliya-Resume.txt" download="Pranshu-Urmaliya-Resume.txt">Download Resume <span aria-hidden="true">↓</span></a>
            </div>
            <div className="intro__socials">
              <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="#contact">Contact Me <span aria-hidden="true">↘</span></a>
            </div>
          </div>

          <aside className="intro-art" aria-label="Developer profile">
            <div className="intro-art__topline"><span>PROFILE / 01</span><span>WEB DEVELOPMENT</span></div>
            <div className="intro-art__monogram" aria-hidden="true">PU<span>.</span></div>
            <div className="intro-art__rule" />
            <div className="intro-art__bottomline">
              <span>Build with curiosity.</span>
              <span className="intro-art__coordinates">BHOPAL<br />INDIA</span>
            </div>
            <span className="intro-art__stamp" aria-hidden="true">CS<br />GRAD</span>
          </aside>

          <a className="intro__scroll" href="#about"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a>
        </section>

        <section className="about section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-heading" data-reveal>
            <span className="section-index">01 / ABOUT</span>
            <h2 id="about-title">A practical builder,<br /><em>always learning.</em></h2>
          </div>
          <div className="about__body" data-reveal>
            <p>{summary}</p>
            <div className="about__note">
              <span className="about__note-mark" aria-hidden="true">+</span>
              <p>Hardworking, quick to learn, and comfortable solving problems with a team. Focused on steady growth through practical work and learning new technologies.</p>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-heading section-heading--row" data-reveal>
            <div>
              <span className="section-index">02 / SELECTED WORK</span>
              <h2 id="projects-title">Projects in practice<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">Full-stack applications, e-commerce flows, and AI features built through hands-on work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index + 1} />)}
          </div>
        </section>

        <section className="skills section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-heading section-heading--row" data-reveal>
            <div>
              <span className="section-index">03 / TOOLKIT</span>
              <h2 id="skills-title">Skills & tools<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">Core web development skills alongside areas of project experience and ongoing learning.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <section className={`skill-group${group.title.startsWith('AI / LLM') ? ' skill-group--learning' : ''}`} key={group.title} data-reveal>
                <h3>{group.title}</h3>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </section>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-heading section-heading--row" data-reveal>
            <div>
              <span className="section-index">04 / EXPERIENCE</span>
              <h2 id="experience-title">Internships & training<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">Practical learning focused on SQL and database fundamentals.</p>
          </div>
          <div className="timeline">
            {internships.map((internship) => (
              <article className="timeline-entry" key={internship.title} data-reveal>
                <div className="timeline-entry__date">{internship.date}</div>
                <div className="timeline-entry__body">
                  <h3>{internship.title}</h3>
                  {internship.organization && <p className="timeline-entry__organization">{internship.organization}</p>}
                  <p>{internship.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-wrap" id="education" aria-labelledby="education-title">
          <div className="section-heading section-heading--row" data-reveal>
            <div>
              <span className="section-index">05 / EDUCATION</span>
              <h2 id="education-title">Learning foundations<span className="heading-period">.</span></h2>
            </div>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-entry" key={item.title} data-reveal>
                <div><h3>{item.title}</h3><p>{item.organization}</p></div>
                <span>{item.date}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications section-wrap" id="certifications" aria-labelledby="certifications-title">
          <div className="section-heading section-heading--row" data-reveal>
            <div>
              <span className="section-index">06 / CERTIFICATIONS</span>
              <h2 id="certifications-title">Training & recognition<span className="heading-period">.</span></h2>
            </div>
          </div>
          <div className="certification-list">
            {certifications.map((certification) => (
              <article className="certification-entry" key={certification.title} data-reveal>
                <div className="certification-entry__top"><h3>{certification.title}</h3><span>{certification.date}</span></div>
                <p className="timeline-entry__organization">{certification.organization}</p>
                <p>{certification.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume section-wrap" id="resume" aria-labelledby="resume-title">
          <div className="section-heading section-heading--row resume__heading" data-reveal>
            <div>
              <span className="section-index">07 / RESUME</span>
              <h2 id="resume-title">Resume snapshot<span className="heading-period">.</span></h2>
            </div>
            <a className="button button--dark" href="/Pranshu-Urmaliya-Resume.txt" download="Pranshu-Urmaliya-Resume.txt">Download Resume <span aria-hidden="true">↓</span></a>
          </div>

          <article className="resume-sheet" aria-label="ATS-friendly resume">
            <header className="resume-sheet__header">
              <div>
                <h3>Pranshu Urmaliya</h3>
                <p>Full Stack Web Developer | MERN Stack Developer</p>
              </div>
              <div className="resume-sheet__contact">
                <span>Bhopal, Madhya Pradesh, India</span>
                <a href={linkedInUrl}>linkedin.com/in/pranshu-urmaliya-7046b328</a>
                <a href={githubUrl}>github.com/PranshuUrmaliya2004</a>
              </div>
            </header>
            <div className="resume-sheet__section">
              <h4>Professional Summary</h4>
              <p>{summary}</p>
            </div>
            <div className="resume-sheet__section">
              <h4>Technical Skills</h4>
              <div className="resume-skills">{skillGroups.map((group) => <p key={group.title}><strong>{group.title}:</strong> {group.skills.join(', ')}</p>)}</div>
            </div>
            <div className="resume-sheet__section">
              <h4>Projects</h4>
              <div className="resume-projects">
                {projects.map((project) => <p key={project.name}><strong>{project.name}:</strong> {project.resumeDescription}</p>)}
              </div>
            </div>
            <div className="resume-sheet__section">
              <h4>Experience & Internships</h4>
              <div className="resume-projects">
                {internships.map((internship) => <p key={internship.title}><strong>{internship.title}{internship.organization ? ` - ${internship.organization}` : ''} ({internship.date}):</strong> {internship.description}</p>)}
              </div>
            </div>
            <div className="resume-sheet__section">
              <h4>Education</h4>
              <div className="resume-projects">{education.map((item) => <p key={item.title}><strong>{item.title}:</strong> {item.organization}; {item.date}</p>)}</div>
            </div>
            <div className="resume-sheet__section">
              <h4>Certifications</h4>
              <div className="resume-projects">{certifications.map((item) => <p key={item.title}><strong>{item.title} - {item.organization} ({item.date}):</strong> {item.description}</p>)}</div>
            </div>
          </article>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__inner" data-reveal>
            <div>
              <span className="section-index">08 / CONTACT</span>
              <h2 id="contact-title">Let&apos;s talk about<br /><em>what comes next.</em></h2>
              <p className="contact__location">Pranshu Urmaliya · Bhopal, Madhya Pradesh, India</p>
              <div className="contact__meta">
                <a href="mailto:pransuurmaliya2018@gmail.com">pransuurmaliya2018@gmail.com</a>
                <span>•</span>
                <a href="tel:+919165747413">+91 91657 47413</a>
              </div>
              <div className="contact__socials">
                <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="4" required />
              <button className="button button--contact" type="submit">Send message <span aria-hidden="true">↗</span></button>
              <p className="contact-form__status" aria-live="polite">{contactStatus || 'Message delivery is not configured yet. Add your form endpoint in .env to enable sending.'}</p>
            </form>
          </div>
          <footer className="site-footer"><span>PRANSHU URMALIYA</span><span>BHOPAL, INDIA</span><a href="#home">BACK TO TOP ↑</a></footer>
        </section>
      </main>
    </div>
  )
}

export default App
