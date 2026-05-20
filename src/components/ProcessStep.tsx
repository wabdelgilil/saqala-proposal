import { type LucideIcon } from "lucide-react";
import { icons } from "lucide-react";

type Props = {
  step?: number;
  title: string;
  description?: string;
  subtitle?: string;
  icon?: string;
  isLast?: boolean;
  number?: number;
};

export default function ProcessStep(props: Props) {
  const { step = props.number ?? 0, title, description = props.subtitle ?? "", icon, isLast } = props;

  return (
    <div className="relative flex gap-4 no-break">
      {!isLast && (
        <div className="absolute top-10 left-[19px] w-px h-[calc(100%+8px)] bg-[#d9e0ed]" />
      )}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e3a5f] text-white text-sm font-bold shrink-0">
          {step}
        </div>
      </div>
      <div className="flex-1 p-4 rounded-lg bg-white border border-[#d9e0ed] shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-[#1e3a5f] text-sm">{title}</h4>
        </div>
        <p className="text-xs text-[#475569] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
