import { useId } from "react";

interface FlowNode {
  id: string;
  label: string;
  sub?: string;
  icon?: string;
  color?: "navy" | "blue" | "green" | "amber" | "red" | "slate";
}

interface FlowEdge {
  from: string;
  to: string;
  label?: string;
}

interface Props {
  nodes: FlowNode[];
  edges: FlowEdge[];
  dir?: "TD" | "LR";
  title?: string;
}

const pal: Record<string, { bg: string; text: string; border: string; light: string }> = {
  navy: { bg: "#1e3a5f", text: "#ffffff", border: "#1e3a5f", light: "#e8edf3" },
  blue: { bg: "#dbeafe", text: "#1e40af", border: "#3b82f6", light: "#eff6ff" },
  green: { bg: "#d1fae5", text: "#065f46", border: "#10b981", light: "#ecfdf5" },
  amber: { bg: "#fef3c7", text: "#92400e", border: "#f59e0b", light: "#fffbeb" },
  red: { bg: "#fee2e2", text: "#991b1b", border: "#ef4444", light: "#fef2f2" },
  slate: { bg: "#f1f5f9", text: "#475569", border: "#94a3b8", light: "#f8fafc" },
};

function autoColor(label: string): FlowNode["color"] {
  const l = label.toLowerCase();
  if (l.includes("تحدي") || l.includes("خطر") || l.includes("مشكل") || l.includes("مخالف") || l.includes("حرج") || l.includes("ضعف") || l.includes("صعوب") || l.includes("عطل")) return "red";
  if (l.includes("هدف") || l.includes("نتيجة") || l.includes("منظومة") || l.includes("موحد") || l.includes("ممتاز") || l.includes("تحسين") || l.includes("نجاح") || l.includes("تشغيل")) return "green";
  if (l.includes("حاجة") || l.includes("قرار") || l.includes("عاجل") || l.includes("سريع") || l.includes("تنبي") || l.includes("إنذار")) return "amber";
  if (l.includes("مكتب") || l.includes("إدارة") || l.includes("مركز") || l.includes("نظام") || l.includes("cmms") || l.includes("فريق") || l.includes("مهند") || l.includes("مشرف")) return "navy";
  return "slate";
}

const nodeW = 124;
const nodeH = 52;
const gapX = 60;
const padX = 24;
const padY = 20;

export default function FlowChart({ nodes, edges, dir = "TD", title }: Props) {
  const uid = useId().replace(/:/g, "");

  const nodeMap = new Map(nodes.map((n) => [n.id, { ...n, color: n.color ?? autoColor(n.label) }]));

  const childrenSet = new Set(edges.map((e) => e.to));
  const roots = nodes.filter((n) => !childrenSet.has(n.id));

  const levelOf = new Map<string, number>();
  const visiting = new Set<string>();
  function assignLevel(id: string, lvl: number) {
    if (visiting.has(id)) return;
    const existing = levelOf.get(id);
    if (existing !== undefined && existing >= lvl) return;
    levelOf.set(id, lvl);
    visiting.add(id);
    for (const e of edges) if (e.from === id) assignLevel(e.to, lvl + 1);
    visiting.delete(id);
  }
  for (const r of roots) assignLevel(r.id, 0);

  const childrenAtLevel = new Map<number, string[]>();
  for (const n of nodes) {
    const lvl = levelOf.get(n.id) ?? 0;
    if (!childrenAtLevel.has(lvl)) childrenAtLevel.set(lvl, []);
    childrenAtLevel.get(lvl)!.push(n.id);
  }

  const maxLevel = Math.max(0, ...Array.from(levelOf.values()));
  let maxCount = 0;
  for (const [, ids] of childrenAtLevel) maxCount = Math.max(maxCount, ids.length);

  const isLR = dir === "LR";
  const gapY = isLR ? 36 : 72;
  const cols = isLR ? maxLevel + 1 : maxCount;
  const rows = isLR ? maxCount : maxLevel + 1;

  const totalW = isLR
    ? cols * (nodeW + gapX) - gapX + padX * 2
    : cols * (nodeW + gapX) - gapX + padX * 2;
  const totalH = isLR
    ? rows * (nodeH + gapY) - gapY + padY * 2
    : rows * (nodeH + gapY) - gapY + padY * 2;

  const svgW = Math.max(totalW, 320);
  const svgH = Math.max(totalH, 120);

  function getNodePos(id: string): { x: number; y: number } {
    const lvl = levelOf.get(id) ?? 0;
    const ids = childrenAtLevel.get(lvl) ?? [];
    const idx = ids.indexOf(id);
    const count = ids.length;
    if (isLR) {
      const x = padX + lvl * (nodeW + gapX);
      const colCenter = (count * (nodeW + gapX) - gapX) / 2;
      const y = padY + idx * (nodeH + gapY);
      return { x, y };
    }
    const rowCenter = (count * (nodeW + gapX) - gapX) / 2;
    const startX = (totalW - rowCenter * 2) / 2;
    const x = startX + idx * (nodeW + gapX);
    const y = padY + lvl * (nodeH + gapY);
    return { x, y };
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm no-break">
      {title && (
        <div className="px-4 pt-3 pb-1">
          <h4 className="text-sm font-bold text-[#1e3a5f] text-center">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto overflow-y-visible">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="w-full h-auto"
          style={{ maxWidth: svgW, minWidth: Math.min(svgW, 300) }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id={`a-${uid}`} viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8" />
            </marker>
          </defs>

          {edges.map((e, i) => {
            const from = getNodePos(e.from);
            const to = getNodePos(e.to);
            const fx = from.x + nodeW / 2;
            const fy = from.y + nodeH;
            const tx = to.x + nodeW / 2;
            const ty = to.y;
            if (isLR) {
              const fxlr = from.x + nodeW;
              const fylr = from.y + nodeH / 2;
              const txlr = to.x;
              const tylr = to.y + nodeH / 2;
              const mx = (fxlr + txlr) / 2;
              return (
                <g key={i}>
                  <path
                    d={`M${fxlr},${fylr} C${mx},${fylr} ${mx},${tylr} ${txlr},${tylr}`}
                    fill="none" stroke="#94a3b8" strokeWidth={1.5}
                    markerEnd={`url(#a-${uid})`}
                  />
                  {e.label && (
                    <text x={mx} y={(fylr + tylr) / 2 - 6} textAnchor="middle" fill="#64748b" fontSize={9}>
                      {e.label}
                    </text>
                  )}
                </g>
              );
            }
            return (
              <g key={i}>
                <path
                  d={`M${fx},${fy} L${tx},${ty}`}
                  fill="none" stroke="#94a3b8" strokeWidth={1.5}
                  markerEnd={`url(#a-${uid})`}
                />
                {e.label && (
                  <text x={(fx + tx) / 2} y={(fy + ty) / 2 - 6} textAnchor="middle" fill="#64748b" fontSize={9}>
                    {e.label}
                  </text>
                )}
              </g>
            );
          })}

          {nodes.map((rawNode) => {
            const node = nodeMap.get(rawNode.id)!;
            const c = pal[node.color ?? "slate"];
            const pos = getNodePos(node.id);
            const rx = 8;

            return (
              <g key={node.id}>
                <rect
                  x={pos.x} y={pos.y} width={nodeW} height={nodeH} rx={rx} ry={rx}
                  fill={c.bg} stroke={c.border} strokeWidth={1.5}
                />
                <text
                  x={pos.x + nodeW / 2}
                  y={node.sub ? pos.y + nodeH / 2 - 4 : pos.y + nodeH / 2 + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={c.text}
                  fontSize={node.icon ? 10 : 11}
                  fontWeight="bold"
                >
                  {node.icon ? `${node.icon}  ${node.label}` : node.label}
                </text>
                {node.sub && (
                  <text
                    x={pos.x + nodeW / 2}
                    y={pos.y + nodeH / 2 + 14}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={c.text}
                    fontSize={8}
                    opacity={0.8}
                  >
                    {node.sub}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
