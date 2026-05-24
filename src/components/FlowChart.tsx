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

const colorThemes = {
  navy: {
    border: "border-[#1e3a5f]/30",
    title: "text-[#1e3a5f]",
    bg: "bg-white",
    iconBg: "bg-[#1e3a5f]/5",
    badge: "bg-[#1e3a5f] text-white",
    divider: "border-[#1e3a5f]/10",
    tab: "bg-[#1e3a5f]",
    glow: "shadow-sm",
  },
  blue: {
    border: "border-blue-200",
    title: "text-blue-700",
    bg: "bg-white",
    iconBg: "bg-blue-50",
    badge: "bg-blue-600 text-white",
    divider: "border-blue-100",
    tab: "bg-blue-500",
    glow: "shadow-sm",
  },
  green: {
    border: "border-emerald-200",
    title: "text-emerald-700",
    bg: "bg-white",
    iconBg: "bg-emerald-50",
    badge: "bg-emerald-600 text-white",
    divider: "border-emerald-100",
    tab: "bg-emerald-500",
    glow: "shadow-sm",
  },
  amber: {
    border: "border-amber-200",
    title: "text-amber-700",
    bg: "bg-white",
    iconBg: "bg-amber-50",
    badge: "bg-amber-600 text-white",
    divider: "border-amber-100",
    tab: "bg-amber-500",
    glow: "shadow-sm",
  },
  red: {
    border: "border-rose-200",
    title: "text-rose-700",
    bg: "bg-white",
    iconBg: "bg-rose-50",
    badge: "bg-rose-600 text-white",
    divider: "border-rose-100",
    tab: "bg-rose-500",
    glow: "shadow-sm",
  },
  slate: {
    border: "border-slate-200",
    title: "text-slate-700",
    bg: "bg-white",
    iconBg: "bg-slate-50",
    badge: "bg-slate-600 text-white",
    divider: "border-slate-100",
    tab: "bg-slate-500",
    glow: "shadow-sm",
  },
};

function autoColor(label: string): "navy" | "blue" | "green" | "amber" | "red" | "slate" {
  const l = label.toLowerCase();
  if (l.includes("تحدي") || l.includes("خطر") || l.includes("مشكل") || l.includes("مخالف") || l.includes("حرج") || l.includes("ضعف") || l.includes("صعوب") || l.includes("عطل")) return "red";
  if (l.includes("هدف") || l.includes("نتيجة") || l.includes("منظومة") || l.includes("موحد") || l.includes("ممتاز") || l.includes("تحسين") || l.includes("نجاح") || l.includes("تشغيل")) return "green";
  if (l.includes("حاجة") || l.includes("قرار") || l.includes("عاجل") || l.includes("سريع") || l.includes("تنبي") || l.includes("إنذار")) return "amber";
  if (l.includes("مكتب") || l.includes("إدارة") || l.includes("مركز") || l.includes("نظام") || l.includes("cmms") || l.includes("فريق") || l.includes("مهند") || l.includes("مشرف")) return "navy";
  return "slate";
}

export default function FlowChart({ nodes, edges, dir = "TD", title }: Props) {
  const uid = useId().replace(/:/g, "");

  // Dimensions of each card
  const cardW = 168;
  const cardH = 110;
  const padding = 40;

  // Map to resolve levels
  const levelOf = new Map<string, number>();
  const childrenSet = new Set(edges.map(e => e.to));
  const roots = nodes.filter(n => !childrenSet.has(n.id));

  // Determine top/header node if not explicitly title-based
  let headerTitleNode: FlowNode | null = null;
  let nodesToProcess = [...nodes];

  if (title) {
    headerTitleNode = { id: "header-title-node", label: title, icon: "⚙️", color: "navy" };
  }

  const visiting = new Set<string>();
  function assignLevel(id: string, lvl: number) {
    if (visiting.has(id)) return;
    const existing = levelOf.get(id);
    if (existing !== undefined && existing >= lvl) return;
    levelOf.set(id, lvl);
    visiting.add(id);
    for (const e of edges) {
      if (e.from === id) assignLevel(e.to, lvl + 1);
    }
    visiting.delete(id);
  }

  // Calculate levels
  if (roots.length > 0) {
    roots.forEach(r => assignLevel(r.id, title ? 1 : 0));
  } else if (nodes.length > 0) {
    assignLevel(nodes[0].id, title ? 1 : 0);
  }

  if (headerTitleNode) {
    levelOf.set(headerTitleNode.id, 0);
    nodesToProcess.push(headerTitleNode);
  }

  // Ensure all nodes have a level assigned
  nodesToProcess.forEach(n => {
    if (!levelOf.has(n.id)) {
      levelOf.set(n.id, title ? 1 : 0);
    }
  });

  // Group nodes by level
  const levelsMap = new Map<number, string[]>();
  nodesToProcess.forEach(n => {
    const lvl = levelOf.get(n.id) ?? 0;
    if (!levelsMap.has(lvl)) levelsMap.set(lvl, []);
    levelsMap.get(lvl)!.push(n.id);
  });

  const maxLevel = Math.max(0, ...Array.from(levelsMap.keys()));
  let maxNodesInLevel = 0;
  levelsMap.forEach(ids => {
    maxNodesInLevel = Math.max(maxNodesInLevel, ids.length);
  });

  // Determine initial layout direction
  let isLR = dir === "LR" || (dir === "TD" && maxNodesInLevel > 3);

  // Calculate estimated widths to prevent horizontal overflow in printing
  const widthLR = (maxLevel + 1) * (cardW + 120) - 120 + padding * 2;
  const widthTD = maxNodesInLevel * (cardW + 40) - 40 + padding * 2;

  // Fallback to TD layout (vertical flow) if the LR layout is too wide for A4 printing (> 900px)
  if (isLR && widthLR > 900 && widthTD < widthLR) {
    isLR = false;
  }

  // Dynamic spacing based on layout direction to prevent overlapping text and hidden details
  const gapX = isLR ? 120 : 40;
  const gapY = isLR ? 40 : 50;

  // Calculate SVG total width and height
  const totalW = isLR
    ? (maxLevel + 1) * (cardW + gapX) - gapX + padding * 2
    : maxNodesInLevel * (cardW + gapX) - gapX + padding * 2;
  const totalH = isLR
    ? maxNodesInLevel * (cardH + gapY) - gapY + padding * 2
    : (maxLevel + 1) * (cardH + gapY) - gapY + padding * 2;

  // Resolve node positions
  const nodePositions = new Map<string, { x: number; y: number }>();
  
  nodesToProcess.forEach(n => {
    const lvl = levelOf.get(n.id) ?? 0;
    const ids = levelsMap.get(lvl) ?? [];
    const idx = ids.indexOf(n.id);
    const count = ids.length;

    if (isLR) {
      // Horizontal flow (Arabic RTL direction: Level 0 is rightmost, going left)
      const x = totalW - padding - cardW - lvl * (cardW + gapX);
      const colHeight = count * cardH + (count - 1) * gapY;
      const startY = (totalH - colHeight) / 2;
      const y = startY + idx * (cardH + gapY);
      nodePositions.set(n.id, { x, y });
    } else {
      // Vertical flow (Top to Bottom)
      const y = padding + lvl * (cardH + gapY);
      const rowWidth = count * cardW + (count - 1) * gapX;
      const startX = (totalW - rowWidth) / 2;
      const x = startX + idx * (cardW + gapX);
      nodePositions.set(n.id, { x, y });
    }
  });

  // Add virtual edges from title header if it exists
  const activeEdges = [...edges];
  if (headerTitleNode) {
    roots.forEach(r => {
      activeEdges.push({ from: headerTitleNode!.id, to: r.id });
    });
  }

  // Pre-calculate edge counts for overlapping connections between same node pair
  const edgeCounts = new Map<string, number>();
  activeEdges.forEach(e => {
    const key = [e.from, e.to].sort().join("-");
    edgeCounts.set(key, (edgeCounts.get(key) ?? 0) + 1);
  });
  const edgeIndices = new Map<string, number>();

  return (
    <div className="bg-slate-50/30 rounded-2xl border border-slate-200/50 p-2 shadow-sm no-break w-full overflow-visible my-4">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${totalW} ${totalH}`}
          className="w-full h-auto"
          style={{ maxWidth: totalW, minWidth: Math.min(totalW, 320) }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arrow Definition */}
          <defs>
            <marker
              id={`arrow-${uid}`}
              viewBox="0 0 10 10"
              refX={9}
              refY={5}
              markerWidth={5}
              markerHeight={5}
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="#94a3b8" />
            </marker>
          </defs>

          {/* Connection Lines (glowing SVG paths in the background) */}
          {activeEdges.map((edge, idx) => {
            const fromPos = nodePositions.get(edge.from);
            const toPos = nodePositions.get(edge.to);
            if (!fromPos || !toPos) return null;

            // Get index and count of parallel edges between this pair of nodes
            const key = [edge.from, edge.to].sort().join("-");
            const totalCount = edgeCounts.get(key) ?? 1;
            const edgeIdx = edgeIndices.get(key) ?? 0;
            edgeIndices.set(key, edgeIdx + 1);

            // Calculate parallel offset (distributes multiple edges vertically or horizontally)
            const parallelOffset = (edgeIdx - (totalCount - 1) / 2) * 22;

            // Calculate intermediate node bypass offset
            const lvl1 = levelOf.get(edge.from) ?? 0;
            const lvl2 = levelOf.get(edge.to) ?? 0;
            const lvlDiff = Math.abs(lvl1 - lvl2);

            let bypassOffset = 0;
            if (lvlDiff > 1) {
              // Loop/bypass intermediate cards
              bypassOffset = 70;
            }

            const totalOffset = parallelOffset + bypassOffset;

            let pathD = "";
            let labelX = 0;
            let labelY = 0;

            if (isLR) {
              if (fromPos.x > toPos.x) {
                // Normal RTL flow: right to left
                const fx = fromPos.x;
                const fy = fromPos.y + cardH / 2;
                const tx = toPos.x + cardW;
                const ty = toPos.y + cardH / 2;
                const ctrlX = (fx + tx) / 2;
                
                const cy1 = fy + totalOffset;
                const cy2 = ty + totalOffset;

                pathD = `M ${fx} ${fy} C ${ctrlX} ${cy1}, ${ctrlX} ${cy2}, ${tx} ${ty}`;
                labelX = ctrlX;
                labelY = (cy1 + cy2) / 2;
              } else if (fromPos.x < toPos.x) {
                // Backward flow: left to right (feedback loop)
                const fx = fromPos.x + cardW;
                const fy = fromPos.y + cardH / 2;
                const tx = toPos.x;
                const ty = toPos.y + cardH / 2;
                const ctrlX = (fx + tx) / 2;

                const cy1 = fy + totalOffset;
                const cy2 = ty + totalOffset;

                pathD = `M ${fx} ${fy} C ${fx + 25} ${cy1}, ${tx - 25} ${cy2}, ${tx} ${ty}`;
                labelX = ctrlX;
                labelY = (cy1 + cy2) / 2;
              } else {
                // Same column: vertical flow
                const fx = fromPos.x + cardW / 2;
                const tx = toPos.x + cardW / 2;
                const cx1 = fx + totalOffset;
                const cx2 = tx + totalOffset;

                if (fromPos.y < toPos.y) {
                  const fy = fromPos.y + cardH;
                  const ty = toPos.y;
                  const ctrlY = (fy + ty) / 2;
                  pathD = `M ${fx} ${fy} C ${cx1} ${ctrlY}, ${cx2} ${ctrlY}, ${tx} ${ty}`;
                  labelX = (cx1 + cx2) / 2;
                  labelY = ctrlY;
                } else {
                  const fy = fromPos.y;
                  const ty = toPos.y + cardH;
                  const ctrlY = (fy + ty) / 2;
                  pathD = `M ${fx} ${fy} C ${cx1} ${ctrlY}, ${cx2} ${ctrlY}, ${tx} ${ty}`;
                  labelX = (cx1 + cx2) / 2;
                  labelY = ctrlY;
                }
              }
            } else {
              // Normal TD flow
              if (fromPos.y < toPos.y) {
                // Normal top to bottom
                const fx = fromPos.x + cardW / 2;
                const fy = fromPos.y + cardH;
                const tx = toPos.x + cardW / 2;
                const ty = toPos.y;
                const ctrlY = (fy + ty) / 2;
                
                const cx1 = fx + totalOffset;
                const cx2 = tx + totalOffset;

                pathD = `M ${fx} ${fy} C ${cx1} ${ctrlY}, ${cx2} ${ctrlY}, ${tx} ${ty}`;
                labelX = (cx1 + cx2) / 2;
                labelY = ctrlY;
              } else if (fromPos.y > toPos.y) {
                // Backward flow: bottom to top
                const fx = fromPos.x + cardW / 2;
                const fy = fromPos.y;
                const tx = toPos.x + cardW / 2;
                const ty = toPos.y + cardH;
                const ctrlY = (fy + ty) / 2;

                const cx1 = fx + totalOffset;
                const cx2 = tx + totalOffset;

                pathD = `M ${fx} ${fy} C ${cx1} ${fy - 25}, ${cx2} ${ty + 25}, ${tx} ${ty}`;
                labelX = (cx1 + cx2) / 2;
                labelY = ctrlY;
              } else {
                // Same row: horizontal flow
                const fy = fromPos.y + cardH / 2;
                const ty = toPos.y + cardH / 2;
                
                const cy1 = fy + totalOffset;
                const cy2 = ty + totalOffset;

                if (fromPos.x > toPos.x) {
                  const fx = fromPos.x;
                  const tx = toPos.x + cardW;
                  const ctrlX = (fx + tx) / 2;
                  pathD = `M ${fx} ${fy} C ${ctrlX} ${cy1}, ${ctrlX} ${cy2}, ${tx} ${ty}`;
                  labelX = ctrlX;
                  labelY = (cy1 + cy2) / 2;
                } else {
                  const fx = fromPos.x + cardW;
                  const tx = toPos.x;
                  const ctrlX = (fx + tx) / 2;
                  pathD = `M ${fx} ${fy} C ${ctrlX} ${cy1}, ${ctrlX} ${cy2}, ${tx} ${ty}`;
                  labelX = ctrlX;
                  labelY = (cy1 + cy2) / 2;
                }
              }
            }

            return (
              <g key={idx}>
                {/* Thin, elegant connection path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth={1.25}
                  markerEnd={`url(#arrow-${uid})`}
                />
                
                {/* Connection Label (like "نعم" / "لا") */}
                {edge.label && (
                  <g>
                    <rect
                      x={labelX - 14}
                      y={labelY - 7}
                      width={28}
                      height={14}
                      rx={4}
                      fill="#f8fafc"
                      stroke="#e2e8f0"
                      strokeWidth={1}
                    />
                    <text
                      x={labelX}
                      y={labelY + 3.5}
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize={8}
                      fontWeight="bold"
                      className="font-sans"
                    >
                      {edge.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* HTML Cards inside SVG using foreignObject */}
          {nodesToProcess.map((rawNode, idx) => {
            const pos = nodePositions.get(rawNode.id);
            if (!pos) return null;

            const isHeader = rawNode.id === "header-title-node";
            const color = (rawNode.color ?? autoColor(rawNode.label)) as "navy" | "blue" | "green" | "amber" | "red" | "slate";
            const theme = colorThemes[color];

            return (
              <foreignObject
                key={rawNode.id}
                x={pos.x}
                y={pos.y}
                width={cardW}
                height={cardH}
              >
                <div className="p-1 w-full h-full" dir="rtl">
                  {isHeader ? (
                    // Top Title Card (مرتكزات التنفيذ style)
                    <div className={`w-full h-full bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex flex-col items-center justify-center text-center relative ${theme.glow}`}>
                      {/* Central Icon Container inside the card */}
                      <div className={`w-7.5 h-7.5 rounded-full ${theme.iconBg} flex items-center justify-center text-sm shadow-sm border border-slate-100/50 mb-1.5`}>
                        {rawNode.icon || "⚙️"}
                      </div>

                      <h4 
                        className="text-[#1e3a5f] text-[11px] font-extrabold leading-tight w-full"
                        style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
                      >
                        {rawNode.label}
                      </h4>
                      
                      {/* Dots separator */}
                      <div className="flex justify-center gap-1 mt-1 text-[#1e3a5f]/30 text-[8px] tracking-widest">
                        &bull;&bull;&bull;
                      </div>
                    </div>
                  ) : (
                    // Process Card
                    <div className={`w-full h-full bg-white border ${theme.border} rounded-xl p-3 pt-3.5 pb-3.5 shadow-sm flex flex-col items-center justify-center text-center relative ${theme.glow}`}>
                      {/* Central Icon Container inside the card */}
                      <div className={`w-7.5 h-7.5 rounded-full ${theme.iconBg} flex items-center justify-center text-sm shadow-sm border border-slate-100/50 mb-1.5`}>
                        {rawNode.icon || "📋"}
                      </div>

                      {/* Title */}
                      <h5 
                        className={`font-extrabold text-[11px] ${theme.title} mb-1 leading-tight w-full`}
                        style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
                      >
                        {rawNode.label}
                      </h5>

                      {/* Divider & Description */}
                      {rawNode.sub && (
                        <>
                          <div className={`w-6 border-t ${theme.divider} mb-1 mx-auto`} />
                          <p 
                            className="text-[9px] text-slate-500 leading-normal font-semibold px-0.5 w-full"
                            style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
                          >
                            {rawNode.sub}
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </foreignObject>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
