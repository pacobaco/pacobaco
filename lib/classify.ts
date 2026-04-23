import type { RepoLayer } from './types';

export function classifyRepo(input: {
  name: string;
  description?: string | null;
  topics?: string[];
}): RepoLayer {
  const haystack = [input.name, input.description ?? '', ...(input.topics ?? [])]
    .join(' ')
    .toLowerCase();

  if (/(navstone|treasury|reit|finance|affo|valuation|asset)/.test(haystack)) {
    return 'Financial Systems';
  }
  if (/(act-gp|ai|llm|model|agent|flyometer|harmonia|embedding|query)/.test(haystack)) {
    return 'Intelligence';
  }
  if (/(graph|identity|entity|ger|network|ontology|social)/.test(haystack)) {
    return 'Network & Identity';
  }
  if (/(ode|telemetry|iot|port|smart lock|infrastructure|hardware)/.test(haystack)) {
    return 'Infrastructure';
  }
  if (/(wethemachines|blog|publication|content|johnnybabylon|writer)/.test(haystack)) {
    return 'Publication';
  }
  return 'Other';
}
