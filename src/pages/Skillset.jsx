import React from "react";
import SectionHead from "../components/SectionHead";

const SKILLS = [
  {
    mark: "{ }",
    title: <React.Fragment>Programming <em>Languages</em></React.Fragment>,
    chips: ["Python", "Golang", "JavaScript", "TypeScript", "C++", "C"],
  },
  {
    mark: "Be",
    title: <React.Fragment>Backend &amp; <em>Frameworks</em></React.Fragment>,
    chips: ["Django", "Django REST Framework", "Django Channels", "Flask", "Node.js", "WebSockets", "ASGI", "REST APIs"],
  },
  {
    mark: "☁",
    title: <React.Fragment>Cloud &amp; <em>Data</em></React.Fragment>,
    chips: ["AWS S3", "AWS EMR", "Apache Iceberg", "PySpark", "ETL Systems", "Data Scraping", "Scrapy", "Time Series Analysis"],
  },
  {
    mark: "⚙",
    title: <React.Fragment>Tools &amp; <em>Databases</em></React.Fragment>,
    chips: ["PostgreSQL", "MySQL", "Redis", "Git", "GitHub", "GitLab", "Postman", "Jira", "Selenium"],
  },
];

const Skills = () => {
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
                {chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;