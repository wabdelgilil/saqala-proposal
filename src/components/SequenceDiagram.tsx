import { useId } from "react";

interface Participant {
  id: string;
  label: string;
  icon?: string;
  color?: "navy" | "blue" | "green" | "amber" | "red" | "slate";
}

interface Step {
  from: string;
  to: string;
  label: string;
}

interface Props {
  participants: Participant[];
  steps: Step[];
  title?: string;
}

const colorThemes = {
  navy: {
    border: "border-[#1e3a5f]/30",
    title: "text-[#1e3a5f]",
    bg: "bg-[#1e3a5f]/5",
    line: "#1e3a5f",
  },
  blue: {
    border: "border-blue-200",
    title: "text-blue-700",
    bg: "bg-blue-50",
    line: "#3b82f6",
  },
  green: {
    border: "border-emerald-200",
    title: "text-emerald-700",
    bg: "bg-emerald-50",
    line: "#10b981",
  },
  amber: {
    border: "border-amber-200",
    title: "text-amber-700",
    bg: "bg-amber-50",
    line: "#f59e0b",
  },
  red: {
    border: "border-rose-200",
    title: "text-rose-700",
    bg: "bg-rose-50",
    line: "#ef4444",
  },
  slate: {
    border: "border-slate-200",
    title: "text-slate-700",
    bg: "bg-slate-50",
    line: "#64748b",
  },
};

export default function SequenceDiagram({ participants, steps, title }: Props) {
  const uid = useId().replace(/:/g, "");

  const totalW = 600;
  const padding = 50;
  const cardW = 110;
  const cardH = 45;

  const N = participants.length;
  const colGap = N > 1 ? (totalW - padding * 2) / (N - 1) : 0;

  const stepGap = 55;
  const startY = 85;
  const totalH = startY + steps.length * stepGap + 25;

  // Resolve X positions for participants (RTL: index 0 is rightmost, N-1 is leftmost)
  const participantPositions = new Map<string, number>();
  participants.forEach((p, idx) => {
    const x = totalW - padding - idx * colGap;
    participantPositions.set(p.id, x);
  });

  return (
    <div className="bg-slate-50/30 rounded-2xl border border-slate-200/50 p-4 shadow-sm no-break w-full overflow-visible my-4">
      {title && (
        <h4 className="text-xs font-extrabold text-[#1e3a5f] mb-3 text-center" style={{ wordBreak: "keep-all" }}>
          {title}
        </h4>
      )}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${totalW} ${totalH}`}
          className="w-full h-auto mx-auto block"
          style={{ maxWidth: totalW, minWidth: Math.min(totalW, 320) }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arrow markers */}
          <defs>
            <marker
              id={`arrow-seq-${uid}`}
              viewBox="0 0 10 10"
              refX={6}
              refY={5}
              markerWidth={6}
              markerHeight={6}
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="var(--sequence-arrow)" />
            </marker>
          </defs>


          {/* Vertical Lifelines */}
          {participants.map((p) => {
            const x = participantPositions.get(p.id)!;
            return (
              <line
                key={`line-${p.id}`}
                x1={x}
                y1={cardH + 20}
                x2={x}
                y2={totalH - 20}
                stroke="var(--sequence-lifeline)"
                strokeWidth={1.5}
                strokeDasharray="4,4"
              />
            );
          })}

          {/* Horizontal Step Arrows */}
          {steps.map((step, idx) => {
            const xFrom = participantPositions.get(step.from);
            const xTo = participantPositions.get(step.to);
            if (xFrom === undefined || xTo === undefined) return null;

            const y = startY + idx * stepGap;
            const xMid = (xFrom + xTo) / 2;

            // Shift arrow ends slightly away from the lifelines for cleanliness
            const arrowMargin = 8;
            const x1 = xFrom + (xTo > xFrom ? arrowMargin : -arrowMargin);
            const x2 = xTo + (xTo > xFrom ? -arrowMargin : arrowMargin);

            return (
              <g key={`step-${idx}`}>
                {/* Interaction line */}
                <line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="var(--sequence-arrow)"
                  strokeWidth="var(--sequence-arrow-width)"
                  markerEnd={`url(#arrow-seq-${uid})`}
                />

                {/* Step number badge (circle) */}
                <circle cx={xMid} cy={y} r={9} fill="var(--sequence-badge)" />
                <text
                  x={xMid}
                  y={y + 3}
                  textAnchor="middle"
                  fill="var(--sequence-badge-text)"
                  fontSize={8}
                  fontWeight="bold"
                  className="font-sans"
                >
                  {idx + 1}
                </text>

                {/* Step label description */}
                <text
                  x={xMid}
                  y={y - 7}
                  textAnchor="middle"
                  fill="var(--sequence-text)"
                  fontSize={9}
                  fontWeight="bold"
                  className="font-sans"
                  style={{ wordBreak: "keep-all" }}
                >
                  {step.label}
                </text>

              </g>
            );
          })}

          {/* Participant cards at the top */}
          {participants.map((p) => {
            const x = participantPositions.get(p.id)!;
            const color = p.color || "slate";
            const theme = colorThemes[color];

            return (
              <foreignObject
                key={`card-${p.id}`}
                x={x - cardW / 2}
                y={10}
                width={cardW}
                height={cardH + 10}
              >
                <div className="p-0.5 w-full h-full" dir="rtl">
                  <div className={`w-full h-full bg-white border ${theme.border} rounded-xl px-2 py-1 shadow-sm flex items-center justify-center gap-1.5 text-center`}>
                    {p.icon && (
                      <span className="text-xs shrink-0">{p.icon}</span>
                    )}
                    <span className={`text-[10px] font-extrabold ${theme.title} leading-tight`}>
                      {p.label}
                    </span>
                  </div>
                </div>
              </foreignObject>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
