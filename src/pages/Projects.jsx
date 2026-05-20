import React from "react";
import SectionHead from "../components/SectionHead";

const PROJECTS = [
  {
    tag: "Full-Stack",
    title: <React.Fragment>Real-Time <em>Chat</em> Application</React.Fragment>,
    desc: "Real-time chat system with WebSocket connections for instant messaging, file sharing (text, images, videos, audio), and smart notifications. Implements presence tracking via Redis for read receipts and notification delivery.",
    stack: ["Django", "Django Channels", "PostgreSQL", "Redis", "Python", "JWT"],
    demo: null,
    code: "https://github.com/Marjia029",
  },
  {
    tag: "Full-Stack",
    title: <React.Fragment>Beauty &amp; <em>Bold</em></React.Fragment>,
    desc: "Comprehensive e-commerce platform for beauty products with secure user authentication, email verification, advanced search, shopping cart, payment integration, and an admin panel with full CRUD operations.",
    stack: ["React", "Django", "PostgreSQL", "Redux", "REST API"],
    demo: null,
    code: "https://github.com/Marjia029/Beauty-and-Bold.git",
  },
  {
    tag: "Backend",
    title: <React.Fragment>Microservices &amp; <em>LLM</em> Integration</React.Fragment>,
    desc: "Microservices architecture using Python and Flask for scalable backend systems. Integrated Large Language Models (LLMs) for enhanced functionality and built automated testing frameworks with Selenium.",
    stack: ["Python", "Flask", "Golang", "LLMs", "Selenium", "REST APIs"],
    demo: null,
    code: "https://github.com/Marjia029",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead num="04" label="Projects" />
        <div className="projects-grid">
          {PROJECTS.map(({ tag, title, desc, stack, demo, code, coming }, i) => (
            <article className={`proj reveal${coming ? " coming" : ""}`} key={i}>
              <span className="proj-num">0{i + 1}</span>
              <div className="proj-thumb">
                {coming && (
                  <span className="art" style={{ fontFamily: "var(--hand)", fontSize: 36, color: "var(--accent)", transform: "rotate(-6deg)" }}>
                    In progress ✦
                  </span>
                )}
              </div>
              <span className="proj-tag">{tag}</span>
              <h3 className="proj-title">{title}</h3>
              <p className="proj-desc">{desc}</p>
              <div className="proj-stack">
                {stack.map((s) => <span className="chip" key={s}>{s}</span>)}
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
};

export default Projects;
