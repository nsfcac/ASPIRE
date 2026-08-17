export const site = {
  acronym: 'ASPIRE',
  title:
    'ASPIRE: Advancing Scientific Discovery through High-Performance Computing and AI Research',
  shortTitle: 'REU Site: ASPIRE',
  tagline: 'An NSF REU Site at the intersection of Artificial Intelligence and High-Performance Computing',
  institution: 'Texas Tech University',
  college: 'Whitacre College of Engineering, Department of Computer Science',
  duration: '10 weeks',
  cohortSize: 10,
  /** Planned shared mailbox — not live until the Site is funded, so never linked as a mailto. */
  plannedEmail: 'ASPIRE@ttu.edu',
  contactNote:
    'Applications will be received and managed through the NSF Education and Training Application (ETAP) system.',
};

type NavItem = {
  href: string;
  label: string;
  /** Proposal section the page covers; omitted for pages outside the proposal. */
  section?: string;
  /** Kept in the site but left out of the nav and the page map; still reachable by URL. */
  hidden?: boolean;
};

export const nav: NavItem[] = [
  { href: '/', label: 'Overview', section: '(a)' },
  { href: '/projects', label: 'Research Projects', section: '(b)' },
  { href: '/program', label: 'Program & Timeline', section: '(a), (e)' },
  { href: '/environment', label: 'Research Environment', section: '(c)' },
  { href: '/mentors', label: 'Mentors', section: '(c)' },
  { href: '/recruitment', label: 'Recruitment & Selection', section: '(d)' },
  { href: '/cohort', label: 'Cohort' },
  { href: '/evaluation', label: 'Evaluation', section: '(f)', hidden: true },
  { href: '/impacts', label: 'Broader Impacts', section: '(g)' },
  { href: '/contact', label: 'Contact' },
];

/** What the header, footer, and page map render. */
export const visibleNav = nav.filter((n) => !n.hidden);
