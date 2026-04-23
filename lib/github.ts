import { fallbackSnapshot } from './fallback-data';
import { classifyRepo } from './classify';
import type { ProfileSnapshot, RepoLayer, RepoNode } from './types';

const USERNAME = process.env.GITHUB_USERNAME || 'pacobaco';
const API_VERSION = '2022-11-28';

function headers(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': API_VERSION,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function getJson<T>(url: string, revalidateSeconds = 3600): Promise<T> {
  const response = await fetch(url, {
    headers: headers(),
    next: { revalidate: revalidateSeconds },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
  archived: boolean;
  fork: boolean;
};

type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
};

function toNode(repo: GitHubRepo): RepoNode {
  return {
    name: repo.name,
    description: repo.description ?? 'No description provided yet.',
    href: repo.html_url,
    homepage: repo.homepage,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    watchers: repo.watchers_count,
    language: repo.language ?? 'Unknown',
    topics: repo.topics ?? [],
    updatedAt: repo.updated_at,
    layer: classifyRepo({
      name: repo.name,
      description: repo.description,
      topics: repo.topics,
    }),
    archived: repo.archived,
    fork: repo.fork,
  };
}

function sortRepos(a: RepoNode, b: RepoNode): number {
  const aScore = a.stars * 8 + a.forks * 5 + a.watchers * 2 + Date.parse(a.updatedAt) / 1e11;
  const bScore = b.stars * 8 + b.forks * 5 + b.watchers * 2 + Date.parse(b.updatedAt) / 1e11;
  return bScore - aScore;
}

function buildLayerStats(repos: RepoNode[]): Record<RepoLayer, number> {
  const base: Record<RepoLayer, number> = {
    Intelligence: 0,
    'Financial Systems': 0,
    'Network & Identity': 0,
    Infrastructure: 0,
    Publication: 0,
    Other: 0,
  };

  for (const repo of repos) {
    base[repo.layer] += 1;
  }

  return base;
}

export async function getProfileSnapshot(): Promise<ProfileSnapshot> {
  try {
    const [profile, repos] = await Promise.all([
      getJson<GitHubUser>(`https://api.github.com/users/${USERNAME}`),
      getJson<GitHubRepo[]>(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
    ]);

    const nodes = repos.filter((repo) => !repo.fork).map(toNode).sort(sortRepos);
    const now = Date.now();
    const activeLast90Days = nodes.filter(
      (repo) => now - Date.parse(repo.updatedAt) <= 1000 * 60 * 60 * 24 * 90,
    ).length;

    return {
      generatedAt: new Date().toISOString(),
      source: 'github',
      profile: {
        login: profile.login,
        name: profile.name ?? profile.login,
        bio: profile.bio ?? fallbackSnapshot.profile.bio,
        avatarUrl: profile.avatar_url,
        followers: profile.followers,
        following: profile.following,
        publicRepos: profile.public_repos,
        htmlUrl: profile.html_url,
      },
      repos: nodes,
      stats: {
        totalRepos: nodes.length,
        totalStars: nodes.reduce((sum, repo) => sum + repo.stars, 0),
        activeLast90Days,
        layers: buildLayerStats(nodes),
      },
    };
  } catch (error) {
    console.error('Using fallback snapshot:', error);
    return fallbackSnapshot;
  }
}
