import { useEffect } from "react";
import rajanPhoto from "../assets/Rajan.png";

const skills = ["React", "JavaScript", "React Router", "HTML & CSS", "Tailwind CSS", "Git", "Node.js", "Supabase", "Vercel"];

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
    <div className="min-h-screen -mx-2 md:-mx-8 -mt-4 md:-mt-10 px-2 md:px-8 pt-4 md:pt-10 bg-gradient-to-br from-[#F5FAFF] via-[#EBF3FC] to-[#E3EFFB]">
      <div className="mx-auto max-w-[1160px] px-6 py-10">
      <header className="mb-6">
      <span className="mb-2 inline-block text-base font-bold uppercase tracking-[0.09em] text-accent">
        About
      </span>
      </header>  

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-18">
        <div className="w-full rounded-3xl border border-[#D9E7F5] bg-[#EBF3FC] p-9 shadow-[0_8px_30px_rgba(91,140,190,0.08)] lg:w-[340px] lg:flex-shrink-0">

          <div className="mx-auto mb-7 aspect-square w-[250px] overflow-hidden rounded-3xl bg-[#EBF3FC] p-2">
            <img src={rajanPhoto} alt="Rajan Shukla" className="h-full w-full rounded-2xl object-cover" />
          </div>

          <h1 className="font-serif text-3xl font-semibold text-text">
            Rajan Shukla
          </h1>

          <div className="mt-2 text-base text-muted">
            Frontend Developer
          </div>

         <div className="my-6 h-px bg-[#D9E7F5]"></div>

          <div className="space-y-5 rounded-2xl bg-gradient-to-br from-[#F8FBFF] to-[#EBF3FC] border border-[#D9E7F5] p-4">
            {infoItems.map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <span className="block text-[0.7rem] font-medium uppercase tracking-[0.1em] text-muted">
                  {label}
                </span>
                <span className="block text-[0.95rem] font-medium leading-6 text-text">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="my-6 h-px bg-[#D9E7F5]"></div>

          <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-gradient-to-br from-[#F8FBFF] to-[#EBF3FC] border border-[#D9E7F5] pt-6 pb-5 px-2 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-serif text-base font-semibold text-accent">
                  {s.value}
                </span>
                <span className="mt-1 text-xs text-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#F8FBFF] to-[#EBF3FC] border border-[#D9E7F5] p-5">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Developer Principles
            </h4>

            <div className="flex items-center gap-3 py-3 border-b border-[#D9E7F5] last:border-b-0">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                ✓
              </span>
              <span className="text-[0.92rem] font-medium text-text">
                Build with Purpose
              </span>
            </div>

            <div className="flex items-center gap-3 py-3 border-b border-[#D9E7F5] last:border-b-0">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                ✓
              </span>
              <span className="text-[0.92rem] font-medium text-text">Keep It Simple</span>
            </div>

            <div className="flex items-center gap-3 py-3 border-b border-[#D9E7F5] last:border-b-0">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                ✓
              </span>
              <span className="text-[0.92rem] font-medium text-text">
                Mobile First
              </span>
            </div>

            <div className="flex items-center gap-3 py-3 border-b border-[#D9E7F5] last:border-b-0">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
               ✓
              </span>
              <span className="text-[0.92rem] font-medium text-text">
                Always Learning
              </span>
            </div>
          </div>

        </div>


        <div className="flex-1 min-w-0">
          <div className="mb-9 flex items-start gap-4 rounded-xl border border-[#D9E7F5] bg-gradient-to-r from-[#FFFFFF] to-[#EFF6FD] px-7 py-6 shadow-sm">
            <span className="shrink-0 text-xl leading-6">
              🎓
            </span>
            <p className="font-serif text-xl font-medium leading-8 text-text">
              Currently in my 3rd year of B.E. (Computer Engineering) at Datta Meghe College of Engineering, Navi Mumbai.
            </p>
          </div>
          <p>WHAT DRIVES ME !! <br /> <br /> I enjoy building things that solve real problems. Over time, project development has taught me that good software is not just about technology — it's about understanding a problem well enough to create a useful solution.</p>

          <section className="mt-10">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-text">
              Beyond the code
            </h3>
            <p>Whether I'm working on the frontend, backend, or database, I like understanding how everything connects together. Every project challenges me to learn something new, think differently, and improve the way I build.</p>
            <p>That's what keeps me interested in development — there is always something new to figure out.</p>
          </section>

          <section className="mt-10">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-text">
              Tools I reach for
            </h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent ring-1 ring-accent/20 transition-all duration-200 hover:bg-accent hover:text-white"
                >
                  {s}
                </li>
              ))}
            </ul>
          </section>


          <section className="mt-10">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-text">
              Currently
            </h3>
<div className="mt-4 overflow-hidden rounded-3xl border border-[#D9E7F5] bg-[#EBF3FC] shadow-lg">
  <div className="flex items-center gap-2 border-b border-[#D9E7F5] bg-[#DCEAFA] px-5 py-4">
    <span className="h-2.5 w-2.5 rounded-full bg-[#d27d6c]"></span>
    <span className="h-2.5 w-2.5 rounded-full bg-[#c9a74d]"></span>
    <span className="h-2.5 w-2.5 rounded-full bg-accent"></span>
    <span className="ml-3 font-mono text-sm text-muted">
      about-me.js
    </span>
  </div>
      <pre className="overflow-x-auto whitespace-pre px-7 py-7 font-mono text-base font-semibold leading-8 text-[#232323] bg-[#EBF3FC]">
        <span className="font-bold text-[#7b4f8c]">const</span>{" "}
        <span className="font-bold text-[#1f5b46]">rajan</span> = {"{"}
        {"\n  "}
        <span className="text-[#355f7a]">mission</span>:{" "}
        <span className="text-[#8a5d3b]">"Learn. Build. Share."</span>,
        {"\n  "}
        <span className="text-[#355f7a]">writingAbout</span>: [
        <span className="text-[#8a5d3b]">"Technology"</span>,{" "}
        <span className="text-[#8a5d3b]">"Development"</span>,{" "}
        <span className="text-[#8a5d3b]">"Design"</span>],
        {"\n  "}
        <span className="text-[#355f7a]">currentlyExploring</span>:{" "}
        <span className="text-[#8a5d3b]">"Modern Web Development"</span>,
        {"\n  "}
        <span className="text-[#355f7a]">mindset</span>:{" "}
        <span className="text-[#8a5d3b]">"Small improvements every day."</span>,
        {"\n  "}
        <span className="text-[#355f7a]">curiosity</span>:{" "}
        <span className="font-bold text-[#2e7d57]">true</span>,
        {"\n"}
        {"}"};
      </pre>
    </div>
          </section>

        </div>
      </div>
    </div>
    </div>
  );
};

export default About;

