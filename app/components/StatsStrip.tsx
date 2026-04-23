import type { ProfileSnapshot } from '@/lib/types';

export function StatsStrip({ snapshot }: { snapshot: ProfileSnapshot }) {
  const items = [
    { label: 'Repositories', value: snapshot.stats.totalRepos },
    { label: 'Stars', value: snapshot.stats.totalStars },
    { label: 'Active ≤ 90d', value: snapshot.stats.activeLast90Days },
    { label: 'Followers', value: snapshot.profile.followers },
  ];

  return (
    <div className="stats-strip">
      {items.map((item) => (
        <div key={item.label} className="stat-card">
          <small>{item.label}</small>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}
