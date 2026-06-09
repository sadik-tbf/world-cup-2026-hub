import Link from 'next/link';
import { fixtures } from '@/lib/data';

export default function FixturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Fixtures & Results</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Complete tournament schedule</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Browse group stage fixtures, knockout rounds, stadium assignments, and match-by-match detail pages.</p>
      </div>
      <div className="grid gap-6">
        {fixtures.map((fixture) => (
          <Link key={fixture.id} href={`/fixtures/${fixture.id}`} className="section-card flex flex-col justify-between gap-4 p-6 transition hover:-translate-y-1 hover:shadow-glow sm:flex-row sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{fixture.stage}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{fixture.homeTeam} vs {fixture.awayTeam}</h2>
              <p className="mt-2 text-sm text-slate-400">{fixture.date} • {fixture.kickoff}</p>
            </div>
            <div className="grid gap-3 text-sm text-slate-300 sm:text-right">
              <div className="rounded-3xl bg-slate-900/80 px-4 py-3">{fixture.stadium}</div>
              <div className="rounded-3xl bg-slate-900/80 px-4 py-3">{fixture.city}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
