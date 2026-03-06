export default function Divider({ label = "OR", className = "" }) {
  return (
    <div className={`flex items-center gap-4 my-8 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <span className="text-[11px] text-white/40 tracking-widest uppercase">
        {label}
      </span>

      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
