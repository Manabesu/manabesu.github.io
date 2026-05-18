import React from "react";
import { Link } from "react-router-dom";

export default function Articles() {
  const articles = [
    {
      date: "May 10, 2026",
      title: "While making this website",
      excerpt: "Exploring how to make this, the challenges faced, and the artistic choices made during the journey.",
      link: "/wip",
    },
  ];

  return (
    <main className="max-w-[900px] mx-auto pt-32 pb-12 px-8">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl mb-4 font-heading">Articles' Archives</h1>
        <p className="text-xl text-warm-muted dark:text-warm-dark-muted">
          Collection of my thoughts, notes, and digital essays.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-[700px] mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-warm-card dark:bg-warm-dark-card border border-warm-border dark:border-warm-dark-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group"
          >
            <span className="text-warm-primary dark:text-warm-dark-primary text-sm font-medium block mb-3 uppercase tracking-widest">
              {article.date}
            </span>
            <h3 className="text-3xl mb-4 group-hover:text-warm-primary dark:group-hover:text-warm-dark-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-lg text-warm-muted dark:text-warm-dark-muted mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            <Link
              to={article.link}
              className="inline-flex items-center text-warm-primary dark:text-warm-dark-primary font-semibold text-lg hover:translate-x-2 transition-transform"
            >
              Read Entry &rarr;
            </Link>
          </div>
        ))}

        {articles.length === 0 && (
          <div className="text-center py-20 text-warm-muted">
            <p className="text-2xl italic">The silence of a new beginning...</p>
          </div>
        )}
      </div>
    </main>
  );
}
