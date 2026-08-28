import { PRICES } from "@mailmypdf/pricing";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, ShieldCheck, Clock, PackageCheck, FileSearch, Send, Eye, CalendarClock, Stamp, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { workflows } from "@/domain/workflows";
import { APPEAL_CATALOG, CATEGORY_ORDER } from "@/domain/appeal-catalog";

const SITE_ORIGIN = "https://benefits-appeal.pages.dev";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Benefits Appeal — Understand the Decision. Build the Appeal. Mail It." },
      { name: "description", content: "Understand benefits denials, organize evidence, build supported appeals, and mail them with proof of delivery. A MailMyPDF product." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Benefits Appeal — Understand the Decision. Build the Appeal. Mail It." },
      { property: "og:description", content: "Analyze benefits denials, organize evidence, build supported appeals, and send with proof of delivery. A MailMyPDF product." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Benefits Appeal" },
      { property: "og:url", content: SITE_ORIGIN + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Benefits Appeal — Understand the Decision. Build the Appeal. Mail It." },
      { name: "twitter:description", content: "Analyze benefits denials, organize evidence, build supported appeals, and send with proof of delivery." },
    ],
    links: [{ rel: "canonical", href: SITE_ORIGIN + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Benefits Appeal",
          description: "Specialized workflows for appealing denied government benefits: SSDI, SSI, unemployment, Medicaid, SNAP, VA, housing, and disability benefits.",
          url: SITE_ORIGIN,
          publisher: { "@type": "Organization", name: "MailMyPDF" },
          hasPart: Object.values(workflows).map((workflow) => ({ "@type": "WebPage", name: workflow.title, url: SITE_ORIGIN + "/workflows/" + workflow.id, about: workflow.primaryKeyword || workflow.title })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Benefits Appeal",
          serviceType: "Benefits appeal letter preparation and mailing",
          provider: { "@type": "Organization", name: "MailMyPDF" },
          description: "Upload a benefits denial or decision letter. The system analyzes it, identifies issues, organizes evidence, drafts the response, and mails it with proof of delivery.",
          areaServed: { "@type": "Country", name: "United States" },
        }),
      },
    ],
  }),
});

const lifecycleSteps = [
  { icon: FileText, label: "Decision", desc: "Upload the denial" },
  { icon: FileSearch, label: "Issues", desc: "AI finds problems" },
  { icon: ShieldCheck, label: "Evidence", desc: "Source-linked grounds" },
  { icon: FileText, label: "Draft", desc: "Built from analysis" },
  { icon: CheckCircle2, label: "Review", desc: "You approve it" },
  { icon: Mail, label: "Mail", desc: "USPS via MailMyPDF" },
  { icon: PackageCheck, label: "Proof", desc: "Delivery certificate" },
];

const stats = [
  { value: "3–5", label: "Business day delivery" },
  { value: `${(PRICES.standard / 100).toFixed(2)}`, label: "Mailing (standard)" },
  { value: "100%", label: "You control the facts" },
  { value: "0", label: "Printers needed" },
];

const trustItems = [
  "AI never invents facts, eligibility, or outcomes",
  "Every claim in your appeal is traced to a source",
  "You review and approve word by word",
  "Physical mail with USPS tracking and proof of delivery",
];

function HomePage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-rule/60 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow">A MailMyPDF Product</div>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl">Understand the denial. Build the appeal. Mail it.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
              Benefits Appeal helps you respond to denied SSDI, SSI, unemployment, Medicaid, SNAP, VA, housing, and disability benefits with a source-grounded appeal letter — reviewed, approved, and mailed with proof of delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/workflows" className="btn-primary inline-flex items-center gap-2">
                Find your workflow <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn-secondary inline-flex items-center gap-2">
                How it works
              </Link>
            </div>
          </div>

          {/* Lifecycle diagram */}
          <div className="mt-16 hidden md:block">
            <div className="flex items-center justify-between gap-2">
              {lifecycleSteps.map((step, i) => (
                <div key={step.label} className="flex flex-1 flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rule bg-card">
                    <step.icon size={20} className="text-ink" />
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink">{step.label}</div>
                  <div className="text-[10px] text-muted-foreground">{step.desc}</div>
                  {i < lifecycleSteps.length - 1 && (
                    <div className="absolute" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-rule/60 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl text-ink">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-rule/60">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((t) => (
              <div key={t} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-stamp" />
                <p className="text-sm leading-6 text-ink-soft">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured workflows */}
      <section className="border-b border-rule/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-3xl">Featured workflows</h2>
          <p className="mt-2 text-muted-foreground">Find the workflow that matches your benefits decision.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {APPEAL_CATALOG.slice(0, 6).map((entry) => (
              <Link
                key={entry.slug}
                to={entry.workflowRoute}
                className="block rounded-2xl border border-rule bg-paper-deep/30 p-6 transition-colors hover:bg-muted/40"
              >
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{entry.category}</div>
                <h3 className="mt-2 font-serif text-xl">{entry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{entry.shortDescription}</p>
                <span className="mt-4 inline-block text-sm font-medium text-ink">{entry.cta} →</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/workflows" className="inline-flex items-center gap-2 text-sm font-medium text-ink">
              View all workflows <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works teaser */}
      <section className="bg-paper-deep/40">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="eyebrow">How it works</div>
          <h2 className="mt-3 font-serif text-3xl">Three steps. Real mail. Full record.</h2>
          <div className="mt-8 space-y-6">
            {[
              { num: "01", title: "Upload your decision", desc: "Share the benefits denial or decision you received. We analyze it to identify the key facts, deadlines, and appeal requirements." },
              { num: "02", title: "Prepare your appeal", desc: "Answer guided questions about your situation. We draft your appeal letter, which you review and approve word by word." },
              { num: "03", title: "Mail with proof", desc: "Choose Standard, Certified, or Registered mail. We print, envelope, and send via USPS with tracking and proof of delivery." },
            ].map((step) => (
              <div key={step.num} className="rounded-2xl border border-rule bg-card p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[.18em] text-muted-foreground">{step.num}</div>
                <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/how-it-works" className="btn-primary inline-flex items-center gap-2">
              Learn more <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
