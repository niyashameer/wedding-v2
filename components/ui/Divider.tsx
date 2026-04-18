export default function Divider() {
  return (
    <div className="flex items-center gap-4 max-w-[280px] mx-auto my-8">
      <div className="flex-1 h-px bg-gold opacity-50" />
      <span className="text-gold text-lg leading-none">✦</span>
      <div className="flex-1 h-px bg-gold opacity-50" />
    </div>
  );
}
