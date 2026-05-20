interface Props {
  value: string;
  label: string;
  color: string;
}

export default function MetricCard({ value, label, color }: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-white border border-[#d9e0ed] shadow-sm no-break">
      <span className={`text-2xl font-bold ${color} leading-none`}>{value}</span>
      <span className="text-[10px] text-[#64748b] mt-1.5 text-center leading-tight">{label}</span>
    </div>
  );
}
