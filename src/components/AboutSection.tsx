import React from "react";
import { siteContent } from "@/data/siteContent";
import { Cpu, Briefcase, Globe2, Compass } from "lucide-react";

const pillarIcons = [Cpu, Briefcase, Globe2, Compass];

export default function AboutSection() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="py-24 sm:py-28 lg:py-32 bg-canvas border-b border-line scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-semibold">
              {about.sectionNumber} // {about.sectionLabel}
            </span>
            <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-ink font-normal">
            {about.headline}
          </h2>
        </div>

        {/* 12-Column Editorial Biography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-ink font-medium leading-relaxed border-l-2 border-navy pl-5 py-1">
              {about.leadParagraph}
            </p>

            <div className="space-y-5 text-base sm:text-[17px] text-ink-secondary leading-relaxed pt-2">
              {about.narrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Editorial Principle Box */}
            <div className="mt-8 p-6 sm:p-7 rounded-xl bg-surface/80 border border-line">
              <p className="font-mono text-[11px] uppercase tracking-widest text-navy font-semibold mb-2">
                Operating Philosophy
              </p>
              <blockquote className="font-serif text-xl sm:text-2xl text-ink italic leading-snug">
                &ldquo;Technology reaches its highest potential when engineered around real operational problems—turning complexity into clarity, efficiency, and durable value.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Structured Biographical Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl border border-line p-6 sm:p-8 shadow-card space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
                  Profile Overview
                </h3>
                <span className="font-mono text-xs text-navy font-medium">
                  AI · Operations · Ventures
                </span>
              </div>

              <div className="space-y-6">
                {about.keyPillars.map((pillar, idx) => {
                  const IconComponent = pillarIcons[idx % pillarIcons.length];
                  return (
                    <div
                      key={pillar.label}
                      className="flex items-start gap-4 pb-5 border-b border-line/60 last:border-b-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy-tint text-navy flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                          {pillar.label}
                        </p>
                        <h4 className="font-sans text-base font-semibold text-ink mt-0.5">
                          {pillar.value}
                        </h4>
                        <p className="text-sm text-ink-secondary mt-1 leading-relaxed">
                          {pillar.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
