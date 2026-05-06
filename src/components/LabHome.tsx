import {
  ArrowRight,
  Braces,
  CircuitBoard,
  FileText,
  Github,
  Layers3,
  Mail,
  RadioTower,
  Sparkles,
  Terminal,
  Youtube
} from 'lucide-react';
import type { ReactNode } from 'react';
import { archives, builds, commandItems, notes, sitePath, socialLinks, stack } from '../data/site';

const accentClass = {
  cyan: 'bg-signal-cyan',
  amber: 'bg-signal-amber',
  green: 'bg-signal-green'
} as const;

function SectionHeader({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-cyan/80">{eyebrow}</p>
        <h2 className="mt-2 text-xl font-semibold text-stone-100 sm:text-2xl">{title}</h2>
      </div>
      {children ? <div className="text-sm text-stone-400">{children}</div> : null}
    </div>
  );
}

function HeroConsole() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto grid min-h-[86svh] w-full max-w-7xl gap-8 px-5 pb-10 pt-6 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-16 lg:pt-8">
        <header className="flex items-center justify-between lg:absolute lg:left-8 lg:right-8 lg:top-6">
          <a href={sitePath()} className="flex items-center gap-3" aria-label="Hemisphere home">
            <span className="grid size-9 place-items-center rounded-md border border-white/12 bg-white/[0.03]">
              <CircuitBoard className="size-4 text-signal-cyan" aria-hidden="true" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-stone-300">Hemisphere</span>
          </a>
          <a
            href={sitePath('/contact')}
            className="inline-flex h-9 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-stone-300 transition hover:border-signal-cyan/45 hover:text-stone-50 focus:outline-none focus:ring-2 focus:ring-signal-cyan/50"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact
          </a>
        </header>

        <div className="pt-12 sm:pt-20 lg:pt-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-stone-400">
            <span className="size-1.5 rounded-full bg-signal-green" />
            build channel: public/static
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-stone-50 sm:text-7xl lg:text-8xl">
            Hemisphere
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
            Private engineering lab for interfaces, automation, and media systems.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-500">
            Building small systems for media, automation, archives, and human interfaces.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={sitePath('/projects')}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-stone-100 px-4 text-sm font-medium text-graphite-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={sitePath('/notes')}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/12 px-4 text-sm font-medium text-stone-200 transition hover:border-signal-cyan/45 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-signal-cyan/50"
            >
              <FileText className="size-4" aria-hidden="true" />
              Read Notes
            </a>
            <a
              href={sitePath('/contact')}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/12 px-4 text-sm font-medium text-stone-200 transition hover:border-signal-amber/45 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-signal-amber/50"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact
            </a>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="shadow-console overflow-hidden rounded-lg border border-white/12 bg-graphite-900/80">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="size-2.5 rounded-full bg-signal-amber" />
              <span className="size-2.5 rounded-full bg-signal-green" />
              <span className="ml-3 font-mono text-xs text-stone-500">lab.console</span>
            </div>
            <div className="p-4 font-mono text-xs sm:p-5">
              <div className="grid gap-2 text-stone-400">
                <p><span className="text-signal-cyan">hemisphere</span> init creative-engineering-lab</p>
                <p><span className="text-stone-600">$</span> route --mode static --target github-pages</p>
                <p><span className="text-stone-600">$</span> map interfaces automation media-systems archives</p>
              </div>
              <div className="mt-5 grid grid-cols-6 gap-2" aria-hidden="true">
                {Array.from({ length: 42 }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-9 rounded border border-white/8 bg-white/[0.025] ${
                      index % 11 === 0
                        ? 'border-signal-cyan/40 bg-signal-cyan/10'
                        : index % 17 === 0
                          ? 'border-signal-amber/40 bg-signal-amber/10'
                          : ''
                    }`}
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-stone-500">
                <span>status: iterating</span>
                <span className="text-signal-green">online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandPalette() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8" aria-labelledby="command-title">
      <div className="overflow-hidden rounded-lg border border-white/12 bg-graphite-900/70">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Terminal className="size-4 text-signal-cyan" aria-hidden="true" />
          <h2 id="command-title" className="font-mono text-sm text-stone-300">CommandPalette</h2>
        </div>
        <nav className="divide-y divide-white/8" aria-label="Primary">
          {commandItems.map((item) => (
            <a
              href={sitePath(item.path)}
              key={item.path}
              className="group grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 transition hover:bg-white/[0.035] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-signal-cyan/50"
            >
              <span>
                <span className="font-mono text-sm text-stone-100">{item.path}</span>
                <span className="ml-3 hidden text-sm text-stone-500 sm:inline">{item.label}</span>
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500 group-hover:text-signal-cyan">
                {item.status}
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function CurrentBuilds() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
      <SectionHeader eyebrow="CurrentBuilds" title="Work in active formation">
        <span>Four tracks, one lab surface.</span>
      </SectionHeader>
      <div className="grid gap-3 md:grid-cols-2">
        {builds.map((build) => (
          <article
            key={build.title}
            className="rounded-lg border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className={`h-1.5 w-12 rounded-full ${accentClass[build.accent as keyof typeof accentClass]}`} />
              <Sparkles className="size-4 text-stone-600" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-stone-100">{build.title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-500">{build.meta}</p>
            <p className="mt-4 text-sm leading-6 text-stone-400">{build.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SystemStack() {
  return (
    <section id="systems" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
      <SectionHeader eyebrow="SystemStack" title="Static-first publishing stack" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((item) => (
          <div key={item} className="flex min-h-20 items-center justify-between rounded-lg border border-white/10 bg-graphite-850/70 p-4">
            <span className="font-mono text-sm text-stone-200">{item}</span>
            <Braces className="size-4 text-stone-600" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}

function NotesFeed() {
  return (
    <section id="notes" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
      <SectionHeader eyebrow="NotesFeed" title="Technical notes, design thinking, build logs" />
      <div className="divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.025]">
        {notes.map((note) => (
          <article key={note.title} className="grid gap-3 p-5 sm:grid-cols-[7rem_1fr_auto] sm:items-center">
            <time className="font-mono text-xs text-stone-500">{note.date}</time>
            <div>
              <h3 className="text-base font-medium text-stone-100">{note.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">{note.excerpt}</p>
            </div>
            <span className="w-fit rounded border border-white/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500">
              {note.tag}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArchivePreview() {
  return (
    <section id="archive" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
      <SectionHeader eyebrow="ArchivePreview" title="Legacy work held in a quieter layer" />
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-white/10 bg-graphite-900/70 p-5">
          <Layers3 className="mb-5 size-5 text-signal-amber" aria-hidden="true" />
          <p className="text-sm leading-7 text-stone-400">
            Music, video, travel logs, and earlier experiments remain part of the system, but the front
            surface now focuses on engineering practice.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {archives.map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <h3 className="font-mono text-sm text-stone-200">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { ...socialLinks[0], icon: Github },
    { ...socialLinks[1], icon: RadioTower },
    { ...socialLinks[2], icon: Youtube },
    { ...socialLinks[3], icon: Mail }
  ];

  return (
    <footer id="contact" className="mt-10 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">Hemisphere</p>
          <p className="mt-2 text-sm text-stone-500">Creative Engineering / Media Systems Lab</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-white/10 px-3 text-sm text-stone-300 transition hover:border-signal-cyan/45 hover:text-stone-50 focus:outline-none focus:ring-2 focus:ring-signal-cyan/50"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function LabHome() {
  return (
    <main>
      <HeroConsole />
      <CommandPalette />
      <CurrentBuilds />
      <SystemStack />
      <NotesFeed />
      <ArchivePreview />
      <Footer />
    </main>
  );
}
