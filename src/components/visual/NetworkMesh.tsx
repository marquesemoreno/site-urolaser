import React from "react";

// Assinatura visual da TIVDC: topologia de rede (nós conectados por linhas).
// Usado SOMENTE no hero da home — animação sutil, lenta e não-óbvia.
// O restante do site usa a textura estática (.bg-grid) para manter coerência
// sem cair no clichê de "fundo de partículas em todas as páginas".

const NODES = [
  { x: 10, y: 24 }, { x: 26, y: 14 }, { x: 43, y: 30 }, { x: 60, y: 17 },
  { x: 78, y: 27 }, { x: 91, y: 15 }, { x: 17, y: 49 }, { x: 35, y: 56 },
  { x: 52, y: 44 }, { x: 68, y: 53 }, { x: 85, y: 47 }, { x: 23, y: 75 },
  { x: 41, y: 81 }, { x: 58, y: 70 }, { x: 74, y: 79 }, { x: 90, y: 66 },
  { x: 7, y: 63 }, { x: 96, y: 86 },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8], [8, 9],
  [9, 10], [1, 7], [2, 8], [3, 9], [4, 10], [6, 11], [7, 12], [8, 13],
  [9, 14], [10, 15], [11, 12], [12, 13], [13, 14], [14, 15], [6, 16],
  [5, 17], [15, 17], [11, 16],
];

const NetworkMesh = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.55 }}
      >
        <g stroke="url(#netStroke)" strokeWidth="0.14" fill="none" strokeLinecap="round">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              className="net-line"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </g>
        <g fill="url(#netNode)">
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r="0.62"
              className="net-node"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </g>
        <defs>
          <linearGradient id="netStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#15804f" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#bf5c2a" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="netNode">
            <stop offset="0%" stopColor="#15804f" />
            <stop offset="100%" stopColor="#bf5c2a" />
          </radialGradient>
        </defs>
      </svg>
      <div className="net-breathe absolute inset-0" />
    </div>
  );
};

export default NetworkMesh;
