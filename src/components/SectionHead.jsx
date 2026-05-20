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

export default SectionHead;
