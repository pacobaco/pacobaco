export function SystemMap() {
  return (
    <div className="map-wrap">
      <svg viewBox="0 0 760 420" role="img" aria-label="System map">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#86efac" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="760" height="420" rx="20" fill="rgba(255,255,255,0.02)" />
        <g stroke="rgba(159,176,214,0.28)" strokeWidth="2">
          <line x1="380" y1="210" x2="180" y2="90" />
          <line x1="380" y1="210" x2="580" y2="90" />
          <line x1="380" y1="210" x2="180" y2="330" />
          <line x1="380" y1="210" x2="580" y2="330" />
          <line x1="380" y1="210" x2="380" y2="50" />
        </g>
        <g>
          <circle cx="380" cy="210" r="64" fill="#09101f" stroke="url(#g1)" strokeWidth="4" />
          <text x="380" y="205" textAnchor="middle" fill="#ebf0ff" fontSize="24" fontFamily="Arial">pacobaco</text>
          <text x="380" y="228" textAnchor="middle" fill="#9fb0d6" fontSize="14" fontFamily="Arial">systems core</text>
        </g>
        {[
          [180, 90, 'Intelligence'],
          [580, 90, 'Financial Systems'],
          [180, 330, 'Network & Identity'],
          [580, 330, 'Infrastructure'],
          [380, 50, 'Publication'],
        ].map(([x, y, label]) => (
          <g key={String(label)}>
            <circle cx={Number(x)} cy={Number(y)} r="46" fill="#0f1730" stroke="#7dd3fc" strokeWidth="2" />
            <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="#ebf0ff" fontSize="13" fontFamily="Arial">{String(label)}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
