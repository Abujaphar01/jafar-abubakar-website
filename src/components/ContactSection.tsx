"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Linkedin,
  Github,
  Globe,
  Send,
  Copy,
  Check,
  Mail,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";

const INQUIRY_TOPICS = [
  "Business & AI Automation Inquiry",
  "Startup / Venture Collaboration",
  "Mentorship & Executive Connection",
  "AI Engineering / Internship Opportunity",
  "General Professional Connection",
];

export default function ContactSection() {
  const { contact } = siteContent;

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const formattedBrief = `Hello Jafar,

I am reaching out via your website regarding: ${topic}.

Name: ${name || "[Not provided]"}
Organization / Role: ${organization || "[Not provided]"}
Contact Email: ${senderEmail || "[Not provided]"}

Message:
${message}`;

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(
    `[Website Inquiry] ${topic} — ${name || "Visitor"}`
  )}&body=${encodeURIComponent(formattedBrief)}`;

  const whatsappHref = `${contact.whatsapp.url}?text=${encodeURIComponent(
    formattedBrief
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    if (contact.formspreeEndpoint) {
      try {
        await fetch(contact.formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            organization,
            email: senderEmail,
            topic,
            message,
          }),
        });
      } catch {
        // Fallback continues smoothly below
      }
    }

    try {
      await navigator.clipboard.writeText(formattedBrief);
      setCopied(true);
    } catch {
      // Ignore clipboard permission errors
    }

    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    if (!name.trim() || !message.trim()) return;
    setSubmitted(true);
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(formattedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Ignore
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-28 lg:py-32 bg-canvas scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-semibold">
              {contact.sectionNumber} // {contact.sectionLabel}
            </span>
            <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-ink font-normal mb-4">
            {contact.headline}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {contact.introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Welcomed Topics (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Profiles */}
            <div className="bg-white rounded-2xl border border-line p-6 sm:p-8 shadow-card space-y-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-navy font-semibold">
                Direct Channels
              </h3>

              <div className="space-y-3.5">
                {/* Direct Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-start justify-between gap-4 p-4 rounded-xl bg-navy text-canvas hover:bg-navy-deep transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-semibold">
                        Direct Email
                      </p>
                      <p className="font-mono text-xs text-canvas/90 mt-0.5">
                        {contact.email}
                      </p>
                      <p className="text-xs text-canvas/75 mt-1 leading-relaxed">
                        Official inbox for business inquiries, partnerships, and executive correspondence.
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Direct WhatsApp */}
                <a
                  href={contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 p-4 rounded-xl bg-canvas border border-line hover:border-navy/40 transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <MessageCircle className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-ink">
                        WhatsApp Direct · {contact.whatsapp.display}
                      </p>
                      <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">
                        Fastest direct line for urgent business discussions and project inquiries.
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-navy shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jafar-abubakar-51b42927a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 p-4 rounded-xl bg-canvas border border-line hover:border-navy/40 transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <Linkedin className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-ink">
                        LinkedIn · Jafar Abubakar
                      </p>
                      <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">
                        Professional network, executive updates, and long-term connections.
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-navy shrink-0" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Abujaphar01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 p-4 rounded-xl bg-canvas border border-line hover:border-navy/40 transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <Github className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-ink">
                        GitHub · @Abujaphar01
                      </p>
                      <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">
                        Explore public repositories, Python projects, and ongoing engineering work.
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-navy shrink-0" />
                </a>

                {/* Scholarship Gate SG */}
                <a
                  href="https://scholarshipgatesg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 p-4 rounded-xl bg-canvas border border-line hover:border-navy/40 transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <Globe className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-ink">
                        Scholarship Gate SG
                      </p>
                      <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">
                        Operating scholarship platform where I serve as Chief Technology Officer.
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-navy shrink-0" />
                </a>
              </div>
            </div>

            {/* Welcomed Opportunities */}
            <div className="bg-surface/80 rounded-2xl border border-line p-6 sm:p-8 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
                Areas of Conversation
              </h3>
              <div className="space-y-3.5">
                {contact.welcomeTopics.map((item) => (
                  <div
                    key={item.title}
                    className="pb-3.5 border-b border-line/70 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-sans text-sm font-semibold text-ink">
                      {item.title}
                    </h4>
                    <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Composer (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-line p-7 sm:p-10 shadow-editorial">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-line">
              <div>
                <h3 className="font-serif text-2xl text-ink font-normal">
                  Compose an Inquiry
                </h3>
                <p className="text-xs text-ink-muted mt-1">
                  Structure your message below and send it directly via Email ({contact.email}) or WhatsApp.
                </p>
              </div>
              <MessageSquare className="w-5 h-5 text-navy hidden sm:block" />
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block font-mono text-[11px] uppercase tracking-wider text-ink-secondary font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Ibrahim Musa"
                      className="w-full px-4 py-3 rounded-lg bg-canvas border border-line text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-org"
                      className="block font-mono text-[11px] uppercase tracking-wider text-ink-secondary font-medium mb-2"
                    >
                      Organization / Role
                    </label>
                    <input
                      id="inquiry-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Company, Venture, or Institution"
                      className="w-full px-4 py-3 rounded-lg bg-canvas border border-line text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block font-mono text-[11px] uppercase tracking-wider text-ink-secondary font-medium mb-2"
                    >
                      Your Email Address
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-canvas border border-line text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-topic"
                      className="block font-mono text-[11px] uppercase tracking-wider text-ink-secondary font-medium mb-2"
                    >
                      Subject / Context
                    </label>
                    <select
                      id="inquiry-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-canvas border border-line text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                    >
                      {INQUIRY_TOPICS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block font-mono text-[11px] uppercase tracking-wider text-ink-secondary font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a brief overview of what you are building, exploring, or looking to discuss..."
                    className="w-full px-4 py-3 rounded-lg bg-canvas border border-line text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-navy transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-navy text-canvas text-sm font-medium hover:bg-navy-deep transition-all shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-canvas border border-line-strong text-ink text-sm font-medium hover:border-navy hover:text-navy transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-navy" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-xs text-ink-muted font-mono">
                    {contact.email}
                  </p>
                </div>
              </form>
            ) : (
              <div className="p-6 sm:p-8 rounded-xl bg-canvas border border-navy/25 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-navy text-canvas font-mono text-[10px] uppercase tracking-wider font-medium mb-2">
                      <Check className="w-3 h-3" />
                      <span>Inquiry Ready to Send</span>
                    </span>
                    <h4 className="font-serif text-2xl text-ink font-normal">
                      Thank you, {name}.
                    </h4>
                    <p className="text-sm text-ink-secondary mt-1">
                      Your message has been formatted and copied to your clipboard. Choose your preferred channel below to dispatch it directly to Jafar:
                    </p>
                  </div>
                </div>

                <pre className="p-4 rounded-lg bg-white border border-line text-xs font-mono text-ink-secondary whitespace-pre-wrap leading-relaxed max-h-52 overflow-y-auto">
                  {formattedBrief}
                </pre>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-navy text-canvas text-xs font-mono uppercase tracking-wider font-medium hover:bg-navy-deep transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email ({contact.email})</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white border border-line-strong text-xs font-mono uppercase tracking-wider text-ink hover:border-navy hover:text-navy transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-navy" />
                    <span>Send on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white border border-line text-xs font-mono uppercase tracking-wider text-ink-secondary hover:border-navy transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-navy" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-navy" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-ink-muted hover:text-ink underline ml-auto"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
