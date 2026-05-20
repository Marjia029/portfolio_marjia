import React from "react";

const NAV_LINKS = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
  { href: "#writing",    label: "Writing"    },
  { href: "#contact",    label: "Contact"    },
];

function Navbar({ scrolled }) {
  return (
    <nav className={`topnav${scrolled ? " scrolled" : ""}`}>
      <a href="/" className="brand">
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
        href="/Marjia_Afroj_Resume_2026.pdf"
        download="Marjia_Afroj_Resume_2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé <span className="arrow">↓</span>
      </a>
    </nav>
  );
}

export default Navbar;
