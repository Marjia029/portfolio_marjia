import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Home";
import About from "./components/Home/About";
import Skills from "./pages/Skillset";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Writing from "./pages/Writing";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
