import { type ReactNode } from "react";
import { type LucideIcon, AlertTriangle, Lightbulb, Target, Shield } from "lucide-react";

const typeConfig = {
  critical: { border: "border-r-[#ef4444]", bg: "bg-[#fee2e2]", icon: AlertTriangle },
  tip: { border: "border-r-[#3b82f6]", bg: "bg-[#dbeafe]", icon: Lightbulb },
  goal: { border: "border-r-[#10b981]", bg: "bg-[#d1fae5]", icon: Target },
  safety: { border: "border-r-[#f59e0b]", bg: "bg-[#fef3c7]", icon: Shield },
};

interface Props {
  type?: "critical" | "tip" | "goal" | "safety";
  title: string;
  children: ReactNode;
}

export default function CallOutBox({ type = "tip", title, children }: Props) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className={`flex gap-3 p-4 rounded-lg border-r-4 ${config.border} ${config.bg} no-break`}>
      <Icon size={20} className="shrink-0 mt-0.5 text-[#475569]" />
      <div>
        <h4 className="font-semibold text-sm text-[#1e3a5f] mb-0.5">{title}</h4>
        <div className="text-xs text-[#475569] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

