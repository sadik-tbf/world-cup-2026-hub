import Link from 'next/link';
import { teams } from '@/lib/data';

export default function TeamsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Teams</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">All 48 qualified nations</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Explore complete squad details, coaching staff, FIFA ranking, and core team statistics ahead of the tournament.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {teams.map((team) => (
          <Link key={team.id} href={`/teams/${team.id}`} className="section-card overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold text-white">{team.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.3em] text-cyan-300">Group {team.group}</p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-2xl">{team.flag}</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Coach</p>
                <p>{team.coach}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">FIFA ranking</p>
                <p>{team.ranking}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Market value</p>
                <p>{team.marketValue}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Stadium</p>
                <p>{team.stadium}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
