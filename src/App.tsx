/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Articles from "./pages/Articles";
import WIP from "./pages/WIP";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-warm-bg text-warm-text dark:bg-warm-dark-bg dark:text-warm-dark-text selection:bg-warm-primary selection:text-white transition-colors duration-300">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/wip" element={<WIP />} />
        </Routes>
        
        <footer className="py-12 text-center border-t border-warm-border dark:border-warm-dark-border bg-warm-bg/50 dark:bg-warm-dark-bg/50">
          <div className="max-w-[800px] mx-auto px-8 flex flex-col gap-4">
            <p className="text-warm-muted dark:text-warm-dark-muted">
              Contact: <a href="mailto:manabendra.edu@gmail.com" className="hover:underline">Mail</a>
            </p>
            <p className="text-sm text-warm-muted dark:text-warm-dark-muted opacity-80">
              &copy; 2026 Built with care and a lot of water.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
