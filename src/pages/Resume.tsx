import React from "react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <main className="max-w-[950px] mx-auto pt-28 pb-12 px-8">
      {/* Compact Header */}
      <div className="flex flex-col md:flex-row justify-between items-start pb-6 mb-8 border-b border-warm-border dark:border-warm-dark-border gap-6">
        <div>
          <h1 className="text-5xl md:text-6xl mb-2">Manabesu</h1>
          <div className="text-warm-primary dark:text-warm-dark-primary text-base md:text-lg uppercase tracking-[1.5px] font-medium">
            Computer Science Undergraduate
          </div>
        </div>
        
        <div className="text-right flex flex-col items-end gap-4 shrink-0">
          <div className="text-sm md:text-base text-warm-muted dark:text-warm-dark-muted leading-relaxed">
            <span className="block">📍 SOA, Odisha</span>
            <span className="block italic">✉️ <a href="mailto:manabendra.edu@gmail.com" className="hover:underline">manabendra.edu@gmail.com</a></span>
            <span className="block italic">🔗 <a href="https://www.github.com/Manabesu" target="_blank" rel="noreferrer" className="hover:underline">Github</a></span>
            <span className="block italic">💼 <a href="https://www.linkedin.com/in/manabendra-m-564013378/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></span>
          </div>
          <Link to="/wip" className="inline-flex items-center justify-center bg-warm-card dark:bg-warm-dark-card text-warm-text dark:text-warm-dark-text border border-warm-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-warm-primary hover:text-white transition-all transform hover:-translate-y-0.5">
            📄 Download PDF
          </Link>
        </div>
      </div>

      {/* Elegant Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1.1fr] gap-12 md:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-2xl uppercase tracking-wider mb-4 border-b border-warm-border dark:border-warm-dark-border inline-block pb-1">Summary</h2>
            <p className="text-base text-warm-muted dark:text-warm-dark-muted leading-relaxed">
              Motivated Computer Science student with a strong foundation in software development and problem-solving. 
              Passionate about learning new web technologies and eager to contribute to impactful projects through a software engineering summer internship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl uppercase tracking-wider mb-6 border-b border-warm-border dark:border-warm-dark-border inline-block pb-1">Projects & Experience</h2>
            <div className="flex flex-col gap-8">
              <div className="timeline-item-resume">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold">This Website</h3>
                  <span className="text-warm-primary dark:text-warm-dark-primary text-sm uppercase font-medium">Summer 2026</span>
                </div>
                <div className="text-warm-muted dark:text-warm-dark-muted font-medium mb-3">Self Project</div>
                <ul className="list-disc list-inside space-y-1 text-sm text-warm-muted dark:text-warm-dark-muted marker:text-warm-primary">
                  <li>Developed this website using React, Vite, and Tailwind CSS.</li>
                  <li>Will continue to achieve perfection and explore new technical horizons.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-2xl uppercase tracking-wider mb-6 border-b border-warm-border dark:border-warm-dark-border inline-block pb-1">Education</h2>
            <div className="timeline-item-resume">
              <div className="mb-2">
                <h3 className="text-xl font-bold">B.Tech. Computer Science</h3>
              </div>
              <div className="text-warm-muted dark:text-warm-dark-muted font-medium mb-1">SOA University</div>
              <span className="text-warm-primary dark:text-warm-dark-primary text-sm uppercase font-medium block mb-3">Expected June 2029</span>
              <div className="text-sm text-warm-muted dark:text-warm-dark-muted space-y-1">
                <p><strong>CGPA:</strong> 9.3 / 10.0</p>
                <p><strong>Coursework:</strong> Data Structures, Algorithms.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl uppercase tracking-wider mb-6 border-b border-warm-border dark:border-warm-dark-border inline-block pb-1">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "Svelte", "Kotlin"].map((lang) => (
                <span key={lang} className="bg-warm-bg dark:bg-warm-dark-bg border border-warm-border dark:border-warm-dark-border text-warm-muted dark:text-warm-dark-muted px-3 py-1 rounded-xl text-sm font-medium">
                  {lang} (...)
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl uppercase tracking-wider mb-6 border-b border-warm-border dark:border-warm-dark-border inline-block pb-1">Extra Curricular</h2>
            <div className="space-y-6">
              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-warm-primary">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="text-base font-bold">Codeforces: <a href="https://codeforces.com/profile/smango" target="_blank" rel="noreferrer" className="text-warm-primary hover:underline">Novice</a></h3>
                  <span className="text-warm-muted text-xs uppercase">elo: 0</span>
                </div>
              </div>

              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-warm-primary">
                <div className="flex justify-between items-baseline gap-4 mb-1">
                  <h3 className="text-base font-bold underline decoration-wavy decoration-warm-primary/50 underline-offset-4">CS50</h3>
                  <span className="text-warm-muted text-xs uppercase">Ongoing</span>
                </div>
                <p className="text-warm-muted text-sm">Week 5</p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
