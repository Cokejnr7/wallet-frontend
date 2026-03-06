export default function DashedDivider({ label = "OR", className = "" }) {
  return (
    <div className={`flex items-center gap-4 my-4 ${className}`}>
      <div className="flex-1 border-t border-dashed border-white/10" />

      <span className="rounded-full px-[6px] py-[2.5px]  text-[11px] text-white/35 tracking-widest border-white/10 border  uppercase">
        {label}
      </span>

      <div className="flex-1 border-t border-dashed border-white/10" />
    </div>
  );
}
