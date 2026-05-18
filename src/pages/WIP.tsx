import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function WIP() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-24 px-8 text-center">
      <div className="max-w-[600px]">
        <div className="text-8xl mb-8 animate-bounce">🪴</div>
        
        <span className="inline-block bg-warm-primary text-white dark:bg-warm-dark-primary dark:text-warm-dark-bg px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[2px] mb-6">
          Tending the Garden
        </span>
        
        <h1 className="text-5xl md:text-6xl mb-6">Work in Progress</h1>
        
        <p className="text-xl text-warm-muted dark:text-warm-dark-muted mb-10 leading-relaxed">
          I'm currently planting new seeds and watering the code in this corner of the site. 
          Grab a cup of tea and check back a little later!
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-warm-muted dark:text-warm-dark-muted hover:text-warm-primary dark:hover:text-warm-dark-primary transition-colors text-lg"
        >
          <ArrowLeft size={20} /> Back to safety
        </Link>
      </div>
    </main>
  );
}
