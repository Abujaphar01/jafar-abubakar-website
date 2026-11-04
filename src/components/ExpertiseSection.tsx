import React from "react";
import { Terminal, Users, Languages } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function ExpertiseSection() {
  const { expertise } = siteContent;

  return (
    <section
      id="expertise"
      className="py-24 sm:py-28 lg:py-32 bg-surface/60 border-b border-line scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-semibold">
              {expertise.sectionNumber} // {expertise.sectionLabel}
            </span>
            <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-ink font-normal mb-4">
            {expertise.headline}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {expertise.subheadline}
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Technical Capabilities Matrix */}
          <div className="bg-white rounded-2xl border border-line p-7 sm:p-10 shadow-card">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-line">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-navy text-canvas flex items-center justify-center">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-ink font-normal">
                    Technical Capabilities
                  </h3>
                  <p className="font-mono text-xs text-ink-muted">
                    Core Engineering, Machine Learning &amp; AI Automation
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-navy font-medium">
                01 // Technical Foundation
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.technical.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-xl bg-canvas border border-line hover:border-navy/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <h4 className="font-sans text-base font-semibold text-ink">
                      {skill.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded bg-navy-tint text-navy font-mono text-[10px] uppercase tracking-wider font-medium whitespace-nowrap shrink-0">
                      {skill.category}
                    </span>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Professional Strengths & 3. Languages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Professional Strengths (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-line p-7 sm:p-10 shadow-card">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-tint text-navy flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ink font-normal">
                      Professional Strengths
                    </h3>
                    <p className="font-mono text-xs text-ink-muted">
                      Leadership, Execution &amp; Entrepreneurial Judgment
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-navy font-medium">
                  02 // Leadership
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {expertise.professional.map((strength) => (
                  <div
                    key={strength.name}
                    className="p-4 rounded-xl bg-canvas/70 border border-line"
                  >
                    <h4 className="font-sans text-sm font-semibold text-ink mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                      <span>{strength.name}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spoken Languages (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-line p-7 sm:p-10 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-line">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-tint text-navy flex items-center justify-center">
                      <Languages className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-ink font-normal">
                        Languages
                      </h3>
                      <p className="font-mono text-xs text-ink-muted">
                        Cross-Cultural Communication
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-navy font-medium">
                    03 // Global
                  </span>
                </div>

                <div className="space-y-4">
                  {expertise.languages.map((lang) => (
                    <div
                      key={lang.language}
                      className="p-4 rounded-xl bg-canvas border border-line"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2.5">
                          <span className="font-sans text-base font-semibold text-ink">
                            {lang.language}
                          </span>
                          <span className="font-mono text-xs text-ink-muted">
                            ({lang.nativeScript})
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-navy text-canvas font-mono text-[10px] uppercase tracking-wider font-medium">
                          {lang.proficiency}
                        </span>
                      </div>
                      <p className="text-xs text-ink-secondary leading-relaxed">
                        {lang.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
