import React from "react";
import SectionHead from "../components/SectionHead";

const POSTS = [
  {
    date: "May 2025",
    title: <React.Fragment>Building a <em>Design System</em> from Scratch</React.Fragment>,
    excerpt: "How I created a reusable component library with CSS custom properties and React that scales painlessly across multiple projects.",
    tag: "Design Systems",
    href: "#",
  },
  {
    date: "Mar 2025",
    title: <React.Fragment>Why I <em>Love</em> TypeScript</React.Fragment>,
    excerpt: "After resisting TypeScript for years, here's what finally converted me — and why I now reach for it on every new project.",
    tag: "TypeScript",
    href: "#",
  },
  {
    date: "Jan 2025",
    title: <React.Fragment><em>Performance</em> Wins with React</React.Fragment>,
    excerpt: "Practical techniques for improving React app performance: memoisation, code splitting, virtualisation, and more.",
    tag: "React",
    href: "#",
  },
];

const Writing = () => {
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
              style={{ textDecoration: "none" }}
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
};

export default Writing;
