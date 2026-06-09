import Link from 'next/link';
import type { Player } from '@/types';

export function PlayerGrid({ players }: { players: Player[] }) {
  return (
    <section className="section-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Top players</p>
          <h2 className="text-3xl font-semibold text-white">Watchlist forwards</h2>
        </div>
        <Link href="/players" className="text-sm font-semibold text-cyan-300 transition hover:text-white">
          Explore profiles →
        </Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {players.map((player) => (
          <article key={player.id} className="rounded-[1.75rem] border border-slate-800/70 bg-slate-900/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center gap-4">
              <img src={player.photo} alt={player.name} className="h-16 w-16 rounded-3xl object-cover" />
              <div>
                <h3 className="text-xl font-semibold text-white">{player.name}</h3>
                <p className="text-sm text-slate-400">{player.position} • {player.club}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-950/80 p-3">
                <p className="font-semibold text-white">Goals</p>
                <p>{player.goals}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-3">
                <p className="font-semibold text-white">Assists</p>
                <p>{player.assists}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-3">
                <p className="font-semibold text-white">Value</p>
                <p>{player.marketValue}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
