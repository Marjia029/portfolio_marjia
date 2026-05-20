import React from "react";

function SectionHead({ num, label }) {
  return (
    <div className="section-head reveal">
      <span className="section-num">{num}</span>
      <div className="section-rule" />
      <span className="section-label">{label}</span>
    </div>
  );
}

export { SectionHead };

const STATS = [
  { num: <React.Fragment>1<sup>+</sup></React.Fragment>,  label: "Years of Experience", desc: "Building production-grade web applications" },
  { num: <React.Fragment>20<sup>+</sup></React.Fragment>, label: "Projects Shipped",    desc: "From MVPs to enterprise-scale systems" },
  { num: <React.Fragment>15<sup>+</sup></React.Fragment>, label: "Technologies",        desc: "Frontend, backend, cloud & design tools" },
  { num: "infinity",                                      label: "Cups of Tea",         desc: "Fuel for every late-night session" },
];

const About = () => {
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
              I graduated from <b>Rajshahi University of Engineering and Technology</b> with
              a degree in Electrical and Computer Engineering. My journey started with an{" "}
              <em>obsession</em> for how things look and feel on screen — that curiosity grew
              into a full-stack career.
            </p>
            <p>
              When I'm not coding you'll find me{" "}
              <b>exploring distributed systems</b>, writing about backend engineering,
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
};

export default About;