import type { RepoLayer } from './types';

const rules: Array<{ layer: RepoLayer; terms: string[] }> = [
  {
    layer: 'Financial Systems',
    terms: ['navstone', 'treasury', 'tpse', 'reit', 'valuation', 'asset-backed'],
  },
  {
    layer: 'Intelligence',
    terms: ['act-gp', 'flyometer', 'harmonia', 'llm', 'ai', 'agent', 'model'],
  },
  {
    layer: 'Network & Identity',
    terms: ['assetnexus', 'graph', 'identity', 'ger', 'ontology', 'network'],
  },
  {
    layer: 'Infrastructure',
    terms: ['ode', 'wh-uzi', 'telemetry', 'iot', 'port', 'lock'],
  },
  {
    layer: 'Publication',
    terms: ['wethemachines', 'blog', 'editorial', 'content'],
  },
];

export function classifyRepo(input: {
  name: string;
  description?: string | null;
  topics?: string[];
}): RepoLayer {
  const haystack = [input.name, input.description ?? '', ...(input.topics ?? [])]
    .join(' ')
    .toLowerCase();

  for (const rule of rules) {
    if (rule.terms.some((term) => haystack.includes(term))) return rule.layer;
  }

  return 'Other';
}
