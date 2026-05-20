'use strict';

const { useState, useEffect } = React;

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#writing',    label: 'Writing'    },
  { href: '#contact',    label: 'Contact'    },
];

const STATS = [
  { num: <React.Fragment>3<sup>+</sup></React.Fragment>,  label: 'Years of Experience', desc: 'Building production-grade web applications' },
  { num: <React.Fragment>20<sup>+</sup></React.Fragment>, label: 'Projects Shipped',    desc: 'From MVPs to enterprise-scale systems' },
  { num: <React.Fragment>15<sup>+</sup></React.Fragment>, label: 'Technologies',        desc: 'Frontend, backend, cloud & design tools' },
  { num: '∞',                                             label: 'Cups of Tea',         desc: 'Fuel for every late-night session' },
];

const SKILLS = [
  {
    mark: 'Fe',
    title: <React.Fragment>Front<em>end</em></React.Fragment>,
    chips: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS', 'Redux Toolkit', 'Framer Motion'],
  },
  {
    mark: 'Be',
    title: <React.Fragment>Back<em>end</em></React.Fragment>,
    chips: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    mark: '⚙',
    title: <React.Fragment>Dev<em>Ops</em></React.Fragment>,
    chips: ['Git & GitHub', 'Docker', 'CI / CD', 'AWS', 'Vercel', 'Netlify', 'Linux', 'Jest'],
  },
  {
    mark: 'Ui',
    title: <React.Fragment>UI / <em>UX</em></React.Fragment>,
    chips: ['Figma', 'Design Systems', 'Accessibility', 'Wireframing', 'Prototyping', 'Responsive Design'],
  },
];

const EXPERIENCE = [
  {
    current: true,
    date: 'Jan 2024 — now',
    role: <React.Fragment>Software <em>Engineer</em></React.Fragment>,
    company: 'TechCorp Solutions',
    location: 'Remote',
    bullets: [
      <React.Fragment key="b1">Built and shipped <b>3 major product features</b> used by 50,000+ active users.</React.Fragment>,
      'Led front-end architecture for a React + TypeScript design-system component library.',
      <React.Fragment key="b3">Improved core web vitals by <b>40 %</b> through performance optimisations.</React.Fragment>,
      'Collaborated cross-functionally with design, product, and back-end teams.',
    ],
  },
  {
    current: false,
    date: 'Jun 2022 — Dec 2023',
    role: <React.Fragment>Frontend <em>Developer</em></React.Fragment>,
    company: 'Digital Agency Co.',
    location: 'Hybrid',
    bullets: [
      <React.Fragment key="b1">Delivered <b>12+ client websites</b> from Figma designs to pixel-perfect code.</React.Fragment>,
      'Integrated REST APIs and managed complex state with Redux Toolkit.',
      'Mentored 2 junior developers and led weekly code-review sessions.',
    ],
  },
];

const PROJECTS = [
  {
    tag: 'Full-Stack',
    title: <React.Fragment>React <em>Jobs</em> Platform</React.Fragment>,
    desc: 'A modern job-listing platform built with React, Vite, and Tailwind CSS. Features CRUD operations, a JSON Server back end, and a clean responsive interface.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'JSON Server'],
    demo: '#',
    code: '#',
  },
  {
    tag: 'Frontend',
    title: <React.Fragment><em>Portfolio</em> Website</React.Fragment>,
    desc: 'This very portfolio — crafted with React, CSS custom properties, and a warm editorial design system. Fully responsive with smooth reveal animations.',
    stack: ['React', 'CSS Variables', 'Babel CDN', 'Vanilla JS'],
    demo: '#',
    code: '#',
  },
  {
    tag: 'Full-Stack',
    title: <React.Fragment>E-commerce <em>Dashboard</em></React.Fragment>,
    desc: 'An admin dashboard for e-commerce management featuring analytics charts, order management, and real-time inventory tracking.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    demo: '#',
    code: '#',
  },
  {
    tag: 'Coming Soon',
    title: <React.Fragment>AI <em>Resume</em> Builder</React.Fragment>,
    desc: 'An intelligent résumé builder powered by AI that generates tailored CVs and cover letters optimised for each job description.',
    stack: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    coming: true,
  },
];

const EDUCATION = [
  {
    year: '2022',
    degree: <React.Fragment>B.Sc. in Computer <em>Science</em></React.Fragment>,
    school: 'University of Dhaka',
    gpa: '3.85',
    label: 'CGPA',
  },
  {
    year: '2024',
    degree: <React.Fragment>AWS Certified Solutions <em>Architect</em></React.Fragment>,
    school: 'Amazon Web Services',
    gpa: 'Pass',
    label: 'Status',
  },
];

const POSTS = [
  {
    date: 'May 2025',
    title: <React.Fragment>Building a <em>Design System</em> from Scratch</React.Fragment>,
    excerpt: 'How I created a reusable component library with CSS custom properties and React that scales painlessly across multiple projects.',
    tag: 'Design Systems',
    href: '#',
  },
  {
    date: 'Mar 2025',
    title: <React.Fragment>Why I <em>Love</em> TypeScript</React.Fragment>,
    excerpt: "After resisting TypeScript for years, here's what finally converted me — and why I now reach for it on every new project.",
    tag: 'TypeScript',
    href: '#',
  },
  {
    date: 'Jan 2025',
    title: <React.Fragment><em>Performance</em> Wins with React</React.Fragment>,
    excerpt: 'Practical techniques for improving React app performance: memoisation, code splitting, virtualisation, and more.',
    tag: 'React',
    href: '#',
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionHead({ num, label }) {
  return (
    <div className="section-head reveal">
      <span className="section-num">{num}</span>
      <div className="section-rule" />
      <span className="section-label">{label}</span>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ scrolled }) {
  return (
    <nav className={`topnav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="brand">
        <span className="mark">M</span>
        Marjia <em>Afroj</em>
      </a>
      <div className="navlinks">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>
      <a
        className="btn primary"
        href="uploads/Marjia_Afroj_Resume_2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé <span className="arrow">↓</span>
      </a>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero wrap">
      {/* Left — copy */}
      <div>
        <p className="hero-greet">
          <span className="wave">👋</span> Hi there — I'm
          <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 22 Q 24 6, 44 14 T 76 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M70 6 L76 10 L71 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </p>

        <h1 className="hero-name">
          <span className="first">Marjia</span>
          <span className="last">Afroj</span>
        </h1>

        <div className="hero-role">
          <span>Software Engineer</span>
          <span className="slash">/</span>
          <span>Full-Stack Developer</span>
          <span className="slash">/</span>
          <span>UI Enthusiast</span>
        </div>

        <p className="hero-tag">
          I craft <b>fast, beautiful</b> web experiences that people{' '}
          <em>actually enjoy</em> — from polished front-ends to rock-solid APIs.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">
            See my work <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn">
            Let's talk <span className="arrow">→</span>
          </a>
          <span className="btn-note">
            <svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 20 Q 20 4, 40 14 T 56 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M50 6 L56 10 L52 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Available!
          </span>
        </div>

        <div className="hero-meta">
          <div>
            <strong>3<sup>+</sup></strong>
            Years exp.
          </div>
          <div>
            <strong>20<sup>+</sup></strong>
            Projects
          </div>
          <div>
            <strong>∞</strong>
            Cups of tea
          </div>
        </div>
      </div>

      {/* Right — portrait */}
      <div className="hero-portrait">
        <div className="portrait-bg" />
        <div className="portrait-tape" />
        <div className="portrait-card">
          <img
            src="uploads/photo-1778497602664.jpeg"
            alt="Marjia Afroj"
          />
        </div>
        <div className="portrait-badge">
          <span className="pulse" />
          Open to work
        </div>
        <span className="portrait-sparkle s1" aria-hidden="true">✦</span>
        <span className="portrait-sparkle s2" aria-hidden="true">✦</span>
        <span className="portrait-sparkle s3" aria-hidden="true">✦</span>
      </div>

      {/* Marquee — spans both columns */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python', 'Figma', 'PostgreSQL',
            'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python', 'Figma', 'PostgreSQL',
          ].map((t, i) => (
            <span key={i}><em>{t}</em></span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead num="01" label="About Me" />
        <div className="about-grid">
          <div className="about-body reveal">
            <p>
              I'm a <b>software engineer based in Dhaka, Bangladesh</b>, passionate
              about turning complex problems into clean, intuitive digital products.
            </p>
            <p>
              My journey started with an <em>obsession</em> for how things look and
              feel on screen. That curiosity grew into a full-stack career — I'm
              equally at home writing React components and designing database schemas.
            </p>
            <p>
              When I'm not coding you'll find me{' '}
              <b>sketching UI concepts in Figma</b>, writing about web development,
              or hunting for the perfect cup of tea.
            </p>
            <blockquote className="pullquote">
              "Make it work, make it right, make it beautiful."
            </blockquote>
          </div>

          <div className="about-stats reveal d1">
            {STATS.map(({ num, label, desc }) => (
              <div className="stat" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
                <div className="stat-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead num="02" label="Skills & Tools" />
        <div className="skills-grid">
          {SKILLS.map(({ mark, title, chips }, i) => (
            <div
              className="skill-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-head">
                <div className="skill-mark">{mark}</div>
                <h3 className="skill-title">{title}</h3>
              </div>
              <div className="chips">
                {chips.map(c => <span className="chip" key={c}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead num="03" label="Experience" />
        <div className="timeline">
          {EXPERIENCE.map(({ current, date, role, company, location, bullets }, i) => (
            <div className={`tl-item${current ? ' current' : ''} reveal`} key={i}>
              <div className="tl-dot" />
              <p className="tl-date">{date}</p>
              <h3 className="tl-role">{role}</h3>
              <p className="tl-company">
                {company}
                <span className="pip" />
                {location}
              </p>
              <ul className="tl-list">
                {bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead num="04" label="Projects" />
        <div className="projects-grid">
          {PROJECTS.map(({ tag, title, desc, stack, demo, code, coming }, i) => (
            <article className={`proj reveal${coming ? ' coming' : ''}`} key={i}>
              <span className="proj-num">0{i + 1}</span>
              <div className="proj-thumb">
                {coming && (
                  <span className="art" style={{ fontFamily: 'var(--hand)', fontSize: 36, color: 'var(--accent)', transform: 'rotate(-6deg)' }}>
                    In progress ✦
                  </span>
                )}
              </div>
              <span className="proj-tag">{tag}</span>
              <h3 className="proj-title">{title}</h3>
              <p className="proj-desc">{desc}</p>
              <div className="proj-stack">
                {stack.map(s => <span className="chip" key={s}>{s}</span>)}
              </div>
              {!coming && (
                <div className="proj-links">
                  {demo && (
                    <a href={demo} className="proj-link" target="_blank" rel="noopener noreferrer">
                      Live demo <span className="arrow">↗</span>
                    </a>
                  )}
                  {code && (
                    <a href={code} className="proj-link" target="_blank" rel="noopener noreferrer">
                      Source code <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <SectionHead num="05" label="Education" />
        <div className="edu-grid">
          {EDUCATION.map(({ year, degree, school, gpa, label }, i) => (
            <div className="edu reveal" key={i}>
              <span className="edu-year">{year}</span>
              <h3 className="edu-degree">{degree}</h3>
              <p className="edu-school">{school}</p>
              <div className="edu-meta">
                <span>{label}</span>
                <b>{gpa}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Writing ──────────────────────────────────────────────────────────────────

function Writing() {
  return (
    <section id="writing">
      <div className="wrap">
        <SectionHead num="06" label="Writing" />
        <div className="blog-grid">
          {POSTS.map(({ date, title, excerpt, tag, href }, i) => (
            <a
              href={href}
              className="post reveal"
              key={i}
              style={{ textDecoration: 'none' }}
            >
              <span className="post-date">{date}</span>
              <h3 className="post-title">{title}</h3>
              <p className="post-excerpt">{excerpt}</p>
              <span className="post-tag">{tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: replace with Formspree / EmailJS endpoint
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  }

  return (
    <section id="contact">
      <div className="wrap">
        <SectionHead num="07" label="Get In Touch" />
        <div className="contact-grid">

          {/* Left — contact info */}
          <div className="contact-info">
            <div className="crow">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="lbl">Email</p>
                <a className="val" href="mailto:marjia@example.com">marjia@example.com</a>
              </div>
            </div>

            <div className="crow">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="lbl">Location</p>
                <span className="val">Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="socials">
              <a href="https://github.com/" className="social" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>
              <a href="https://linkedin.com/" className="social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com/" className="social" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form className="form" onSubmit={handleSubmit}>
            <h3>Say <em>hello</em></h3>
            <p>I'm always open to discussing new projects, opportunities, or ideas.</p>

            {status === 'success' && (
              <div className="form-success">
                ✦ Message sent! I'll get back to you soon.
              </div>
            )}

            <div className="form-row">
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-subject">Subject</label>
              <input id="f-subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
            </div>

            <div className="field">
              <label htmlFor="f-message">Message</label>
              <textarea id="f-message" name="message" placeholder="Tell me more…" rows={5} value={form.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn primary form-submit">
              Send message <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer>
      <div className="foot-mark">Marjia <em>Afroj</em></div>
      <p className="foot-line">Thanks for stopping by ✦</p>
      <p className="foot-tiny">© {new Date().getFullYear()} · Designed &amp; built with ♥</p>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-reveal observer
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

// ─── Mount ────────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
