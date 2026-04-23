export function SystemMap() {
  const nodes = [
    { name: 'WeTheMachines', className: 'publication', style: { left: '42%', top: '4%' } },
    { name: 'Intelligence', className: 'intelligence', style: { left: '7%', top: '26%' } },
    { name: 'Financial', className: 'finance', style: { left: '72%', top: '24%' } },
    { name: 'Network', className: 'network', style: { left: '10%', top: '68%' } },
    { name: 'Infrastructure', className: 'infra', style: { left: '68%', top: '70%' } },
  ];

  return (
    <div className="orbit-map" aria-label="Systems topology map">
      <div className="orbit-core">
        <span>pacobaco</span>
        <small>systems core</small>
      </div>
      {nodes.map((node) => (
        <div key={node.name} className={`orbit-node ${node.className}`} style={node.style}>
          {node.name}
        </div>
      ))}
      <span className="orbit-link link-a" />
      <span className="orbit-link link-b" />
      <span className="orbit-link link-c" />
      <span className="orbit-link link-d" />
      <span className="orbit-link link-e" />
    </div>
  );
}
