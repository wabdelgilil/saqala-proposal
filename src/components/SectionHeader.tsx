import { type LucideIcon, FileText } from "lucide-react";

interface Props {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  number?: string;
}

export default function SectionHeader({ icon: Icon = FileText, title, subtitle, number }: Props) {
  return (
    <div className="flex items-start gap-4 mb-8 mt-6 no-break">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e3a5f] text-white shrink-0">
        <Icon size={24} />
      </div>
      <div>
        {number && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#3b82f6] uppercase">{number}</span>
            <span className="w-8 h-px bg-[#3b82f6]/40" />
          </div>
        )}
        <h2 className="text-xl font-bold text-[#1e3a5f] leading-tight">{title}</h2>
        {subtitle && <p className="text-xs text-[#64748b] mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}
