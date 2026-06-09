export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-sm transition hover:border-cyan-500/40 hover:bg-slate-900">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
