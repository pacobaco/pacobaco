import { LayerGrid } from '@/components/LayerGrid';
import { StatsStrip } from '@/components/StatsStrip';
import { SystemMap } from '@/components/SystemMap';
import { getProfileSnapshot } from '@/lib/github';

const theses = [
  'Network type is destiny.',
  'Access is currency.',
  'Identity is relational, not merely nominal.',
  'Value emerges from topology, routing, and control.',
];

export default async function HomePage() {
  const snapshot = await getProfileSnapshot();

  return (
    <main className="shell">
      <section className="hero panel">
        <div className="hero-copy">
          <div className="eyebrow">pacobaco / live systems topology</div>
          <h1>{snapshot.profile.name}</h1>
          <p>
            Research, infrastructure, finance, identity systems, and AI routed as a unified operating surface.
            This app reframes the GitHub profile as a systems index instead of a static biography.
          </p>
          <div className="badge-row">
            <span className="badge">Converge knowledge, not prestige.</span>
            <span className="badge">Topology-first systems design</span>
            <span className="badge">Live GitHub signal</span>
          </div>
          <div className="hero-links">
            <a href={snapshot.profile.htmlUrl} target="_blank" rel="noreferrer">GitHub profile</a>
            <a href="http://www.wethemachines.com" target="_blank" rel="noreferrer">WeTheMachines</a>
            <a href="https://www.johnnybabylon.com" target="_blank" rel="noreferrer">Johnny Babylon</a>
          </div>
        </div>
        <div className="hero-card panel">
          <img className="avatar" src={snapshot.profile.avatarUrl} alt={snapshot.profile.name} />
          <div>
            <small className="eyebrow">Source</small>
            <h2>{snapshot.source === 'github' ? 'Live GitHub feed' : 'Fallback curated feed'}</h2>
            <p>{snapshot.profile.bio}</p>
            <div className="hero-mini-meta">
              <span>@{snapshot.profile.login}</span>
              <span>{snapshot.profile.publicRepos} public repos</span>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip snapshot={snapshot} />

      <section className="grid-2">
        <section className="panel">
          <div className="panel-head">
            <div>
              <small className="eyebrow">Topology</small>
              <h2>System map</h2>
            </div>
          </div>
          <SystemMap />
        </section>

        <section className="panel">
          <div className="panel-head">
            <div>
              <small className="eyebrow">Theses</small>
              <h2>Operating logic</h2>
            </div>
          </div>
          <div className="thesis-stack">
            {theses.map((thesis) => (
              <div key={thesis} className="thesis-card">{thesis}</div>
            ))}
          </div>
          <div className="callout">
            <strong>JSON surface:</strong> <code>/api/repos</code>
          </div>
        </section>
      </section>

      <section className="panel" style={{ marginTop: 22 }}>
        <div className="panel-head">
          <div>
            <small className="eyebrow">Repository layers</small>
            <h2>Semantic grouping by system function</h2>
          </div>
        </div>
        <LayerGrid snapshot={snapshot} />
      </section>

      <section className="grid-2">
        <section className="panel">
          <div className="panel-head">
            <div>
              <small className="eyebrow">External surfaces</small>
              <h2>Linked system fronts</h2>
            </div>
          </div>
          <div className="link-cards">
            <a className="link-card" href="http://www.wethemachines.com" target="_blank" rel="noreferrer">
              <strong>WeTheMachines</strong>
              <p>Research publication, mezzanine distribution, and systems writing.</p>
            </a>
            <a className="link-card" href="https://www.johnnybabylon.com" target="_blank" rel="noreferrer">
              <strong>Johnny Babylon</strong>
              <p>Creative surface adjacent to the broader systems stack.</p>
            </a>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <div>
              <small className="eyebrow">Operational notes</small>
              <h2>Deploy and extend</h2>
            </div>
          </div>
          <ul className="notes-list">
            <li>Set <code>GITHUB_TOKEN</code> and optionally <code>GITHUB_USERNAME</code>.</li>
            <li>Deploy on Vercel for cached revalidation.</li>
            <li>Use the <code>/api/repos</code> endpoint for widgets or dashboards.</li>
            <li>Adjust classification logic in <code>lib/classify.ts</code> as the repo graph evolves.</li>
          </ul>
        </section>
      </section>

      <footer className="footer">
        <p>This is not a portfolio. It is a live systems topology.</p>
        <small>Generated {new Date(snapshot.generatedAt).toLocaleString()}</small>
      </footer>
    </main>
  );
}
