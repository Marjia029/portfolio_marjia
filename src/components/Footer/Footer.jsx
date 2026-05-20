import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="foot-mark">Marjia <em>Afroj</em></div>
      <p className="foot-line">Thanks for stopping by ✦</p>
      <p className="foot-tiny">© {new Date().getFullYear()} · Designed &amp; built with ♥</p>
    </footer>
  );
};

export default Footer;
