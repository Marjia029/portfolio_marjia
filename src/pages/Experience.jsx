import React from "react";
import SectionHead from "../components/SectionHead";

const EXPERIENCE = [
  {
    current: true,
    date: "Dec 2025 — Present",
    role: <React.Fragment>Junior Software <em>Engineer</em></React.Fragment>,
    company: "NidusLab",
    location: "Dhaka, Bangladesh",
    bullets: [
      <React.Fragment key="b1">Built the <b>real-time chat system</b> for NidusJob.com using Django Channels and WebSockets.</React.Fragment>,
      <React.Fragment key="b2">Worked on <b>NidusService</b>, a platform for service providers.</React.Fragment>,
      <React.Fragment key="b3">Currently working on <b>Career College</b> — a Learning Management System (LMS) platform.</React.Fragment>,
    ],
  },
  {
    current: false,
    date: "Mar 2025 — Jun 2025",
    role: <React.Fragment>Junior Software <em>Engineer</em></React.Fragment>,
    company: "W3 Engineers Ltd",
    location: "Dhaka, Bangladesh",
    team: "CRON Data Systems Team",
    bullets: [
      <React.Fragment key="b1">Architected large-scale data processing solutions using <b>PySpark</b>, handling TB-scale datasets daily.</React.Fragment>,
      <React.Fragment key="b2">Developed ETL system optimisations using multiple <b>AWS services</b>, improving execution time and reducing costs.</React.Fragment>,
      <React.Fragment key="b3">Built and deployed <b>EMR system scripts</b> for data system re-architecture initiatives.</React.Fragment>,
      "Developed automated CRON scripts for analytics dashboards with real-time notifications to Slack and Microsoft Teams.",
    ],
  },
  {
    current: false,
    date: "Nov 2024 — Feb 2025",
    role: <React.Fragment>Intern Software <em>Engineer</em></React.Fragment>,
    company: "W3 Engineers Ltd",
    location: "Dhaka, Bangladesh",
    bullets: [
      <React.Fragment key="b1">Built full-stack applications using <b>NextJS, NodeJS, and TypeScript</b> with modern development practices.</React.Fragment>,
      <React.Fragment key="b2">Developed microservices architecture using <b>Python and Flask</b> for scalable backend systems.</React.Fragment>,
      <React.Fragment key="b3">Implemented secure API integrations using <b>Golang</b> with emphasis on performance and reliability.</React.Fragment>,
      "Integrated Large Language Models (LLMs) into backend systems and developed data scraping pipelines with Scrapy.",
    ],
  },
  {
    current: false,
    date: "Apr 2023",
    role: <React.Fragment>Machine Learning <em>Trainee</em></React.Fragment>,
    company: "Code Studio",
    location: "Rajshahi, Bangladesh",
    bullets: [
      "Specialised in machine learning techniques for time series data analysis and prediction.",
      "Developed and implemented various predictive models for data trend analysis.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead num="03" label="Experience" />
        <div className="timeline">
          {EXPERIENCE.map(({ current, date, role, company, location, team, bullets }, i) => (
            <div className={`tl-item${current ? " current" : ""} reveal`} key={i}>
              <div className="tl-dot" />
              <p className="tl-date">{date}</p>
              <h3 className="tl-role">{role}</h3>
              <p className="tl-company">
                {company}
                <span className="pip" />
                {location}
                {team && <><span className="pip" /><em>{team}</em></>}
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
};

export default Experience;
