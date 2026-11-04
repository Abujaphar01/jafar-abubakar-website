import React from "react";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function ExperienceSection() {
  const { experience } = siteContent;
  const { featuredRole } = experience;

  return (
    <section
      id="experience"
      className="py-24 sm:py-28 lg:py-32 bg-surface/60 border-b border-line scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-semibold">
                {experience.sectionNumber} // {experience.sectionLabel}
              </span>
              <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-ink font-normal">
              {experience.headline}
            </h2>
          </div>

          <a
            href={featuredRole.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start lg:self-auto px-4 py-2.5 rounded-md bg-white border border-line hover:border-navy text-xs font-mono uppercase tracking-wider text-navy font-medium transition-all shadow-sm"
          >
            <span>Visit Scholarship Gate SG</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Executive Role Feature Card */}
        <div className="bg-white rounded-2xl border border-line shadow-editorial overflow-hidden">
          {/* Role Top Banner */}
          <div className="p-8 sm:p-10 lg:p-12 border-b border-line bg-gradient-to-br from-white via-white to-surface/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy text-canvas font-mono text-[11px] uppercase tracking-wider font-medium">
                    Current Executive Role
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {featuredRole.type}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
                    {featuredRole.position}
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-navy">
                    {featuredRole.company}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-3xl pt-2">
                  {featuredRole.summary}
                </p>
              </div>

              {/* Brand Identity Mark & Operational Scope */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-8">
                <div className="flex items-center gap-4">
                  <img
                    src={featuredRole.logo}
                    alt="Scholarship Gate SG Official Logo"
                    className="w-16 h-16 rounded-xl object-contain border border-line bg-white p-1 shadow-sm"
                  />
                  <div className="lg:text-right">
                    <p className="font-sans text-sm font-semibold text-ink">
                      Scholarship Gate SG
                    </p>
                    <a
                      href={featuredRole.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-navy hover:underline mt-0.5"
                    >
                      <span>scholarshipgatesg.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-ink-muted lg:text-right leading-relaxed max-w-xs">
                  {featuredRole.contextNote}
                </p>
              </div>
            </div>
          </div>

          {/* Core Responsibilities Grid */}
          <div className="p-8 sm:p-10 lg:p-12 bg-white">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-navy" />
                <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-ink font-semibold">
                  Key Areas of Technical &amp; Operational Responsibility
                </h4>
              </div>
              <span className="hidden sm:inline font-mono text-xs text-ink-muted">
                05 Core Systems
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRole.responsibilities.map((item) => (
                <div
                  key={item.number}
                  className="group p-6 rounded-xl bg-canvas/70 border border-line hover:border-navy/40 hover:bg-white transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold text-navy px-2.5 py-1 rounded bg-navy-tint">
                        {item.number}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                        {item.domain}
                      </span>
                    </div>

                    <h5 className="font-serif text-xl text-ink font-medium mb-2.5 group-hover:text-navy transition-colors">
                      {item.title}
                    </h5>

                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-line/60 flex items-center gap-2 text-xs text-ink-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0" />
                    <span>Active Operational Responsibility</span>
                  </div>
                </div>
              ))}

              {/* Summary Architecture Box in the 6th slot */}
              <div className="p-6 rounded-xl bg-navy text-canvas flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-canvas/70">
                    Operational Impact
                  </span>
                  <h5 className="font-serif text-xl text-canvas font-normal mt-2 mb-3">
                    Technology Applied to Real Business Operations
                  </h5>
                  <p className="text-sm text-canvas/80 leading-relaxed">
                    Every technical initiative at Scholarship Gate SG is built to improve how opportunities are identified, how students are matched with universities, and how the organization scales its daily workflows.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-canvas/15">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-canvas hover:underline"
                  >
                    <span>Inquire About AI &amp; Automation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
