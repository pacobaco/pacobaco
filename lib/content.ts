export const theses = [
  'Network type is destiny.',
  'Identity is computable, relational, and stateful.',
  'Access behaves like currency in constrained systems.',
  'Publication is an operational layer, not just a content layer.',
  'Valuation emerges from topology, not surface labels alone.',
  'Agentic search should route decisions, not merely retrieve text.',
];

export const links = [
  {
    title: 'GitHub',
    href: 'https://github.com/pacobaco',
    description: 'Repositories, code surfaces, and experimental system layers.',
  },
  {
    title: 'WeTheMachines',
    href: 'http://www.wethemachines.com',
    description: 'Research publication, mezzanine distribution, and systems writing.',
  },
  {
    title: 'Johnny Babylon',
    href: 'https://www.johnnybabylon.com',
    description: 'Music-facing surface and adjacent creative systems work.',
  },
];

export const categoryOrder = ['ai', 'finance', 'network', 'infrastructure', 'publication', 'other'] as const;

export const categoryLabels: Record<(typeof categoryOrder)[number], string> = {
  ai: 'Intelligence layer',
  finance: 'Financial layer',
  network: 'Network & identity layer',
  infrastructure: 'Infrastructure layer',
  publication: 'Publication layer',
  other: 'Other systems',
};
