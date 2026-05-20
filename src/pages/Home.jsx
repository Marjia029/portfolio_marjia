import React from "react";
import profilePic from "../assets/profile-photo.jpg";

function Hero() {
  return (
    <section className="hero wrap">
      {/* Left — copy */}
      <div>
        <h1 className="hero-name">
          <span className="first">Marjia</span>
          <span className="last">Afroj</span>
        </h1>

        <div className="hero-role">
          <span>Software Engineer</span>
          <span className="slash">/</span>
          <span>Backend Developer</span>
          <span className="slash">/</span>
          <span>Python &amp; Golang</span>
        </div>

        <p className="hero-tag">
          I build <b>scalable, reliable</b> backend systems — from real-time APIs
          and data pipelines to <em>cloud infrastructure</em> on AWS.
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
            <strong>1<sup>+</sup></strong>
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
          <img src={profilePic} alt="Marjia Afroj" />
        </div>
        <div className="portrait-badge">
          <span className="pulse" />
          Open to work
        </div>
        <span className="portrait-sparkle s1" aria-hidden="true">✦</span>
        <span className="portrait-sparkle s2" aria-hidden="true">✦</span>
        <span className="portrait-sparkle s3" aria-hidden="true">✦</span>
      </div>

    </section>
  );
}

export default Hero;
