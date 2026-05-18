import React from "react";
import { Link } from "react-router-dom";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto pt-24 pb-12 px-8">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center text-center items-center py-20 border-b border-transparent">
        <span className="inline-block bg-warm-primary text-white dark:bg-warm-dark-primary dark:text-warm-dark-bg px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[2px] mb-6">
          SUP!
        </span>
        <h1 className="text-6xl md:text-7xl mb-4">Hi, I'm a human?.</h1>
        <p className="text-xl md:text-2xl text-warm-muted dark:text-warm-dark-muted max-w-[600px] leading-relaxed">
          Welcome to my website. No idea how you found this. <br className="hidden md:block" />
          If I personally shared this with you, then you are probably a recruiter. 
          Then skip over to the <Link to="/resume" className="underline decoration-wavy decoration-warm-primary/50">Resume Section</Link>. 
          If not, then Hi!
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-b border-warm-border dark:border-warm-dark-border">
        <h2 className="text-4xl mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-44 h-44 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-warm-primary shadow-xl dark:shadow-warm-dark-primary/20 flex items-center justify-center text-8xl shrink-0">
            🌱
          </div>
          <div className="text-lg leading-relaxed flex flex-col gap-6">
            <p>
              I believe technology shouldn't just be functional; it should feel human, gentle, and friging AWESOMEEE!!!
              <br /> I spend my days writing code, exploring nature and myself, daydreaming, and finding beauty in the little details
              <small className="text-warm-muted italic ml-1">(mainly my ocd ;p)</small>.
            </p>
            <p>
              This space is a collection of my thoughts, the work I'm proud of, and the journey of learning as I go. 
              Grab a cup of tea <small className="text-warm-muted italic">(or coffee)</small> and feel free to look around.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-b border-warm-border dark:border-warm-dark-border">
        <h2 className="text-4xl mb-8">My Journey</h2>
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-warm-primary after:content-[''] after:absolute after:left-[5px] after:top-[22px] after:bottom-[-20px] after:w-[1.5px] after:bg-warm-border dark:after:bg-warm-dark-border">
          <h3 className="text-2xl mb-1 leading-tight">Student</h3>
          <span className="text-warm-primary dark:text-warm-dark-primary text-xs uppercase tracking-widest block mb-4">
            SOA • 2025 - Present
          </span>
          <p className="text-lg text-warm-muted dark:text-warm-dark-muted">
            Well... Try to develop the best version of myself
          </p>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="blogs" className="py-20">
        <h2 className="text-4xl mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-warm-card dark:bg-warm-dark-card border border-warm-border dark:border-warm-dark-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-warm-muted dark:text-warm-dark-muted text-sm block mb-2">April 26, 2026</span>
            <h3 className="text-2xl mb-3">While building this website..</h3>
            <p className="text-warm-muted dark:text-warm-dark-muted mb-6">
              How I finally gathered up my energy to start building my space
            </p>
            <Link to="/articles" className="inline-flex items-center text-warm-primary dark:text-warm-dark-primary font-medium hover:translate-x-1 transition-transform">
              Read Entry &rarr;
            </Link>
          </div>

          <div className="bg-warm-card dark:bg-warm-dark-card border border-warm-border dark:border-warm-dark-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-warm-muted dark:text-warm-dark-muted text-sm block mb-2">???</span>
            <h3 className="text-2xl mb-3">Lorem Epsum or something</h3>
            <p className="text-warm-muted dark:text-warm-dark-muted mb-6">...</p>
            <Link to="/articles" className="inline-flex items-center text-warm-primary dark:text-warm-dark-primary font-medium hover:translate-x-1 transition-transform">
              Don't Read Entry &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <Chat />
    </div>
  );
}
