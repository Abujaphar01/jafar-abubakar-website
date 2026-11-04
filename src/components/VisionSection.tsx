import React from "react";
import { siteContent } from "@/data/siteContent";
import { Compass } from "lucide-react";

export default function VisionSection() {
  const { vision } = siteContent;

  return (
    <section
      id="vision"
      className="py-24 sm:py-28 lg:py-32 bg-navy-deep text-canvas border-b border-navy-muted scroll-mt-20 relative overflow-hidden"
    >
      {/* Subtle architectural grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, #FAF9F5 1px, transparent 1px), linear-gradient(to bottom, #FAF9F5 1px, transparent 1px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-canvas/70 font-semibold">
              {vision.sectionNumber} // {vision.sectionLabel}
            </span>
            <span className="h-px w-12 bg-canvas/25" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-canvas font-normal mb-6">
            {vision.headline}
          </h2>
          <p className="text-base sm:text-lg text-canvas/80 leading-relaxed">
            {vision.intro}
          </p>
        </div>

        {/* 4 Vision Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {vision.pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="p-7 sm:p-9 rounded-2xl bg-navy/60 border border-canvas/15 hover:border-canvas/35 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-canvas/10">
                  <span className="font-serif italic text-2xl text-canvas/90">
                    {pillar.index}.
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-canvas/65 px-2.5 py-1 rounded bg-canvas/10">
                    {pillar.horizon}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[1.65rem] text-canvas font-normal mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-canvas/80 leading-relaxed">
                  {pillar.thesis}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-canvas/10">
                <p className="font-mono text-[10px] uppercase tracking-widest text-canvas/55 mb-2.5">
                  Areas of Focus
                </p>
                <div className="flex flex-wrap gap-2">
                  {pillar.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded bg-canvas/10 text-canvas/90 font-mono text-[11px]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Forward-Looking Statement Banner */}
        <div className="mt-12 p-7 sm:p-9 rounded-2xl bg-canvas/5 border border-canvas/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <Compass className="w-6 h-6 text-canvas/80 shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-xl text-canvas font-normal">
                A Long-Term Commitment to Building Practical Ventures
              </h4>
              <p className="text-sm text-canvas/75 leading-relaxed mt-1">
                Every technology company starts with disciplined learning, real-world experimentation, and strong partnerships. I am always open to exchanging ideas with founders, agricultural innovators, business operators, and mentors.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-canvas text-navy-deep text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white transition-all"
          >
            <span>Connect on Future Ventures</span>
          </a>
        </div>
      </div>
    </section>
  );
}
