import React from 'react';
import SectionHead from "../components/SectionHead";

const EDUCATION = [
  {
    year: "2024",
    degree: <React.Fragment>B.Sc. in Electrical &amp; Computer <em>Engineering</em></React.Fragment>,
    school: "Rajshahi University of Engineering & Technology",
    gpa: "3.50",
    label: "CGPA",
  },
  {
    year: "2018",
    degree: <React.Fragment>Higher Secondary <em>Certificate</em></React.Fragment>,
    school: "Saidpur Government Science College",
    gpa: "5.00",
    label: "GPA",
  },
];

const Education = () => {
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
};

export default Education;
