import { useEffect, useState } from 'react';
import { education, experience, profile, projects, skills } from './data/portfolio.js';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main>
      <div className="noise" />
      <Header dark={dark} setDark={setDark} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

function Header({ dark, setDark, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => scrollTo('home')}>
        <span>MN</span> Neyaz
      </button>
      <nav className={menuOpen ? 'navlinks open' : 'navlinks'}>
        {navItems.map((item) => (
          <button key={item} onClick={() => scrollTo(item)}>{item}</button>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="theme-btn" onClick={() => setDark(!dark)}>{dark ? '☀️' : '🌙'}</button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content reveal">
        <p className="eyebrow">Available for Fresher Frontend Roles</p>
        <h1>Hi, I am <span>{profile.name}</span></h1>
        <h2>{profile.role}</h2>
        <p>{profile.tagline}</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">View Projects</a>
          <a className="secondary-btn" href={`mailto:${profile.email}`}>Contact Me</a>
          <a className="secondary-btn" href="/resume.txt" download>Resume Download</a>
        </div>
        <div className="quick-info">
          <span>📍 {profile.location}</span>
          <span>🎓 B.Tech IT</span>
          <span>💻 React JS</span>
        </div>
      </div>
      <div className="hero-card reveal delay">
        <div className="avatar">MN</div>
        <h3>Frontend Developer</h3>
        <p>React • JavaScript • UI Design</p>
        <div className="stats">
          <div><b>4+</b><span>Projects</span></div>
          <div><b>2025</b><span>Graduate</span></div>
          <div><b>1</b><span>Internship</span></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section grid-section">
      <div className="section-title reveal">
        <p className="eyebrow">About Me</p>
        <h2>Building strong frontend skills with practical projects.</h2>
      </div>
      <div className="glass reveal">
        <p>{profile.summary}</p>
        <p>I like creating clean layouts, responsive pages and simple user experiences. My current focus is improving React JS, JavaScript concepts and real-world project building.</p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-title center reveal">
        <p className="eyebrow">Skills</p>
        <h2>Technology stack I work with</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card reveal" key={skill.group}>
            <h3>{skill.group}</h3>
            <div className="chips">
              {skill.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title center reveal">
        <p className="eyebrow">Projects</p>
        <h2>Selected work for my portfolio</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <div className="project-icon">{project.icon}</div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chips small">
              {project.tech.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section grid-section">
      <div className="section-title reveal">
        <p className="eyebrow">Education & Internship</p>
        <h2>My academic and training background</h2>
      </div>
      <div className="timeline reveal">
        {education.map((item) => (
          <div className="timeline-item" key={item.degree}>
            <span>{item.year}</span>
            <h3>{item.degree}</h3>
            <p>{item.institute}</p>
            <small>{item.detail}</small>
          </div>
        ))}
        {experience.map((item) => (
          <div className="timeline-item" key={item.role}>
            <span>{item.duration}</span>
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <small>{item.detail}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card reveal">
        <p className="eyebrow">Contact</p>
        <h2>Let us build something useful.</h2>
        <p>For frontend developer opportunities, internships or project discussion, you can contact me by email.</p>
        <div className="contact-actions">
          <a className="primary-btn" href={`mailto:${profile.email}`}>Email Me</a>
          <a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer>© {new Date().getFullYear()} {profile.name}. Built with React JS.</footer>;
}

export default App;
