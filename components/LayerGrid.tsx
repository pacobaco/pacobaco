import type { ProfileSnapshot, RepoLayer } from '@/lib/types';

const order: RepoLayer[] = [
  'Intelligence',
  'Financial Systems',
  'Network & Identity',
  'Infrastructure',
  'Publication',
  'Other',
];

export function LayerGrid({ snapshot }: { snapshot: ProfileSnapshot }) {
  const grouped = snapshot.repos.reduce<Record<RepoLayer, typeof snapshot.repos>>(
    (acc, repo) => {
      acc[repo.layer].push(repo);
      return acc;
    },
    {
      Intelligence: [],
      'Financial Systems': [],
      'Network & Identity': [],
      Infrastructure: [],
      Publication: [],
      Other: [],
    },
  );

  return (
    <div className="layer-grid">
      {order.map((layer) => {
        const repos = grouped[layer];
        if (!repos.length) return null;

        return (
          <section key={layer} className="layer-panel">
            <h3>{layer}</h3>
            <div className="layer-meta">{repos.length} repositories in this layer</div>
            <div className="repo-list">
              {repos.slice(0, 8).map((repo) => (
                <article key={repo.name} className="repo-card">
                  <h4>
                    <a href={repo.href} target="_blank" rel="noreferrer">{repo.name}</a>
                  </h4>
                  <p>{repo.description}</p>
                  <div className="repo-stats">
                    <span>⭐ {repo.stars}</span>
                    <span>Forks {repo.forks}</span>
                    <span>{repo.language}</span>
                  </div>
                  {repo.topics.length > 0 && (
                    <div className="topics">
                      {repo.topics.slice(0, 5).map((topic) => (
                        <span key={topic} className="topic">{topic}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
