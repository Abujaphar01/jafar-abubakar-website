import React from "react";
import { ArrowRight, ArrowUpRight, Linkedin, Github, Globe, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-canvas bg-architectural-grid border-b border-line overflow-hidden"
    >
      {/* Subtle radial ambient light */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[38rem] h-[38rem] rounded-full bg-navy/5 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-line">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-navy" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-navy font-medium">
              {hero.eyebrow}
            </span>
          </div>

          <a
            href={hero.currentRoleBadge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-line hover:border-navy/40 text-xs text-ink-secondary transition-all shadow-sm"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-navy font-semibold">
              Current Role:
            </span>
            <span className="font-medium text-ink">
              {hero.currentRoleBadge.title} at {hero.currentRoleBadge.organization}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted group-hover:text-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Main 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Positioning & Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.65rem] leading-[1.08] tracking-tight text-ink font-normal">
              Building intelligent technology that creates{" "}
              <span className="italic text-navy font-normal">real-world value.</span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl font-normal">
              {hero.introduction}
            </p>

            {/* Primary & Secondary Call-to-Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={hero.ctas.primary.href}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-md bg-navy text-canvas text-sm font-medium tracking-wide hover:bg-navy-deep transition-all shadow-sm"
              >
                <span>{hero.ctas.primary.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={hero.ctas.secondary.href}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-white border border-line-strong text-ink text-sm font-medium hover:border-navy hover:text-navy transition-all"
              >
                <span>{hero.ctas.secondary.label}</span>
              </a>
            </div>

            {/* Direct Social & Platform Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-ink-secondary border-t border-line/80">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Profiles &amp; Work:
              </span>
              <a
                href="https://www.linkedin.com/in/jafar-abubakar-51b42927a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-ink hover:text-navy transition-colors editorial-link"
              >
                <Linkedin className="w-4 h-4 text-navy" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
              </a>
              <a
                href="https://github.com/Abujaphar01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-ink hover:text-navy transition-colors editorial-link"
              >
                <Github className="w-4 h-4 text-navy" />
                <span>GitHub (@Abujaphar01)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
              </a>
              <a
                href="https://scholarshipgatesg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-ink hover:text-navy transition-colors editorial-link"
              >
                <Globe className="w-4 h-4 text-navy" />
                <span>Scholarship Gate SG</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
              </a>
            </div>
          </div>

          {/* Right Column: Framed Portrait of Jafar Abubakar (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Architectural Offset Frame */}
              <div
                className="absolute -inset-2.5 rounded-2xl border border-line/80 bg-surface/50 -z-10 transform translate-x-2 translate-y-2"
                aria-hidden="true"
              />

              <figure className="relative bg-white p-3 sm:p-4 rounded-xl border border-line shadow-editorial">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-surface">
                  <img
                    src={hero.portrait.src}
                    alt={hero.portrait.alt}
                    className="w-full h-full object-cover object-bottom transition-transform duration-700 hover:scale-[1.015]"
                    loading="eager"
                  />
                  {/* Subtle bottom gradient for natural depth */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/20 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Editorial Portrait Caption */}
                <figcaption className="pt-3.5 pb-1 px-1 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm font-semibold text-ink">
                      {siteContent.meta.name}
                    </p>
                    <p className="font-mono text-[11px] text-ink-muted">
                      AI Engineer &amp; CTO at Scholarship Gate SG
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-navy-tint text-navy font-mono text-[10px] uppercase tracking-wider font-medium whitespace-nowrap">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>AI · Systems · Ventures</span>
                    </span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Bottom 3-Pillar Professional Descriptors Strip */}
        <div className="mt-16 pt-10 border-t border-line grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {hero.descriptors.map((desc, idx) => (
            <div
              key={desc.label}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-line hover:border-navy/40 transition-all shadow-card"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-navy font-semibold">
                  0{idx + 1} // Core Pillar
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-line-strong group-hover:bg-navy transition-colors" />
              </div>
              <h2 className="font-serif text-2xl text-ink font-medium mb-1.5">
                {desc.label}
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {desc.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
