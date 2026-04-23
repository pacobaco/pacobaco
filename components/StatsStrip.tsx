import type { ProfileSnapshot } from '@/lib/types';

export function StatsStrip({ snapshot }: { snapshot: ProfileSnapshot }) {
  const stats = [
    ['Repositories', String(snapshot.stats.totalRepos)],
    ['Stars', String(snapshot.stats.totalStars)],
    ['Active 90d', String(snapshot.stats.activeLast90Days)],
    ['Followers', String(snapshot.profile.followers)],
  ];

  return (
    <section className="stats-strip">
      {stats.map(([label, value]) => (
        <div key={label} className="stat-card panel">
          <div className="stat-label">{label}</div>
          <div className="stat-value">{value}</div>
        </div>
      ))}
    </section>
  );
}
