"use client";

import React, { useState } from "react";
import { ArrowUpRight, Lock, Compass, Globe, Check, FolderGit2 } from "lucide-react";
import { siteContent, ProjectItem } from "@/data/siteContent";

export default function ProjectsSection() {
  const { projects } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects.items
      : projects.items.filter((item) => item.category === selectedCategory);

  const getVisibilityBadge = (visibility: ProjectItem["visibility"]) => {
    switch (visibility) {
      case "Public":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy text-canvas font-mono text-[10px] uppercase tracking-wider font-medium">
            <Globe className="w-3 h-3" />
            <span>Public Venture</span>
          </span>
        );
      case "Private / Undisclosed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-line-strong text-ink-secondary font-mono text-[10px] uppercase tracking-wider font-medium">
            <Lock className="w-3 h-3 text-navy" />
            <span>Private / Undisclosed</span>
          </span>
        );
      case "Exploration & Architecture":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-tint text-navy font-mono text-[10px] uppercase tracking-wider font-medium">
            <Compass className="w-3 h-3" />
            <span>Build Track &amp; Research</span>
          </span>
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-28 lg:py-32 bg-canvas border-b border-line scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-semibold">
              {projects.sectionNumber} // {projects.sectionLabel}
            </span>
            <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-ink font-normal mb-4">
            {projects.headline}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {projects.subheadline}
          </p>
        </div>

        {/* Category Filter Bar */}
        <div
          className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-line"
          role="tablist"
          aria-label="Filter Projects and Ventures by Category"
        >
          {projects.categories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                  active
                    ? "bg-navy text-canvas font-medium shadow-sm"
                    : "bg-white border border-line text-ink-secondary hover:border-navy/40 hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Showcase Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                project.featured
                  ? "bg-white border-navy/30 shadow-editorial"
                  : "bg-white border-line hover:border-navy/30 shadow-card"
              }`}
            >
              <div className="p-7 sm:p-9 lg:p-10">
                {/* Top Metadata Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-line">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-navy">
                      {project.index}
                    </span>
                    <span className="text-line-strong">/</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                      {project.category}
                    </span>
                    {project.role && (
                      <>
                        <span className="text-line-strong hidden sm:inline">·</span>
                        <span className="font-mono text-xs text-navy font-medium hidden sm:inline">
                          {project.role}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    {getVisibilityBadge(project.visibility)}
                  </div>
                </div>

                {/* Main Content Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Title, Subtitle, Summary (7 Cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="w-12 h-12 rounded-lg object-contain border border-line bg-white p-1 shrink-0"
                        />
                      )}
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-navy mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-base text-ink-secondary leading-relaxed pt-1">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded bg-surface text-ink-secondary font-mono text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <div className="pt-4">
                        <a
                          href={project.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-navy text-canvas text-xs font-mono uppercase tracking-wider font-medium hover:bg-navy-deep transition-all"
                        >
                          <span>{project.link.label}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right: Key Technical & Operational Focus Points (5 Cols) */}
                  <div className="lg:col-span-5 bg-canvas/80 rounded-xl p-6 border border-line">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-navy font-semibold mb-4">
                      Architecture &amp; Scope
                    </p>
                    <ul className="space-y-3">
                      {project.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note on Confidentiality & Future Ventures */}
        <div className="mt-10 p-6 rounded-xl bg-surface/70 border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <FolderGit2 className="w-5 h-5 text-navy shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-sm text-ink-secondary">
              <strong className="text-ink font-semibold">Note on Private Work:</strong>{" "}
              Proprietary business automation scripts and undisclosed client/internal tools are kept private. To discuss technical capabilities or view relevant code samples directly, feel free to reach out.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-navy font-semibold hover:underline"
          >
            <span>Request Discussion</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
