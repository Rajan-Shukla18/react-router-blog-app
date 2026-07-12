import { useEffect } from "react";
import rajanPhoto from "../assets/Rajan.png";

const skills = ["React", "JavaScript", "React Router", "HTML & CSS", "Tailwind CSS", "Git", "Node.js", "Supabase"];

const stats = [
  { label: "Based in", value: "Navi Mumbai" },
  { label: "Project", value: "3+" },
  { label: "Internship", value: "1" },
];

const About = () => {
  useEffect(() => { document.title = "About — Fieldnotes"; }, []);

  return (
    <div className="container">
      <header className="page-header">
        <span className="kicker">About</span>
        <h1>Hi, I'm Rajan.</h1>
      </header>

      <div className="about-layout">
        <div className="about-profile">
          <div className="about-photo">
            <img src={rajanPhoto} alt="Rajan Shukla" />
          </div>
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-content">
          <div className="about-lead-box">
            <span className="about-lead-icon">🎓</span>
            <p className="about-lead">Currently in my 3rd year of B.E. (Computer Engineering) at Datta Meghe College of Engineering.</p>
       </div>
          <p>I enjoy building things that solve real problems. Over time, project development has taught me that good software is not just about technology — it's about understanding a problem well enough to create a useful solution.</p>

          <section className="section">
            <h3 className="section-label">Beyond the code</h3>
            <p>Whether I'm working on the frontend, backend, or database, I like understanding how everything connects together. Every project challenges me to learn something new, think differently, and improve the way I build.</p>
            <p>That's what keeps me interested in development — there is always something new to figure out.</p>
          </section>

          <section className="section">
            <h3 className="section-label">Tools I reach for</h3>
            <ul className="skills">
              {skills.map((s) => <li key={s} className="skill">{s}</li>)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
