const nodes = [
  { cx: 40, cy: 60, delay: "0s" },
  { cx: 180, cy: 30, delay: "0.4s" },
  { cx: 180, cy: 110, delay: "0.8s" },
  { cx: 320, cy: 60, delay: "1.2s" },
  { cx: 320, cy: 150, delay: "0.2s" },
  { cx: 440, cy: 100, delay: "1.6s" },
];

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [4, 5],
];

export function WorkflowGraphic() {
  return (
    <svg
      viewBox="0 0 480 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-xl"
      role="img"
      aria-label="Diagrama de un workflow de automatización con nodos conectados"
    >
      <defs>
        <linearGradient id="edge-gradient" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {edges.map(([from, to], i) => {
        const a = nodes[from];
        const b = nodes[to];
        return (
          <line
            key={i}
            x1={a.cx}
            y1={a.cy}
            x2={b.cx}
            y2={b.cy}
            stroke="url(#edge-gradient)"
            strokeWidth="1.5"
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={i} className="animate-node-pulse" style={{ animationDelay: n.delay }}>
          <circle cx={n.cx} cy={n.cy} r="16" fill="#0b1220" stroke="url(#edge-gradient)" strokeWidth="1.5" />
          <circle cx={n.cx} cy={n.cy} r="4" fill="#06b6d4" />
        </g>
      ))}
    </svg>
  );
}
