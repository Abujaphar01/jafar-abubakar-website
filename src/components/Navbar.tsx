"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Linkedin, Github } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = ["about", "experience", "projects", "expertise", "vision", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/95 backdrop-blur-md border-b border-line py-3.5 shadow-sm"
          : "bg-canvas/80 backdrop-blur-sm border-b border-line/60 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#top"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="Jafar Abubakar — Home"
        >
          <span className="w-9 h-9 rounded-lg bg-navy text-canvas flex items-center justify-center font-serif text-base font-medium tracking-wider shadow-sm group-hover:bg-navy-deep transition-colors">
            JA
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-sm sm:text-base font-semibold tracking-tight text-ink">
              {siteContent.meta.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted hidden sm:inline">
              AI Engineer &amp; Entrepreneur
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
          {siteContent.navigation.slice(0, 5).map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors editorial-link ${
                  isActive ? "text-navy font-semibold" : "text-ink-secondary hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 pr-2 border-r border-line">
            <a
              href="https://www.linkedin.com/in/jafar-abubakar-51b42927a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jafar Abubakar on LinkedIn"
              className="p-2 text-ink-secondary hover:text-navy hover:bg-surface rounded-md transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Abujaphar01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jafar Abubakar on GitHub"
              className="p-2 text-ink-secondary hover:text-navy hover:bg-surface rounded-md transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-navy text-canvas text-xs font-mono uppercase tracking-wider font-medium hover:bg-navy-deep transition-all shadow-sm"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-ink hover:bg-surface focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas border-b border-line px-6 pt-4 pb-6 space-y-4 shadow-editorial">
          <nav className="flex flex-col space-y-2.5" aria-label="Mobile Navigation">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-ink hover:text-navy border-b border-line/50 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-ink-muted" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jafar-abubakar-51b42927a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-surface text-ink text-xs font-medium hover:bg-line transition-colors"
              >
                <Linkedin className="w-4 h-4 text-navy" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Abujaphar01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-surface text-ink text-xs font-medium hover:bg-line transition-colors"
              >
                <Github className="w-4 h-4 text-navy" />
                <span>GitHub</span>
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-navy text-canvas text-xs font-mono uppercase tracking-wider"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
