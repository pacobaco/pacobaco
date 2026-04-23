import type { ProfileSnapshot, RepoNode } from '@/lib/types';

function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

export function LayerGrid({ snapshot }: { snapshot: ProfileSnapshot }) {
  const grouped = snapshot.repos.reduce<Record<string, RepoNode[]>>((acc, repo) => {
    acc[repo.layer] ??= [];
    acc[repo.layer].push(repo);
    return acc;
  }, {});

  return (
    <div className="layer-grid">
      {Object.entries(grouped).map(([layer, repos]) => (
        <section key={layer} className="panel layer-panel">
          <div className="panel-head">
            <div>
              <small className="eyebrow">{layer}</small>
              <h2>{layer}</h2>
            </div>
            <span className="pill">{repos.length} repos</span>
          </div>
          <div className="repo-stack">
            {repos.slice(0, 8).map((repo) => (
              <a className="repo-card" key={repo.name} href={repo.href} target="_blank" rel="noreferrer">
                <div className="repo-row">
                  <strong>{repo.name}</strong>
                  <span>{repo.language}</span>
                </div>
                <p>{repo.description}</p>
                <div className="repo-meta">
                  <span>★ {repo.stars}</span>
                  <span>⑂ {repo.forks}</span>
                  <span>Updated {formatDate(repo.updatedAt)}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
