import { players } from '@/lib/data';

export default function FantasyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Fantasy World Cup</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Build your dream lineup</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Select your best XI, compare player values, and track points across every tournament fixture.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {players.map((player) => (
          <article key={player.id} className="section-card overflow-hidden p-6">
            <div className="flex items-center gap-4">
              <img src={player.photo} alt={player.name} className="h-14 w-14 rounded-3xl object-cover" />
              <div>
                <h2 className="text-lg font-semibold text-white">{player.name}</h2>
                <p className="text-sm text-slate-400">{player.position}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Club</p>
                <p>{player.club}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Value</p>
                <p>{player.marketValue}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
