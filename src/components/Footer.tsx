import React from "react";
import { ArrowUpRight, Linkedin, Github, Globe } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-line py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-line">
          {/* Brand Column (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-md bg-navy text-canvas flex items-center justify-center font-serif text-sm font-medium">
                JA
              </span>
              <span className="font-sans text-base font-semibold text-ink">
                {siteContent.meta.name}
              </span>
            </div>
            <p className="font-serif text-lg text-ink-secondary italic max-w-md">
              &ldquo;{siteContent.meta.tagline}&rdquo;
            </p>
            <p className="font-mono text-xs text-ink-muted">
              AI Engineer &amp; Entrepreneur · CTO at Scholarship Gate SG
            </p>
          </div>

          {/* Navigation Column (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Index
            </p>
            <ul className="space-y-2 text-sm text-ink-secondary">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-navy transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Profiles Column (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Profiles &amp; Links
            </p>
            <ul className="space-y-2.5 text-sm text-ink-secondary">
              <li>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-navy transition-colors"
                >
                  <span>{siteContent.contact.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href={siteContent.contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-navy transition-colors"
                >
                  <span>WhatsApp ({siteContent.contact.whatsapp.display})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jafar-abubakar-51b42927a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-navy transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-navy" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Abujaphar01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-navy transition-colors"
                >
                  <Github className="w-4 h-4 text-navy" />
                  <span>GitHub (@Abujaphar01)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://scholarshipgatesg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-navy transition-colors"
                >
                  <Globe className="w-4 h-4 text-navy" />
                  <span>Scholarship Gate SG</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted font-mono">
          <p>
            &copy; {currentYear} {siteContent.meta.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="hover:text-navy transition-colors uppercase tracking-wider"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
