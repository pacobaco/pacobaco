export type RepoLayer =
  | 'Intelligence'
  | 'Financial Systems'
  | 'Network & Identity'
  | 'Infrastructure'
  | 'Publication'
  | 'Other';

export type RepoNode = {
  name: string;
  description: string;
  href: string;
  homepage?: string | null;
  stars: number;
  forks: number;
  watchers: number;
  language: string;
  topics: string[];
  updatedAt: string;
  layer: RepoLayer;
  archived: boolean;
  fork: boolean;
};

export type ProfileSnapshot = {
  generatedAt: string;
  source: 'github' | 'fallback';
  profile: {
    login: string;
    name: string;
    bio: string;
    avatarUrl: string;
    followers: number;
    following: number;
    publicRepos: number;
    htmlUrl: string;
  };
  repos: RepoNode[];
  stats: {
    totalRepos: number;
    totalStars: number;
    activeLast90Days: number;
    layers: Record<RepoLayer, number>;
  };
};
