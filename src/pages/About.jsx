import { useEffect } from "react";
import rajanPhoto from "../assets/Rajan.png";

const skills = ["React", "JavaScript", "React Router", "HTML & CSS", "Tailwind CSS", "Git", "Node.js", "Supabase"];

const stats = [
  { label: "Interests", value: "Tech" },
  { label: "Building", value: "Web Apps" },
  { label: "Based in", value: "Navi Mumbai" },
];

const infoItems = [
  { label: "Email", value: "rajanshukla88503@gmail.com" },
  { label: "Location", value: "Navi Mumbai, India" },
  { label: "Studying", value: "B.E. Computer Engineering" },
];

const About = () => {
  useEffect(() => { document.title = "About — Fieldnotes"; }, []);

  return (
    <div className="container about-container">
      <header className="page-header">
        <span className="kicker">About</span>
        <h1>Hi, I'm Rajan.</h1>
      </header>

      <div className="about-layout">
        <div className="about-profile">

          <div className="about-photo">
            <img src={rajanPhoto} alt="Rajan Shukla" />
          </div>

          <h2>Rajan Shukla</h2>

          <div>
            Frontend Developer
          </div>

          <div></div>

          <div className="about-info-list">
            {infoItems.map(({ label, value }) => (
              <div key={label} className="about-info-item">
                <span className="about-info-label">{label}</span>
                <span className="about-info-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="profile-divider"></div>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about-principles">
            <h4 className="about-principles-title">Developer Principles</h4>

            <div className="about-principle">
              <span className="principle-check">✓</span>
              <span>Build with Purpose</span>
            </div>

            <div className="about-principle">
              <span className="principle-check">✓</span>
              <span>Keep It Simple</span>
            </div>

            <div className="about-principle">
              <span className="principle-check">✓</span>
              <span>Mobile First</span>
            </div>

            <div className="about-principle">
              <span className="principle-check">✓</span>
              <span>Always Learning</span>
            </div>
          </div>

        </div>

        <div className="about-intro">
          <div className="about-lead-box">
            <span className="about-lead-icon">🎓</span>
            <p className="about-lead">Currently in my 3rd year of B.E. (Computer Engineering) at Datta Meghe College of Engineering, Navi Mumbai.</p>
          </div>
          <p>WHAT DRIVES ME !! <br /> <br /> I enjoy building things that solve real problems. Over time, project development has taught me that good software is not just about technology — it's about understanding a problem well enough to create a useful solution.</p>

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


          <section className="section">
            <h3 className="section-label">Currently</h3>
            <div className="code-card">
              <div className="code-card-header">
                <span className="code-dot dot-red"></span>
                <span className="code-dot dot-yellow"></span>
                <span className="code-dot dot-green"></span>
                <span className="code-card-filename">about-me.js</span>
              </div>
              <pre className="code-card-body">
                <span className="code-keyword">const</span> <span className="code-var">rajan</span> = {"{"}
                {"\n  "}<span className="code-key">mission</span>: <span className="code-string">"Learn. Build. Share."</span>,
                {"\n  "}<span className="code-key">writingAbout</span>: [<span className="code-string">"Technology"</span>, <span className="code-string">"Development"</span>, <span className="code-string">"Design"</span>],
                {"\n  "}<span className="code-key">currentlyExploring</span>: <span className="code-string">"Modern Web Development"</span>,
                {"\n  "}<span className="code-key">mindset</span>: <span className="code-string">"Small improvements every day."</span>,
                {"\n  "}<span className="code-key">curiosity</span>: <span className="code-boolean">true</span>,
                {"\n"}{"}"};
              </pre>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;

