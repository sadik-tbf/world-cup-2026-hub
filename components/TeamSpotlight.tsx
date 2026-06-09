import Link from 'next/link';
import type { Team } from '@/types';

export function TeamSpotlight({ teams }: { teams: Team[] }) {
  return (
    <section className="section-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Team spotlight</p>
          <h2 className="text-3xl font-semibold text-white">Qualified powerhouses</h2>
        </div>
        <Link href="/teams" className="text-sm font-semibold text-cyan-300 transition hover:text-white">
          See all teams →
        </Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {teams.map((team) => (
          <div key={team.id} className="rounded-3xl border border-slate-800/70 bg-slate-900/90 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-2xl">{team.flag}</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{team.name}</h3>
                <p className="text-sm text-slate-400">Coach {team.coach}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-950/80 p-3">
                <p className="font-semibold text-white">Ranking</p>
                <p>{team.ranking}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-3">
                <p className="font-semibold text-white">Market value</p>
                <p>{team.marketValue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
