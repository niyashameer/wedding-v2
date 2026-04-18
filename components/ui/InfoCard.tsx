interface InfoCardProps {
  icon: string;
  label: string;
  value: string;
  sub: string;
}

export default function InfoCard({ icon, label, value, sub }: InfoCardProps) {
  return (
    <div className="card-shadow relative bg-white border border-gold/20 p-8 text-center">
      <span className="block text-2xl mb-3" aria-hidden="true">
        {icon}
      </span>
      <p className="font-serif text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-1">
        {label}
      </p>
      <p className="font-script text-[1.6rem] text-ink leading-tight">{value}</p>
      <p className="font-serif text-[0.88rem] italic text-ink-soft mt-1">{sub}</p>
    </div>
  );
}
