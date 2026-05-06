export const baseTitle = 'Hemisphere';

export const siteDescription =
  'Private engineering lab for interfaces, automation, and media systems.';

export const commandItems = [
  { path: '/projects', label: 'Project index', status: 'active' },
  { path: '/systems', label: 'Systems map', status: 'draft' },
  { path: '/notes', label: 'Research notes', status: 'soon' },
  { path: '/archive', label: 'Media archive', status: 'legacy' },
  { path: '/contact', label: 'Contact channel', status: 'open' }
] as const;

export const builds = [
  {
    title: 'GitHub-based website renewal',
    meta: 'Static publishing / information architecture',
    summary:
      'Rebuilding the Hemisphere surface as a durable static site with clear routes, archive layers, and GitHub Pages deployment.',
    stage: 'shipping',
    accent: 'cyan'
  },
  {
    title: 'AI-assisted documentation workflow',
    meta: 'Capture, summarize, refine, ship',
    summary:
      'A working pattern for turning scattered build sessions into concise handoffs, notes, and public-facing records.',
    stage: 'forming',
    accent: 'amber'
  },
  {
    title: 'Media archive modernization',
    meta: 'Legacy works, metadata, long-term retrieval',
    summary:
      'A quieter layer for older music, video, travel, and web experiments without making them the whole front door.',
    stage: 'mapping',
    accent: 'green'
  },
  {
    title: 'Automation experiments',
    meta: 'Small scripts for repetitive creative operations',
    summary:
      'Small tools for reducing repeated operational work around publishing, documentation, and media handling.',
    stage: 'open',
    accent: 'cyan'
  }
] as const;

export const stack = ['Astro', 'React', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages', 'Codex'] as const;

export const notes = [
  {
    date: '2026.05',
    title: 'Designing a personal lab as a system surface',
    tag: 'design',
    excerpt:
      'A personal site can behave less like a profile and more like an instrument panel for active thinking.'
  },
  {
    date: '2026.05',
    title: 'Static sites as durable infrastructure',
    tag: 'infra',
    excerpt:
      'Static publishing keeps the public layer simple while leaving room for heavier systems behind the scenes.'
  },
  {
    date: '2026.05',
    title: 'AI-assisted documentation without losing authorship',
    tag: 'workflow',
    excerpt:
      'The useful part is not automation alone; it is a repeatable loop for preserving intent between sessions.'
  }
] as const;

export const archives = [
  {
    title: 'Music and visual releases',
    detail: 'Albums, video works, and release-era notes from the older rossolabel.com surface.'
  },
  {
    title: 'Past web experiments',
    detail: 'Legacy site structures, interface sketches, and small publishing tests.'
  },
  {
    title: 'Vehicle and travel logs',
    detail: 'Road records and field notes that belong in the archive rather than the main lab console.'
  },
  {
    title: 'Legacy media notes',
    detail: 'Context, credits, and preservation notes for work that predates the current site direction.'
  }
] as const;

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kentas-tri' },
  { label: 'X', href: 'https://x.com/GuitarsKs' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ksguitars1520' },
  { label: 'Mail', href: 'mailto:webmaster@rossolabel.com' }
] as const;

export function sitePath(path = '/') {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return normalized ? `${base}${normalized.replace(/\/$/, '')}/` : base;
}
