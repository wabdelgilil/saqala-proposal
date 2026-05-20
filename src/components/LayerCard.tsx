import { type LucideIcon, Building2, Settings2, Wrench } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2, Settings2, Wrench,
};

interface Section {
  title: string;
  items: string[];
}

interface Props {
  layer: string;
  title: string;
  subtitle: string;
  icon: string;
  borderColor: string;
  bgColor: string;
  sections: Section[];
}

export default function LayerCard({ layer, title, subtitle, icon, borderColor, bgColor, sections }: Props) {
  const Icon = iconMap[icon || "Building2"] || Building2;

  return (
    <div className={`rounded-xl border-t-4 ${borderColor} bg-white shadow-sm overflow-hidden no-break`}>
      <div className={`p-5 ${bgColor}`}>
        <div className="flex items-center gap-3 mb-1">
          <Icon size={20} className="text-[#475569]" />
          <span className="text-xs font-semibold tracking-[0.1em] text-[#64748b]">{layer}</span>
        </div>
        <h3 className="text-lg font-bold text-[#1e3a5f]">{title}</h3>
        <p className="text-xs text-[#64748b] mt-0.5">{subtitle}</p>
      </div>
      <div className="p-5 space-y-4">
        {sections.map((sec) => (
          <div key={sec.title}>
            <h4 className="text-sm font-semibold text-[#1e3a5f] mb-2">{sec.title}</h4>
            <ul className="space-y-1.5">
              {sec.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[#475569]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
